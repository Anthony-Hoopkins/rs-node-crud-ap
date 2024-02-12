import { ServerResponse } from 'http';
import { IncomingMessage } from 'node:http';

import { HttpMethods } from '../../core/consts/enums/enums.js';
import { getBodyData, getLastUrlPath } from '../../core/helpers/parse.helper.js';
import { USERS_PREFIX } from '../../core/consts/consts.js';
import { createUser, getUserById, getUsers, removeUser, updateUser } from './users.service.js';
import { errorHandler } from '../../core/handlers/error.handler.js';
import { HTTP_STATUSES } from '../../core/consts/http-error-statuses.js';


export const usersController = async (req: IncomingMessage, resp: ServerResponse): Promise<void> => {
  switch (req.method) {
    case HttpMethods.Get:
      const lastPath = getLastUrlPath(req.url as string);

      if (lastPath === USERS_PREFIX) {
        getUsers(resp);
      } else {
        getUserById(lastPath, resp);
      }

      break;
    case HttpMethods.Post:
      try {
        const userData = await getBodyData(req);
        createUser(userData, resp);
      } catch {
        errorHandler(resp, HTTP_STATUSES.SERVER_ERROR_500);
      }

      break;
    case HttpMethods.Put:
      try {
        const userId = getLastUrlPath(req.url as string);
        const userDataUpd = await getBodyData(req);
        updateUser(userId, userDataUpd, resp);
      } catch {
        errorHandler(resp, HTTP_STATUSES.SERVER_ERROR_500);
      }

      break;
    case HttpMethods.Delete:
      const id = getLastUrlPath(req.url as string);
      removeUser(id, resp);

      break;
    default:
      errorHandler(resp, HTTP_STATUSES.NOT_FOUND_404);
  }
};


