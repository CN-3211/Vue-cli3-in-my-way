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
      path: '/about',
      // 显示在url上
      name: 'about',
      // 路由名称
      component: () => import(/* webpackChunkName: "about" */ '~views/About.vue')
      // 组件路径
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
      path: '/ref',
      name: 'ref',
      component: () => import(/* webpackChunkName: "about" */ '~views/refTrans/firstRef')
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
      path: '/test',
      name: 'test',
      component: () => import(/* webpackChunkName: "about" */ '~views/test')
    },
    {
      path: '/chimee',
      name: 'chimee',
      component: () => import(/* webpackChunkName: "about" */ '~views/chimee/chimee')
    }
  ]
})
