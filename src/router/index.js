import Vue from 'vue'
import Router from 'vue-router'
import hello from '@/components/Hello'
import table from '../views/table.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'table',
      component: table
    },
    {
      path: '/table',
      name: 'table',
      component: table
    },
    {
      path: '/hello',
      name: 'hello',
      component: hello
    }
  ]
})
