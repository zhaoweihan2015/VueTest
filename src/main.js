import Vue from 'vue'
import App from './App.vue'
import MintUI from 'mint-ui'
import VueRouter from 'vue-router'
// mint
import 'mint-ui/lib/style.css'
Vue.use(MintUI);
//vue-resource
import VueResource from 'vue-resource'
Vue.use(VueResource);
//axios
// import axios from 'axios'
// Vue.prototype.$http = axios

// 全局样式
import './root.css'

import './static/css/mui.min.css'

// Home
import Home from './components/Home.vue'
// Movie
import Movie from './components/Movie.vue'
//ShopCar
import ShopCar from './components/ShopCar.vue'
//Search
import Search from './components/Search.vue'
//Member
import Member from './components/Member.vue'
//NewList
import NewList from './components/NewList.vue'


//Router
Vue.use(VueRouter)

let router = new VueRouter({
    linkActiveClass: 'mui-active',
    routes: [
        { name: 'home', path: '/home', component: Home },
        { name: 'member', path: '/member', component: Member },
        { name: 'shopcar', path: '/shopcar', component: ShopCar },
        { name: 'search', path: '/search', component: Search },
        { name: 'movie', path: '/movie', component: Movie },
        { name: 'newlist', path: '/newlist', component: NewList },
        { path: '/', redirect: '/home' }
    ]
});

new Vue({
    el: '#app',
    router,
    render: createElements => createElements(App)
})