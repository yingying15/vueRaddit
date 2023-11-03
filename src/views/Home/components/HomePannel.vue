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
        <div class="topLeft">
            <span class="left">{{title}}</span>
            <span class="right">{{subTitle}}</span>
        </div>
        <div class="topRight">
            <slot name="more"></slot>
        </div>
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
        display: flex;
        justify-content: space-between;
        .topLeft{
            flex: 1;
            .left{
            font-size: 3rem;
            margin-right: 10px;
            }
            .right{
                color: #999;
            }
        }
        
    }
}
</style>
