import { ServerResponse } from 'node:http';

import { ErrorMessages } from '../consts/error-messages.js';

export const errorHandler = (response: ServerResponse, httpStatus: number) => {
  response.statusCode = httpStatus;
  response.end(ErrorMessages.get(httpStatus));
}
