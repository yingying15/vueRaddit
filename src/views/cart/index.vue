<script setup>

import {useCartStores} from '@/stores/index.js'
import { ref } from 'vue';
import { useRouter } from 'vue-router';
const cartStores=useCartStores()
const cartList=ref([])
cartList.value=cartStores.cartList


//全选 复选框的change事件会默认得到复选框的布尔值,全选按钮布尔与列表布尔一致
const changeChec=(selected)=>{
  cartStores.changeAll(selected)
}

//单选 改变单选的布尔值
const changeItem=(selected,skuId)=>{
  cartStores.itemCheck(selected,skuId)
}

const dialogVisible=ref(false)

//删除单个商品
const delCart=async(i)=>{
  await cartStores.deleteCart(i.skuId)
  cartList.value=cartStores.cartList
}

//批量删除商品
const deleteProducts=async()=>{
   dialogVisible.value=false
   await cartStores.deletePro(cartStores.checkSkuId)
   cartList.value=cartStores.cartList
}

//下单结算
const router=useRouter()
const settlement=()=>{
  if(cartStores.checkGood===0){
    ElMessage.warning('至少选择一个商品')
    return
  }
  router.push({path:'/order'})
  
}

</script>


<template>
  <div class="xtx-cart-page">
    <div class="container m-top-20">
      <div class="cart">
        <table>
          <thead>
            <tr>
              <th width="120">
                <el-checkbox :model-value="cartStores.isAll" @change="changeChec"/>
              </th>
              <th width="400">商品信息</th>
              <th width="220">单价</th>
              <th width="180">数量</th>
              <th width="180">小计</th>
              <th width="140">操作</th>
            </tr>
          </thead>
          <!-- 商品列表 -->
          <tbody>
            <tr v-for="i in cartList" :key="i.id">
              <td>
                <el-checkbox :model-value="i.selected"  @change="(selected)=>changeItem(selected,i.skuId)"/>
              </td>
              <td>
                <div class="goods">
                  <RouterLink to="/"><img :src="i.picture" alt="" /></RouterLink>
                  <div>
                    <p class="name ellipsis">
                      {{ i.name }}
                    </p>
                  </div>
                </div>
              </td>
              <td class="tc">
                <p>&yen;{{ i.price }}</p>
              </td>
              <td class="tc">
                <el-input-number v-model="i.count" />
              </td>
              <td class="tc">
                <p class="f16 red">&yen;{{ (i.price * i.count).toFixed(2) }}</p>
              </td>
              <td class="tc">
                <p>
                  <el-popconfirm title="确认删除吗?" confirm-button-text="确认" cancel-button-text="取消" @confirm="delCart(i)">
                    <template #reference>
                      <a href="javascript:;">删除</a>
                    </template>
                  </el-popconfirm>
                </p>
              </td>
            </tr>
            <tr v-if="cartList.length === 0">
              <td colspan="6">
                <div class="cart-none">
                  <el-empty description="购物车列表为空">
                    <el-button type="primary">随便逛逛</el-button>
                  </el-empty>
                </div>
              </td>
            </tr>
          </tbody>

        </table>
      </div>
      <!-- 操作栏 -->
      <div class="action">
        <div class="batch">
          共 {{ cartStores.getCount }} 件商品，已选择 {{cartStores.checkGood}} 件，商品合计：
          <span class="red">¥ {{cartStores.checkGoodPrices.toFixed(2)}} </span>
        </div>
        <div class="total">
          <el-button class="delete-btn" size="large" type="danger" @click="dialogVisible = true">删除</el-button>
           <!-- 确认删除 -->
           <el-dialog
            v-model="dialogVisible"
            width="30%">
          <span>确定要删除么</span>
            <template #footer>
              <span class="dialog-footer">
                <el-button @click="dialogVisible = false">取消</el-button>
                <el-button type="primary" @click="deleteProducts">
                  确定
                </el-button>
              </span>
            </template>
          </el-dialog>
          <el-button size="large" type="primary" @click="settlement">下单结算</el-button>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.xtx-cart-page {
  margin-top: 20px;

  .cart {
    background: #fff;
    color: #666;

    table {
      border-spacing: 0;
      border-collapse: collapse;
      line-height: 24px;

      th,
      td {
        padding: 10px;
        border-bottom: 1px solid #f5f5f5;

        &:first-child {
          text-align: left;
          padding-left: 30px;
          color: #999;
        }
      }

      th {
        font-size: 16px;
        font-weight: normal;
        line-height: 50px;
      }
    }
  }

  .cart-none {
    text-align: center;
    padding: 120px 0;
    background: #fff;

    p {
      color: #999;
      padding: 20px 0;
    }
  }

  .tc {
    text-align: center;

    a {
      color: $xtxColor;
    }

    .xtx-numbox {
      margin: 0 auto;
      width: 120px;
    }
  }

  .red {
    color: $priceColor;
  }

  .green {
    color: $xtxColor;
  }

  .f16 {
    font-size: 16px;
  }

  .goods {
    display: flex;
    align-items: center;

    img {
      width: 100px;
      height: 100px;
    }

    >div {
      width: 280px;
      font-size: 16px;
      padding-left: 10px;

      .attr {
        font-size: 14px;
        color: #999;
      }
    }
  }

  .action {
    display: flex;
    background: #fff;
    margin-top: 20px;
    height: 80px;
    align-items: center;
    font-size: 16px;
    justify-content: space-between;
    padding: 0 30px;

    .xtx-checkbox {
      color: #999;
    }

    .batch {
      a {
        margin-left: 20px;
      }
    }

    .red {
      font-size: 18px;
      margin-right: 20px;
      font-weight: bold;
    }
    //删除按钮
    .delete-btn{
      margin-right: 10px;
    }
  }

  .tit {
    color: #666;
    font-size: 16px;
    font-weight: normal;
    line-height: 50px;
  }

}
</style>
<!-- <style scoped lang="scss">
.el-table{
  font-size: 1.2rem;
  padding: 0 10px;
 
  //商品信息
  .proMessage{
    display: flex;
    justify-content: flex-start;
    align-items: center;
    border: 1px  solid pink;
    .img{
      width: 120px;
      height: 120px;
    }
    .proMessage-right{
      margin-left: 10px;
    }
  }
}
</style> -->