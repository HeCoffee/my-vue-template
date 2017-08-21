// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
// import store from './store' // 需要状态管理则去掉注释 注释掉打包会忽略
import * as filters from './utils/filter'

// 关掉vue一些官方的警告
Vue.config.productionTip = false

// 注册filters里所有过滤器
Object.keys(filters).forEach(k => Vue.filter(k, filters[k]))

/* eslint-disable no-new */
new Vue({
  el: '#app',
  // store,
  router,
  render: h => h(App)
})
