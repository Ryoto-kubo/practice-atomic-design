import Vue from 'vue'
import VueRouter from 'vue-router'
import RegisterAddress from '../views/RegisterAddress.vue'
import TimeSchedule from '../views/TimeSchedule.vue'
import InfoBoard from '../views/InfoBoard.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'RegisterAddress',
    component: RegisterAddress
  },
  {
    path: '/timeschedule',
    name: 'TimeSchedule',
    component: TimeSchedule
  },
  {
    path: '/infos',
    name: 'InfoBoard',
    component: InfoBoard
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
