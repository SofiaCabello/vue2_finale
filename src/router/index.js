import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

// 路由配置
const routes = [
  {
    path: '/login',
    name: 'login',
    // 懒加载
    component: () => import('@/views/login/') 
  },
  {
    path: '/',
    redirect: '/home',
    component: () => import('@/views/layout/'),
    children: [
      {
        path:'home',
        name:'home',
        component: () => import('@/views/home/')
      },
      {
        path:'/trends',
        name:'trends',
        component: () => import('@/views/trends/')
      },
      {
        path:'/weather',
        name:'weather',
        component: () => import('@/views/weather/')
      },
      {
        path:'/profile',
        name:'profile',
        component: () => import('@/views/profile/')
      }
    ]
  }
]
const router = new VueRouter({
  routes
})

export default router
