import Vue from 'vue'
import router from '@/routes/index.js' // { router } 로 표기 시 오류
import { store } from '@/store/index.js'
import App from './App.vue'

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  router,
  store
}).$mount('#app')
