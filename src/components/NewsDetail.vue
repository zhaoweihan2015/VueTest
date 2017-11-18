<template>
  <div class="temp">
      <div class="title">
          <h3 v-text="msg.title"></h3>
          <div class="title_bottom">
              <span>{{msg.add_time | filterTime('YYYY-MMM-Do')}}</span>
              <span> {{msg.click}}浏览 </span>
          </div>
        <article v-html="msg.content"></article>
      </div>
  </div>
</template>
 
<script>
    import tool from '../tool/tool'
    export default{
        data () {
            return {
                msg:{}
            }
        },
        created () {
            this.getNewsDetailData(this.$route.params.id);
        },
        methods: {
            getNewsDetailData:function(id){
                let url = `${tool.HTTP}${tool.SERVER_PATH}/api/getnew/${id}`
                this.$http.get(url)
                    .then(
                        res=>{
                            this.msg = res.body.message[0]
                            console.log(this.msg)
                        },
                        err=>{
                            console.log('NewsDetail ERROR'+err)
                        }
                    )
            }            
        }
    }
</script>

<style>
    .title h3{
        font-size: 18px;
    }
    .title_bottom{
        display: flex;
        justify-content: space-around;
        font-size: 12px;
    }
</style>
