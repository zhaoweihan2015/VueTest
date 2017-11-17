<template>
    <div class="temp">
        <Swipe :SwipeData='homeData'></Swipe>
        <!-- 九宫格 -->
        <Grid></Grid>
    </div>
</template>

<script>
import Swipe from './sub/Swipe.vue'
import Grid from './sub/Grid.vue'
import tool from '../tool/tool'
export default{
     components:{
         Swipe,
         Grid,
         tool
     },
     data () {
         return { 
            homeData:[]      
         }
     },
     created () {
       this.getHomeData();  
     },
     methods:{
         getHomeData () {
             let url = `${tool.HTTP}${tool.SERVER_PATH}/api/getlunbo`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        
             this.$http.get(url)
                .then(
                    (res)=>{
                        this.homeData = res.body.message;
                    },
                    (err)=>{
                        console.log('HomeData Img Error:'+err)
                    })
         }
     }
 }    
</script>

<style>

</style>
