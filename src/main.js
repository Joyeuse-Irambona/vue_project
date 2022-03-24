import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import style from './assets/style.css'
import './axios'
import Store from 'vuex'
import vuelidate from 'vuelidate'

Vue.config.productionTip = false
Vue.use(vuelidate);

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
