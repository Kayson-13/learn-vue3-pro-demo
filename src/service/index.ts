// service统一出口
import Request from './request';
import { BASE_URL, TIME_OUT } from './request/config';

export default new Request({
  baseURL: BASE_URL,
  timeout: TIME_OUT,

  interceptors: {
    requestInterceptor: (config) => {
      console.log('请求拦截成功');
      return config;
    },
    requestInterceptorCatch: (err) => {
      console.log('请求拦截失败');
      return err;
    },
    responseInterceptor: (config) => {
      console.log('响应拦截成功');
      return config;
    },
    responseInterceptorCatch: (err) => {
      console.log('响应拦截失败');
      return err;
    }
  }
});
