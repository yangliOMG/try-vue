<template>
    <div>
        <van-nav-bar
            title="标题"
            right-text="按钮"
            left-arrow
            @click-left="onClickLeft"
            @click-right="onClickRight"
        >
            <van-icon name="shopping-cart" slot="right" color="black" style="font-size:25px" />
        </van-nav-bar>

        <van-tabs swipeable sticky @click="onClick" v-model="active">
            <van-tab :key='li.title' v-for="li in tabList" :title="li.title">
                <Info v-if="li.component === 'Info'"/>
                <Detail v-if="li.component === 'Detail'"/>
                <Eval v-if="li.component === 'Eval'"/>
            </van-tab>
        </van-tabs>


        <van-goods-action>
            <van-goods-action-mini-btn icon="points-mall" text="店铺" @click="onClick" />
            <van-goods-action-mini-btn icon="like-o" text="收藏" @click="onClick" />
            <van-goods-action-big-btn text="加入购物车" @click="onClick" />
            <van-goods-action-big-btn text="立即购买" @click="onClick" primary />
        </van-goods-action>
    </div>
</template>

<script>
import Vue from 'vue'
import { NavBar,Toast,Icon,GoodsAction,GoodsActionBigBtn,GoodsActionMiniBtn } from 'vant'

import Detail from './gooddetail'
import Eval from './goodeval'
import Info from './goodinfo'


Vue.use(NavBar).use(Toast).use(Icon).use(GoodsAction).use(GoodsActionBigBtn).use(GoodsActionMiniBtn)
export default {
    data () {
        return {
            active:0,
            tabList:[
                {title:'商品',component:'Info'},
                {title:'详情',component:'Detail'},
                {title:'评价',component:'Eval'},
            ]
        }
    },
    methods: {
        onClickLeft() {
            window.history.go(-1)
        },
        onClickRight() {
            window.location.href = '#/shopcart'
        },
        onClick() {
        },
    },
    watch:{
        active(val, oldVal){
            this.onClick(val)
        }
    },
    components: {
        Detail,Eval,Info
    }
}
</script>

<style lang="less">
.row{
    text-align: center;background: #fff;
    .cell {
        background: linear-gradient(to bottom,#eee,#eee) no-repeat right/1px 30px;
        a{
            display: block;padding: 15px;font-size: 14px;
            .icon {
                width: 21px;
                height: 21px;
                display: inline-block;
                background-size: contain;
                background-position: 50% 20%;
                background-repeat: no-repeat;
            }
            .title{
                min-width: 56px;
                display: inline-block;
            }
        }
        .horizontal{
            .icon {
                margin:0 10px -4px 0;
            }
        }
        .vertical{
            span{
                display: block;
            }
        }
        .twice{
            .ri{
                display: inline-block;text-align: left;
                .title{
                    display: block;
                }
            }
            .icon{
                margin:0 10px 3px 0;
            }
        }
        .once{
            .ri{
                display: inline-block;
            }
        }
    }
    .cell:last-child{background-image:none}
}
</style>
