import Vue from 'vue'
import App from './App.vue'
import VueCompositionAPI from '@vue/composition-api'
import router from './router'
import './assets/tailwind.css'

Vue.config.productionTip = false
Vue.use(VueCompositionAPI)

new Vue({
  router,
  render: (h) => h(App)
}).$mount('#app')
