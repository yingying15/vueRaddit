<script setup>
import {getBanner} from '@/apis/category.js'
import { ref } from 'vue';
//获取轮播图
const list=ref([])
const getBannerList = async () => {
  const res = await getBanner(1)
  list.value=res.data.result
}
getBannerList()
//从home页面得到分类数据
defineProps({
  pros:{
    type:Array,
  }
})
</script>

<template>
 <!-- 轮播图 -->
 <div class="home-banner">
    <el-carousel height="500px">
      <el-carousel-item v-for="item in list" :key="item.id">
        <img
          :src="item.imgUrl"
          alt="图片">
      </el-carousel-item>
    </el-carousel>
  </div>
  <!-- 分类 -->
  <div class="home-category">
    <ul class="menu">
      <li v-for="item in pros" :key="item.id">
        <RouterLink to="/">{{item.name}}</RouterLink>
        <!-- 只显示前2个 -->
        <RouterLink v-for="child in item.children.slice(0, 2)" :key="child.id" to="/">{{ child.name }}</RouterLink>
        <div class="layer">
          <h4>分类推荐 <small>根据您的购买或浏览记录推荐</small></h4>
          <ul>
            <li v-for="pro in item.goods" :key="pro.id">
              <RouterLink to="/">
                <img :src="pro.picture" alt="" />
                <div class="info">
                  <p class="name ellipsis-2">
                    {{pro.name}}
                  </p>
                  <p class="desc ellipsis">{{pro.desc}}</p>
                  <p class="price"><i>¥</i>{{pro.price}}</p>
                </div>
              </RouterLink>
            </li>
          </ul>
        </div>
      </li>
    </ul>
  </div>

</template>
<style scoped lang="scss">
img {
  width: 100%;
  height: 100%;
}

.home-category {
  background-color: yellow;
  width: 250px;
  background: rgba(0, 0, 0, 0.8);
  height: 500px;
  position: absolute;
  left: 0;
  top: 0;
  z-index: 999;

  .menu {
    li {
      padding-left: 40px;
      height: 55px;
      line-height: 55px;

      &:hover {
        background: $xtxColor;

        // 关键样式  hover状态下的layer盒子变成block
        .layer {
          display: block;
        }
      }

      a {
        margin-right: 4px;
        color: #fff;

        &:first-child {
          font-size: 16px;
        }
      }

      //右边漂浮的框,相对于el-main定位
      .layer {
        width: 1200px;
        // height: 500px;
        height: 100%;
        background: rgba(255, 255, 255, 0.8);
        position: absolute;
        left: 250px;
        top: 0;
        display: none;
        padding: 0 15px;

        h4 {
          font-size: 20px;
          font-weight: normal;
          line-height: 80px;

          small {
            font-size: 16px;
            color: #666;
          }
        }

        //框中的图片列表
        ul {
          display: flex;
          flex-wrap: wrap;

          li {
            width: 310px;
            height: 120px;
            margin-right: 15px;
            margin-bottom: 15px;
            border: 1px solid #eee;
            border-radius: 4px;
            background: #fff;

            &:nth-child(3n) {
              margin-right: 0;
            }

            a {
              display: flex;
              width: 100%;
              height: 100%;
              align-items: center;
              padding: 10px;

              &:hover {
                background: #e3f9f4;
              }

              img {
                width: 95px;
                height: 95px;
              }

              .info {
                padding-left: 10px;
                line-height: 24px;
                overflow: hidden;

                .name {
                  font-size: 16px;
                  color: #666;
                }

                .desc {
                  color: #999;
                }

                .price {
                  font-size: 22px;
                  color: $priceColor;

                  i {
                    font-size: 16px;
                  }
                }
              }
            }
          }
        }
      }
    }
  }
}
</style>