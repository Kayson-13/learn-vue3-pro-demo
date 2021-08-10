import { createStore, Store, useStore as useVuexStore } from 'vuex';

import { moduleLogin } from './login/login';
import type { IStoreType } from './type';

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

export function useStore(): Store<IStoreType> {
  return useVuexStore();
}

export default store;
