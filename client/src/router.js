import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
// import Cars from './views/Cars.vue'
// import Detail from './views/Detail.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/profile',
      name: 'home',
      component: Home
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ './views/About.vue')
    },
    {
      path: '/cars',
      name: 'cars',
      component: () => import(/* webpackChunkName: "cars" */ './views/Cars.vue'),
      children: [
        {
          path: ':id',
          component: () => import(/* webpackChunkName: "detail" */ './views/Detail.vue')
        }
      ]
    }
  ]
})
