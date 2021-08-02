import axios from 'axios';

import type { AxiosInstance, AxiosRequestConfig } from 'axios';
import type { ServiceInterceptors, SuperAxiosRequestConfig } from './type';

export default class Request {
  instance: AxiosInstance;
  interceptors?: ServiceInterceptors;

  constructor(config: SuperAxiosRequestConfig) {
    this.instance = axios.create(config);
    this.interceptors = config.interceptors;

    // 添加所有实例的拦截器
    this.instance.interceptors.request.use(config => {
      return config;
    }, err => {
      return err;
    });
    this.instance.interceptors.response.use(res => {
      return res;
    }, err => {
      return err;
    });

    // 添加实例单独的拦截器，让封装更完善
    this.instance.interceptors?.request.use(
      this.interceptors?.requestInterceptor,
      this.interceptors?.requestInterceptorCatch
    );
    this.instance.interceptors?.response.use(
      this.interceptors?.responseInterceptor,
      this.interceptors?.responseInterceptorCatch
    );
  }

  request(config: AxiosRequestConfig): void {
    this.instance.request(config).then((res) => {
      console.log(res);
    });
  }
}
