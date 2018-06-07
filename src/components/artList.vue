<template>
    <div id="articleList">
        <a v-for="atc in artList" href="" :key="atc.id">
            <div class="atcLi cliDiv" v-if="atc.pic">
                <div class="f-20 text-overflow2a">{{atc.title}}</div>
                <img width="100%" src="../assets/onError1080.jpg" />
                <div class="pt-10 c-qgrey">
                    <span v-if="atc.man" class="mr-10">
                        <i class="mr-5 fa fa-user"></i>{{atc.man}}
                    </span> 
                    <span v-if="atc.t0">
                        <i class="mr-5 fa fa-clock-o"></i>{{new Date(atc.t0).toLocaleString()}}
                    </span>
                    <span class="r">阅读 {{atc.count}}</span>
                </div>
            </div>
            <div class="atcLi cliDiv" v-else-if="atc.ico">
                <div class="l" style="width: 73%;">
                    <div class="f-20 text-overflow2a">{{atc.title}}</div>
                </div>
                <div class="l" style="width: 27%;">
                    <img width="100%" src="../assets/onError360.jpg" />
                </div>
                <div class="clearfix"></div>
                <div class="pt-5 c-qgrey">
                    <div v-if="atc.keyword" class="mr-10">
                        关键词：{{atc.keyword}}
                    </div>
                    <span v-if="atc.man" class="mr-10">
                        <i class="mr-5 fa fa-user"></i>{{atc.man}}
                    </span> 
                    <span v-if="atc.t0">
                        <i class="mr-5 fa fa-clock-o"></i>{{new Date(atc.t0).toLocaleString()}}
                    </span>
                    <span class="r">
                        阅读&nbsp;{{atc.count}}
                    </span>
                </div>
            </div>
            <div class="atcLi cliDiv" v-else>
                <div class="f-20 text-overflow2a">{{atc.title}}</div>
                <div class="pt-10 c-qgrey">
                    <div v-if="atc.keyword" class="mr-10">
                        关键词：{{atc.keyword}}
                    </div>
                    <span v-if="atc.man" class="mr-10">
                        <i class="mr-5 fa fa-user"></i>{{atc.man}}
                    </span> 
                    <span v-if="atc.t0">
                        <i class="mr-5 fa fa-clock-o"></i>{{new Date(atc.t0).toLocaleString()}}
                    </span>
                    <span class="r">
                        阅读&nbsp;{{atc.count}}
                    </span>
                </div>
            </div>
        </a>
        <van-loading v-if="artList.length === 0" color="black" class="loading" />
    </div>
</template>

<script>
import Vue from 'vue'
import { Loading } from 'vant'

Vue.use(Loading)

export default {
    props: {
      artList: {
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
.atcLi {
    padding: 10px;
    border-top: 2px solid #eee;
    background: #fff;
    overflow: hidden;
}
</style>
