// @ts-ignore
// import * as uuid from 'uuid'; // parse error
import * as uuid from 'uuid';

export const uuidV4Generate = (): string => {
  return uuid.v4();
  // return generateUuid();
}

export const uuidValidate = (id: string): boolean => {
  return uuid.validate(id);
  // return id.length === 36;
}

const generateUuid = (): string => {
  return `${Math.ceil(Math.random() * 1000000000)}-${Math.ceil(Math.random() * 10000)}-${Math.ceil(Math.random() * 10000)}-${Math.ceil(Math.random() * 10000)}-${Math.ceil(Math.random() * 1000000000000)}`;
};
