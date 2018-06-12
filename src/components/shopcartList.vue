<template>
    <div>
        <van-checkbox-group v-model="boxIds">
            <van-card v-for="li in list" :key="li.id"
                :title="li.name"
                :desc="li.info"  
                :price="li.price"
                >
                <div slot="thumb">
                    <van-checkbox :name="li.id" class="thumb-left"></van-checkbox>
                    <img :src="li.imageURL" alt="" class="thumb-right" />
                </div>
                <div slot="title" class="title">
                    <a :href="'#/good?id='+li.id"><div class="title-left">{{li.name}}</div></a>
                    <div class="title-right">
                        <div class="b c-red">￥{{li.price}}</div>
                        <div class="c-grey s" v-if="li.price2">￥{{li.price2}}</div>
                    </div>
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
        checked: {
            type: Boolean
        },
    },
    data() {
        return {
            boxIds: []
        }
    },
    watch: {
        checked(val, oldVal) {
            this.boxIds = val? this.list.map(i=>i.id): []
        },
        boxIds(val){
            this.$emit('data', val)
        }
    },
    methods: {
        onDel(id) {
            Dialog.confirm({message: '弹窗内容'
            }).then(() => {
                this.$listeners.del(id)
                this.$emit('data', this.boxIds)
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
.thumb-left{display: inline-block;width: 22%;margin-bottom: 25%;margin-left:0px}
.thumb-right{display: inline-block;width: 72%;}
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
