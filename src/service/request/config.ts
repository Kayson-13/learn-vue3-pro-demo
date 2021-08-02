// 不同环境配置方案二
let BASE_URL = '';
let BASE_NAME = '';
const TIME_OUT = 10000;

if (process.env.NODE_ENV === 'development') {
  BASE_URL = 'http://123.207.32.32:8000/';
  BASE_NAME = 'corderwhy';
} else if (process.env.NODE_ENV === 'production') {
  BASE_URL = 'http://coderwhy.ory/prod';
  BASE_NAME = 'Jacob';
} else {
  BASE_URL = 'http://coderwhy.org/test';
  BASE_NAME = 'Kayson';
}

export { BASE_URL, TIME_OUT };
