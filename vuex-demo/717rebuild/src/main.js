import Vue from 'vue'
import App from './App.vue'
import router from "./router/router.js"
import axios from "axios"
import store from "./store/store"
Vue.prototype.$http = axios
new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App),
 
})
