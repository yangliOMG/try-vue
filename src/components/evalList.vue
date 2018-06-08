<template>
    <ul>
        <li :key="li.name" v-for="li in evalList">
            <div class="pd-10 bordpjt">
                <van-row class="lh-30">
                    <van-col span="3">
                        <img width="30" style="border-radius: 30px;" src="../assets/default_photo.jpg" />
                    </van-col>
                    <van-col span="13"><span class="c-orange">{{li.name}}</span></van-col>
                    <van-col span="8" class="text-r"><div class="c-qgrey f-12">{{li.date}}</div></van-col>
                </van-row>
                <div>{{li.content}}</div>
                <div class="valueImglist" v-if="li.imgArr">
                    <div class="valueImg" :key="li" v-for="li in li.imgArr">
                        <img src="../assets/onError360.jpg" />
                    </div>
                </div>
            </div>
        </li>
    </ul>
</template>

<script>
import Vue from 'vue'
import { Loading } from 'vant'

Vue.use(Loading)

export default {
    props: {
      evalList: {
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
.bordpjt{border-top: 7px solid #eee;background: #fff;}
.valueImglist{overflow: hidden;padding:5px 0;margin-right:-5px}
.valueImg{float:left;position: relative;width: 32%;padding-bottom: 32%;height: 0px;margin: 0 4px 1px 0;}
.valueImg img{width: 100%;height: 100%;position: absolute;}
</style>
