<script setup>
import homeBanner from './components/HomeBanner.vue'
import homeNew from './components/HomeNew.vue'
import homeHot from './components/HomeHot.vue'
import homHotPai from './components/HomHotPai.vue'
import homeFamily from './components/HomeFamily.vue'
import homeCategory from './components/HomeCategory.vue'
import { ref } from 'vue';
import { useCategoryStores } from '@/stores/index.js'
//定义导航列表数据
const cateList = ref([])
//获取仓库
const cateStores = useCategoryStores()
//调用仓库方法
const getList = async () => {
  await cateStores.setList()
  cateList.value = cateStores.cateList
}
getList()
</script>
<template>
 <homeBanner :pros="cateList"></homeBanner>
 <homeNew></homeNew>
 <homeHot></homeHot>
 <homHotPai></homHotPai>
 <homeFamily v-for="item in cateList.slice(0,4)" :key="item.id" :item="item"></homeFamily>
 <homeCategory v-for="item in cateList.slice(0,1)" :key="item.id" :item="item"></homeCategory>

</template>
<style scoped lang="scss">

</style>
