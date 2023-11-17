<script setup>
import { ref, watch} from 'vue'
import { useMouseInElement } from '@vueuse/core'
//从父亲那获取图片集合
defineProps({
    pictures:{
        type:Array,
        default:()=>[]
    }
})
//大图片的索引
const LargePicture=ref(0)
//鼠标移入小图片的时候,切换大图片
const changePicture=(index)=>{
    LargePicture.value=index
}
//右边大图片 背景图片从什么位置开始显示
const positionX=ref(0)
const positionY=ref(0)
//左边遮罩层 
const leftX=ref(0)
const topY=ref(0)
//得到鼠标距离图片的距离
const target = ref(null)
const { elementX, elementY, isOutside } = useMouseInElement(target)
//监听鼠标移动的位置距离,elementX代表距离左边的位置,elementY代表距离右边的位置,isOutside代表鼠标是否移入图片
watch([elementX, elementY, isOutside],()=>{
    //true没有移入,false移入
   if(isOutside.value) return
    //鼠标距离图片x的位置,小于100的时候 不要改变遮罩层的位置
    if(elementX.value<=100){
        leftX.value=0
    }
    //鼠标距离图片x的位置,大于100,小于300的时候 遮罩层的位置要被改变,所以定位的距离要变化
    if(elementX.value>100 && elementX.value <300){
        leftX.value=elementX.value-100
    }
    //鼠标距离图片x的位置,大于300的时候 不要改变遮罩层的位置 并且遮罩层要位于最右边,就是大图片的宽度减去遮罩层的宽度,200
    if(elementX.value>=300){
        leftX.value=200
    }
    //鼠标距离图片y的位置,小于100的时候 不要改变遮罩层的位置顶部还是顶在上边框
    if(elementY.value<=100){
        topY.value=0
    }
    //鼠标距离图片顶部的位置大于100小于300的时候,应该是鼠标的位置减去100
    if(elementY.value>100 && elementY.value<300){
        topY.value=elementY.value-100
    }
    //鼠标的位置大于300的时候,遮罩层的位置不动,顶在图片的下边框
    if(elementY.value>=300){
        topY.value=200
    }
    //控制右边大图的背景开始的位置
    positionX.value=-leftX.value*2
    positionY.value=-topY.value*2
})

// :style="{backgroundImage:`url(${pictures[0]})`,backgroundPositionX:`${positionX}px`,backgroundPositionY:`${positionY}px`}"></div>

</script>
<template>
     <div class="left-header" v-if="pictures">
        <div class="largePic" ref="target">
            <img :src="pictures[LargePicture]" alt="图片">
            <!-- 遮罩层 -->
            <div class="zhe" :class="{largePicActive:!isOutside}" :style="{left:`${leftX}px`,top:`${topY}px`}"></div>
            <!-- 右边显示的大图片 -->
            <div class="largePic-right" :class="{largePicActive:!isOutside}"
             :style="{backgroundImage:`url(${pictures[LargePicture]})`,backgroundPositionX:`${positionX}px`,backgroundPositionY:`${positionY}px`}"></div>
        </div>
        <ul>
            <li v-for="(item, index) in pictures" :key=index @mouseenter="changePicture(index)" :class="{active:index===LargePicture}">
                <img :src="item" alt="图片">
            </li>
        </ul>
    </div>
</template>
<style scoped lang="scss">
.left-header {
    display: flex;
    justify-content: space-between;
    .largePic{
        width: 400px;
        height: 400px;
        position: relative;
        //左边大图片的遮罩层
        .zhe{
            width: 200px;
            height: 200px;
            position: absolute;
            // left: 0;
            // top: 0;
            background-color: pink;
            opacity: 0.3;
            //默认隐藏
            display: none;
        }
        //右边显示的大图片
        .largePic-right{
            width: 400px;
            height: 400px;
            position: absolute;
            left: 410px;
            top: 0;
            //默认隐藏
            display: none;
        }
        //显示
        .largePicActive{
            display: block;
        }
    }
    

    //右边小图片
    ul {
        width: 110px;
        margin: 0;
        padding: 0;

        li {
            width: 70px;
            height: 70px;
            margin-top: 12px;
            margin-left: 5px;
            object-fit: cover;
            &:first-child {
                margin-top: 0;
            }

            img {
                background: none;
            }
        }
    }
    //选中图片时候显示的样式
    .active{
        border: 2px solid $xtxColor;
    }
}
</style>
