import Vue from 'vue'
import router from './router'
import App from './App.vue'
import Search from './components/Search.vue'
import Results from './components/Results.vue'
import PersonDetail from './components/PersonDetail.vue'
import FilmDetail from './components/FilmDetail.vue'

Vue.config.productionTip = false

Vue.component('Search', Search)
Vue.component('Results', Results)
Vue.component('Search', Search)
Vue.component('PersonDetail', PersonDetail)
Vue.component('FilmDetail', FilmDetail)

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
