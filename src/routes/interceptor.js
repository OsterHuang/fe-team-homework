import rootRouter from './index'
import store from '@/store'

rootRouter.beforeEach((to, from, next) => {
  if (to.meta.loginRequired) {
    if (store.state.isLogin === true) {
      next()
      return
    }
    console.log('此頁需要登入 ', to.path)
    return
  }
  next()
})
