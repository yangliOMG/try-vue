<template>
    <div class="pannel">
        <van-search placeholder="请输入商品名称" v-model="value" />
        <van-tabs swipeable sticky @click="onClick" v-model="active">
            <van-tab :key='li.id' v-for="li in tabList" :title="li.title">
                <LiList :goodList='goodList'></LiList>
            </van-tab>
        </van-tabs>


        <Tabbar> </Tabbar>
    </div>
</template>

<script>
import Vue from 'vue'
import { Search, Tab, Tabs, Toast } from 'vant'

import Tabbar from '../components/tabbar.vue'
import LiList from '../components/liList.vue'


Vue.use(Tabbar).use(Search).use(Tab).use(Tabs).use(Toast)
export default {
    data () {
        return {
            value :'',
            active:0,
            tabList:[
                {id:0,title:'全部'},
                {id:11,title:'情人节专场'},
                {id:22,title:'春节专场'},
                {id:42,title:'新品上新'},
                {id:5,title:'限量发售'},
                {id:6,title:'K金馆'},
            ],
            goodList : [
                {id:1,tabid:11,name:'【情人节特惠】18K金钻石字母套链',price:950},
                {id:2,tabid:11,name:'【情人节特惠】18K金钻石几何情侣对戒',price:2950},
                {id:3,tabid:22,name:'【春节特惠】S925纯银中国红生肖萌犬套装',price:1950},
                {id:4,tabid:42,name:'18K金旋纹钻石耳圈',price:3950},
                {id:5,tabid:5,name:'【仅一件】999足金3D硬金圣诞吊坠',price:2250},
                {id:6,tabid:6,name:'18K金扇形钻石套链',price:1220},
            ]
        }
    },
    methods: {
        onClick(index) {
            let tabid = this.tabList[index].id
            const goodList = [
                {id:1,tabid:11,name:'【情人节特惠】18K金钻石字母套链',price:950},
                {id:2,tabid:11,name:'【情人节特惠】18K金钻石几何情侣对戒',price:2950},
                {id:3,tabid:22,name:'【春节特惠】S925纯银中国红生肖萌犬套装',price:1950},
                {id:4,tabid:42,name:'18K金旋纹钻石耳圈',price:3950},
                {id:5,tabid:5,name:'【仅一件】999足金3D硬金圣诞吊坠',price:2250},
                {id:6,tabid:6,name:'18K金扇形钻石套链',price:1220},
            ]

            this.goodList = []
            setTimeout(()=>{
                if(tabid === 0){
                    this.goodList = goodList
                }else{
                    this.goodList = goodList.filter(n=>n.tabid===tabid)
                }
            },1000)
        },
    },
    watch:{
        active(val, oldVal){
            this.onClick(val)
        }
    },
    components: {
      Tabbar,
      LiList
    }
}
</script>

<style lang="less">

</style>
