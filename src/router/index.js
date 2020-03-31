import Vue from 'vue'
import VueRouter from 'vue-router'
import RegisterAddress from '../views/RegisterAddress.vue'
import TodayList from '../views/TodayList.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'RegisterAddress',
    component: RegisterAddress
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
