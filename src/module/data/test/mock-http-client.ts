import {
  THttpResponse,
  TRequestHttpPostParams,
  HttpPostClient,
} from '@/module/data/protocols';
import { HttpStatusCode } from '@/module/enum';

export class HttpPostClientSpy<T, R> implements HttpPostClient<T, R> {
  url?: string;
  body?: T;
  response: THttpResponse<R> = {
    statusCode: HttpStatusCode.OK,
  };
  async post(params: TRequestHttpPostParams<T>): Promise<THttpResponse<R>> {
    this.url = params.url;
    this.body = params.body;
    return Promise.resolve(this.response);
  }
}
