import Vue from 'vue'
import Router from 'vue-router'
// import Indexs from '@/mall/index'
// import GoodsList from '@/mall/goodsList'
// import ArticlesList from '@/mall/articlesList'
// import My from '@/mall/my'
// import Good from '@/good/good'
// import Shopcart from '@/my/shopcart'
// import ComfirmOrder from '@/my/comfirmOrder'

Vue.use(Router)

export default new Router({
  routes: [
    { path: '/', name: 'Indexs', component: () => import('@/mall/index') },
    { path: '/goodsList', name: 'GoodsList', component: () => import('@/mall/goodsList') },
    { path: '/articlesList', name: 'ArticlesList', component: () => import('@/mall/articlesList') },
    { path: '/my', name: 'My', component: () => import('@/mall/my') },
    { path: '/good', name: 'Good', component: () => import('@/good/good') },
    { path: '/shopcart', name: 'Shopcart', component: () => import('@/my/shopcart') },
    { path: '/comfirmOrder', name: 'ComfirmOrder', component: () => import('@/my/comfirmOrder') },
  ]
})
