import { createStore } from 'vuex';

const store = createStore({
  state: () => {
    return {
      name: 'Jacob'
    };
  }
});

export default store;
