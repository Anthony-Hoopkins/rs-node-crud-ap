import { ErrorMessages } from '../consts/error-messages';
import { ServerResponse } from 'node:http';

export const errorHandler = (response: ServerResponse, httpStatus: number) => {
  response.statusCode = httpStatus;
  response.end(ErrorMessages.get(httpStatus));
}
