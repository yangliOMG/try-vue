import Vue from 'vue'
import Router from 'vue-router'
import Indexs from '@/mall/index'
import GoodsList from '@/mall/goodsList'
import ArticlesList from '@/mall/articlesList'
import My from '@/mall/my'
import Good from '@/good/good'

Vue.use(Router)

export default new Router({
  routes: [
    { path: '/', name: 'Indexs', component: Indexs },
    { path: '/goodsList', name: 'GoodsList', component: GoodsList },
    { path: '/articlesList', name: 'ArticlesList', component: ArticlesList },
    { path: '/my', name: 'My', component: My },
    { path: '/good', name: 'Good', component: Good },
  ]
})
