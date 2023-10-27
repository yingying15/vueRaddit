<template>
    <!-- @select="handleSelect" :content-position="center" -->
    <!-- 登录 -->
        <el-menu :default-active="1" v-if="true" class="el-menu-demo" mode="horizontal" background-color="#333333"
          :ellipsis="false" text-color="#FDFDFD" >
          <div class="flex-grow" />
          <el-menu-item index="1">我的订单</el-menu-item>
          <el-divider direction="vertical"  />
          <el-menu-item index="1">会员中心</el-menu-item>
          <el-divider direction="vertical" />
          <el-menu-item index="1">退出登录</el-menu-item>
        </el-menu>
        <!-- 注册 -->
        <el-menu :default-active="1" v-else class="el-menu-demo" mode="horizontal" background-color="#333333"
          :ellipsis="false" text-color="#FDFDFD" >
          <div class="flex-grow" />
          <el-menu-item index="1">请先登录</el-menu-item>
          <el-divider direction="vertical"  />
          <el-menu-item index="1">帮助中心</el-menu-item>
          <el-divider direction="vertical" />
          <el-menu-item index="1">关于我们</el-menu-item>
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
<!-- <style scoped lang="scss">
.app-topnav {
  background: #333;
  ul {
    display: flex;
    height: 53px;
    justify-content: flex-end;
    align-items: center;
    li {
      a {
        padding: 0 15px;
        color: #cdcdcd;
        line-height: 1;
        display: inline-block;

        i {
          font-size: 14px;
          margin-right: 2px;
        }

        &:hover {
          color: $xtxColor;
        }
      }

      ~li {
        a {
          border-left: 2px solid #666;
        }
      }
    }
  }
}
</style> -->