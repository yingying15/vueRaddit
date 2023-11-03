<script setup>
import { useRoute } from 'vue-router';
import { getSubCategoryList, getSubCategoryAPI } from '@/apis/subCategory.js'
import { ref } from 'vue'
import GoodItem from '@/components/GoodItem.vue'
//获取路由数据,提供给面包屑使用
const route = useRoute()
const list = ref({})
const getList = async (id = route.params.id) => {
    const res = await getSubCategoryList(id)
    list.value = res.data.result
}
getList()
//根据标签页请求后台接口

const data = ref({
    categoryId: list.value.parentId,
    page: 1,
    pageSize: 20,
    sortField: 'publishTime'
})
//后台返回的商品集合
const goodList = ref([])
//请求接口
const getGoodList = async () => {
    const res = await getSubCategoryAPI(data.value)
    goodList.value = res.data.result.items
}
getGoodList()
//标签默认选中的标签页
const activeName = ref('publishTime')
//标签改变的时候触发的事件
const handleClick = () => {
    data.value.sortField = activeName.value
    getGoodList()
}
//无限滚动

// const count = ref(0)
// const load = () => {
//     console.log("到底部了")
//     count.value += 2
    //页码加1
    // data.value.page++
    // //得到根据新页码返回的数据
    // const res = getGoodList()
    // goodList.value = [...goodList.value, ...res.data.result.items] -->
// }

</script> 
<template>
    <div class="container">
        <el-card class="box-card">
            <!-- 导航 面包屑:to="{ path: `/category/${ list.parentId}` }"配置方式与路由文件中写法一致 -->
            <el-breadcrumb separator=">">
                <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
                <el-breadcrumb-item :to="{ path: `/category/${list.parentId}` }">{{ list.parentName }}</el-breadcrumb-item>
                <el-breadcrumb-item>{{ list.name }}</el-breadcrumb-item>
            </el-breadcrumb>
            <!-- 卡片 @tab-change 标签内容改变的时候,v-infinite-scroll无限滚动 -->
            <el-tabs v-model="activeName" type="card" class="demo-tabs" @tab-change="handleClick">
                <el-tab-pane label="最新商品" name="publishTime">
                </el-tab-pane>
                <el-tab-pane label="最高人气" name="orderNum">
                </el-tab-pane>
                <el-tab-pane label="评论最多" name="evaluateNum">
                </el-tab-pane>
            </el-tabs>
            <!-- <ul class="body" v-infinite-scroll="load"  style="overflow: auto"> -->
                <div class="body">
                    <li  v-for="item in goodList" :key="item.id" >
                        <GoodItem :item="item" />
                    </li>
                </div>
        </el-card>
    </div>
</template>
<style scoped lang="scss">
.container {
    width: 95%;
    margin-top: 30px;
    padding: 10px 5px;

    .el-tabs {
        margin-top: 30px;
    }

    .box-card {
        margin-top: 30px;
    }

    .body {
        display: flex;
        flex-wrap: wrap;
        li{
            list-style-type: none;
        }
    }
}
</style> 

