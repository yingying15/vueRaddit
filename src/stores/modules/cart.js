import { defineStore } from "pinia";
import {ref,computed} from "vue";
import {addCartApi,getCartApi} from '@/apis/cart.js'

export const useCartStores=defineStore('cart',()=>{

    //数据
    const cartList=ref([])

    //添加购物车,有token,请求接口,向后台添加商品
    const addCart=async(data)=>{
        //添加商品
        await addCartApi(data)
        //得到购物车列表
        const res=await getCartApi()
        cartList.value=res.data.result
    }
    //本地添加商品,没有token
    const addLocalCart=(data)=>{
        //如果已经有商品 数量加上传过来的数量
        const obj=cartList.value.find(item=>data.skuId===item.skuId)
        if(obj){
            obj.count+=data.count
        }else{//如果没有
            cartList.value.push(data)
        }
    }
    //商品数量
    const getCount=computed(()=>{
        return cartList.value.reduce((sum,item)=>sum+=item.count,0)
    })
    //商品总价
    const getPrices=computed(()=>{
           return cartList.value.reduce((prev,item)=>prev+=item.price*item.count,0)
    })
    //删除商品
    const deleteCart=(skuId)=>{
        cartList.value= cartList.value.filter(item=>item.skuId!==skuId)
    }
    //列表跟着全选按钮改变
    const changeAll=(flag)=>{
        cartList.value.forEach(item=>item.selected=flag)
    }
    //设置全选按钮的布尔值
    const isAll = computed(() => cartList.value.every((item) => item.selected))

    //单选改变的时候,列表的单选值改变
    const itemCheck=(selected,skuId)=>{
        cartList.value.forEach(item=>{
            if(item.skuId===skuId){
                item.selected=selected
            }
        })
    }
    //被选中的商品的数量
    const checkGood=computed(()=>{
        return cartList.value.filter((item)=>item.selected).reduce((prev,item)=>prev+=item.count,0)
    })
    //被选中的商品的价格
    const checkGoodPrices=computed(()=>{
        return cartList.value.filter(item=>item.selected).reduce((prev,item)=>prev+=item.price*item.count,0)
    })
   
    
   

    return{
        cartList,
        addCart,
        addLocalCart,
        getCount,
        getPrices,
        deleteCart,
        changeAll,
        isAll,
        itemCheck,
        checkGood,
        checkGoodPrices
    }
},{persist: true})