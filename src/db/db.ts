export type DBUserType = {
  id?: string;
  username: string;
  age: number;
  hobbies: string[];
}

const db: DBUserType[] = [
  { id: '06799d93-f8ca-4c13-a019-584377fc5601', username: 'Init_User', age: 27, hobbies: ['tennis'] },
];

export function getAllDBUsers(): DBUserType[] {
  return db;
}

export function getDBUserById(userId: string): DBUserType | undefined {
  return db.find((item: DBUserType) => item.id === userId);
}

export function createNewDBUser(userData: DBUserType): DBUserType[] {
  db.push(userData);

  return db;
}

export function updateDbUserById(userId: string, userData: DBUserType): DBUserType | null {
  const index = db.findIndex((item: DBUserType) => item.id === userId);

  if (index !== -1) {
    db.splice(index, 1, { ...userData, id: userId });
  } else {
    return null;
  }

  return userData;
}

export function removeDBUserById(userId: string): boolean {
  const index = db.findIndex((item: DBUserType) => item.id === userId);

  if (index !== -1) {
    db.splice(index, 1);

    return true;
  }

  return false;
}
