<script setup>
import homePannel from './HomePannel.vue'
import {ref} from 'vue'
import {getHot} from '@/apis/category.js'
const title=ref('人气推荐')
const subTitle=ref('人气爆款 不容错过')
//商品列表
const hotPros=ref([])
const getHotPro=async()=>{
   const {data:{result}}= await getHot()
   hotPros.value=result
}
getHotPro()
</script>
<template>
<homePannel :title="title" :subTitle="subTitle">
    <template #new>
          <ul class="goods-list">
            <li v-for="item in hotPros" :key="item.id">
                <!-- 路由跳的页面都是一样的,只是商品不一样 所以不用担心 -->
            <RouterLink to="/">
                <img :src="item.picture" alt="图片">
                <p class="name">{{item.title}}</p>
                <p class="price">{{item.alt}}</p>
            </RouterLink>
            </li>
        </ul>
        </template>
</homePannel>
</template> 
<style scoped lang="scss">
@import "@/styles/Home/pannelone.scss";
.price{
    color: #999;
}
</style>  