import Vue from 'vue'
import App from './App'
import router from './router'
// import store from './store' // 需要状态管理则去掉注释 注释了打包会忽略
import * as filters from './utils/filter'
import AxiosPlugin from './plugins/axios_plugin' // 引入http库插件
// 关掉vue一些官方的警告
Vue.config.productionTip = false

// 插入插件 参数1 引入的插件 参数2 别名 会覆盖默认别名
// 调用方法 this.别名 如： this.$http
Vue.use(AxiosPlugin, '$http')

// 注册filters里所有过滤器
Object.keys(filters).forEach(k => Vue.filter(k, filters[k]))

/* eslint-disable no-new */
new Vue({
  el: '#app',
  // store,
  router,
  render: h => h(App)
})
