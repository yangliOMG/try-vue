<template>
    <div class="pannel">
        <div class="mt-5" v-for="index in 7" :key="index">
			<img width="100%" src="../assets/onError1080.jpg"/>
		</div>
    </div>
</template>

<script>
import Vue from 'vue'
import { NavBar,Toast,Icon } from 'vant'

Vue.use(NavBar).use(Toast).use(Icon)
export default {
}
</script>

<style lang="less">
</style>
