import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export const router = new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'users',
      component: () => import('@/ui/views/Users')
    },
    {
      path: '/new',
      name: 'new-user',
      component: () => import('@/ui/views/NewUser')
    }
  ]
})
