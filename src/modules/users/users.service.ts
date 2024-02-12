import { IncomingMessage } from 'node:http';
import { ServerResponse } from 'http';
import { CreateUserDto } from './dto/create-user.dto';
import { getAllUsers } from '../../db/db';

export function createUser(req: IncomingMessage, resp: ServerResponse): void {
  resp.end('POST USER');
}

export function getUsers(resp: ServerResponse): void {
  const users = getAllUsers();

  resp.end(JSON.stringify(users));
}


export function getUserById(userId: string, resp: ServerResponse): void {
  resp.end('USER ID: ' + userId);
}


export function updateUser(userId: string, userData: CreateUserDto, resp: ServerResponse): void {
  resp.end('USER ID UPDATED: ' + userId);

}

export function removeUser(userId: string, resp: ServerResponse) {
  resp.end('USER ID delete: ' + userId);

}
