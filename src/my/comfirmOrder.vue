<template>
    <div>
        <van-nav-bar
            title="确认订单"
            left-text="返回"
            left-arrow
            @click-left="onClickLeft"
        >
        </van-nav-bar>

        <div class="pannel">

            <AddrBar></AddrBar>

            <van-card v-for="li in list" :key="li.id"
                :title="li.name"
                :desc="li.info"  
                :price="li.price"
                :thumb="li.imageURL"
                :num="li.num"
                >
                <div slot="title" class="title">
                    <div class="title-left">{{li.name}}</div>
                    <div class="title-right">
                        <div class="b c-red">￥{{li.price}}</div>
                        <div class="c-grey s" v-if="li.price2">￥{{li.price2}}</div>
                    </div>
                </div>
            </van-card>

            <Coupon @data="v=>zhekou=v"></Coupon>

        </div>

        <van-popup v-model="show" position="right">内容</van-popup>
        
        <van-submit-bar
            :price="total"
            button-text="提交订单"
            @submit="onSubmit"
            >
        </van-submit-bar>
    </div>
</template>

<script>
import Vue from 'vue'
import { NavBar,SubmitBar,Card,Button,Toast,Icon,Popup } from 'vant'

import AddrBar from '../components/addrBar'
import Coupon from '../components/coupon'

import {getQueryString} from '../util.js'

Vue.use(NavBar).use(Toast).use(Button).use(Card).use(SubmitBar).use(Icon).use(Popup)
export default {
    data () {
        return {
            zhekou:0,
            show: false,
        }
    },
    computed:{
        total(){
            let t = 0
            this.list.forEach(li=>{ 
                    t+=li.price*li.num 
            })
            return t*100-this.zhekou
        },
        list(){
            const shuju = [
                {id:3,name:'【春节特惠】S925纯银中国红生肖萌犬套装',info:'S925纯银中国红生肖萌犬套装',price:'12.00',price2:'22.00',imageURL: require('../assets/onError360.jpg'),},
                {id:2,name:'【春节特惠】S925纯银中国红生肖萌犬套装',info:'S925纯银中国2',price:'12.00',price2:'22.00',imageURL: require('../assets/onError360.jpg'),},
                {id:1,name:'【春节特惠】S925纯银中2',info:'S925纯银中2萌犬套装',price:'22.00',price2:'222.00',imageURL: require('../assets/onError360.jpg'),},
            ]
            const mode = getQueryString('mode')
            const id = getQueryString('id')
            let li = []
            if(mode==='shopcart'){
                let ids = id.split(',')
                ids.forEach(i=>{
                    let num = this.$store.state.shopcart.goodList.find(li=>li.id===i*1).num
                    li.push({...shuju.find(s=>s.id===i*1),num})
                })
            }else if(mode==='buynow'){
                const num = getQueryString('num')
                li.push({...shuju.find(s=>s.id===id*1),num})
            }
            return li
        }
    },
    methods: {
        onClickLeft() {
            window.history.go(-1)
        },
        onSubmit() {
            Toast('￥'+this.total/100)
        },
    },
    watch:{
    },
    components: {
        AddrBar,Coupon
    }
}
</script>

<style lang="less">
.title{
    display: flex;
    .title-left {
        max-height: 40px;
        overflow: hidden;
        text-overflow: ellipsis;
        display: -webkit-box;
        -webkit-line-clamp: 2;
        -webkit-box-orient: vertical;
        line-height: 20px;
        word-break: break-all;
    }
    .title-right{
        -webkit-box-flex: 1;
        -ms-flex: 1;
        flex: 1;
        min-width: 80px;
        line-height: 20px;
        text-align: right;
        font-size: 14px;
    }
}
</style>
