<template>
    <div ssales="0" scares="0" sprice="1" sreward="1" sljqg="0" :sstyle="sstyle">
        <div class="goods-list picturetype01 clearfix" :class='deco'>
            <a :href="'#/good?id='+i" v-for=' i in num' :key='i'>
                <div class="photo" :class="type" gid="8a8983cf60697a9b01606e3236c601b1">
                    <img src="../assets/logo.png"/>
                    <div class="info clearfix info-no-title info-price f-12">
                        <p class="name">【仅一件】999足金3D硬金圣诞吊坠</p>
                        <div class="subinfo">
                            <p><span class="price" :class='mes[0]'>￥882.00</span>
                                <span class="reward" :class='mes[1]'>/赚￥100.81</span></p>
                            <p class="c-grey"><span class="sales mr-10" :class='mes[2]'>销售量：0</span>
                            <span class="cares" :class='mes[3]'>收藏量：0</span></p>
                            <div class="ljqg" :class='mes[4]'><div>立即抢购</div></div>
                            <p class="code hide">JW01010317000006</p>
                            <p class="typename hide">JW010103黄金颈饰</p>
                        </div>
                    </div>
                </div>
            </a>
        </div>
    </div>
</template>

<script>
export default {
    props: {
        num: {
            type: Number,
            default: 3
        },
        type: {
            type: String,
            default: 'hang'
        },
        gap: {
            type: Boolean,
            default: false
        },
        border: {
            type: Boolean,
            default: false
        },
        message:{
            type:Array,
            default: function () {
                return []
            }
        }
    },
    computed:{
        sstyle(){
            return ['big','x','small','list','hang','zhou'].findIndex(i=>i===this.type)
        },
        deco(){
            return {gap:this.gap,border:this.border}
        },
        mes(){
            return ['price','reward','sales','cares','ljqg'].map(i=>this.message.includes(i)? '':'hide')
        }
    },
    data() {
        return {
            btarrow: {
                background: 'url(' + require('../assets/h5index/arrow.png') + ') no-repeat 0/contain',
            },
        }
    }
}
</script>

<style lang="less" scope>
.goods-list{background:#fff;padding: 5px;border-bottom: 1px solid #eee;}
.goods-list::-webkit-scrollbar {width: 3px;height: 3px;}
.goods-list::-webkit-scrollbar-thumb {border-radius: 10px;-webkit-box-shadow: inset 0 0 5px rgba(0,0,0,0.2);background: #535353;}
.goods-list::-webkit-scrollbar-track {-webkit-box-shadow: inset 0 0 5px rgba(0,0,0,0.2);border-radius: 10px;background: #EDEDED;}
.picturetype01 .name{overflow: hidden;text-overflow: ellipsis;white-space: nowrap;}
.picturetype01 .photo {background: #fff;}
.picturetype01 .photo.big{padding:5px;}
.picturetype01 .photo.small{width:50%;float:left;padding:3px;}
.picturetype01 .photo.hang{float: left;width: 33%;box-sizing: border-box;}
.picturetype01 .photo.hang .subinfo{transform: scale(0.8);transform-origin: 0 50%;}
.picturetype01 .photo.hang .subinfo p{overflow: hidden;text-overflow: ellipsis;white-space: nowrap;}
[sstyle='5'] .goods-list{white-space: nowrap;overflow: auto;font-size: 0px;}
.picturetype01 .photo.zhou{width: 110px;display: inline-block;text-align: center;vertical-align: top;}
.picturetype01 .photo.zhou .subinfo p{overflow: hidden;text-overflow: ellipsis;white-space: nowrap;}
.picturetype01 .photo.hide{display:none;}
.picturetype01 .photo img{width:100%;}
.picturetype01 .abst{color:#999;font-size:12px;}
.picturetype01 .price{color:#ff4141;}
.picturetype01 .reward{color:#ff4141;}
.picturetype01 .ljqg{text-align:center}
.picturetype01 .ljqg>div{background: red;color: white;padding: 3px 8px;display: inline-block;border-radius: 3px;box-shadow: 1px 1px 1px #aaa;}
.picturetype01 .photo.list{background:#fff;}
.picturetype01 .photo.list img{width:125px;height:125px;margin:5px;float: left;}
.picturetype01 .photo.list .info{margin-left:140px;padding-top:10px;}
.picturetype01 .photo.zhou img{width: 100%;height: 100px;}
.goods-list.gap .list{margin:4px;}
.goods-list.gap .small{width: 48%;}
.goods-list.gap .big{margin:3px;}
.goods-list.gap .hang{padding:5px}
.goods-list.gap .zhou{margin-right: 5px;}
.goods-list.border .photo{border:1px solid #efefef;}
.choosegood .webuploader-pick{background: #ccc;width: 112px;height: 112px;float: left;border-radius: 0;line-height: 112px;font-size: 28px;padding: 0;}
.choosegood .uploader-list{position:absolute;left:0;top:0;}
.pictureview .chnbox{margin-left:70px;}
.pictureview .choosegood{position:relative;width:100px;height:100px;display:inline-block;margin:5px;border:1px solid #ccc;line-height:50px;text-align:center;cursor:pointer;vertical-align:top;}
.pictureview .choosegood img{width:100%;height:100%;}
.pictureview .choosegood .del{position:absolute;display:block;width:20px;height:20px;line-height:20px;text-align:center;right:-10px;top:-10px;background: #c2c2c2;border-radius:50%;display:none;font-size:12px;}
.pictureview .choosegood:hover .del{display:block;}
.pictureview .cart{padding:10px;border-radius:3px;background:#fff;border:1px solid #d2d6de;}

.goods[sstyle='3'] .photo .info{position:relative}
.goods[sstyle='3'] .photo .subinfo{position: absolute;bottom: 5px;}
</style>
