/*
 * @Author: huangzh873
 * @Date: 2019-09-21 23:20:58
 * @LastEditors  : huangzh873
 * @LastEditTime : 2020-02-03 09:39:04
 */
import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import VueCesium from 'vue-cesium'
// import './registerServiceWorker'

// 指令
import './directives';

// 过滤器
import './filters';

// 插件
import './plugins';

// 异步报错
import { to } from './utils/index2';

Vue.prototype.to = to;
Vue.config.productionTip = false

Vue.use(VueCesium)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
