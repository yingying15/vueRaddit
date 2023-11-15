<script setup>
import {CircleCheckFilled} from '@element-plus/icons-vue'
import {getOrderMess} from '@/apis/order.js'
import { useRoute } from 'vue-router';
import {ref} from 'vue'
const route=useRoute()
//支付金额
const money=ref(0)
const getMess=async()=>{
    const res=await getOrderMess(route.query.orderId)
    money.value=res.data.result.payMoney
}
getMess()
</script>
<!-- orderId=1721777585169371138 -->
<template>
    <div class="container">
        <el-icon ><CircleCheckFilled /></el-icon>
        <p>订单支付成功</p>
        <p>我们将尽快为您发货</p>
        <p>支付方式:&nbsp;&nbsp;<span>在线支付</span></p>
        <p>支付金额:&nbsp;&nbsp;<span>&yen;&nbsp;{{ money }}</span></p>
        <div class="btn">
            <a href="">查看订单</a>
            <a href="/">进入首页</a>
        </div>
    </div>

</template>

<style scoped lang="scss">
.container{
    position: absolute;
    width:500px;
    height: 500px;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    margin: auto;
    text-align: center;
    .el-icon{
        font-size: 7rem;
        color: $xtxColor;
    }
    p{
        margin-top: 10px;
    }
    p:nth-child(2){
        font-size: 2rem;
        
    }
    p:nth-child(3){
        font-size: 1.2rem;
        color: #999;
    }
    p:nth-child(5){
        span{
            color: $priceColor;
        }
    }

    .btn{
        margin-top: 20px;
        a{
            display: inline-block;
            width: 130px;
            height: 40px;
            line-height: 40px;
            border-radius: 4px;
        }
        a:first-child{
            background-color: $xtxColor;
            color: #fff;
        }
        a:last-child{
            margin-left: 20px;
            background-color: #999;
            color: #fff;
        }
    }
}
</style>