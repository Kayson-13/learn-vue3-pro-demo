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
app.use(router);
app.use(store);
setupStore();

app.mount('#app');

// service.request({
//   url: '/home/multidata',
//   method: 'GET'
// });
