<template>
    <div class="biaotiArea">
        <div v-if="type===1">
            <div class="yangshi1headline"></div>
            <div class="yangshi1div">
                <span class="btneirong">{{this.name}}</span>
                <div class="btarrow" :style="btarrow"></div>
            </div>
        </div>
        <div v-else-if="type===2" class="yangshi2">
            <span class="btneirong">{{this.name}}</span>
        </div>
    </div>
</template>

<script>
export default {
    props: {
      name: {
        type: String,
        default: '默认'
      },
      type: {
        type: Number,
        default: 2
      },
    },
    data () {
        return {
            btarrow: {
                background: 'url(' + require('../assets/h5index/arrow.png') + ') no-repeat 0/contain',
            },
        }
    },

}
</script>

<style lang="less" scope>
.biaotiArea{background:white;position:relative}
.biaotiArea .yangshi1headline{background:black;height:11px}
.biaotiArea .yangshi1div{position: absolute;top: 5px;background:#fa1500;font-size:14px;color:white;padding:0 10px}
.biaotiArea .yangshi1div .btneirong{line-height: 22px;}
.biaotiArea .yangshi1div .btarrow{height: 22px;position: absolute;width: 30px;right: -28px;top: 0px;}
.biaotiArea .yangshi2{font-weight: normal;font-size: 14px;text-align: center;line-height: 40px;color: #535353;border-bottom: 1px solid #eee;}
.biaotiArea .yangshi2:before, .biaotiArea .yangshi2:after {content: "";width: 30px;height: 1px;display: inline-block;background-color: #ccc;vertical-align: middle;margin: -3px 10px 0;}
.biaotiview .box3 {margin: 5px;padding: 5px;background: #fff;}
</style>
