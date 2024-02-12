import { ServerResponse } from 'http';
import { HttpMethods } from '../../core/consts/enums/enums';
import { getBodyData, getLastUrlPath } from '../../core/helpers/parse.helper';
import { IncomingMessage } from 'node:http';
import { USERS_PREFIX } from '../../core/consts/consts';
import { createUser, getUserById, getUsers, removeUser, updateUser } from './users.service';
import { errorHandler } from '../../core/handlers/error.handler';
import { HTTP_STATUSES } from '../../core/consts/http-error-statuses';


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
      const userData = await getBodyData(req);
      createUser(userData, resp);

      break;
    case HttpMethods.Put:
      const userId = getLastUrlPath(req.url as string);
      const userDataUpd = await getBodyData(req);
      updateUser(userId, userDataUpd, resp);

      break;
    case HttpMethods.Delete:
      const id = getLastUrlPath(req.url as string);
      removeUser(id, resp);

      break;
    default:
      errorHandler(resp, HTTP_STATUSES.NOT_FOUND_404);
  }
};


