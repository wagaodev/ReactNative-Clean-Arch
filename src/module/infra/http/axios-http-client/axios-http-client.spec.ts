import axios from 'axios';
import { AxiosHttpClient } from './axios.http-client';
import { mockAxios } from '@/module/infra/test';
import { mockPostRequest } from '@/module/data/test';

jest.mock('axios');

type TSut = {
  sut: AxiosHttpClient;
  mockedAxios: jest.Mocked<typeof axios>;
};

// Factory Functions
const makeSut = (): TSut => {
  const sut = new AxiosHttpClient();
  const mockedAxios = mockAxios();
  return { sut, mockedAxios };
};

describe('AxiosHttpClient', () => {
  test('Should call axios with correct values', async () => {
    const { sut, mockedAxios } = makeSut();
    const request = mockPostRequest();
    await sut.post(request);
    expect(mockedAxios.post).toHaveBeenCalledWith(request.url, request.body);
  });
  test('Should return the correct statusCode and body', () => {
    const { sut, mockedAxios } = makeSut();
    const promise = sut.post(mockPostRequest());
    expect(promise).toEqual(mockedAxios.post.mock.results[0].value);
  });
});
