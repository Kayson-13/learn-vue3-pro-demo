import type { Module } from 'vuex';
import type { IRootState } from '@/store/type';
import type { ISystemState } from './type';

import { getPageListData } from '@/api/main/system/system';

export const moduleSystem: Module<ISystemState, IRootState> = {
  namespaced: true,
  state: () => {
    return {
      userList: [],
      userCount: 0
    };
  },
  getters: {},
  mutations: {
    changeUserList(state, userList: any) {
      state.userList = userList;
    },
    changeUserCount(state, userCount: number) {
      state.userCount = userCount;
    }
  },
  actions: {
    async getPageList({ commit }, payload) {
      try {
        const pageListResult = await getPageListData(payload);
        const { list, totalCount } = pageListResult.data;
        commit('changeUserList', list);
        commit('changeUserCount', totalCount);
      } catch (error) {
        console.log('出错了！', error);
      }
    }
  }
};
