<template>
    <div class="pannel">
        <van-swipe :autoplay="3000">
            <van-swipe-item v-for="(image, index) in images" :key="index">
                <img width="100%" src="../assets/onError.jpg" />
            </van-swipe-item>
        </van-swipe>
        <div class="pd-5 bordpjtd">
            <div class="f-16">【情人节特惠】18K金钻石字母套链</div>
            <span class="r">
                <span class="fa_btn">分享</span>
            </span>
            <div class="meihuodong">
                <div class="c-black f-16 b">
                    <span class="zxjBox f-14">执行价￥950.00</span>
                    <font class="c-red f-12">/赚：￥108.63</font>
                </div>
            </div>
            <div class="c-grey f-14">
                <span>市场价</span>
                <span class="s">￥1585.00</span>
                <span class="c-grey f-12">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;收藏(0人气)</span>
                <span class="c-grey f-12">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;销量(1笔)</span>
            </div>
        </div>
        <van-cell-group class="mt-10">
            <van-cell title="款型选择（2）" is-link @click="showPop" />
        </van-cell-group>
        <div class="goodTitle">参数描述</div>
        <div class="bordpjtd pl-5 ofhd">
			<div class="l f-14" style="min-width:50%" :key="index" v-for="(image, index) in 
                ['品牌：金品购','名称：18K金钻石字母套链','名称：18K金钻石字母套链','克重：1．1g'
                ,'颜色：白色＼玫瑰金色','工艺：镶嵌','材质：１８Ｋ金＼钻石','图案：字母','主石：0.034ct']">{{image}}</div>
		</div>
        <div class="mt-5">
			<img width="100%" src="../assets/onError1080.jpg"/>
		</div>
        <div class="mt-5">
			<img width="100%" src="../assets/onError1080.jpg"/>
		</div>




        <van-sku
            v-model="showBase"
            :sku="sku"
            :goods="goods"
            :goods-id="goods.id"
            :hide-stock="sku.hide_stock"
            :quota="goods.quota"
            :reset-stepper-on-hide="false"
            :reset-selected-sku-on-hide="false"
            :close-on-click-overlay="true"
            :disable-stepper-input="true"
            @buy-clicked="onBuyClicked"
            @add-cart="onAddCartClicked"
        />
    </div>
</template>

<script>
import Vue from 'vue'
import { Swipe,Sku,Toast,Cell, CellGroup } from 'vant'

Vue.use(Swipe).use(Sku).use(Toast).use(Cell).use(CellGroup)
export default {
    data () {
        return {
            images: [
                '../assets/onError.jpg',
                './assets/onError.jpg'
            ],
            showBase:false,
            sku: {
                tree: [
                    {
                        k: '款型', 
                        v: [{id: '30349',name: '18K金钻石字母套链（白金）',imgUrl: require('../assets/onError360.jpg')},
                            {id: '1215',name: '18K金钻石字母套链（玫瑰金）',imgUrl: require('../assets/onError360.jpg')}],
                        k_s: 's1' 
                    }
                ],
                list: [
                    {
                        id: 1, // skuId，下单时后端需要
                        price: 100, // 价格（单位分）
                        s1: '1215', // 规格类目 k_s 为 s1 的对应规格值 id
                        stock_num: 110 // 当前 sku 组合对应的库存
                    },
                    {
                        id: 2, // skuId，下单时后端需要
                        price: 1200, // 价格（单位分）
                        s1: '30349', // 规格类目 k_s 为 s1 的对应规格值 id
                        stock_num: 210 // 当前 sku 组合对应的库存
                    }
                ],
                price: '1.00-12.00', // 默认价格（单位元）
                stock_num: 310, // 商品总库存
                collection_id: 2261, // 无规格商品 skuId 取 collection_id，否则取所选 sku 组合对应的 id
                none_sku: false, // 是否无规格商品
                hide_stock: false // 是否隐藏剩余库存
            },
            goods: {
                title: '【情人节特惠】18K金钻石字母套链',
                id:'1',
                picture: require('../assets/onError360.jpg'),
                quota:3
            }
        }
    },
    methods: {
        onClickLeft() {
            Toast('返回')
        },
        onClickRight() {
            Toast('按钮')
        },
        onClick(index) {

        },
        onBuyClicked(data){
            console.log(data)
        },
        onAddCartClicked(data){
            console.log(data)
        },
        showPop(){
            this.showBase = !this.showBase
        }
    },
    watch:{
        active(val, oldVal){
            this.onClick(val)
        }
    },
}
</script>

<style lang="less">
.bordpjtd {
    border-top: 1px solid #eee;
    background: #fff;
}
.fa_btn {
    border: 1px solid #000;
    border-radius: 5px;
    padding: 0px 10px;
    margin: 0 2px 2px 0;
}
.van-stepper__input[disabled] {
    color: black;background: #fff;
}
.goodTitle {
    font-size: 16px;
    padding-left: 10px;
    margin-top: 15px;
    background: #fff;
    border-left: 3px solid red;
    line-height: 34px;
}
</style>
