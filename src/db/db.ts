export type DBUserType = {
  id?: string;
  username: string;
  age: number;
  hobbies: string[];
}

const db: DBUserType[] = [
  { id: 'init_id', username: 'Init_User', age: 22, hobbies: ['tennis'] },
];

export function updateUserById(userId: string, userData: DBUserType): DBUserType | null {
  const index = db.findIndex((item: DBUserType) => item.id === userId);

  if (index) {
    db.splice(index, 1, userData);
  } else {
    return null;
  }

  return userData;
}

export function removeUserById(userId: string): DBUserType[] | undefined {
  const index = db.findIndex((item: DBUserType) => item.id === userId);

  if (index) {
    db.splice(index, 1);
  }

  return db;
}


export function createNewUser(userId: string, userData: DBUserType): DBUserType[] {
  db.push(userData);

  return db;
}

export function findUserById(userId: string): DBUserType | undefined {
  return db.find((item: DBUserType) => item.id === userId);
}

export function getAllUsers(): DBUserType[] {
  return db;
}
