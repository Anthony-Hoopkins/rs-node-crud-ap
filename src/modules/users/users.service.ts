import { ServerResponse } from 'http';
import { CreateUserDto } from './dto/create-user.dto';

import { createNewDBUser, getAllDBUsers, getDBUserById, removeDBUserById, updateDbUserById } from '../../db/db.js';
import { HTTP_STATUSES } from '../../core/consts/http-error-statuses.js';
import { errorHandler } from '../../core/handlers/error.handler.js';
import { uuidV4Generate, uuidValidate } from '../../core/helpers/uuid.helper.js';


export function getUsers(resp: ServerResponse): void {
  const users = getAllDBUsers();

  resp.statusCode = HTTP_STATUSES.OK_200;
  resp.end(JSON.stringify(users));
}

export function getUserById(userId: string, resp: ServerResponse): void {
  if (!uuidValidate(userId)) {
    errorHandler(resp, HTTP_STATUSES.BAD_REQUEST_400_UUID);

    return;
  }

  const user = getDBUserById(userId);

  if (user) {
    resp.statusCode = HTTP_STATUSES.OK_200;
    resp.end(JSON.stringify(user));
  } else {
    errorHandler(resp, HTTP_STATUSES.NOT_FOUND_404_User);
  }
}

export function createUser(data: CreateUserDto, resp: ServerResponse): void {
  const newUserId = uuidV4Generate();

  const allUsers = createNewDBUser({ ...data, id: newUserId });

  if (isUserDataValid(data)) {
    resp.statusCode = HTTP_STATUSES.CREATED_201;
    resp.end(JSON.stringify(allUsers));
  } else {
    errorHandler(resp, HTTP_STATUSES.BAD_REQUEST_400_BODY);
  }
}

export function updateUser(userId: string, userData: CreateUserDto, resp: ServerResponse): void {
  if (!uuidValidate(userId)) {
    errorHandler(resp, HTTP_STATUSES.BAD_REQUEST_400_UUID);

    return;
  }

  // if (isUserDataValid(userData)) {
    const responce = updateDbUserById(userId, userData);

    if (responce) {
      resp.statusCode = HTTP_STATUSES.OK_200;
      resp.end(JSON.stringify(responce));
    } else {
      errorHandler(resp, HTTP_STATUSES.NOT_FOUND_404_User);
    }
  // } else {
  //   errorHandler(resp, HTTP_STATUSES.BAD_REQUEST_400_BODY);
  // }
}

export function removeUser(userId: string, resp: ServerResponse) {
  if (!uuidValidate(userId)) {
    errorHandler(resp, HTTP_STATUSES.BAD_REQUEST_400);

    return;
  }

  const isSuccessfully = removeDBUserById(userId);

  if (isSuccessfully) {
    resp.statusCode = HTTP_STATUSES.NO_CONTENT_204;
    resp.end();
  } else {
    errorHandler(resp, HTTP_STATUSES.NOT_FOUND_404_User);
  }
}

const isUserDataValid = (data: CreateUserDto): boolean => {
  return !!data.username && !!data.age && (data.hobbies && Array.isArray(data.hobbies))
}
