// -- router參數相關頁面 --
import RouterParam from '@/views/routerParam'

import LoopCount from '@/views/routerParam/loopCount'

import OrderDetail from '@/views/routerParam/orderDetail'
import TabAttr from '@/views/routerParam/orderDetail/TabAttr'
import TabItems from '@/views/routerParam/orderDetail/TabItems'
import CancelConfirm from '@/views/routerParam/orderDetail/CancelConfirm'

import SubTransition from '@/views/routerParam/subTransition'

// -- router參數相關頁面 --
export default {
  path: '/routerParam',
  component: RouterParam,
  children: [
    { path: 'loopCount', component: LoopCount },
    {
      path: 'orderDetail/:orderNo/index',
      component: OrderDetail,
      children: [
        {
          path: 'TabAttr',
          component: TabAttr
        },
        {
          path: 'TabItems',
          component: TabItems
        }
      ]
    },
    {
      name: 'cancelOrderConfirmation',
      path: 'orderDetail/:orderNo/confirm',
      components: {
        default: OrderDetail,
        confirm: CancelConfirm
      },
      children: [
        {
          path: 'TabAttr',
          component: TabAttr
        },
        {
          path: 'TabItems',
          component: TabItems
        }
      ]
    },
    { path: 'subTransition', name: 'subTransition', component: SubTransition }
  ]
}
