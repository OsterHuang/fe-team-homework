import Vue from 'vue'
import VueRouter from 'vue-router'

import BasisUsage from '@/views/basisUsage'
import BasisForm from '@/views/basisForm'
import BasisTwoWayBinding from '@/views/basisTwoWayBinding'
import CustomTwoWayBinding from '@/views/customTwoWayBinding'
import TodoPage from '@/views/todoPage'
import SlotUsage from '@/views/slotUsage'
import BitCoinPrice from '@/views/bitCoinPrice'

import routesOfRouteParam from './routeParam'

const routes = [
  { path: '/basisUsage', component: BasisUsage, meta: { loginRequired: true } },
  { path: '/basisForm', component: BasisForm },
  { path: '/basisTwoWayBinding', component: BasisTwoWayBinding },
  { path: '/customTwoWayBinding', component: CustomTwoWayBinding },
  { path: '/todoPage', component: TodoPage },
  { path: '/slotUsage', component: SlotUsage, meta: { loginRequired: true } },
  routesOfRouteParam,
  { path: '/bitCoinPrice', component: BitCoinPrice }
]

Vue.use(VueRouter)

const router = new VueRouter({
  routes,
  linkActiveClass: 'nav-link-selected'
})

export default router
