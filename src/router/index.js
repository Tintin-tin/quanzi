import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    redirect:'/travl/home'
  },
  {
    path: '/travl',
    component:() => import( '../views/Travl.vue'),
    children:[
         {
           path: '/travl/home',
           component: () => import( '../views/home/Home.vue')
         },
         {
           path: '/travl/my',
           component: () => import( '../views/home/My.vue')
         },
    ]
  },
  {
    path: '/change',
    component: () => import( '../views/Change.vue')
  },
  {
    path: '/misg',
    component: () => import( '../views/misg.vue')
  },
  {
    path: '/comment',
    component: () => import( '../views/Comment.vue')
  },
  {
    path: '/collection',
    component: () => import( '../views/Collection.vue')
  },
  {
    path: '/login',
    component: () => import( '../views/Login.vue')
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
