// @ts-ignore
import { uuid } from 'uuid';

export const uuidV4Generate = (): string => {
  return uuid.v4();
}

export const uuidValidate = (id: string): boolean => {
  return uuid.validate(id);
}
