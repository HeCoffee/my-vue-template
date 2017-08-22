// 官方推荐的 http请求库
import axios from 'axios'
export default {
  // 默认别名是 $axios
  install: function (Vue, name = '$axios') {
    Object.defineProperty(Vue.prototype, name, { value: axios })
  }
}
