import service from '@/service';

import type { IDataType } from '../type';
import type { IVerifyAccountParam } from './type';

enum LoginAPI {
  VerifyAccount = '/login',
  LoginUserInfo = '/users/',
  UserMenus = '/role/'
}

export const loginVerifyAccount = (param: IVerifyAccountParam) =>
  service.request<IDataType>({
    url: LoginAPI.VerifyAccount,
    method: 'post',
    data: param
  });

export const getUserInfoById = (param: number) =>
  service.request<IDataType>({
    url: LoginAPI.LoginUserInfo + param,
    method: 'get',
    showLoading: false
  });

export const getUserMenuByRoleId = (param: number) =>
  service.request<IDataType>({
    url: LoginAPI.UserMenus + param + '/menu',
    method: 'get',
    showLoading: false
  });
