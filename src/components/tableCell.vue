<template>
    <van-row class="row">
        <van-col v-for="ele in elements" :key="ele.name" :span="24/elements.length" class="cell">
            <a :class="rowMode+' cliDiv ' + arrangeMode" :href="ele.href" :style="'padding:'+padding+'px'">
                <span><i :class="'icon icon-'+ele.icon+'-def'"></i></span>
                <div class="ri">
                    <span class="title">{{ele.name}}</span>
                    <span class="c-qgrey">{{ele.info}}</span>
                </div>
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
      },
      arrangeMode: {
        type: String,
        default: 'horizontal'
      },
      rowMode: {
        type: String,
        default: 'once'
      },
      padding: {
        type: String,
        default: '15'
      },
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
