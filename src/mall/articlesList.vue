<template>
    <div class="pannel">
        <van-search placeholder="搜索文章" v-model="value" />
        <van-tabs swipeable sticky @click="onClick" v-model="active">
            <van-tab :key='li.id' v-for="li in tabList" :title="li.title">
                <ArtList :artList='artList'></ArtList>
            </van-tab>
        </van-tabs>


        <Tabbar> </Tabbar>
    </div>
</template>

<script>
import Vue from 'vue'
import { Search, Tab, Tabs, Toast } from 'vant'

import Tabbar from '../components/tabbar.vue'
import ArtList from '../components/artList.vue'


Vue.use(Tabbar).use(Search).use(Tab).use(Tabs).use(Toast)
export default {
    data () {
        return {
            value :'',
            active:0,
            tabList:[
                {id:0,title:'全部'},
            ],
            artList : [
                {id:1,pic:'../assets/onError1080.jpg',ico:'',title:'金品购2018年春节期间快递调整通知',man:'012',t0:'2018-01-31',count:'49'},
                {id:2,pic:'',ico:'',title:'金品购金鸡双蛋节版本大更新啦',man:'011',t0:'2017-12-31',count:'22'},
                {id:3,pic:'',ico:'../assets/onError360.jpg',title:'彩钻：佩戴的是美丽，收藏的是财富',man:'003',t0:'2017-10-21',count:'115'},
            ]
        }
    },
    methods: {
        onClick(index) {
            let tabid = this.tabList[index].id
            const artList = [
                {id:1,tabid:11,name:'【情人节特惠】18K金钻石字母套链',price:950},
            ]

            this.artList = []
            setTimeout(()=>{
                if(tabid === 0){
                    this.artList = artList
                }else{
                    this.artList = artList.filter(n=>n.tabid===tabid)
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
      Tabbar,ArtList
    }
}
</script>

<style lang="less">
</style>
