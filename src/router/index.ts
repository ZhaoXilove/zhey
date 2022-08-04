import { createRouter, createWebHashHistory } from 'vue-router'
import routes from './router'
import store from '@/store'
const router = createRouter({
  history: createWebHashHistory(),
  routes
})

router.beforeEach((to, from, next) => {
  console.log(to.meta)
  if (to.meta.requiredLogin && !store.state.user.isLogin) {
    next({ name: 'Login' })
  } else if (to.meta.redirectAlreadyLogin && store.state.user.isLogin) {
    next('/')
  } else {
    next()
  }
})

export default router
