import request from '@/utils/request'

//获取导航分类
export const getCategory = () =>
  request.get('/home/category/head')

//获取轮播图
export const getBanner = (distributionSite) => request.get('/home/banner',{params:{distributionSite}}) 

//获取新鲜好物
export const getNew = () => request.get('/home/new')

//获取人气推荐
export const getHot = () => request.get('/home/hot')

//获取热门品牌
export const getBrand = () => request.get('/home/brand')

//获取商品
export const getGoods = () => request.get('/goods')

//获取二级分类列表
export const getSubCategory = (id) => request.get('/category',{
  params:{
    id
  }
})