import { ServerResponse } from 'node:http';

import { ErrorMessages } from '../consts/error-messages.js';
import { HTTP_STATUSES_CODES } from '../consts/http-error-statuses.js';

export const errorHandler = (response: ServerResponse, httpStatus: string) => {
  response.statusCode = HTTP_STATUSES_CODES[httpStatus];
  response.end(ErrorMessages.get(httpStatus));
}
