import type { Module } from 'vuex';
import router from '@/router';

import type { IRootState } from '../type';
import type { ILoginState } from './type';

import { loginVerifyAccount, getUserInfoById, getUserMenuByRoleId } from '@/api/login/login';
import cache from '@/utiis/cache';
import { mapMenusToRoutes } from '@/utiis/map-menus';

export const moduleLogin: Module<ILoginState, IRootState> = {
  namespaced: true,
  state: () => {
    return {
      token: '',
      userInfo: {},
      userMenus: []
    };
  },
  getters: {},
  mutations: {
    changeToken(state, payload) {
      state.token = payload;
    },
    changeUserInfo(state, payload) {
      state.userInfo = payload;
    },
    changeUserMenus(state, payload) {
      state.userMenus = payload;

      const routes = mapMenusToRoutes(state.userMenus);
      routes.forEach((route) => {
        router.addRoute('main', route);
      });
    }
  },
  actions: {
    async verifyAccount({ commit }, payload) {
      try {
        // 发送网络请求，check登录信息并将token信息存入vuex和LocalStorage
        const loginResult = await loginVerifyAccount(payload);
        const { token, id } = loginResult.data;
        commit('changeToken', token);
        cache.setCache('token', token);

        // 通过用户id请求用户信息
        const userInfoResult = await getUserInfoById(id);
        const userInfo = userInfoResult.data;
        commit('changeUserInfo', userInfo);
        cache.setCache('userInfo', userInfo);

        // 通过用户信息中的角色id请求用户菜单
        const userMenusResult = await getUserMenuByRoleId(userInfo.role.id);
        const userMenus = userMenusResult.data;
        commit('changeUserMenus', userMenus);
        cache.setCache('userMenus', userMenus);

        // 跳转到首页
        router.push('main');
      } catch (error) {
        console.log('something wrong:' + error);
      }
    },

    loadLocalLoginInfo({ commit }) {
      const token = cache.getCache('token');
      if (token) {
        commit('changeToken', token);
      }
      const userInfo = cache.getCache('userInfo');
      if (userInfo) {
        commit('changeUserInfo', userInfo);
      }
      const userMenus = cache.getCache('userMenus');
      if (userMenus && userMenus.length > 0) {
        commit('changeUserMenus', userMenus);
      }
    }
  }
};
