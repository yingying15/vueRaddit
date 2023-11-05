<script setup>
//得到父组件传过来的数据
defineProps({
  list: {
    type: Array,
    default: () => []
  }
})
</script>

<template>
  <el-menu :default-active="1" class="el-menu-demo" mode="horizontal" @select="handleSelect">
    <el-menu-item index="0">
      <h1 class="logo">
        <RouterLink to="/">小兔鲜</RouterLink>
      </h1>
    </el-menu-item>
    <el-menu-item v-for="item in list" :key="item.id">
      <RouterLink :to="`/category/${item.id}`"> {{ item.name }}</RouterLink>
    </el-menu-item>
    <el-menu-item class="item-search">
      <div class="search">
        <i class="iconfont icon-sousuo" />
        <input type="text" placeholder="搜一搜">
        <i class="iconfont icon-gouwuchekong" />
        <!-- 头部购物车 -->

        <div class="cartHeader">
          <div class="cart-inner">
            <!-- 顶部 -->
            <div class="top-item">
              <img src="@/assets/200.png" alt="">
              <div class="card-center">
                <span>名字</span><br>
                <span>规格</span>
              </div>
              <div class="card-right">
                <span>￥233.00</span><br>
                <span>x3</span>
              </div>
              <span class="card-delete">x</span>
            </div>
            <!-- 底部 -->
            <div class="cart-footer">
              <div class="cart-footer-left">
                <p>共<span>&nbsp;5&nbsp;</span>件商品</p>
                <span class="price">&yen;&nbsp;23.00</span>
              </div>
              <el-button size="large">去购物车结算</el-button>
            </div>

          </div>

        </div>


      </div>
    </el-menu-item>
  </el-menu>
</template>

<style scoped lang="scss">
.el-menu {
  flex: 1;
  display: flex;
  justify-content: space-evenly;
  border-bottom: 0;
  height: 100px;

  .el-menu-item {
    font-size: 1.2rem;
  }

  .item-search:hover {
    background: none;
    color: black;
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
  justify-content: flex-start;
  align-items: center;

  .icon-sousuo {
    font-size: 18px;
    margin-left: 5px;
  }

  //购物车图标
  .icon-gouwuchekong {
    font-size: 18px;
    margin-left: 5px;

  }

  //头部购物车
  .cartHeader {
    position: absolute;
    left: -200px;
    top: 45px;
    background-color: #fff;
    width: 410px;
    height: 500px;
    z-index: 9999;

    .cart-inner {
      position: relative;
      height: 100%;
      width: 100%;

      //顶部
      .top-item {
        height: 20%;
        border-bottom: 1px solid #F7F7F7;
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 10px;
        &:hover {
        .card-delete {
          visibility: visible;
        }
      }

        .card-center {
          flex: 1;
          margin-left: 5px;
          span:last-child {
            font-size: 0.9rem;
            // color: #F7F7F7;
          }
        }

        //右边
        .card-right {
          padding: 5px;
          text-align: center;
          margin-right: 10px;
          span:first-child {
            font-size: 1.4rem;
            color: $priceColor;
          }
        }
      }

      //底部
      .cart-footer {
        position: absolute;
        left: 0;
        bottom: 0;
        height: 15%;
        width: 100%;
        background-color: #F7F7F7;
        z-index: 99999;
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 10px;

        .price {
          color: $priceColor;
          font-size: 1.4rem;
        }

        .el-button {
          background-color: $xtxColor;
          color: #fff;
        }
      }
      .card-delete {
          visibility: hidden;
          // color: $priceColor;
        }
      
    }

  }

}</style>

