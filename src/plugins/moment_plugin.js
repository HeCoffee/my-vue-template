// 日期和时间格式化库
import moment from 'moment'
export default {
  // 默认别名是 $moment
  install: function (Vue, name = '$moment') {
    Object.defineProperty(Vue.prototype, name, { value: moment, enumerable: true });
  }
}
