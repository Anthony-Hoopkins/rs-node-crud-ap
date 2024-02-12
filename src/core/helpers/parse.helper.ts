import { IncomingMessage } from 'node:http';
import { CreateUserDto } from '../../modules/users/dto/create-user.dto';

export const getLastUrlPath = (url: string): string => {
  const pathArr = url.split('/');

  return pathArr.pop() || pathArr.pop() as string;
};

export const getBodyData = async (request: IncomingMessage): Promise<CreateUserDto> => {
  let data = '';

  request.on('data', chunk => {
    data += chunk;
  });

  await request.on('end', () => {
  });

  return JSON.parse(data);
};
