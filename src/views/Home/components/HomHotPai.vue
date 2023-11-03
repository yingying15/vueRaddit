<!-- 热门品牌 -->
<script setup>
import { ref } from "vue";
import HomePannel from "./HomePannel.vue"
import {getBrand} from '@/apis/category.js'
const title=ref('热门品牌')
const subTitle=ref('国际经典 品质保证')
//品牌集合
const brands=ref([])
//实时变化的集合
const arr=ref([])
//得到品牌请求
const getBrands=async()=>{
    const res = await getBrand()
    brands.value=res.data.result
    arr.value=brands.value.slice(0,5)
}
getBrands()
//默认第一页
const curpage=ref(1)
//切换页面的时候 更换图片
const handleCurrentChange=()=>{
    //第一页 显示前5条
    if(curpage.value===1){
        arr.value=brands.value.slice(0,5)
    }else{
        //第二页 显示后5条
        arr.value=brands.value.slice(5)
    }
}

</script>
<template>
<HomePannel :title="title" :subTitle="subTitle">
    <template #more>
        <!-- current-page当前页码 total总条数 :default-page-size默认显示几条 @current-change当前页码变化的时候-->
        <div>
            <el-pagination background="true" layout="prev, next"  :total="10" :default-page-size="5"  @current-change="handleCurrentChange" v-model:current-page="curpage"/>
        </div>
    </template>
    <template #new>
        <ul>
            <RouterLink to="/">
                <!-- 全局指令,图片懒加载,只有图片出现在视口范围内,才会加载该图片 -->
                <img v-lazy-img="item.picture" alt="图片"  v-for="item in arr" :key="item.id">
            </RouterLink>
        </ul>
    </template>
</HomePannel>

</template>
<style scoped lang="scss">
a{
    display: flex;
    justify-content: space-between;
    img{
        width: 240px;
        height: 306px;
        transition: all .5s;
        &:hover{
            transform: translateY(-3px);
            box-shadow: 0 3px 8px rgb(0 0 0 / 20%);
        }
    }
}
    .router-link-active{
        background-color: transparent;
    }
</style>