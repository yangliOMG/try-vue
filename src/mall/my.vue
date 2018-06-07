<template>
    <div class="userInfoSet">
        <div class="pt1" :style="backgroundDiv">
            <div class="ofhd pb-10">
                <div class="l">
                    <div class="headImgDiv l">
                        <img height="43" width="43" :src="info.headimgurl" />
                    </div>
                    <div class="l " style="margin: -5px 0 0 10px;">
                        <div class="f-16">{{info.nickname}}</div>
                        <div class="f-12 lh-10">店铺code：{{shop.code}}</div>
                        <div class="f-12">{{'★'.padEnd(shop.level+1,'★')}}</div>
                    </div>
                </div>
                <div class="pos-a" style="right:13px;bottom:13px"><i class="fa fa-cog" style="font-size:25px"></i></div>
                <div class="r">
                    <i class="fa fa-envelope-o" style="font-size:25px"></i>
                    <span v-if="unreadMesSum>0" class="numCount" style="top:10px;right:5px;transform: scale(0.8);">{{unreadMesSum}}</span>
                </div>
            </div>
            <table class="text-c" style="width:100%">
                <tbody>
                    <tr>
                        <td width="23%">
                            <i class="fa fa-qrcode fa-2x "></i>
                        </td>
                        <td width="54%">
                            <div>我的总资产(元)</div>
                            <div class="f-50 lh-50 pb-10">{{totalMoney.toFixed(2)}}</div>
                            <div>
                                <a href="" style="margin-left:-90px">余额{{(amount||0).toFixed(2)}}元/</a>
                                <a class="pos-a ml-5" href="">待入账{{(awaitAmountMoney||0).toFixed(2)}}元</a>
                            </div>
                        </td>
                        <td width="23%">
                            <van-button size="small">提现</van-button>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
        <TableCell :elements="[
                {name:'我的店铺',href:'',icon:'shop'},
                {name:'邀请开店',href:'',icon:'manplus'},
        ]"></TableCell>
        <TableCell :elements="[
                {name:'分销团队',href:'',icon:'mangroup'},
                {name:'分销订单',href:'',icon:'order'},
                {name:'分销业绩',href:'',icon:'chart'},
        ]"></TableCell>
        <TableCell :elements="[
                {name:'购物车',href:'',icon:'shopcart'},
                {name:'我的社区',href:'',icon:'community'},
        ]"></TableCell>

        <Tabbar> </Tabbar>
    </div>
</template>

<script>
import Vue from 'vue'
import { Button } from 'vant'

import TableCell from '../components/tableCell.vue'
import Tabbar from '../components/tabbar.vue'


Vue.use(Button)
export default {
    data () {
        return {
            backgroundDiv: {
                background: 'url(' + require('../assets/carousel0.png') + ') no-repeat 0/100% 100%',
            },
            info:{
                headimgurl:'http://thirdwx.qlogo.cn/mmopen/UxyatowS8jTGP5wYSAOqSibd8U1piahP0VmO1sTSqhhNOLAYfUJeY3slPWbIkTD3kjaRDUg5qZOLhtn08MDH1pgicVfKFp2cVm0/132',
                nickname:'杨力'
            },
            shop:{
                code:'000000',
                level:1,
            },
            unreadMesSum:12,
            totalMoney:10.12,
            amount:10,
            awaitAmountMoney:0.12,

        }
    },
    components: {
      Tabbar,TableCell
    }
}
</script>

<style lang="less">
.numCount{position: absolute;background: red;color: white;border-radius: 18px;height: 18px;line-height: 16px;width: 18px;text-align: center;border: 1px solid white;font-size: 12px;}
.userInfoSet{
    margin-bottom: 50px;
    .pt1 {
        position: relative;padding:16px;color:white;
        .headImgDiv {
            width: 43px;
            height: 43px;
            border-radius: 60px;
            margin: 0 auto;
            overflow: hidden;
            box-shadow: 2px 2px 4px #888888;
        }
    }
}
</style>
