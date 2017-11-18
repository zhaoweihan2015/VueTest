import Vue from 'vue'
import App from './App.vue'
import MintUI from 'mint-ui'

// lazyload
import VueLazyload from 'vue-lazyload'
Vue.use(VueLazyload, {
    preload: 1.3,
    listenEvents: ['mousewheel']
})

// mint
import 'mint-ui/lib/style.css'
Vue.use(MintUI)

//vue-resource
import VueResource from 'vue-resource'
Vue.use(VueResource)

// 全局样式
import './root.css'
import './static/css/mui.min.css'

// Home
import Home from './components/Home.vue'
import Movie from './components/Movie.vue'
import ShopCar from './components/ShopCar.vue'
import Search from './components/Search.vue'
import Member from './components/Member.vue'
import NewsList from './components/NewsList.vue'
import NewsDetail from './components/NewsDetail.vue'
import PhotoList from './components/PhotoList.vue'

//moment
import moment from 'moment'
Vue.use(moment)
Vue.filter('filterTime', function(data, type) {
    return moment(data).format(type)
});

//Router
import VueRouter from 'vue-router'
Vue.use(VueRouter)

let router = new VueRouter({
    linkActiveClass: 'mui-active',
    routes: [
        { name: 'home', path: '/home', component: Home },
        { name: 'member', path: '/member', component: Member },
        { name: 'shopcar', path: '/shopcar', component: ShopCar },
        { name: 'search', path: '/search', component: Search },
        { name: 'movie', path: '/movie', component: Movie },
        { name: 'newslist', path: '/newslist', component: NewsList },
        { name: 'newsdetail', path: '/newsdetail/:id', component: NewsDetail },
        { name: 'photolist', path: '/photolist', component: PhotoList },
        { path: '/', redirect: '/home' }
    ]
});

new Vue({
    el: '#app',
    router,
    render: createElements => createElements(App)
})