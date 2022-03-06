import Vue from 'vue'
import router from '@/routes/index.js' // { router } 로 표기 시 오류
import { store } from '@/store/index.js'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faHeart, faHatWizard } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import App from './App.vue'

library.add(
  faHatWizard,
  faHeart
)
Vue.component('font-awesome-icon', FontAwesomeIcon)

new Vue({
  render: h => h(App),
  router,
  store
}).$mount('#app')
