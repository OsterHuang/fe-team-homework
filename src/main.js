import Vue from 'vue'

import App from '@/App.vue'
import store from '@/store'
import router from '@/routes'
import '@/routes/interceptor'

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  router,
  store
}).$mount('#app')
