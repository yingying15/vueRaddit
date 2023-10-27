<!-- 封装新鲜好物,人气推荐等的组件,标题由引用组件的 组件传进来,内容用插槽显示 -->
<script setup>
defineProps({
    title:{
        type:String
    },
    subTitle:{
        type:String
    }
})
</script>
<template>
<div class="pannel">
    <div class="top">
        <span class="left">{{title}}</span>
        <span class="right">{{subTitle}}</span>
    </div>
    <slot name="new"></slot>
</div>

</template>
<style scoped lang="scss">
.pannel{
    margin-top: 20px;
    //面板上部分
    .top{
        margin-bottom: 20px;
        .left{
            font-size: 3rem;
            margin-right: 10px;
        }
        .right{
            color: #999;
        }
    }
}
</style>
