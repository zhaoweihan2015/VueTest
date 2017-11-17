<template>
  <div class="temp">
    <ul class="mui-table-view">
    <li class="mui-table-view-cell mui-media" v-for="item in newlist">
        <a href="javascript:;">
            <img class="mui-media-object mui-pull-left" :src="item.img_url">
            <div class="mui-media-body">
                {{item.title}}
                <p class='mui-ellipsis'>{{item.zhaiyao}}</p>
            </div>
        </a>
    </li>
</ul>     
  </div>
</template>

<script>
import tool from '../tool/tool'
    export default{
        components: {
          tool  
        },
        data (){
            return {
                newlist:[]
            }
        },
        created () {
            this.getNewList()  
        },
        methods: {
            'getNewList'(){
                let url = `${tool.HTTP}${tool.SERVER_PATH}/api/getnewslist`
                this.$http.get(url)
                    .then(
                        (res)=>{
                            console.log(res)
                            this.newlist = res.body.message
                        },
                        (err)=>{
                            console.log('NewList ERROR'+err)
                        }
                    )
            }
        }
    }
</script>

<style>

</style>
