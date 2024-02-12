import http, { IncomingMessage, ServerResponse } from 'node:http';
import { API_USERS_PREFIX, PORT } from './core/consts/consts';
import { usersController } from './modules/users/users.controller';
import { HTTP_STATUSES } from './core/consts/http-error-statuses';
import { errorHandler } from './core/handlers/error.handler';

const server = http.createServer((request: IncomingMessage, response: ServerResponse) => {
  console.log(request.rawHeaders);
  console.log(request.url);
  console.log(request.url?.includes(API_USERS_PREFIX));

  try {
    if (request.url?.includes(API_USERS_PREFIX)) {
      usersController(request, response);
    } else {
      errorHandler(response, HTTP_STATUSES.NOT_FOUND_404);
    }
  } catch (e) {
    errorHandler(response, HTTP_STATUSES.SERVER_ERROR_500);
  }
});

server.listen(PORT, () => {
  console.log(`The Server started on port: ${PORT}`);
});
