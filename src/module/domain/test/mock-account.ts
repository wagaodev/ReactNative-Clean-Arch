import { TAuthenticationParams } from '@/module/domain/usecases';
import { faker } from '@faker-js/faker';
import { TAccountModel } from '../models';

export const mockAuthentication = (): TAuthenticationParams => ({
  email: faker.internet.email(),
  password: faker.internet.password(),
});

export const mockAccountModel = (): TAccountModel => ({
  accessToken: faker.datatype.uuid(),
});
