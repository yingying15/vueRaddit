<!-- 我的订单 -->
<script setup>
import { getOrders }  from '@/apis/order.js'
import { ref } from 'vue';
const  orders=ref([])
//请求订单列表对象
const params=ref({
    orderState:0,//分类
    page:1,//第几页
    pageSize:3//每页多少条
})
//订单的所有状态1为待付款、2为待发货、3为待收货、4为待评价、5为已完成、6为已取消

//得到订单列表
const getOrds=async()=>{
    const res =await getOrders(params.value)
    orders.value=res.data.result.items
    totalcount.value=res.data.result.counts
}
getOrds()
//得到订单状态
const getPaySate=(payState)=>{
    const payStates={
        1:'待付款',
        2:'待发货',
        3:'待收货',
        4:'待评价',
        5:'已完成',
        6:'已取消'
    }
    return payStates[payState]
}
//得到选中的订单状态
const handleClick=(state)=>{
    params.value.orderState=state.props.name
    getOrds()
}
//分页
const totalcount=ref(0)

const changePage=(currenPage)=>{
    params.value.page=currenPage
    getOrds()
}
</script>
<template>

    <el-tabs v-model="activeName" class="demo-tabs" @tab-click="handleClick">
        <el-tab-pane label="全部订单" name="0"></el-tab-pane>
        <el-tab-pane label="待付款" name="1"></el-tab-pane>
        <el-tab-pane label="待发货" name="2"></el-tab-pane>
        <el-tab-pane label="待收货" name="3"></el-tab-pane>
        <el-tab-pane label="待评价" name="4"></el-tab-pane>
        <el-tab-pane label="已完成" name="5"></el-tab-pane>
        <el-tab-pane label="已取消" name="6"></el-tab-pane>
    </el-tabs>
    <ul>
        <li v-for="item in orders" :key="item.id">
            <!-- 顶部 -->
            <div class="top">
                <p>
                    <span>下单时间:{{ item.createTime }}</span>
                    <span>订单编号:{{ item.id }}</span>
                </p>
            </div>
            <!-- 底部 -->
            <div class="top-bot">
                <div class="avator">
                    <img :src="item.skus[0]?.image" alt="">
                    <p>
                        <span>{{item.skus[0]?.name}}</span><br>
                        <span>{{item.skus[0]?.attrsText}}</span>
                    </p>
                </div>
                <p>&yen;{{ item.skus[0]?.realPay }}</p>
                <p>x{{ item.totalNum }}</p>
                <el-divider direction="vertical" />
                <p class="border-left">{{ getPaySate(item.orderState) }}</p>
                 <el-divider direction="vertical" />
                <div class="inner border-left">
                    <p>&yen;{{ item.skus[0]?.realPay*item.totalNum+item.postFee }}</p>
                    <p>(含运费{{ item.postFee }})</p>
                    <p>在线支付</p>
                </div>
                <el-divider direction="vertical" />
                <a href="" class="border-left">查看详情</a>
            </div>
        </li>
    </ul>
    <div class="footer">
        <el-pagination background layout="prev, pager, next" :total="totalcount" :page-size="params.pageSize" @current-change="changePage"/>
    </div>

</template>
<style scoped lang="scss">
//标签页
.demo-tabs{
    padding-left: 10px;
}

//顶部
.top{
    padding: 10px;
    background-color: #F5F5F5;
    height: 50px;
    margin-top: 10px;
    span{
        margin-right: 5px;
    }
}
//中部
.top-bot{
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 120px;
    .avator{
        flex: 1;
        display: flex;
        justify-content: flex-start;
        align-items: flex-start;
        img{
            width: 90px;
        }
        p{
            margin-left: 10px;
            span{
                white-space: pre-line;
            }
            span:first-child{
                height: 2.2rem;
                margin: 0;
            }
            span:last-child{
                color: #999;
                display: inline-block;
                margin-top: 10px;
            }
        }
    }
    &>p{
        width: 60px;
    }
    &>p:nth-child(2){
        text-align: right;
        color: $priceColor;
        font-size: 1.2rem;
    }
    &>p:nth-child(3){
        text-align: right;
    }
    .inner{
        width: 100px;
    }
    .el-divider{
        height: 7rem;
    }
    & :first-child{
        margin-left:10px;
    }
    
    .border-left{
        width: 100px;
        text-align: center;
    }

}
//底部

.el-pagination{
    justify-content: flex-end;
    padding-right: 40px;
    padding-top: 30px;
    padding-bottom: 20px;
}
</style>