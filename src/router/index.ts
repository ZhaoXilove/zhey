import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router'
import Home from '../views/Home.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/login',
    name: 'Login',
    component: () => import(/* webpackChunkName: "login" */ '@/views/Login.vue')
  },
  {
    path: '/column-detail/:id',
    name: 'ColumnDetail',
    component: () =>
      import(/* webpackChunkName: "column-detail" */ '@/views/ColumnDetail.vue')
  },
  {
    path: '/create',
    name: 'Create',
    component: () =>
      import(/* webpackChunkName: "column-detail" */ '@/views/CreatePost.vue')
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
