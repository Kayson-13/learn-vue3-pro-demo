import type { RouteRecordRaw } from 'vue-router';
import type { IMenuItem } from 'components/nav-menu/src/type';
import type { IBreadcrumb } from '@/base-ui/breadcrumb/index';

let firstMenu: any = null;

export function mapMenusToRoutes(userMenus: any[]): RouteRecordRaw[] {
  const routes: RouteRecordRaw[] = [];
  // 加载所有的routes
  const allRoutes: RouteRecordRaw[] = [];
  const routeFiles = require.context('../router/main', true, /\.ts/);
  routeFiles.keys().forEach((key) => {
    const route = require('../router/main' + key.split('.')[1]);
    allRoutes.push(route.default);
  });

  // 根据返回的菜单匹配需要添加的 routes
  const _recurseGetRoutes = (menus: any[]) => {
    for (const menu of menus) {
      if (menu.type == 2) {
        const route = allRoutes.find((route) => route.path === menu.url);
        if (route) routes.push(route);
        if (!firstMenu) {
          firstMenu = menu;
        }
      } else {
        _recurseGetRoutes(menu.children);
      }
    }
  };

  _recurseGetRoutes(userMenus);

  return routes;
}

/**
 * @name pathMapBreadcrumbs
 * @param { IMenuItem[] } menus 根据权限获取的菜单数组
 * @param currentPath 当前路径
 * @return { IBreadcrumb } breadcrumbs 根据currentPath 在 menus 中匹配到当前路径及其上级的 breadcrumb对象数组
 */
export function pathMapBreadcrumbs(menus: IMenuItem[], currentPath: string): IBreadcrumb[] {
  const breadcrumbs: IBreadcrumb[] = [];
  pathMapToMenu(menus, currentPath, breadcrumbs);
  return breadcrumbs;
}

/**
 * @name pathMapToMenu
 * @param { IMenuItem[] } menus 根据权限获取的菜单数组
 * @param { string } currentPath 当前路径
 * @param { IBreadcrumb[] } breadcrumbs 面包屑对象数组，默认为空数组，返回数据的容器
 * @return { IMenuItem | undefined } menu 根据currentPath在menus中匹配到的路由对象
 */
export function pathMapToMenu(
  menus: IMenuItem[],
  currentPath: string,
  breadcrumbs?: IBreadcrumb[]
): IMenuItem | undefined {
  for (const menu of menus) {
    if (menu.type === 1) {
      const resMenu: IMenuItem | undefined = pathMapToMenu(menu.children ?? [], currentPath);
      if (resMenu) {
        breadcrumbs?.push({ name: menu.name });
        breadcrumbs?.push({ name: resMenu.name });
        return resMenu;
      }
    } else if (menu.type === 2) {
      if (currentPath === menu.url) {
        return menu;
      }
    }
  }
}

export { firstMenu };
