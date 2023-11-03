//商品详情
import request from '@/utils/request'

//得到商品详情
export const getGoodsDetail = (id) => request.get('/goods',{params:{id}})
