import Vue from 'vue'
import router from './router'
import App from './App.vue'
import Search from './components/Search.vue'
import Results from './components/Results.vue'

Vue.config.productionTip = false

Vue.component('Search', Search)
Vue.component('Results', Results)

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')

