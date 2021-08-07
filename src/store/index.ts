import { createStore } from 'vuex';

import { moduleLogin } from './login/login';

const store = createStore({
  state: () => {
    return {};
  },
  getters: {},
  mutations: {},
  actions: {},
  modules: {
    login: moduleLogin
  }
});

export function setupStore() {
  store.dispatch('login/loadLocalLoginInfo');
}

export default store;
