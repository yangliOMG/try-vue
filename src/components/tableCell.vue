<template>
    <van-row class="row">
        <van-col v-for="ele in elements" :key="ele.name" :span="24/elements.length" class="cell">
            <a class="cliDiv" :href="ele.href">
                <p><i :class="'icon icon-'+ele.icon+'-def'"></i></p>
                <p>{{ele.name}}</p>
            </a>
        </van-col>
    </van-row>
</template>

<script>
import Vue from 'vue'
import { Row, Col } from 'vant'

Vue.use(Row).use(Col)
export default {
    props: {
      elements: {
        type: Array
      }
    },

}
</script>

<style lang="less">
.icon.icon-shop-def{background-image: url(../assets/myimg/icon-shop.png);}
.icon.icon-manplus-def{background-image: url(../assets/myimg/icon-manplus.png);}
.icon.icon-mangroup-def{background-image: url(../assets/myimg/icon-mangroup.png);}
.icon.icon-order-def{background-image: url(../assets/myimg/icon-order.png);}
.icon.icon-chart-def{background-image: url(../assets/myimg/icon-chart.png);}
.icon.icon-myorder-def{background-image: url(../assets/myimg/icon-myorder.png);}
.icon.icon-community-def{background-image: url(../assets/myimg/icon-community.png);}
.icon.icon-shopcart-def{background-image: url(../assets/myimg/icon-shopcart.png);}
.icon.icon-history-def{background-image: url(../assets/myimg/icon-history.png);}
.icon.icon-care-def{background-image: url(../assets/myimg/icon-care.png);}
.icon.icon-cusService-def{background-image: url(../assets/myimg/icon-cusService.png);}
.icon.icon-coupon-def{background-image: url(../assets/myimg/icon-coupon.png);}
.icon.icon-point-def{background-image: url(../assets/myimg/icon-point.png);}
.icon.icon-coin-def{background-image: url(../assets/myimg/icon-coin.png);}
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
                margin:0 10px -4px 0;
                background-size: contain;
                background-position: 50% 20%;
                background-repeat: no-repeat;
            }
        }
    }
    .cell:last-child{background-image:none}
}
</style>
