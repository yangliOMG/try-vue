<template>
    <div>
        <van-tabbar v-model="active">
            <van-tabbar-item  v-for="item in items" :key="item.name" :icon="item.icon" :url="'/#'+item.to">
                {{item.name}}
            </van-tabbar-item>
        </van-tabbar>
    </div>
</template>

<script>
import Vue from 'vue'
import { Tabbar, TabbarItem } from 'vant'

Vue.use(Tabbar).use(TabbarItem)
export default {
    data () {
        const items = [
                { icon: 'wap-home', to: '/', name: '首页' }, 
                { icon: 'tosend', to: '/goodsList', name: '分类' }, 
                { icon: 'edit', to: '/articlesList', name: '攻略' }, 
                { icon: 'contact', to: '/my', name: '我的' } 
            ]
        const  active = items.findIndex(x => x.to === this.$route.path)
        return {
            items,
            active 
        }
    }
}
</script>

<style scoped>
</style>
