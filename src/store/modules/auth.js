export default {
  namespaced: true,
  state: {
    isLogin: false
  },
  mutations: {
    SET_IS_LOGIN (state, payload) {
      state.isLogin = payload
    }
  }
}
