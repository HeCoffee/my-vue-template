// lodash工具库
import _ from 'lodash'
export default {
  // 默认别名是 $_
  install: function (Vue, name = '$_') {
    Object.defineProperty(Vue.prototype, name, { value: _, enumerable: true });
  }
}
