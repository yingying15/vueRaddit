<!-- 新鲜好物 -->
<script setup>
import homePannel from './HomePannel.vue'
import {ref} from 'vue'
import {getNew} from '@/apis/category.js'
const title=ref('新鲜好物')
const subTitle=ref('新鲜出炉 品质靠谱')
//新鲜好物
const newPros=ref([])
//获取新鲜好物图片
const getNewPro=async()=>{
   const {data:{result}}= await getNew()
   newPros.value=result
}
getNewPro()
</script>
<template>
    <home-pannel :title="title" :subTitle="subTitle">
        <template #new>
          <ul class="goods-list">
            <li v-for="item in newPros" :key="item.id">
                <!-- 路由跳的页面都是一样的,只是商品不一样 所以不用担心 -->
            <RouterLink  :to="`/Detail/${item.id}`">
                <!-- 全局指令,图片用懒加载,只有图片出现在视口范围内,才会加载该图片 -->
                <img v-lazy-img="item.picture"  alt="图片">
                <p class="name">{{item.desc}}</p>
                <p class="price">&yen;{{item.price}}</p>
            </RouterLink>
            </li>
        </ul>
        </template>
    </home-pannel>
</template>
<style scoped lang="scss">
@import "@/styles/home/pannelone.scss";
li{
    transition: all .5s;
    &:hover {
            transform: translateY(-3px);
            box-shadow: 0 3px 8px rgb(0 0 0 / 20%);
        }
}
.price{
    color: $priceColor;
}
</style>