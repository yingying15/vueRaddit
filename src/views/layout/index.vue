
<script setup>
import { useScroll } from '@vueuse/core'
import layoutNav from './components/layoutNav.vue'
import layoutHeader from './components/layoutHeader.vue'
import layoutFooter from './components/layoutFooter.vue'
// import home from '@/views/Home/index.vue'
import { useCategoryStores } from '@/stores/index.js'
import { ref } from 'vue';
//获取被卷去的高度
const { y } = useScroll(window)
//定义导航列表数据
const cateList = ref([])
//获取仓库
const cateStores = useCategoryStores()
//调用仓库方法
const getList = async () => {
  await cateStores.setList()
  cateList.value = cateStores.cateList
  console.log(cateList.value)
}
getList()
</script>
<template>
  <div class="common-layout">
    <el-container>
      <el-header height="120px">
        <div class="app-header-sticky" :class="{ show: y > 78 }">
          <div class="container">
            <RouterLink class="logo" to="/" />
            <!-- 导航区域 -->
            <ul class="app-header-nav ">
              <li class="home" v-for="item in cateList" :key="item.id">
                <RouterLink :to="`/category/${item.id}`">{{item.name}}</RouterLink>
              </li>
            </ul>
            <div class="right">
              <RouterLink to="/">品牌</RouterLink>
              <RouterLink to="/">专题</RouterLink>
            </div>
          </div>
        </div>
        <nav>
          <layoutNav></layoutNav>
        </nav>
        <layoutHeader :list="cateList"></layoutHeader>
      </el-header>
      <el-main height="500px">
        <RouterView></RouterView>
      </el-main>
      <el-footer height="400px">
        <layoutFooter></layoutFooter>
      </el-footer>
    </el-container>
  </div>
</template>
<style scoped lang="scss">
.common-layout {
  width: 100vw;
  padding: 0;
  overflow-x: hidden;

  .el-container {
    margin: 0 auto;
    position: relative;
    padding: 0;

    .el-header {
      background-color: red;
      position: relative;
      padding: 0;
      margin-bottom: 40px;
      .app-header-sticky {
        width: 100%;
        height: 80px;
        position: fixed;
        left: 0;
        top: 0;
        z-index: 99999;
        background-color: #fff;
        border-bottom: 1px solid #e4e4e4;
        // 此处为关键样式!!!
        // 状态一：往上平移自身高度 + 完全透明
        transform: translateY(-100%);
        opacity: 0;

        // 状态二：移除平移 + 完全不透明
        &.show {
          transition: all 0.3s linear;
          transform: none;
          opacity: 1;
        }

        .container {
          display: flex;
          align-items: center;
        }

        .logo {
          width: 200px;
          height: 80px;
          background: url("@/assets/logo.png") no-repeat right 2px;
          background-size: 160px auto;
        }

        .right {
          width: 220px;
          display: flex;
          text-align: center;
          padding-left: 40px;
          border-left: 2px solid $xtxColor;

          a {
            width: 38px;
            margin-right: 40px;
            font-size: 16px;
            line-height: 1;

            &:hover {
              color: $xtxColor;
            }
          }
        }
      }

      .app-header-nav {
        width: 820px;
        display: flex;
        padding-left: 40px;
        position: relative;
        z-index: 998;

        li {
          margin-right: 40px;
          width: 38px;
          text-align: center;

          a {
            font-size: 16px;
            line-height: 32px;
            height: 32px;
            display: inline-block;

            &:hover {
              color: $xtxColor;
              border-bottom: 1px solid $xtxColor;
            }
          }

          .active {
            color: $xtxColor;
            border-bottom: 1px solid $xtxColor;
          }
        }
      }
    }

    .el-main {
      width: 80%;
      padding: 0;
      position: relative;
      left: 0;
      right: 0;
      top: 0;
      bottom: 0;
      margin: auto;
    }


    //底部样式
    .el-footer {
      padding: 0;
    }
  }
}</style>