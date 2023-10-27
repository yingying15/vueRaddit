<script setup>
import homeBanner from './components/HomeBanner.vue'
import homeNew from './components/HomeNew.vue'
import homeHot from './components/HomeHot.vue'

//从首页得到分类数据,传给轮播图组件
defineProps({
  pros:{
    type:Array,
  }
})
</script>
<template>
 <homeBanner :pros="pros"></homeBanner>
 <homeNew></homeNew>
 <homeHot></homeHot>
</template>
<style scoped lang="scss">

</style>
