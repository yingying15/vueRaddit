<script setup>
import cartHeader from '@/views/cart/cartHeader.vue'

//得到父组件传过来的数据
defineProps({
  list: {
    type: Array,
    default: () => []
  }
})

</script>

<template>
  <el-menu :default-active="1" mode="horizontal" @select="handleSelect">
    <el-menu-item index="0">
      <h1 class="logo">
        <RouterLink to="/">小兔鲜</RouterLink>
      </h1>
    </el-menu-item>
    <el-menu-item v-for="item in list" :key="item.id">
      <RouterLink :to="`/category/${item.id}`"> {{ item.name }}</RouterLink>
    </el-menu-item>
    <el-menu-item class="search">
      <i class="iconfont icon-sousuo" />
      <input type="text" placeholder="搜一搜">
      <cartHeader></cartHeader>
    </el-menu-item>
  </el-menu>

</template>

<style scoped lang="scss">
.el-menu {
  height: 100px;
  flex: 1;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 0;
  padding: 0 50px 0 100px;
  .el-menu-item {
    font-size: 1.2rem;

    &:hover {
      background: none;
      color: black;
    }
  }




}

.logo {
  width: 200px;

  a {
    display: block;
    height: 132px;
    width: 100%;
    text-indent: -9999px;
    background: url('@/assets/logo.png') no-repeat center 18px / contain;
  }
}

.search {
  width: 220px;
  height: 32px;
  position: relative;
  line-height: 32px;
  border-bottom: 1px solid #E9E9E9;
  display: flex;
  align-items: center;

  .icon-sousuo {
    font-size: 1.8rem;
  }
  input{
    font-size: 1.2rem;
  }

 
}
</style>

