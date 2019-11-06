import Vue from 'vue'
import Travl from './views/Travl.vue'
import router from './router'
import store from './store'
import './style.css'
import '../src/assets/font/iconfont.css'
import axios from 'axios'
Vue.prototype.$axios=axios

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(Travl)
}).$mount('#app')
