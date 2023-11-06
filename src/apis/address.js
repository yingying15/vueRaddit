
import request from '@/utils/request.js'

//添加收货地址
export const  addAddress=(data)=>request.post('/member/address',data)

//获取收货地址
export const getAddress=()=>request.get('/member/address')

//设置默认地址
export const setAddre=(id,data)=>request.put(`/member/address/${id}`,{data})