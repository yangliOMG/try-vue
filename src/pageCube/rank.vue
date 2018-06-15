<template>
    <div class="rank-list clearfix">
        <a :href="'#/good?id='+i" v-for=' (obj,i) in num' :key='i'>
            <div class="item" :class="'item'+i" gid="8a8983cf60697a9b01606e3236c601b1">
                <span class="dbsquare titl">NO<span>{{i+1}}</span></span>
                <div class="squareOut" :style="hei[i*2+0]">
                    <div class="squareIn">
                        <div class="squareOut" :style="hei[i*2+1]">
                            <div class="squareIn">
                                <img src="../assets/logo.png"/>
                            </div>
                        </div>
                        <div class="subinfo">
                            <p class="name text-overflow">【仅一件】999足金3D硬金圣诞吊坠</p>
                            <p><span class="price">￥882.00</span><span class="reward">/赚￥100.81</span></p>
                            <p class="code hide">JW01010317000006</p>
                            <p class="typename hide">JW010103黄金颈饰</p>
                        </div>
                    </div>
                </div>
            </div>
        </a>
    </div>
</template>

<script>
export default {
    props: {
        num: {
            type: Number,
            default: 3
        },
        height:{
            type:Array,
            default: function () {
                return [132,109,65,45,65,45]
            }
        }
    },
    computed:{
        hei(){
            return this.height.map(i=>({paddingBottom:i+'%'}))
        }
    },
}
</script>

<style lang="less" scope>
.rank-list{background: #fff}
.rank-list .item{
    position: relative;width: 50%;float: left;box-sizing: border-box;font-size: 12px;padding: 8px;
    &.item0{
        padding-left:12px;border-right:1px solid #efefef;
        .titl{left: 12px;top: 8px;}
    }
    &.item1{
        padding-right:12px;padding-bottom: 0px;border-bottom: 1px solid #efefef;
        .titl{left: 8px;top: 8px;}
    }
    &.item2{
        padding-right:12px;padding-bottom: 0px;
        .titl{left: 8px;top: 8px;}
    }
}
.rank-list .item .name,.rank-list .item .price{line-height:14px;min-height:initial;}
.rank-list .item .price{color:#f00;}
.rank-list .item .reward{color:#f00;}
.rank-list .imgBox{box-sizing:border-box;}
.rank-list .titl{position:absolute;left:5px;top:0;z-index: 2;text-align: center;background: rgba(240,240,240,0.7);color: white;}
.rank-list .titl i{color:#f00;font-style: normal;}
.rank-list .info{left:0px;bottom:0px;}
.dbsquare{border:1px solid #ccc;display:inline-block;font-size: 15px;color:red}
.dbsquare:before,.dbsquare:after{content:"";vertical-align:top;display:inline-block;width:3px;height:24px;top:0;}
.dbsquare:before{left:0;border-right:1px solid #ccc;margin-right:5px;}.dbsquare:after{right:0;border-left:1px solid #ccc;margin-left:5px;}
.squareOut{position:relative;width:100%;padding-bottom:100%;}
.squareIn{position:absolute;left:0;top:0;width:100%;height:100%;}
.squareIn img{width:100%;height:100%;}
.rankview .rankrow{cursor: pointer;border-bottom: 1px dashed #aaa;}
.rankview .chnbox{margin-left:70px;}
.rankview .choosegood{position:relative;width:100px;height:100px;display:inline-block;margin:5px;border:1px solid #ccc;line-height:50px;text-align:center;cursor:pointer;vertical-align:top;}
.rankview .choosegood img{width:100%;height:100%;}
.rankview .choosegood .del{position:absolute;display:block;width:20px;height:20px;line-height:20px;text-align:center;right:-10px;top:-10px;background: #c2c2c2;border-radius:50%;display:none;font-size:12px;}
.rankview .choosegood:hover .del{display:block;}
.rankview .cart{padding:10px;border-radius:3px;background:#fff;border:1px solid #d2d6de;}
.rankview .Uploader {margin: 0 auto;min-height: 30px;}
.rankview .webuploader-container {position: absolute;left: 50%;margin-left: -40px;}
</style>
