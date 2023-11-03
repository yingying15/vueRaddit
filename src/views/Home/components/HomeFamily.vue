<script setup>
defineProps({
    item:{
        type:Array,
    }
})
</script>
<template>
    <div class="box">
        <div class="top" >
            <p>{{item.name}}</p>
            <div class="left">
                <router-link class="left-a" to="/" v-for="i in item.children.slice(0,4)" :key="i.id">{{i.name}}</router-link>
            </div>
            <div class="right">
                <router-link class="right-a" to="/">查看全部</router-link>&gt;
            </div>
        </div>
        <div class="bottom">
            <router-link to="/">
                <img :src="item.picture" alt="图片" class="left">
            </router-link>
            <ul>
                <li v-for="j in item.goods.slice(0,8)" :key="j.id">
                    <img :src="j.picture" alt="图片">
                    <p>{{j.name}}</p>
                    <p class="message">{{j.desc}}</p>
                    <span class="money">&yen;{{j.price}}</span>
                    <div class="qian">
                        <span>找相似</span>
                        <el-divider />
                        <router-link to="/" class="rou">发现更多商品&gt;</router-link>
                    </div>
                </li>
            </ul>
        </div>
    </div>
</template>
<style scoped lang="scss">
.top{
    display: flex;
    justify-content: space-between;
    align-items: center;
    p{
        flex: 1;
        font-size: 3rem;
        padding-top: 0.9rem;
    }
    .left{
        margin-right: 50px;
        .left-a{
            margin-right: 10px;
            font-size: 1.2rem;
        }
    }
    .right-a{
        font-size: 1.2rem;
        color: #66667F;
    }
}
.bottom{
    margin-top: 20px;
    display: flex;
    height: 606px;
    justify-content: space-between;
    .left{
        height: 100%;
        width: 240px;
        object-fit: contain;
        flex: 1;
        margin-right: 5px;
    }
    ul{
        display: flex;
        justify-content: space-between;
        flex-wrap: wrap;
        width: 1020px;
        li{
            margin: 0;
            padding: 10px 25px;
            height: 300px;
            width: 240px;
            display: flex;
            flex-direction: column;
            align-items: flex-start;
            justify-content: space-between;
            //配合抽屉
            position: relative;
            .qian{
                opacity: 0;
                position: absolute;
                width: 100%;
                height: 80px;
                left: 0;
                bottom: 0;
                background-color: $xtxColor;
                //向下平移自身的高度
                // transform: translateY(100%);
                display: flex;
                flex-direction: column;
                justify-content: space-between;
                align-items: center;
                padding: 5px 0;
                color: #fff;
                //字体大小
                span{
                    font-size: 1.5rem;
                }
                .el-divider{
                    margin: 0;
                    padding: 0;
                    width: 50%;
                }
                .rou{
                    color: #fff;
                }
            }
            p{
                font-size: 1.1rem;
                white-space:nowrap; 
                width:100%; 
                overflow:hidden; 
                text-overflow:ellipsis;
            }
            .message{
                color: #66667F;
                font-size: 1.1rem;
            }
            &:hover{
                border: 1px solid $xtxColor;
                .qian{
                    opacity: 1;
                    // visibility: visible;
                    //相对于自己的位置 回到自己最初的位置
                    // transform: translateY(0);
                    transition: all .5s;
                }
            }
            //钱的颜色
            .money{
                color: $priceColor;
                font-size: 1.5rem;
                // margin-top: 3px;
            }
        }
    }
}
</style>