/* 封装轮播图逻辑函数 */
import {getBanner} from '@/apis/category.js'
import {ref} from 'vue'
export const useBanner = () => {
    const bannerList=ref([])
    //id如果没有值的话 传个默认值 因为第一次请求页面的时候需要得到路由的id
    const getBannerList = async () => {
    const res = await getBanner(2)
    bannerList.value=res.data.result
    }
    getBannerList()
    //然后把数据以return方式返回出去
    return{
        bannerList
    }
}