import { defineStore } from "pinia";
import {ref} from "vue";
import {addCartApi} from '@/apis/cart.js'

export const useCartStores=defineStore('cart',()=>{

    //数据
    const cartList=ref([])

    //添加购物车,有token,请求接口
    const addCart=async(data)=>{
        const res=await addCartApi(data)
        cartList.value.push(res.data.result)
    }
    // //本地添加商品,没有token
    const addLocalCart=(data)=>{
        //如果已经有商品 数量加上传过来的数量
        const obj=cartList.value.find(item=>data.skuId===item.skuId)
        if(obj){
            obj.count+=data.count
        }else{//如果没有
            cartList.value.push(data)
        }
    }

    return{
        cartList,
        addCart,
        addLocalCart
    }
},{persist: true})