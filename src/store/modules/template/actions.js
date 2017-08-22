// 默认设置http请求的参数可看http.js
import {getMethod} from '../../../utils/http'

// 前缀(命名空间)
const prefix = '/api/v1'

export default {
  // default action
  async getTemplateValueAction ({ commit }, params) {
    let url = `${prefix}/test`
    let response = await getMethod({ url, params })
    commit('setTemplateValue', response.data)
  }
}
