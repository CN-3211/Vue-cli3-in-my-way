/*
 * @Author: your name
 * @Date: 2019-11-06 13:27:09
 * @LastEditTime : 2019-12-25 15:07:09
 * @LastEditors  : huangzh873
 * @Description: In User Settings Edit
 * @FilePath: \Vue-cli3-in-my-way\src\router\index.js
 */
import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '~views/Home.vue'

Vue.use(VueRouter)

export default new VueRouter({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      // 显示在url上,
      // 注意带/默认是根路由，在子路由不能带斜杠
      path: '/about',
      // 路由名称
      name: 'about',
      // 组件路径
      component: () => import(/* webpackChunkName: "about" */ '~views/About.vue')
    },
    {
      path: '/todoList',
      name: 'todoList',
      component: () => import(/* webpackChunkName: "about" */ '~views/todoList.vue')
    },
    {
      path: '/formSubmit',
      name: 'formSubmit',
      component: () => import(/* webpackChunkName: "about" */ '~views/formSubmit.vue')
    },
    {
      path: '/update&sync',
      name: 'update&sync',
      component: () => import(/* webpackChunkName: "about" */ '~views/update&sync/originContainer')
    },
    {
      path: '/autoTimeLine',
      name: 'autoTimeLine',
      component: () => import(/* webpackChunkName: "about" */ '~views/autoTimeLine')
    },
    {
      path: '/banner',
      name: 'banner',
      component: () => import(/* webpackChunkName: "about" */ '~views/banner')
    },
    {
      path: '/mapboxTest',
      name: 'mapboxTest',
      component: () => import(/* webpackChunkName: "about" */ '~views/mapboxTest')
    },
    {
      path: '/chimee',
      name: 'chimee',
      component: () => import(/* webpackChunkName: "about" */ '~views/chimee/chimee')
    },
    {
      path: '/directives',
      name: 'directives',
      component: () => import(/* webpackChunkName: "about" */ '~views/directives')
    },
    {
      path: '/tagModel',
      name: 'tagModel',
      component: () => import(/* webpackChunkName: "about" */ '~views/modelTags/tagModel')
    },
    {
      path: '/tryCatch',
      name: 'tryCatch',
      component: () => import(/* webpackChunkName: "about" */ '~views/tryCatchFinally')
    },
    {
      path: '/tangle',
      name: 'tangle',
      component: () => import(/* webpackChunkName: "about" */ '~views/tangle')
    },
    {
      path: '/delegation',
      name: 'delegation',
      component: () => import(/* webpackChunkName: "about" */ '~views/delegation')
    },
    {
      path: '/jsDataType',
      name: 'jsDataType',
      component: () => import(/* webpackChunkName: "about" */ '~views/jsDataType')
    },
    {
      path: '/callApplyBind',
      name: 'callApplyBind',
      component: () => import(/* webpackChunkName: "about" */ '~views/callApplyBind')
    },
    {
      path: '/originAjax',
      name: 'originAjax',
      component: () => import(/* webpackChunkName: "about" */ '~views/originAjax')
    },
    {
      path: '/slotContainer',
      name: 'slotContainer',
      component: () => import(/* webpackChunkName: "about" */ '~views/slotGroup/slotContainer')
    },
    {
      path: '/setAndget',
      name: 'setAndget',
      component: () => import(/* webpackChunkName: "about" */ '~views/setAndget')
    },
    {
      path: '/test',
      name: 'test',
      component: () => import(/* webpackChunkName: "about" */ '~views/test')
    },
    {
      path: '/router-root',
      name: 'router-root',
      component: () => import(/* webpackChunkName: "about" */ '../views/__vue-router/routerRoot'),
      children: [
        {
          path: '',
          name: 'router-default',
          component: () => import(/* webpackChunkName: "about" */ '../views/__vue-router/root')
        },
        {
          path: 'red',
          name: 'router-red',
          component: () => import(/* webpackChunkName: "about" */ '../views/__vue-router/red')
        },
        {
          path: 'yellow',
          name: 'router-yellow',
          component: () => import(/* webpackChunkName: "about" */ '../views/__vue-router/yellow')
        }
      ]
    },
    {
      path: '/cesium-root',
      name: 'cesium-root',
      component: () => import(/* webpackChunkName: "about" */ '../views/cesium/root'),
      children: [
        {
          path: '',
          name: 'router-default',
          component: () => import(/* webpackChunkName: "about" */ '../views/cesium/default')
        },
        {
          path: 'cesium-viewer',
          name: 'cesium-viewer',
          component: () => import(/* webpackChunkName: "cesiumViewer" */ '../views/cesium/cesiumViewer')
        },
        {
          path: 'cesium-imagery',
          name: 'cesium-imagery',
          component: () => import(/* webpackChunkName: "cesiumImagery" */ '~views/cesium/cesiumImagery')
        },
        {
          path: 'ce-arcgis',
          name: 'ce-arcgis',
          component: () => import(/* webpackChunkName: "ceArcgis" */ '../views/cesium/ceArcgis')
        }
      ]
    },
  ]
})
