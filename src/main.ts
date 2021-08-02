import { createApp } from 'vue';
import { globalRegister } from './global';

import App from './App.vue';

import router from './router';
import store from './store';
import service from './service';

const app = createApp(App);

// globalRegister(app);

app.use(globalRegister);
app.use(router);
app.use(store);
app.mount('#app');

service.request({
  url: '/home/multidata',
  method: 'GET'
});
