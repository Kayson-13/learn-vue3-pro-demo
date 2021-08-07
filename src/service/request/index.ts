import axios from 'axios';

import { ElLoading } from 'element-plus';

import type { AxiosInstance, AxiosRequestConfig } from 'axios';
import type { ServiceInterceptors, SuperAxiosRequestConfig } from './type';
import type { ILoadingInstance } from 'element-plus/lib/el-loading/src/loading.type';

const DEFAULT_LOADING = true;
export default class Request {
  instance: AxiosInstance;
  interceptors?: ServiceInterceptors;
  showLoading: boolean;
  loading?: ILoadingInstance;

  constructor(config: SuperAxiosRequestConfig) {
    this.instance = axios.create(config);
    this.interceptors = config.interceptors;
    this.showLoading = config.showLoading ?? DEFAULT_LOADING;

    // 添加所有实例的拦截器
    this.instance.interceptors.request.use(
      (config) => {
        if (this.showLoading) {
          this.loading = ElLoading.service({
            lock: true,
            text: '正在请求数据...',
            background: 'rgba(0, 0, 0, .3)'
          });
        }
        return config;
      },
      (err) => {
        return err;
      }
    );
    this.instance.interceptors.response.use(
      (res) => {
        const data = res.data;
        switch (data.returnCode) {
          case '-1001':
            break;
          default:
            break;
        }
        this.loading?.close();
        return data;
      },
      (err) => {
        switch (err.response.status) {
          case 404:
            break;
          default:
            break;
        }
        this.loading?.close();
        return err;
      }
    );

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

  request<T>(config: SuperAxiosRequestConfig): Promise<T> {
    return new Promise((resolve, reject) => {
      if (config.showLoading === false) {
        this.showLoading = config.showLoading;
      }
      this.instance
        .request<any, T>(config)
        .then((res) => {
          this.showLoading = DEFAULT_LOADING;
          resolve(res);
        })
        .catch((err) => {
          this.showLoading = DEFAULT_LOADING;
          reject(err);
        });
    });
  }
}
