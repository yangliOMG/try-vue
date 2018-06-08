<template>
    <div>
        <div class="retit">
            <span class="pr-10 c-grey">——</span> 
            <i class="fa fa-heart-o"></i> 商品推荐 
            <span class="pl-10 c-grey">——</span>
        </div>
        <ul class="tablist">
            <li v-for="li in goodList" :key="li.id">
                <a :href="'#/good?id='+li.id">
                    <span class="chanpinLi"><img src="../assets/onError360.jpg"></span>
                    <div class="f-12">
                        <div class="text-overflow2" style="width:100%">{{li.name}}</div>
                        <span class="c-red">￥<span>{{li.price.toFixed(2)}}</span></span>
                    </div>
                </a>
            </li>
            <van-loading v-if="goodList.length === 0" color="black" class="loading" />
        </ul>
    </div>
</template>

<script>

export default {
    data () {
        return {
            goodList : [
                {id:1,tabid:11,name:'【情人节特惠】18K金钻石字母套链',price:950},
                {id:2,tabid:11,name:'【情人节特惠】18K金钻石几何情侣对戒',price:2950},
                {id:3,tabid:22,name:'【春节特惠】S925纯银中国红生肖萌犬套装',price:1950},
                {id:4,tabid:42,name:'18K金旋纹钻石耳圈',price:3950},
            ]
        }
    }
}
</script>

<style lang="less">
.retit {border-top: 7px solid #eee;background: #eee;text-align: center;}
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
