<template>
    <div>
        <van-checkbox-group v-model="boxIds">
            <van-card v-for="li in list" :key="li.id"
                :title="li.name"
                :desc="li.info"  
                :price="li.price"
                :thumb="li.imageURL"
                >
                <div slot="thumb">
                    <van-checkbox :name="li.id"></van-checkbox>
                    <img :src="li.imageURL" alt="" />
                </div>
                <div slot="footer">
                    <van-stepper disable-input v-model="li.num" />
                    <van-button size="mini" @click="onDel(li.id)"><van-icon name="delete" /></van-button>
                </div>
            </van-card>
        </van-checkbox-group>

        <div class="listEmpty" v-if="list.length===0">
            <i class="c-qgrey fa fa-shopping-cart fa-5x"></i>
            <div class="f-16 lh-34">购物车竟然是空的</div>
            <div class="f-12 c-qgrey">再忙，也要记得买点什么犒赏自己</div>
        </div>
    </div>
</template>

<script>
import Vue from 'vue'
import { Stepper,Card,Button,Icon,Checkbox,CheckboxGroup,Dialog } from 'vant'

Vue.use(Button).use(Card).use(Stepper).use(Icon).use(Checkbox).use(CheckboxGroup).use(Dialog)

export default {
    props: {
        list: {
            type: Array
        },
        // boxIds: {
        //     type: Array
        // },
    },
    data() {
        return {
            boxIds: []
        }
    },
    methods: {
        onDel(id) {
            Dialog.confirm({message: '弹窗内容'
            }).then(() => {
                this.$listeners.del(id)
            }).catch(() => {

            })
        },
        checkClick(){
            this.listids = this.list.map(i=>i.id)
        }
    }
}
</script>

<style lang="less">
.van-stepper{display: inline-block;}
.listEmpty {text-align: center;padding: 50px 10px;background: #fff;}
</style>
