// 官方推荐的 http请求库
import axios from 'axios'
export default {
  // 默认别名是 $axios 函数描述符建议是可枚举 不可覆盖描述符 不可重写
  install: function (Vue, name = '$axios') {
    Object.defineProperty(Vue.prototype, name, { value: axios, enumerable: true })
  }
}
