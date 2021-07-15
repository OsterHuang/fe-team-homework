import Vue from 'vue'
import Vuex from 'vuex'

import auth from './modules/auth'
import bitCoin from './modules/bitCoint'

Vue.use(Vuex)

const store = new Vuex.Store({
  modules: {
    auth,
    bitCoin
  }
})

export default store
