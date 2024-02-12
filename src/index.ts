import http, { IncomingMessage, ServerResponse } from 'node:http';

import { API_USERS_PREFIX, DEFAULT_PORT } from './core/consts/consts.js';
import { usersController } from './modules/users/users.controller.js';
import { HTTP_STATUSES } from './core/consts/http-error-statuses.js';
import { errorHandler } from './core/handlers/error.handler.js';

const port = process.env.PORT || DEFAULT_PORT;

const server = http.createServer((request: IncomingMessage, response: ServerResponse) => {
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

server.listen(port, () => {
  console.log(`The Server started on port: ${port}`);
});
