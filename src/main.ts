import { createApp } from 'vue';
import { globalRegister } from './global';
import 'normalize.css';
import './assets/css/index.less';

import App from './App.vue';

import router from './router';
import store, { setupStore } from './store';
import service from './service';

const app = createApp(App);

// globalRegister(app);

app.use(globalRegister);
app.use(store);
// 将setupStore() 和 app.use(store) 互换位置，为了解决刷新会跑到not-found页面bug
// 刷新页面 -> 从上到下依次加载本页。
// 当 app.use(store) 在前面的时候，注册路由会去调用 install 方法，获取到当前的path
// 去 router.routes 中匹配路径。
// 但是目前并没有执行 setupStore() 没有动态匹配的路径，因此无法匹配到对应的路径，就匹配到了not-found
// 虽然后面已经将routes动态加载进去了，但是已经匹配到了 not-found
setupStore();
app.use(router);

app.mount('#app');

// service.request({
//   url: '/home/multidata',
//   method: 'GET'
// });
