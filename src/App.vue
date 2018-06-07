<template>
    <div id="app">
        <!-- <van-nav-bar
          title="标题"
          left-text="返回"
          right-text="按钮"
          left-arrow
          @click-left="onClickLeft"
          @click-right="onClickRight"
        />-->
        <router-view/> 
    </div>
</template>

<script>
// import Vue from 'vue'
// import { NavBar, Toast } from 'vant'
// Vue.use(NavBar)

export default {
//   methods: {
//     onClickLeft () {
//       Toast('返回')
//     },
//     onClickRight () {
//       Toast('按钮')
//     }
//   }
}
</script>

<style>
body{background: #f2f2f2;}
.pannel{margin-bottom: 50px}
a{color:inherit}
.van-search__action{padding: 0 10px;}
</style>
