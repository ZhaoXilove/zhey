import { RouteRecordRaw } from 'vue-router'
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
    component: () =>
      import(/* webpackChunkName: "login" */ '@/views/Login.vue'),
    meta: {
      redirectAlreadyLogin: true
    }
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
      import(/* webpackChunkName: "create" */ '@/views/CreatePost.vue'),
    meta: {
      requiredLogin: true
    }
  }
]
export default routes
