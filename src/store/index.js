import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    isLogin: false
  },
  mutations: {
    SET_IS_LOGIN (state, payload) {
      state.isLogin = payload
    }
  }
})

export default store
