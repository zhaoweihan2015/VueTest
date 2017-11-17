<template>
  <div  class="temp" id="movies">
    <ul :class="view">
        <li v-for="item in newList" class="mui-table-view-cell mui-media">
            <a href="javascript:;">
                 <img class="mui-media-object mui-pull-left" v-bind:src='item.picUrl'>
                <div class="mui-media-body">
                    {{item.title}}
                    <p class='mui-ellipsis'>{{item.ctime}}</p>
                </div>
            </a>
        </li>
    </ul>      
  </div>
</template>

<script>
    export default{
        data:function(){
            return {
                newList:[],
                view:{
                    'mui-table-view':true
                }
            }
        },
        methods: {
            getNewList (){
                let _this = this;
                let url = 'http://api.huceo.com/huabian/?key=9620b0e15fbd472a338520b81e451e90&num=10'
                this.$http.get(url)
                    .then(
                        (res)=>{
                            console.log(res)
                            
                        },
                        (err)=>{
                            console.log(err)
                        })
            }
        },
        created () {
            this.getNewList();
        }
    }
</script>

<style>

</style>
