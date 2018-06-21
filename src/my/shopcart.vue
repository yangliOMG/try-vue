<template>
    <div>
        <van-nav-bar
            title="购物车"
            left-text="返回"
            left-arrow
            @click-left="onClickLeft"
        >
        </van-nav-bar>

        <div class="pannel">
            <ScList :list="list" :checked="checked" @del="onDel" @data="getChecked"></ScList>
            <Recommend></Recommend>
        </div>


        <van-submit-bar
            :price="total"
            button-text="结算"
            @submit="onSubmit"
            >
            <van-checkbox v-model="checked">全选</van-checkbox>
        </van-submit-bar>
    </div>
</template>

<script>
import Vue from 'vue'
import { NavBar,Checkbox,SubmitBar,Card,Button,Toast,Icon,Stepper } from 'vant'

import ScList from '../components/shopcartList'
import Recommend from '../components/recommend.vue'

Vue.use(NavBar).use(Toast).use(Button).use(Card).use(Checkbox).use(SubmitBar).use(Icon).use(Stepper)
export default {
    data () {
        let goodlist = this.$store.state.shopcart.goodList
        const shuju = [
            {id:3,name:'【春节特惠】S925纯银中国红生肖萌犬套装',info:'S925纯银中国红生肖萌犬套装',price:'12.00',price2:'22.00',num:'2',imageURL: require('../assets/onError360.jpg'),},
            {id:2,name:'【春节特惠】S925纯银中国红生肖萌犬套装',info:'S925纯银中国2',price:'12.00',price2:'22.00',num:'2',imageURL: require('../assets/onError360.jpg'),},
            {id:1,name:'【春节特惠】S925纯银中2',info:'S925纯银中2萌犬套装',price:'22.00',price2:'222.00',num:'23',imageURL: require('../assets/onError360.jpg'),},
        ]
        let li = []
        goodlist.forEach(v=>{
            li.push({...shuju.find(i=>i.id===v.id), num:v.num})
        })
        return {
            checked:false,
            checkList:[],
            list:li
        }
    },
    computed:{
        total: {
            get(){
                let t = 0
                this.list.forEach(li=>{ 
                    let a = this.checkList.find(id =>li.id===id)
                    if(a){
                        t+=li.price*li.num 
                    }
                })
                return t*100
            },
            set(){
            }
        },
    },
    methods: {
        onClickLeft() {
            window.history.go(-1)
        },
        onSubmit() {
            window.location.href = '#/comfirmOrder?mode=shopcart&id='+this.checkList.join(',')
        },
        onDel(val) {
            const idx = this.list.findIndex(item =>item.id===val)
            this.list.splice(idx,1)
            const id = this.checkList.findIndex(item =>item===val)
            this.checkList.splice(id,1)

            this.$store.dispatch('removeList',val)
        },
        getChecked(ids){
            this.checkList = ids
        }
    },
    watch:{
    },
    components: {
        ScList,Recommend
    }
}
</script>

<style lang="less">
.van-checkbox{margin-left: 15px;}

</style>
