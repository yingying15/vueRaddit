<!-- 最新专题 -->
<script setup>
import { Star,View,ChatDotSquare} from '@element-plus/icons-vue'

defineProps({
    item:{
        type:Object,
    }
})

</script>
<template>
    <div class="box">
        <div class="top">
            <p>最新专题</p>
            <router-link to="/" class="right">查看全部&gt;</router-link>
        </div>
         <ul  class="bottom">
            <li  v-for="i in item.goods.slice(0,3)" :key="i.id">
                <div class="header">
                    <!-- 全局指令,图片懒加载,只有图片出现在视口范围内,才会加载该图片 -->
                    <img v-lazy-img="i.picture" alt="图片">
                    <div class="header-bot">
                        <div class="left">
                            <p>{{i.name}}</p>
                            <p>{{i.desc}}</p>
                        </div>
                        <div class="right">
                            <el-button class="button">&yen;{{i.price}}起</el-button>
                        </div>
                    </div>
                </div>
                <div class="footer">
                   <span><el-icon><Star /></el-icon>&nbsp;2222</span>
                   <span><el-icon><View /></el-icon>&nbsp;1111</span>
                   <span><el-icon><ChatDotSquare /></el-icon>&nbsp;212</span>
                </div>
            </li>
        </ul> 
    </div>
</template>
<style scoped lang="scss">
.box{
    margin-top: 20px;
    
    
    .top{
        display: flex;
        justify-content: space-between;
        align-items: center;
        p{
            font-size: 3rem;
        }
        .right{
            font-size: 1.2rem;
        }
    }
    .bottom{
        margin-top: 20px;
        display: flex;
        justify-content: space-between;
        li{
            width: 33%;
            height: 330px;
            box-shadow: 5px 5px 10px #d8d3d3;
            background-color: #f7eded;
            //顶部
            .header{
                height: 80%;
                position: relative;
                //图片
                img{
                    width: 100%;
                    height: 100%;
                    object-fit: cover;
                }
                //内容
                .header-bot{
                    position: absolute;
                    left: 0;
                    bottom: 0;
                    width: 100%;
                    height: 20%;
                    display: flex;
                    justify-content: space-between;
                    align-items: center;
                    padding: 0 10px;
                    font-size: 1.2rem;
                    color: #fff;
                    .left{
                        p{
                            text-overflow: ellipsis;
                            overflow: hidden;
                            white-space: nowrap;
                            width: 250px;
                        }
                    }
                    .right{
                        .button{
                            color: $priceColor;
                            font-size: 1.1rem;
                        }
                        
                    }
                }
                
            }
            .footer{
                display: flex;
                justify-content: space-between;
                align-items: center;
                height: 20%;
                padding: 0 10px;
                span{
                    width: 70px;
                    font-size: 1.1rem;
                }
                span:nth-child(2){
                    flex: 1;
                }
            }
        }
    }
}
</style>