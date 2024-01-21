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
    path: '/usercollect',
    name: 'usercollect',
    component: () => import('@/views/usercollect/')
  },
  {
    path: '/userhistory',
    name: 'userhistory',
    component: () => import('@/views/userhistory/')
  },
  {
    path: '/article/:articleId',
    name: 'article',
    component: () => import('@/views/article/'),
    props: true
  },
  {
    path: '/search',
    name: 'search',
    component: () => import('@/views/search/'),
  },
  {
    path: '/trends/:id',
    name: 'trendsDetail',
    component: () => import('@/views/trends/trendsDetail/index.vue'),  // 修改这里的路径
    props: true,
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
