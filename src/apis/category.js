import request from '@/utils/request'

//获取导航分类
export const getCategory = () =>
  request.get('/home/category/head')

//获取轮播图
export const getBanner = () => request.get('/home/banner') 

//获取新鲜好物
export const getNew = () => request.get('/home/new')

//获取人气推荐
export const getHot = () => request.get('/home/hot')