import { faker } from '@faker-js/faker';
import { HttpPostClientSpy } from '@/module/data/test';
import { RemoteAuthentication } from './remote-authentication';
import { HttpStatusCode } from '@/module/enum';
import { mockAccountModel, mockAuthentication } from '@/module/domain/test';
import {
  InternalServerError,
  UnexpectedError,
  InvalidCredentialsError,
  NotFoundError,
} from '@/module/domain/errors';
import { TAuthenticationParams } from '@/module/domain/usecases';
import { TAccountModel } from '@/module/domain/models';

type TSut = {
  sut: RemoteAuthentication;
  httpPostClientSpy: HttpPostClientSpy<TAuthenticationParams, TAccountModel>;
};

// Design Pattern Factory
const makeSut = (url: string = faker.internet.url()): TSut => {
  const httpPostClientSpy = new HttpPostClientSpy<
    TAuthenticationParams,
    TAccountModel
  >();
  const sut = new RemoteAuthentication(url, httpPostClientSpy);
  return {
    sut,
    httpPostClientSpy,
  };
};

describe('RemoteAuthentication', () => {
  test('Should call HttpPostClient with correct url', async () => {
    const url = faker.internet.url();
    const { httpPostClientSpy, sut } = makeSut(url);
    await sut.auth(mockAuthentication());
    await expect(httpPostClientSpy.url).toBe(url);
  });
  test('Should call HttpPostClient with correct body', async () => {
    const { httpPostClientSpy, sut } = makeSut();
    const authenticationParams = mockAuthentication();
    await sut.auth(authenticationParams);
    await expect(httpPostClientSpy.body).toEqual(authenticationParams);
  });
  test('should throw InvalidCredentialsError if HttpPostClient return 401', async () => {
    const { sut, httpPostClientSpy } = makeSut();
    httpPostClientSpy.response = {
      statusCode: HttpStatusCode.UNAUTHORIZED,
    };
    const promise = sut.auth(mockAuthentication());
    await expect(promise).rejects.toThrow(new InvalidCredentialsError());
  });
  test('should throw UnexpedError if HttpPostClient returns 400', async () => {
    const { sut, httpPostClientSpy } = makeSut();
    httpPostClientSpy.response = {
      statusCode: HttpStatusCode.BAD_REQUEST,
    };
    const promise = sut.auth(mockAuthentication());
    await expect(promise).rejects.toThrow(new UnexpectedError());
  });
  test('should throw ServerError if HttpPostClient return 500', async () => {
    const { sut, httpPostClientSpy } = makeSut();
    httpPostClientSpy.response = {
      statusCode: HttpStatusCode.INTERNAL_SERVER_ERROR,
    };
    const promise = sut.auth(mockAuthentication());
    await expect(promise).rejects.toThrow(new InternalServerError());
  });
  test('should throw UnexpectedError if HttpPostClient return 404', async () => {
    const { sut, httpPostClientSpy } = makeSut();
    httpPostClientSpy.response = {
      statusCode: HttpStatusCode.NOT_FOUND,
    };
    const promise = sut.auth(mockAuthentication());
    await expect(promise).rejects.toThrow(new NotFoundError());
  });
  test('should return and account model if HttpPostClient returns 200', async () => {
    const { sut, httpPostClientSpy } = makeSut();
    const httpResult = mockAccountModel();
    httpPostClientSpy.response = {
      statusCode: HttpStatusCode.OK,
      body: httpResult,
    };
    const account = await sut.auth(mockAuthentication());
    expect(account).toEqual(httpResult);
  });
});
