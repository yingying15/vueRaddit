
import request from '@/utils/request.js'
//生成订单
export const getOrder=(data)=>request.post('/member/order',data)

//得到订单详情
export const getOrderMess=(id)=>request.get(`/member/order/${id}`)

//获取订单列表
export const getOrders=(params)=>request.get('/member/order',{params})


