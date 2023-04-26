import { THttpResponse, TRequestHttpPostParams } from './types';

// I use each interface with one single responsability following a solid method
// of Interface segregation principle.
export interface HttpPostClient<T, R> {
  post(params: TRequestHttpPostParams<T>): Promise<THttpResponse<R>>;
}
