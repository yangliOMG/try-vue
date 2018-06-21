import Vue from 'vue'
import vuex from 'vuex'
import shopcart from '../vuex/shopcart.js'
Vue.use(vuex)


export default new vuex.Store({
    modules: {
        shopcart
    }
})
