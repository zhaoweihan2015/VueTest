<template>
    <div class="temp">
        <div class="title">
            <ul>
                <li>
                    <a href="">全部</a>
                </li>
                <li v-for="item in msg">
                    <a @click="changeList(item.id)">{{item.title}}</a>
                </li>
            </ul>
        </div>
        <mt-loadmore :top-method="loadTop" ref="loadmore">
            <div class="mui-card" v-for="item in list">
	         <div class="mui-card-content">
                    <img v-lazy="item.img_url" alt="">
             </div>
	         <div class="mui-card-footer">{{item.title}}</div>
            </div>
        </mt-loadmore>
    </div>
</template>

<script>
    import tool from '../tool/tool'
    import { Indicator } from 'mint-ui';
    export default{
        data () {
            return {
                msg:[],
                list:[],
                tid:0      
            }
        },
        created () {
          this.getPhotoListData();  
        },
        mounted () {
          this.loadTop();  
        },
        methods:{
            getPhotoListData () {
                let url = `${tool.HTTP}${tool.SERVER_PATH}/api/getimgcategory`
                this.$http.get(url)
                    .then(
                        res => {
                            this.msg = res.body.message
                            // console.log(this.msg)
                        },
                        err => {
                            console.log(err)
                        }
                    );
            },
            getPhotoList (id) {
                Indicator.open();
                let url = `${tool.HTTP}${tool.SERVER_PATH}/api/getimages/${id}`
                this.$http.get(url)
                    .then(
                        res => {
                            this.list = res.body.message
                            Indicator.close();
                            // console.log(this.list)
                        },
                        err => {
                            console.log(err)
                            Indicator.close();
                        }
                    );
            },
            loadTop() {
                Indicator.open();
                this.getPhotoList (this.tid);
                this.$refs.loadmore.onTopLoaded();
            },
            changeList(id){
                this.getPhotoList(id);
                this.tid = id;
            }
        }
    }
</script>

<style>
    .title ul{
        overflow-x: auto;
        display: flex;
        list-style: none;
        height: 40px;
        margin: 0;
        padding: 0;
        background: white;
    }
    .title ul li{
        flex-shrink: 0;
        padding: 0 5px;
    }
    .title ul li a{
        line-height: 40px;
        font-size: 14px;
    }

    .mui-card-content{
        min-height: 353px;
    }
    .mui-card-content img{
        width: 100%;
        vertical-align: middle;
    }
    .mui-card-footer {
    position: absolute;
    bottom: 0px;
    background: rgba(0,0,0,0.5);
    width: 100%;
    color: white;
    border-color: transparent;
    }
    
    .mint-loadmore{
        min-height: 100%;
    }
</style>
