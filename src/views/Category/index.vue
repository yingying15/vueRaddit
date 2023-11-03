<script setup>

import GoodItem from '@/components/GoodItem.vue'

//获取后台返回的数据 路由名称
import {useCategory} from './composables/useCategory.js'
//调用函数并且解构返回值
const {list} = useCategory()
//获取轮播图
import {useBanner} from './composables/useBanner.js'
//调用函数并且解构返回值
const {bannerList}=useBanner()

</script>
<template>
    <div class="container">
        <el-breadcrumb separator=">">
            <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
            <el-breadcrumb-item>{{list.name}}</el-breadcrumb-item>
        </el-breadcrumb>
         <!-- 轮播图-->
        <div class="home-banner">
            <el-carousel  height="400px">
            <el-carousel-item v-for="item in bannerList" :key="item.id">
                <img
                :src="item.imgUrl"
                alt="图片">
            </el-carousel-item>
            </el-carousel>
        </div>
        <!-- 全部分类 -->
         <el-card class="box-card">
            <p>全部分类</p>
            <ul>
                <li v-for="item in list.children" :key="item.id">
                    <RouterLink :to="`/SubCategory/${item.id}`">
                    <!-- 全局指令,图片懒加载,只有图片出现在视口范围内,才会加载该图片 -->
                    <img v-lazy-img="item.picture"  alt="图片">
                    <span>{{item.name}}</span>
                    </RouterLink>
                </li>
            </ul>
        </el-card>
        <!-- 具体分类组件 -->
        <el-card class="item-card" v-for="item in list.children" :key="item.id">
            <p>-{{item.name}}-</p>
            <p>温暖柔软,&nbsp;品质之选</p>
            <!-- 每件商品 -->
            <div class="bottom">
                <GoodItem  v-for="i in item.goods.slice(0,5)" :item="i" :key="i.id">
                </GoodItem>
            </div>
        </el-card>
    </div>
</template>
<style scoped lang="scss">
.container {
    width: 95%;
    margin-top: 30px;
    padding: 10px 5px;
    //轮播图
    img {
        width: 100%;
        height: 100%;
        object-fit: cover;
        margin-top: 20px;
        background: none;
    }
    //全部分类
    .box-card{
        margin-top: 20px;
        text-align: center;
        p{
            font-size: 2rem;
        }
        ul{
            display: flex;
            margin-top: 30px;
            li{
                width: 120px;
                height: 140px;
                padding: 0;
                margin-right: 20px;
                img{
                    margin: 0;
                    height: 100px;
                    object-fit: cover;
                    margin-bottom: 10px;
                }
                span{
                    font-size: 1.2rem;
                }
            }
        }
    }
    .item-card{
        margin-top: 20px;
        text-align: center;
        height: 450px;
  
        p{
            font-size: 2rem;
        }
        p:nth-child(2){
            font-size: 1.3rem;
            color: #999999;
            margin-top: 10px;
            height: 2rem;
            margin-bottom: 20px;
        }
        .bottom{
            display: flex;
            justify-content: flex-start;
            flex-wrap: wrap;
        }
       
    }
   
}
</style>