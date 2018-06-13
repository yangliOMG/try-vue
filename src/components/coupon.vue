<template>
    <div class="mt-5">
        <van-coupon-cell
            :coupons="coupons"
            :chosen-coupon="chosenCoupon"
            @click="showList = true"
        />
        <van-popup v-model="showList" position="bottom">
            <div class="addrbox">
                <div>
                <van-coupon-list
                    :showExchangeBar="false"
                    :coupons="coupons"
                    :chosen-coupon="chosenCoupon"
                    @change="onChange"
                    @exchange="onExchange"
                />
                </div>
            </div>
        </van-popup>

    </div>
</template>

<script>
import Vue from 'vue'
import { Popup,CouponCell, CouponList } from 'vant'

Vue.use(Popup).use(CouponCell).use(CouponList)
let coupon = {
    id:1,
    available: 1,
    discount: 0,
    denominations: 150,
    origin_condition: 0,
    reason: '',
    value: 150,
    name: '优惠券',
    start_at: 1489104000,
    end_at: 1514592000
}
export default {
    data() {
        return {
            showList:false,
            chosenCoupon: -1,
            coupons: [coupon,{...coupon,id:2,denominations:1200,value:1200}],
        }
    },
    methods: {
        onChange(index) {
            this.showList = false
            this.chosenCoupon = index

            const obj = this.coupons[index]
            this.$emit('data', obj?obj.value:0)
        },
        onExchange(code) {
            let name = '优惠券'+Math.floor(Math.random()*10086)
            this.coupons.push({...coupon,name})
        },
    }
}
</script>

<style lang="less" scoped>
</style>
