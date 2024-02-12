export type CreateUserDto = {
  username: string;
  age: number;
  hobbies: string[];
}

type UserId = {
  id: string;
}

export type UserDto = UserId & CreateUserDto;
