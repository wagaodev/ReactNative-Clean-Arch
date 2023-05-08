import { faker } from '@faker-js/faker';

export type User = {
  userId: string;
  username: string;
  email: string;
  avatar: string;
};

export const USERS: User[] = [];

export function generateBodyRequestPostParams(): User {
  return {
    userId: faker.datatype.uuid(),
    username: faker.internet.userName(),
    email: faker.internet.email(),
    avatar: faker.image.avatar(),
  };
}
// Caso eu queira criar um array de usuários e dentro do parametro quantity
// consigo determinar quantos usuários eu quero obter dentro do body.
// export function generateBodyRequestMultipleUsersPostParams(quantity: number): User[] {
//   const usersList: User[] = [];
//   Array.from({ length: quantity }).forEach(() => {
//     usersList.push(generateBodyRequestPostParams());
//   });
//   return usersList;
// }
