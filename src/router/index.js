import Vue from 'vue'
import VueRouter from 'vue-router'
import Today from '../views/Today.vue'
import TodayList from '../views/TodayList.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Today',
    component: Today
  },
  {
    path: '/list',
    name: 'TodayList',
    component: TodayList
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
