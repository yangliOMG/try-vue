<template>
    <ul id="goodList" class="tablist">
        <li v-for="li in goodList" :key="li.id">
            <a class="external" href="">
                <span class="chanpinLi"><img src="../assets/onError360.jpg"></span>
                <div class="f-12">
                    <div class="text-overflow2" style="width:100%">{{li.name}}</div>
                    <span class="c-red">￥<span>{{li.price.toFixed(2)}}</span></span>
                </div>
            </a>
        </li>
        <van-loading v-if="goodList.length === 0" color="black" class="loading" />
    </ul>
</template>

<script>
import Vue from 'vue'
import { Tab, Tabs, Loading } from 'vant'

Vue.use(Tab).use(Tabs).use(Loading)

export default {
    props: {
      goodList: {
        type: Array
      }
    },
    data () {
        return {
        }
    }
}
</script>

<style lang="less">
.loading{margin: 60px auto;padding: 10px;border-radius: 3px;background-color: rgba(0, 0, 0, .5);}
.tablist {
    padding: 3px 5px;
    overflow: hidden;
    li {
        float: left;
        width: 49%;
        background: #fff;
        margin-right: 3px;
        margin-bottom: 4px;
        a {
            display: block;
            .chanpinLi {
                float: left;
                position: relative;
                width: 100%;
                padding-bottom: 100%;
                height: 0px;
                margin: 0 1px 1px 0;
                img {
                    width: 100%;
                    height: 100%;
                    position: absolute;
                }
            }
            .f-12 {
                font-size: 12px;
                .text-overflow2 {
                    height: 44px;
                    overflow: hidden;
                    text-overflow: ellipsis;
                    display: -webkit-box;
                    -webkit-line-clamp: 2;
                    -webkit-box-orient: vertical;
                }
                .c-red {
                    color: red;
                }
            }
        }
    }
    li:nth-child(2n){margin-right: 0;margin-left: 3px;}
}
</style>
