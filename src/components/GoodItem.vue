<!-- 商品详情 -->
<script setup>
defineProps({
    item:{
        type:Object
    }
})
</script>
<template>
    <!-- 商品详情组件,外部传过来item集合,集合中有几个数据,就循环几个 -->
        <li>
            <img :src="item.picture" alt="图片">
            <p>{{item.name}}</p>
            <p>{{item.desc}}</p>
            <p>&yen;{{item.price}}</p>
        </li>
</template>
<style lang="scss" scoped>
 //具体分类
    li{
        width: 205px;
        margin-left: 15px;
        padding: 20px;
        list-style-type: none;
        img{
            height: 130px;
            width: 96%;
            object-fit: cover;
            margin-bottom: 10px;
        }
        p{
            width: 100%;
            margin-top: 7px;
        }
        p:nth-child(2){
            font-size: 1.2rem;
            text-overflow: ellipsis;
            overflow: hidden;
            white-space: nowrap;
        }
        p:nth-child(3){
            font-size: 1rem;
            text-overflow: ellipsis;
            overflow: hidden;
            white-space: nowrap;
            color: #999999;
        }
        p:nth-child(4){
            font-size: 1.4rem;
            color: $priceColor;
        }
        &:hover {
            transform: translateY(-3px);
            box-shadow: 0 3px 8px rgb(0 0 0 / 20%);
            transition: all .5s;
        }
    }
</style>