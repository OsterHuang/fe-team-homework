import VueRouter from 'vue-router'

import BasisUsage from '@/views/basisUsage'
import BasisForm from '@/views/basisForm'
import BasisTwoWayBinding from '@/views/basisTwoWayBinding'
import CustomTwoWayBinding from '@/views/customTwoWayBinding'
import TodoPage from '@/views/todoPage'
import SlotUsage from '@/views/slotUsage'
// -- router參數相關頁面 --
import RouterParam from '@/views/routerParam'
import LoopCount from '@/views/routerParam/loopCount'
import OrderDetail from '@/views/routerParam/orderDetail'
import SubTransition from '@/views/routerParam/subTransition'

const routes = [
  { path: '/basisUsage', component: BasisUsage },
  { path: '/basisForm', component: BasisForm },
  { path: '/basisTwoWayBinding', component: BasisTwoWayBinding },
  { path: '/customTwoWayBinding', component: CustomTwoWayBinding },
  { path: '/todoPage', component: TodoPage },
  { path: '/slotUsage', component: SlotUsage },
  // -- router參數相關頁面 --
  { path: '/routerParam', component: RouterParam },
  { path: '/routerParam/loopCount', component: LoopCount },
  { path: '/routerParam/orderDetail/:orderNo', component: OrderDetail },
  { path: '/routerParam/subTransition', name: 'subTransition', component: SubTransition }
]

export default new VueRouter({
  routes,
  linkActiveClass: 'nav-link-selected'
})
