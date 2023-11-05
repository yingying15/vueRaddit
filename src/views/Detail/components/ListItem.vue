<script setup>
// import GoodItem from '@/components/GoodItem.vue'
defineProps({
    goodDetail: {
        type: Array,
        default: () => []
    },
    title:{
        type: String,
        default: ''
    }

})
</script>
<template>
     <div class="hotList">
        <div class="title">
            <p>{{title}}</p>
        </div>
        <ul>
            <li v-for="(item,index) in goodDetail" :key="index">
                <GoodItem :item="item"></GoodItem>
            </li>
        </ul>
    </div>
</template>
<style scoped lang="scss">
 .hotList{
        width: 250px;
        .title{
            background-color: $helpColor;
            height: 70px;
            width: 100%;
            color: #FFFFFF;
            font-size: 1.5rem;
            padding-left: 20px;
            padding-top: 18px;
        }
        ul{
            margin-top: 20px;
            li{
                margin: auto;
                margin-top: 10px;
                background-color: pink;
            }
        }
    }
</style>