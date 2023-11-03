//获取二级分类下面具体的商品列表
/**
 * @description: 获取导航数据
 * @data { 
     categoryId: 1005000 ,
     page: 1,
     pageSize: 20,
     sortField: 'publishTime' | 'orderNum' | 'evaluateNum'
   } 
 * @return {*}
 */
import request from '@/utils/request'
//获取路由数据,渲染面包屑
export const getSubCategoryList = (id) => request.get('/category/sub/filter',{params:{id}})

//获取tab标签页下面的具体商品
export const getSubCategoryAPI = (data) => request.post('/category/goods/temporary',data)



    