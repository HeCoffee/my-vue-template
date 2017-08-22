// lodash工具库
import _ from 'lodash'
export default {
  // 默认别名是 $http
  install: function (Vue, name = '$_') {
    Object.defineProperty(Vue.prototype, name, { value: _ });
  }
}
