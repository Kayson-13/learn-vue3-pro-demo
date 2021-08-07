// service统一出口
import Request from './request';
import cache from '@/utiis/cache';
import { BASE_URL, TIME_OUT } from './request/config';

export default new Request({
  baseURL: BASE_URL,
  timeout: TIME_OUT,

  interceptors: {
    requestInterceptor: (config) => {
      // 某个实例的拦截
      const token = cache.getCache('token');
      if (token) {
        config.headers.Authorization = `Bearer ${token}`;
      }
      return config;
    },
    requestInterceptorCatch: (err) => {
      // console.log('请求拦截失败');
      return err;
    },
    responseInterceptor: (res) => {
      // console.log('响应拦截成功');
      return res;
    },
    responseInterceptorCatch: (err) => {
      // console.log('响应拦截失败');
      return err;
    }
  }
});
