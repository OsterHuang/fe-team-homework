export default {
  namespaced: true,
  state: {
    bpiCurrentPrice: {}
  },
  mutations: {
    SET_BPI_CURRENT_PRICE (state, payload) {
      state.bpiCurrentPrice = payload
    }
  },
  actions: {
    async InquiryCurrentPrice ({ commit }) {
      const res = await fetch('https://api.coindesk.com/v1/bpi/currentprice.json').then(res => res.json())
      commit('SET_BPI_CURRENT_PRICE', res)
    }
  }
}
