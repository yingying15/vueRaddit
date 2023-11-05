<script setup>
import { useCartStores } from '@/stores/index.js'
import { ref } from 'vue'
const cartStores = useCartStores()
const list = ref([])
//删除商品
const deletePro = (skuId) => {
  cartStores.deleteCart(skuId)
  list.value = cartStores.cartList
}


</script>

<template>
  <div class="cart">
    <a class="curr">
      <i class="iconfont icon-gouwuchekong"></i>
      <span>{{ cartStores.getCount }}</span>
    </a>
    <!-- 头部购物车 -->
    <div class="cartHeader">
      <div class="cart-inner">
        <!-- 顶部 -->
        <li class="top-item" v-for="item in cartStores.cartList.slice(0,4)" :key="item.id">
          <div class="img">
            <img :src="item.picture" v-if="item.picture">
            <img src="../../assets/200.png" v-else>
          </div>
          <div class="card-center">
            <p>{{ item.name }}</p>
            <span>{{ item.attrsText }}</span>
          </div>
          <div class="card-right">
            <span>￥{{ item.price }}</span><br>
            <span>x&nbsp;{{ item.count }}</span>
          </div>
          <el-button class="card-delete" @click="deletePro(item.skuId)">x</el-button>
        </li>

        <!-- 底部 -->
        <div class="cart-footer">
          <div class="cart-footer-left">
            <p>共<span>&nbsp;{{ cartStores.getCount }}&nbsp;</span>件商品</p>
            <span class="price">&yen;&nbsp;{{ cartStores.getPrices.toFixed(2) }}</span>
          </div>
          <el-button size="large" @click="$router.push('/cart')">去购物车结算</el-button>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.cart {
  width: 50px;
  height: 50px;
  padding-top: 7px;
  

  &:hover {
    .cartHeader {
      opacity: 1;
      transform: none;
      height: 500px;
      transition: all .5s;
    }
  }

  //通知角标
  .curr {
    position: relative;
    .iconfont{
      font-size: 1.8rem;
    }
    span{
      display: inline-block;
      text-align: center;
      color: #fff;
      font-size: 0.9rem;
      background-color: $priceColor;
      border-radius: 50%;
      width: 22px;
      height: 18px;
      line-height: 18px;
      position: absolute;
      top: -12px;
      left: 18px;
    }
  }
  

  //头部购物车
  .cartHeader {
    position: absolute;
    left: -170px;
    top: 45px;
    background-color: #fff;
    width: 410px;
    z-index: 9999;
    opacity: 0;
    height: 10px;
    border: 1px solid #ccc;
    border-radius: 10px;

    .cart-inner {
      position: relative;
      height: 100%;
      width: 100%;
      z-index: 99999;

      //顶部
      .top-item {
        height: 20%;
        border-bottom: 1px solid #F7F7F7;
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 10px;
        border-radius: 10px;

        &:hover {
          .card-delete {
            visibility: visible;
          }
        }

        .img {
          width: 70px;
          height: 70px;
        }

        .card-center {
          flex: 1;
          margin-left: 5px;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          padding: 0 5px;

          p {
            font-size: 1.1rem;
            white-space: pre-line;
            line-height: 1.2;
            padding: 0;
          }

          span:last-child {
            font-size: 0.9rem;
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

          span:last-child {
            font-size: 0.9rem;

          }
        }

        //删除按钮
        .card-delete {
          border: none;
          background-color: transparent;
          visibility: hidden;
          z-index: 99999;
          position: relative;
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
        border-radius: 10px;

        .price {
          color: $priceColor;
          font-size: 1.4rem;
        }

        .el-button {
          background-color: $xtxColor;
          color: #fff;
        }
      }


    }

  }

}</style>