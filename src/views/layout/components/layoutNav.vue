
<script setup>
import {useUserStores} from '@/stores/index.js'
import {User} from '@element-plus/icons-vue'
import { useRouter } from 'vue-router';
const router=useRouter()
//退出登录
const quitLogin=()=>{
  useUserStores().clearUser()
  router.replace({path:'/login'})
}
//登录
const toLogin=()=>{
  router.push({path:'/login'})
}
</script>

<template>
    <!-- 登录  @click="quitLogin"-->
        <el-menu :default-active="1" v-if="useUserStores().user.token" class="el-menu-demo" mode="horizontal" background-color="#333333"
          :ellipsis="false" text-color="#FDFDFD" >
          <div class="flex-grow" />
          <el-menu-item><el-icon><User /></el-icon>{{useUserStores().user.account}}</el-menu-item>
          <el-divider direction="vertical"  />
          <el-menu-item>我的订单</el-menu-item>
          <el-divider direction="vertical"  />
          <el-menu-item>会员中心</el-menu-item>
          <el-divider direction="vertical" />
          <el-popconfirm title="确定退出登录么?" confirm-button-text="确认" cancel-button-text="取消" @confirm="quitLogin" >
            <template #reference>
              <el-menu-item>退出登录</el-menu-item>
            </template>
          </el-popconfirm>
        </el-menu>
        <!-- 未登录 -->
        <el-menu :default-active="1" v-else class="el-menu-demo" mode="horizontal" background-color="#333333"
          :ellipsis="false" text-color="#FDFDFD" >
          <div class="flex-grow" />
          <el-menu-item @click="toLogin">请先登录</el-menu-item>
          <el-divider direction="vertical"  />
          <el-menu-item>帮助中心</el-menu-item>
          <el-divider direction="vertical" />
          <el-menu-item>关于我们</el-menu-item>
        </el-menu>
</template>
<style scoped lang="scss">
      .el-menu {
        padding: 0 30px;
        .el-menu-item {
          font-size: 1rem;
        }
      }

    .flex-grow {
      flex-grow: 1;
    }

    .el-divider--vertical {
      height: 1.7rem;
      margin: auto;
    }
</style>