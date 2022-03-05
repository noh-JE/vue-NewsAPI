import Vue from 'vue'
import router from '@/routes/index.js' // { router } 로 표기 시 오류
import App from './App.vue'

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  router
}).$mount('#app')
