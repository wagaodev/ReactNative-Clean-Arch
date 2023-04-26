import { TAccountModel } from '@/module/domain/models';
import { TAuthenticationParams } from './types';

export interface Authentication {
  auth(params: TAuthenticationParams): Promise<TAccountModel>;
}
