import request from '@/utils/request'

//加入购物车
export const addCartApi=(data)=>request.post('/member/cart',data)

//获取购物车列表
export const getCartApi=()=>request.get('/member/cart')

//合并购物车
export const mergeCartApi=(data)=>request.post('/member/cart/merge',data)

//删除商品
export const deleteProApi=(ids)=>request.delete('/member/cart',{data:{ids}})