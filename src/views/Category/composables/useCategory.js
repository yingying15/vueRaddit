//得到动态路由传过来的参数
import { onBeforeRouteUpdate, useRoute } from 'vue-router';
import {getSubCategory} from '@/apis/category.js'
import {ref} from 'vue'
export const useCategory = () => {
    const route=useRoute()
    const list=ref({})
    const getList=async (id=route.params.id)=>{
        const res = await getSubCategory(id)
        list.value=res.data.result
    }
    getList()
    //切换路由的时候 只请求数据接口 不请求轮播图
    onBeforeRouteUpdate((to)=>{
        getList(to.params.id)
    })
    return{
        list
    }
}