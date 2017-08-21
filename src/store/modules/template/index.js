import state from './state'
import getters from './getters'
import mutations from './mutations'
import actions from './actions'

const template = {
  // namespaced: true, // 是否需要命名空间 默认不需要
  state: state,
  getters: getters,
  mutations: mutations,
  actions: actions
}

export default template
