import Vue from 'vue'
import Vuex from 'vuex'
import posts from './modules/Posts'
import axios from 'axios'

Vue.use(Vuex)
Vue.use(axios)


export default new Vuex.Store({
    modules: {
        posts,
    }

})