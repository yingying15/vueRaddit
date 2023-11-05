import request from '@/utils/request'

//加入购物车
export const addCartApi=(data)=>request.post('/member/cart',data)