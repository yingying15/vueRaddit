<!-- 会员中心 -->
<script setup></script>
<template>
    <div class="box">
        <div class="left">
            <p>我的账户</p>
            <a href="/user">个人中心</a>
            <p>交易管理</p>
            <a href="/userOrder">我的订单</a>
        </div>
        <div class="right">
            <router-view></router-view>
        </div>
    </div>
</template>
<style scoped lang="scss">
.box{
    display: flex;
    justify-content: space-between;
    margin-top: 20px;
}
.left{
    width: 15%;
    background-color: #fff;
    padding: 30px;
    p{
        font-size: 1.3rem;
        margin-top: 20px;
        margin-bottom: 5px;
    }
    a{
        margin-left: 5px;
    }
    a:hover{
        color: $xtxColor;
    }
}
.right{
    width: 85%;
    background-color: #fff;
    margin-left: 10px;
}
</style>