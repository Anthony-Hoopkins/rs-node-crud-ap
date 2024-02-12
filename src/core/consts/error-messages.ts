import { HTTP_STATUSES } from './http-error-statuses';

export const ErrorMessages = new Map([
  [HTTP_STATUSES.BAD_REQUEST_400, 'Bad request. Try again'],
  [HTTP_STATUSES.NOT_FOUND_404, 'Url not found'],
]);
