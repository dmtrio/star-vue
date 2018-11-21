import Vue from 'vue'
import Router from 'vue-router'
import SearchAndResults from './views/SearchAndResults.vue'
import Details from './views/Details.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'searchAndResults',
      component: SearchAndResults
    },
    {
      path: '/details',
      name: 'details',
      component: Details,
      props: true
    }
  ]
})
