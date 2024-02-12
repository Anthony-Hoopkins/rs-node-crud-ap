import { IncomingMessage } from 'node:http';

export const getLastUrlPath = (url: string): string => {
  const pathArr = url.split('/');

  return pathArr.pop() || pathArr.pop() as string;
}

export const getBodyData = (req: IncomingMessage): any => {
  return req;
}
