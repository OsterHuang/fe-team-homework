import rootRouter from './index'

rootRouter.beforeEach((to, from, next) => {
  if (to.meta.loginRequired) {
    if (localStorage.getItem('isLogin') === 'true') {
      next()
      return
    }
    console.log('此頁需要登入 ', to.path)
    return
  }
  next()
})
