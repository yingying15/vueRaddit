import { createRouter, createWebHistory } from 'vue-router'
import login from '@/views/login/index.vue'
import layout from '@/views/layout/index.vue'
import Home from '@/views/Home/index.vue'
import Category from '@/views/Category/index.vue'
import SubCategory from '@/views/SubCategory/index.vue'
import Detail from '@/views/Detail/index.vue'
import HomeProduct from '@/views/Home/components/HomeProduct.vue'
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/login',
      name: 'login',
      component: login
    },
    {
      path: '/',
      name: 'layout',
      component:layout,
      children:[
        //path是空白的就相当于重定向
        {
          path:'',
          component:Home
        },
        {
          path: 'category/:id',
          component: Category
        },
        {
          path:'product',
          component:HomeProduct
        },
       
        {
          path:'SubCategory/:id',
          component:SubCategory
        },
        {
          path:'Detail/:id',
          component:Detail
        },
        {
          path:'/cart',
          component:()=>import('@/views/cart/index.vue')
        },
        {
          path:'/order',
          component:()=>import('@/views/order/index.vue')
        },
        {
          path:'/payOrder',
          component:()=>import('@/views/payOrder/index.vue')
        },
        //会员中心
        {
          path:'/user',
          component:()=>import('@/views/user/index.vue'),
          children:[
            {
              path:'',
              component:()=>import('@/views/user/userMessage.vue')
            },
            {
              path:'/userOrder',
              component:()=>import('@/views/user/userOrder.vue')
            }
          ]
        }
      ]
      
    },
    {
      path:'/paycallback',
      component:()=>import('@/views/payOrder/paySuc.vue')
    }
  ],
   // 路由滚动行为定制 切换页面的时候让页面滚动到顶部
   scrollBehavior () {
    return {
      top: 0
    }
  }
})

export default router
