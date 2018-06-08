<template>
    <div class="pannel">
        <div class="mg-5 pd-5 bordpj">
            <div class="c-pjred fwb mb-5">累计评价</div>
            <van-row class="text-c">
                <van-col span="8" v-for="li in evalue" :key="li.name">
                    <div>{{li.name}}</div>
                    <div class="f-20 fwb c-deeporg">{{li.score}}</div>
                    <div>
                        <span class="scorepj margin-c" :style="backscore">
                            <em class="scorepj" :style="[frontscore,{width:li.score/5*60+'px'}]"></em>
                        </span>
                    </div>
                </van-col>
            </van-row>
        </div>

        <EvalList :evalList='evalList'></EvalList>
        
        <Recommend></Recommend>
    </div>
</template>

<script>
import Vue from 'vue'
import { Row, Col } from 'vant'

import EvalList from '../components/evalList.vue'
import Recommend from '../components/recommend.vue'

Vue.use(Row).use(Col)
export default {
    data () {
        return {
            evalue:[
                {name:'产品评分',score:4.5},
                {name:'物流评分',score:3.5},
                {name:'服务评分',score:4.7},
            ],
            backscore: {
                background: 'url(' + require('../assets/pjstar.png') + ') no-repeat 0 -27px',
            },
            frontscore: {
                background: 'url(' + require('../assets/pjstar.png') + ') no-repeat 0 -15px',
            },

            evalList:[
                {name:'A',date:'2017-12-12',content:'评价评价评价评价评价评价评价评价评价评价评价评价评价评价评价评价评价评价',imgArr:[1,2,3]},
                {name:'B',date:'2017-11-12',content:'评价评价评价评价评价评价评价评价评价评价222'},
                {name:'C',date:'2013-12-12',content:'评价评价评11',imgArr:[1,2]},
            ]
        }
    },
    components: {
      EvalList,Recommend
    }
}
</script>

<style lang="less">
.bordpj {
    border: 2px solid #B00000;
    background: #fff;
    border-radius: 5px;
}
.scorepj {
    display: block;
    width: 60px;
    height: 11px;
}

</style>
