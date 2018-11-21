import Vue from 'vue'
import Router from 'vue-router'
import Main from './views/Main.vue'
import Details from './views/Details.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'main',
      component: Main
    },
    {
      path: '/details',
      name: 'details',
      component: Details,
      props: true
    }
  ]
})
