import { constantRoutes } from '@/router'
import { getRouters } from '@/api/menu'
import Layout from '@/layout/index'

const permission = {
  state: {
    firstPath:'/',
    routes: [],
    addRoutes: [],
  },
  mutations: {
    SET_FIRSTPATHL(state, path){
      state.firstPath = path?path:'/';
    },
    SET_ROUTES: (state, routes) => {
      state.addRoutes = routes
      state.routes = constantRoutes.concat(routes)
    }
  },
  actions: {
    // 生成路由
    GenerateRoutes({ commit }) {
      return new Promise(resolve => {
        // 向后端请求路由数据
        getRouters().then(res => {
          //设置登录后跳转的第一个页面
          let path = res.data.length>0?res.data[0].path:'';
          if(res.data.length>0){
            if(res.data[0].children.length>0){
              path = res.data[0].path+'/'+res.data[0].children[0].path;
            }else{
              path = res.data[0].path;
            };
          };
          commit('SET_FIRSTPATHL', path);
          //动态添加路由
          const accessedRoutes = filterAsyncRouter(res.data);
          accessedRoutes.push({ path: '*', redirect: '/404', hidden: true })
          commit('SET_ROUTES', accessedRoutes)
          resolve(accessedRoutes)
        })
      })
    }
  }
}

// 遍历后台传来的路由字符串，转换为组件对象
function filterAsyncRouter(asyncRouterMap) {
  return asyncRouterMap.filter(route => {
    if (route.component) {
      // Layout组件特殊处理
      if (route.component === 'Layout') {
        route.component = Layout
      } else {
        route.component = loadView(route.component)
      }
    }
    if (route.children != null && route.children && route.children.length) {
      route.children = filterAsyncRouter(route.children)
    }
    return true
  })
}

export const loadView = (view) => { // 路由懒加载
  return (resolve) =>  require([`@/views/${view}`], resolve)
}

export default permission
