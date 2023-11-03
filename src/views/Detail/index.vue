<script setup>
import { getGoodsDetail } from '@/apis/goodDetail.js'
import { ref } from 'vue'
//得到路由参数
import { useRoute } from 'vue-router';
const route = useRoute()
//商品对象
const goodDetail = ref({})
//获取商品详情
const getDetails = async () => {
    const res = await getGoodsDetail(route.params.id)
    goodDetail.value = res.data.result
}
getDetails()
//切换标签
const activeName = ref('proMessage')
</script>
<template>
    <div class="box">
        <!-- 面包屑 goodDetail.categories可选链 前面的goodDetail.categories有值 才会请求后面的属性,或者用v-if也可以的-->
        <el-breadcrumb separator=">" class="breadcrumb">
            <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
            <el-breadcrumb-item :to="{ path: `/category/${goodDetail.categories?.[1].id}` }">{{
                goodDetail.categories?.[1].name }}</el-breadcrumb-item>
            <el-breadcrumb-item
                :to="{ path: `/SubCategory/${goodDetail.categories?.[0].id}` }">{{ goodDetail.categories?.[0].name }}</el-breadcrumb-item>
            <el-breadcrumb-item>{{ goodDetail?.name }}</el-breadcrumb-item>
        </el-breadcrumb>
        <el-card>
            <div class="box">
                <div class="left">
                    <div class="left-header">
                        <img :src="goodDetail.mainPictures?.[0]" alt="图片">
                        <ul>
                            <li v-for="(item, index) in goodDetail.mainPictures" :key=index>
                                <img :src="item" alt="图片">
                            </li>
                        </ul>
                    </div>
                    <ul class="left-footer">
                        <li>
                            <p>销量人气</p>
                            <p>{{ goodDetail.salesCount }}+</p>
                            <p>销量人气</p>
                        </li>
                        <el-divider direction="vertical" border-style="solid" />
                        <li>
                            <p>商品评价</p>
                            <p>{{ goodDetail.commentCount }}+</p>
                            <p>查看评价</p>
                        </li>
                        <el-divider direction="vertical" border-style="solid" />
                        <li>
                            <p>收藏人气</p>
                            <p>{{ goodDetail.collectCount }}+</p>
                            <p>收藏商品</p>
                        </li>
                        <el-divider direction="vertical" border-style="solid" />
                        <li>
                            <p>品牌信息</p>
                            <p>{{ goodDetail.brand?.name }}</p>
                            <p>品牌主页</p>
                        </li>
                        <li></li>
                    </ul>
                </div>
                <div class="right">
                    <p>{{ goodDetail.name }}</p>
                    <p>{{ goodDetail.desc }}</p>
                    <p>&yen;{{ goodDetail.price }}<span>&yen;{{ goodDetail.oldPrice }}</span></p>
                    <div class="rightMess">
                        <p class="rightP">促销<span>忙忙忙忙忙忙忙</span></p>
                        <p class="rightP">配送<span>忙忙忙忙忙忙忙</span></p>
                        <p class="rightP">服务<span>忙忙忙忙忙忙忙</span></p>
                    </div>
                    <p>规格</p>
                    <p>数量</p>
                    <el-button size="large" >加入购物车</el-button>
                </div>
            </div>
        </el-card>
        <!-- 商品详情-->
        <div class="product-card">
            <el-tabs v-model="activeName" type="card" class="demo-tabs">
                <el-tab-pane label="商品详情" name="proMessage">
                </el-tab-pane>
                <el-tab-pane label="商品评价" name="proAssess">
                </el-tab-pane>
            </el-tabs>
            <div class="body">
                <div class="mes" v-if="activeName === 'proMessage'">
                    <div class="top">
                        <p>容量<span>容量</span></p>
                        <p>产地<span>产地</span></p>
                        <p>材质<span>材质</span></p>
                    </div>
                    <div class="footer">
                        <img :src="item" v-for="(item, index) in goodDetail.details.pictures" :key="index" alt="图片">
                    </div>
                </div>
                <div class="assess" v-else>
                    <div class="top">
                        <div class="left-top">
                            <div class="common">
                                <span class="common-span">{{ goodDetail.salesCount }}<span>人购买</span></span>
                                <span class="common-span">{{ goodDetail.evaluationInfo?.praisePercent
                                }}<span>好评率</span></span>
                            </div>
                        </div>
                        <el-divider direction="vertical" border-style="solid" />
                        <div class="right-top">
                            <span>大家都在说:</span>
                            <div class="right-top-item">
                                <el-button size="large" >全部评价</el-button>
                                <el-button size="large" >有图</el-button>
                                <el-button size="large" >瘾</el-button>
                                <el-button size="large" >瘾</el-button>
                                <el-button size="large" >瘾</el-button>
                                <el-button size="large" >瘾</el-button>
                            </div>
                        </div>
                    </div>
                    <el-divider border-style="solid" />
                    <div class="footer">
                        评价内容
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<style scoped lang="scss">
.breadcrumb {
    margin-top: 20px;
}

.el-card {
    margin-top: 20px;
    height: 700px;

    .box {
        height: 600px;
        display: flex;
        justify-content: space-between;
        // border: 1px solid green;
        box-sizing: border-box;

        //左边
        .left {
            width: 44%;

            // border: 1px solid red;
            //上半部分图片
            .left-header {
                display: flex;
                justify-content: space-between;

                //左边大图片
                img {
                    width: 430px;
                    height: 450px;
                    object-fit: cover;
                    background: none;
                }

                //右边小图片
                ul {
                    width: 110px;
                    margin: 0;
                    padding: 0;

                    li {
                        width: 100px;
                        height: 80px;
                        margin-top: 12px;
                        margin-left: 5px;

                        &:first-child {
                            margin-top: 0;
                        }

                        img {
                            background: none;
                        }
                    }
                }
            }

            //下面内容
            .left-footer {
                display: flex;
                justify-content: space-between;
                flex: 1;
                padding: 20px;

                li {
                    height: 100px;
                    width: 25%;
                    text-align: center;
                    padding-top: 20px;

                    p {
                        margin-top: 5px;
                    }

                    p:nth-child(2) {
                        color: $priceColor;
                    }
                }

                .el-divider {
                    font-size: 4rem;
                    margin-top: 20px;
                }
            }
        }

        //右边
        .right {
            width: 56%;
            height: 500px;
            // border: 1px solid blue;
            padding: 0 40px;
            display: flex;
            flex-direction: column;
            justify-content: space-between;
            align-items: flex-start;

            p {
                white-space: nowrap;
                text-overflow: ellipsis;
                overflow: hidden;
                width: 600px;
            }

            //right的儿子
            &>p:nth-child(1) {
                font-size: 2rem;
            }

            &>p:nth-child(2) {
                color: grey;
            }

            &>p:nth-child(3) {
                font-size: 1.5rem;
                color: $priceColor;

                span {
                    font-size: 1rem;
                    text-decoration: line-through;
                    color: grey;
                    margin-left: 7px;
                }
            }

            .marginTop {
                margin-top: 10px;
            }

            //促销框
            .rightMess {
                padding: 0 10px;
                height: 140px;
                width: 500px;
                background-color: #F5F5F5;

                //文字
                .rightP {
                    color: grey;
                    margin-top: 20px;
                    white-space: nowrap;
                    text-overflow: ellipsis;
                    overflow: hidden;
                    width: 450px;

                    span {
                        color: black;
                        margin-left: 20px;
                    }
                }
            }
        }
    }
}

//商品详情
.product-card {
    width: 1000px;
    background-color: #FFFFFF;
    margin-top: 20px;
    padding: 20px 30px;

    //商品详情
    .body {
        padding: 0 5px;

        .top {
            display: flex;
            justify-content: space-between;
            flex-wrap: wrap;

            p {
                width: 400px;
                margin-bottom: 20px;

                span {
                    margin-left: 50px;
                }
            }
        }

        //下半部分
        .footer {
            img {
                width: 900px;
                object-fit: 1;
            }
        }
    }

    //商品评价
    .assess {
        box-sizing: border-box;

        //顶部
        .top {
            display: flex;
            height: 200px;
            //左边
            .left-top {
                height: 200px;
                width: 300px;
                display: flex;
                justify-content: space-evenly;

                .common {
                    display: flex;
                    justify-content: space-evenly;
                    height: 70px;
                    width: 100%;
                    margin: auto;

                    .common-span {
                        text-align: center;
                        font-size: 2rem;
                        color: $priceColor;
                        display: flex;
                        flex-direction: column;
                        align-items: center;

                        span {
                            font-size: 1rem;
                            color: gray;
                        }
                    }
                }
            }

            .el-divider--vertical {
                height: 11rem;
                margin-top: 20px;
            }

            //右边
            .right-top {
                flex: 1;
                height: 200px;
                display: flex;
                span{
                    display: inline-block;
                    height: 20px;
                    font-size: 1.1rem;
                    font-weight: bold;
                    margin-top: 30px;
                }
                .right-top-item{
                    flex: 1;
                    display: flex;
                    flex-wrap: wrap;
                    align-content: center;
                    justify-content: flex-start;
                    height: 180px;
                    .el-button{
                        width: 30%;
                        margin-left: 10px;
                        margin-bottom: 10px;
                        background-color: #F5F5F5;
                        &:hover{
                            background-color: $xtxColor;
                            color: #FFFFFF;
                            opacity: 0.7;
                        }
                    }
                }
            }
        }

        //分割线
        .el-divider--horizontal{
            margin-top: 0;
        }
        //底部
    }
}</style>
