import Vue from 'vue'
import Vuex from 'vuex'
import template from './modules/template'

Vue.use(Vuex)

const store = new Vuex.Store({
  modules: {
    template: template
  }
})

export default store
