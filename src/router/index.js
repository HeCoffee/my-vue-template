import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'

// 配置参数 钩子函数等用法请查阅vue-router文档
Vue.use(Router)

// 前缀
const prefix = ''

const router = new Router({
  mode: 'history',
  routes: [
    {
      path: `${prefix}/`,
      name: 'Hello',
      component: Hello,
      meta: {
        title: '首页'
      }
    },
    {
      path: '*',
      redirect: `${prefix}/`
    }
  ]
})

// 钩子函数 路由跳转后执行
router.afterEach(route => {
  document.title = route.meta.title
})

export default router
