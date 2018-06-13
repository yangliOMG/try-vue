<template>
    <div class="pannel">
        <van-search 
            show-action
            placeholder="请输入商品名称" 
            v-model="value"
            @search="onSearch"
        >
            <div slot="action" @click="onSearch">搜索</div>
        </van-search>
        <van-swipe :autoplay="3000">
            <van-swipe-item v-for="(image, index) in images" :key="index">
                <img v-lazy="image" />
            </van-swipe-item>
        </van-swipe>
        <van-row class="user-links">
            <van-col span="5">
                <van-icon name="pending-payment" />
                戒指
            </van-col>
            <van-col span="5">
                <van-icon name="pending-orders" />
                手环
            </van-col>
            <van-col span="4">
                <van-icon name="pending-orders" />
                项链
            </van-col>
            <van-col span="5">
                <van-icon name="pending-deliver" />
                耳环
            </van-col>
            <van-col span="5">
                <van-icon name="logistics" />
                配饰
            </van-col>
        </van-row>

        <Biaoti :type='2' name='新品上市'></Biaoti>
        <Good type='hang' :num='3' gap></Good>
        <div class="mt-10"></div>

        <Biaoti :type='2' name='人气单品'></Biaoti>
        <Good type='small' :num='4' gap :message='["price","reward"]'></Good>
        <Good type='zhou' :num='4' gap border :message='["price","reward","ljqg"]'></Good>


        <Tabbar> </Tabbar>
    </div>
</template>

<script>
import Vue from 'vue'
import { Search, Swipe, SwipeItem, Lazyload, Row, Col, Icon, Cell, CellGroup } from 'vant'

import Tabbar from '../components/tabbar.vue'
import Biaoti from '../pageCube/biaoti.vue'
import Good from '../pageCube/good.vue'



Vue.use(Search).use(Swipe).use(SwipeItem).use(Lazyload).use(Row).use(Col).use(Icon).use(Cell).use(CellGroup)
export default {
    data () {
        return {
            value :'',
            images: [
                'https://img.yzcdn.cn/2.jpg',
                'https://img.yzcdn.cn/2.jpg'
            ]
        }
    },
    methods: {
      onSearch () {
        alert(this.value)
      },
    },
    components: {
        Tabbar,Biaoti,Good
    }
}
</script>

<style lang="less">
img{width: 100%}
.user {
    &-poster {
        width: 7.5rem;
        height: 4rem;
        display: block;
    }
    &-group {
        margin-bottom: .3rem;
    }
    &-links {
        margin:5px 0;
        padding: 15px 0;
        font-size: 12px;
        text-align: center;
        background-color: #fff;
        .van-icon {
            display: block;
            font-size: 24px;
        }
    }
}
</style>
