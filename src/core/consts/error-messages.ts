import { HTTP_STATUSES } from './http-error-statuses.js';

export const ErrorMessages = new Map([
  [HTTP_STATUSES.BAD_REQUEST_400, 'Bad request'],
  [HTTP_STATUSES.BAD_REQUEST_400_UUID, 'Bad request. UserId is invalid (not uuid)'],
  [HTTP_STATUSES.BAD_REQUEST_400_BODY, 'Bad request. Request body does not contain required fields or values'],

  [HTTP_STATUSES.NOT_FOUND_404, 'This record not found'],
  [HTTP_STATUSES.NOT_FOUND_404_URL, 'This url not found'],
  [HTTP_STATUSES.NOT_FOUND_404_User, 'This userId doesn\'t exist'],

  [HTTP_STATUSES.SERVER_ERROR_500, 'Server Error'],
]);
