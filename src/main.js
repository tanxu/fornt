import Vue from 'vue'
import axios from 'axios'
import App from './App.vue'
import router from './router'
import store from './store'

// Vee Validate
import './veevalidate'

Vue.config.productionTip = false

axios.defaults.baseURL = (process.env.NODE_ENV !== 'production') ? 'http://localhost:3000' : 'http://api.examcel.com'

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
