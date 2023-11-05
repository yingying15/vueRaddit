import request from '@/utils/request'

//加入购物车
export const addCartApi=(data)=>request.post('/member/cart',data)

//获取购物车列表
export const getCartApi=()=>request.get('/member/cart')