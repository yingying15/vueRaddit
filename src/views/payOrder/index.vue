<script setup>
import {CircleCheckFilled} from '@element-plus/icons-vue'
import {getOrderMess} from '@/apis/order.js'
import { useRoute } from 'vue-router';
import {useCountDown} from '@/composables/useCountDown.js'
const {formatTime,start}=useCountDown()
//得到路由参数
const route=useRoute()
const getMess=async()=>{
    const res =await getOrderMess(route.query.id)
    //调用倒计时函数
    start(res.data.result.countdown)
}
getMess()
//拼接支付地址http://127.0.0.1:5173/payOrder?id=1721749789407711234
const baseURL='http://pcapi-xiaotuxian-front-devtest.itheima.net'
const backURL='http://127.0.0.1:5173/paycallback'
const redirectUrl=encodeURIComponent(backURL)
const payUrl=`${baseURL}/pay/aliPay?orderId=${route.query.id}&redirect=${redirectUrl}`
</script>

<template>
     <el-breadcrumb separator=">" class="breadcrumb">
        <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
        <el-breadcrumb-item :to="{ path: '/cart' }">购物车</el-breadcrumb-item>
        <el-breadcrumb-item>支付订单</el-breadcrumb-item>
    </el-breadcrumb>
    <el-card class="box-card">
        <div class="inner">
            <div class="left">
                <el-icon ><CircleCheckFilled /></el-icon>
                <p>
                    <span>订单提交成功!请尽快完成支付</span>
                    <span>支付还剩{{formatTime}},超时后将取消订单</span>
                </p>
            </div>
            <p class="right">应付金额:<span>&nbsp;&nbsp;&yen;12</span></p>
        </div>
    </el-card>
    <!--  支付方式-->
    <el-card class="bottom-card">
        <p>选择以下支付方式付款</p>
        <el-divider></el-divider>
        <div class="top">
            <p>支付平台</p>
            <div class="btn">
                <a class="btn-a" >微信支付</a>
                <a class="btn-a" :href="payUrl">支付宝</a>
            </div>
        </div>
        <div class="bottom">
            <p>支付方式</p>
            <div class="btn">
                <el-button size="large">招商银行</el-button>
                <el-button size="large">工商银行</el-button>
                <el-button size="large">建设银行</el-button>
                <el-button size="large">农业银行</el-button>
            </div>
        </div>
    </el-card>
</template>

<style scoped lang="scss">

.breadcrumb{
    margin-top: 20px;
}
.box-card{
    margin-top: 20px;
}
.inner{
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 10px 20px;
    .right{
        font-size: 1.4rem;
        color: #999;
        span{
            font-size: 2rem;
            color: $priceColor;
        }
    }
}
.left{
    height: 200px;
    display: flex;
    align-items: center;
    span{
        display: block;
        font-size: 1.7rem;
    }
    span:last-child{
        font-size: 1.4rem;
        color: #999;
    }
    .el-icon{
        font-size: 5rem;
        color: $sucColor;
    }
    
}

//支付方式
.bottom-card{
    margin-top: 20px;
    p{
        font-size: 1.2rem;
    }
    .btn{
        margin-top: 20px;
        margin-bottom: 20px;
        .btn-a{
            border: 1px solid $xtxColor;
            width: 100px;
        }
        .el-button{
            width: 200px;
        }
    }
}
</style>