// 默认设置http请求的参数可看http.js
import {getMethod} from '../../../utils/http'

export default {
  // default action
  async getTemplateValueAction ({ commit }, params) {
    let url = '/test'
    let result = await getMethod({ url, params })
    commit('setTemplateValue', result)
  }
}
