<!-- 个人中心 -->
<script setup>
import {User,Setting,Document} from '@element-plus/icons-vue'
import {useUserStores} from '@/stores/index.js'
import GoodItem from '@/components/GoodItem.vue'
import {getNew} from '@/apis/category.js'
import {ref} from 'vue'
const  userStore=useUserStores()
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
<div class="mess">
    <div class="avator">
        <img :src="userStore.user.avatar" alt="">
        <span>{{userStore.user.account}}</span>
    </div>
    <div class="user">
        <el-icon><User /></el-icon>
        <p>会员中心</p>
    </div>
    <div class="safe">
        <el-icon><Setting /></el-icon>
        <p>安全设置</p>
        </div>
    <div class="address">
        <el-icon><Document /></el-icon>
        <p>地址管理</p>
    </div>
</div>
<div class="likePros">
    <p>猜你喜欢</p>
    <div class="prolist">
        <li v-for="item in newPros" :key="item.id">
            <GoodItem :item="item"></GoodItem>
        </li>
    </div>
</div>


</template>
<style scoped lang="scss">
.mess{
    height: 90px;
    width: 100%;
    background-color: $xtxColor;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding-left: 2rem;
    img{
        height: 5rem;
        display: inline-block;
        margin-right: 10px;
        border-radius: 50%;
    }
    div{
        font-size: 1.2rem;
        color: #fff;
        .el-icon{
            font-size: 1.4rem;
        }
    }
    div:not(.avator){
        width: 150px;
        text-align: center;
    }
    .avator{
        flex: 1;
    }
}
.likePros{
    p{
        font-size: 1.5rem;
        padding-left: 20px;
        margin: 20px;
        
    }
    .prolist{
        display: flex;
        flex-wrap: wrap;
        padding: 0 20px;
        justify-content: space-between;
        li{
            list-style-type: none;
        }
    }
}

</style>