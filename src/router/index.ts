import { createRouter, createWebHashHistory } from 'vue-router';
import type { RouteRecordRaw } from 'vue-router';
import cache from '@/utiis/cache';
import { firstMenu } from '@/utiis/map-menus';

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    redirect: '/main'
  },
  {
    path: '/login',
    name: 'login',
    component: () => import('@/views/login/login.vue')
  },
  {
    path: '/main',
    name: 'main',
    component: () => import('@/views/main/main.vue')
  },
  {
    path: '/:pathMath(.*)*',
    name: 'not-found',
    component: () => import('@/views/not-found/not-found.vue')
  }
];

const router = createRouter({
  routes,
  history: createWebHashHistory()
});

// 路由守卫
router.beforeEach((to) => {
  if (to.path !== '/login') {
    const token = cache.getCache('token');
    if (!token) {
      return '/login';
    }

    if (to.path === '/main') {
      return firstMenu.url;
    }
  }
});

export default router;
