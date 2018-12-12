import Vue from 'vue'
import Router from 'vue-router'
import user from '../page/html/test'
import home from '../page/html/home'
import first from '../page/html/first'


Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: home
    },
    {
      path: '/user/:id',
      name: 'user',
      component: user,
      children:[{
        path: 'first',
        component: first
      }]
    }
  ],
  mode:"history"
})
