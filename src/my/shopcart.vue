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
            <ScList :list="list" :boxIds="listids" @del="onDel"></ScList>
            <Recommend></Recommend>
        </div>


        <van-submit-bar
            :price="3050"
            button-text="提交订单"
            @submit="onSubmit"
            >
            <van-checkbox v-model="checked" @change="allPick">全选</van-checkbox>
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
        return {
            checked:false,
            listids:[],
            list:[
                {id:3,name:'【春节特惠】S925纯银中国红生肖萌犬套装',info:'S925纯银中国红生肖萌犬套装',price:'12.00',num:'2',imageURL: require('../assets/onError360.jpg'),},
                {id:1,name:'【春节特惠】S925纯银中2',info:'S925纯银中2萌犬套装',price:'22.00',num:'23',imageURL: require('../assets/onError360.jpg'),},
            ]
        }
    },
    methods: {
        onClickLeft() {
            window.history.go(-1)
        },
        onSubmit() {
            Toast('按钮')
        },
        onDel(val) {
            console.log(this.$refs)
            const idx = this.list.findIndex(item =>item.id===val)
            this.list.splice(idx,1)
        },
        allPick(flag){
            if(flag){
                console.log(this)
                this.listids = this.list.map(i=>i.id)
            }else{
                this.listids = []
            }
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
