import type { AxiosRequestConfig, AxiosResponse} from 'axios';

export interface ServiceInterceptors {
  requestInterceptor?: (config: AxiosRequestConfig) => AxiosRequestConfig;
  requestInterceptorCatch: (error: any) => any;
  responseInterceptor?: (config: AxiosResponse) => AxiosResponse;
  responseInterceptorCatch: (error: any) => any;
}

export interface SuperAxiosRequestConfig extends AxiosRequestConfig {
  interceptors?: ServiceInterceptors;
}
