// @ts-ignore
// import * as uuid from 'uuid'; // parse error

export const uuidV4Generate = (): string => {
  return generateUuid();
}

export const uuidValidate = (id: string): boolean => {
  return id.length === 36;
}

const generateUuid = (): string => {
  return `${Math.ceil(Math.random() * 100000000)}-${Math.ceil(Math.random() * 1000)}-${Math.ceil(Math.random() * 1000)}-${Math.ceil(Math.random() * 1000)}-${Math.ceil(Math.random() * 100000000000)}`;
};
