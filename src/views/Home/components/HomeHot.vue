<!-- 人气推荐 -->
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
                <!-- 全局指令,图片懒加载,只有图片出现在视口范围内,才会加载该图片 -->
                <img v-lazy-img="item.picture" alt="图片">
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
li{
    transition: all .5s;
    &:hover {
            transform: translateY(-3px);
            box-shadow: 0 3px 8px rgb(0 0 0 / 20%);
        }
}
.price{
    color: #999;
}
</style>  