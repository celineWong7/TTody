import Vue from 'vue'
import Router from 'vue-router'
import Login from '@/components/Login'
import Index from '@/components/Index'
import TodayTask from '@/components/subcomponents/TodayTask'
import SearchTask from '@/components/subcomponents/SearchTask'
import DashBox from '@/components/subcomponents/DashBox'


Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: '/',
      component: Login
    },
    {
      path: '/login',
      name: 'Login',
      component: Login
    },
    {
    	path:'/index',
    	name:'Index',
    	component: Index,
      redirect: '/index/task',
      children: [{
        path: 'task',
        name: 'TodayTask',
        component: TodayTask
      },
      {
        path: 'search',
        name: 'SearchTask',
        component: SearchTask
      },
      {
        path: 'dash',
        name: 'DashBox',
        component: DashBox

      }]
    }
  ]
})
