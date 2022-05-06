import router from './router';
import store from './store';
import { getToken } from '@/utils/auth';

//白名单
const whiteList = ['/login', '/auth-redirect', '/bind', '/register']

router.beforeEach((to, from, next) => {
  if (getToken()) {
    if (to.path === '/login') {
      next({ path: '/' })
    } else {
      if (store.getters.roles.length === 0) {
        const roles = ['admin'];
        store.commit('SET_ROLES', roles);
        store.dispatch('permission/GenerateRoutes', { }).then(accessRoutes => {
          // 根据roles权限生成可访问的路由表
          router.addRoutes(accessRoutes);
          next({ ...to, replace: true }) // hack方法 确保addRoutes已完成
        })
      } else {
        next()
      }
    }
  } else {
    // 没有token
    if (whiteList.indexOf(to.path) !== -1) {
      next()
    } else {
      next(`/login?redirect=${to.fullPath}`) // 否则全部重定向到登录页
    }
  }
});
