<template>
  <div>
      <mt-swipe :auto="4000">
            <mt-swipe-item v-for="(item,index) in SwipeData" :key="index">
                <a :href="item.url1">
                    <img :src="item.img" alt="">
                </a>
            </mt-swipe-item>
      </mt-swipe>
  </div>
</template>

<script>
    export default{
         props:['SwipeData']
    }
</script>

<style>
    .mint-swipe{
        height: 200px;
        background: grey;
    }
    .mint-swipe-item{
        text-align: center;
    }
    .mint-swipe-item img{
        height: 200px;
    }
</style>
