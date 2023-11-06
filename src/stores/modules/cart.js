import { defineStore } from "pinia";
import {ref,computed} from "vue";
import {addCartApi,getCartApi,mergeCartApi,deleteProApi} from '@/apis/cart.js'
import {useUserStores} from '../index.js'

export const useCartStores=defineStore('cart',()=>{

    //数据
    const cartList=ref([])

    //得到token
    const loginToken=computed(()=>{
        return  useUserStores().user?.token
    })

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
        ElMessage.success('加入购物车成功')
    }
    //商品数量
    const getCount=computed(()=>{
        return cartList.value.reduce((sum,item)=>sum+=item.count,0)
    })
    //商品总价
    const getPrices=computed(()=>{
           return cartList.value.reduce((prev,item)=>prev+=item.price*item.count,0)
    })
    
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

     //被选中的商品
     const checkGoods=computed(()=>{
        return cartList.value.filter(item=>item.selected)
    })

    //被选中的商品的skuid
    const checkSkuId=computed(()=>{
        return cartList.value.filter(item=>item.selected).map(item=>item.skuId)
    })
    //被选中的商品的数量
    const checkGood=computed(()=>{
        return cartList.value.filter((item)=>item.selected).reduce((prev,item)=>prev+=item.count,0)
    })
    //被选中的商品的价格
    const checkGoodPrices=computed(()=>{
        return cartList.value.filter(item=>item.selected).reduce((prev,item)=>prev+=item.price*item.count,0)
    })
   
    //清空本地购物车商品
    const clearLocalCart=()=>{
        cartList.value=[]
    }

    //获取购物车列表
    const getCartList=async()=>{
        const res=await getCartApi()
        cartList.value=res.data.result
    }

    //合并本地购物车,从本地购物车中获取每件商品的属性
    const mergeCart=async()=>{
        //获取本地商品 与后台接口合并
        await mergeCartApi(cartList.value.map(item=>({skuId:item.skuId,selected:item.selected,count:item.count})))
        //获取购物车列表
        await getCartList()
    }

    //删除单个商品
    const skuids=ref([])
    const deleteCart=async(skuId)=>{
        skuids.value.push(skuId)
        //有token
        if(loginToken.value){
            await deleteProApi(skuids.value)
            //获取购物车列表
            await getCartList()
        }else{//没有token
           cartList.value= cartList.value.filter(item=>item.skuId!==skuId)
        }
        
    }
    //批量删除商品
    const deletePro=async(arrSkuid)=>{
        //没有token
        if(!loginToken.value){
            for (const key in cartList.value) {
                for (const item in arrSkuid) {
                   if(key.skuId===item.skuId){
                    //得到索引
                    const index=cartList.value.findIndex(item=>item.skuId===key.skuId)
                    cartList.value.splice(index,1)
                    }
                }
            }
        }else{//有token
            await deleteProApi(arrSkuid)
            //获取购物车列表
            await getCartList()
        }
    }

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
        checkGoodPrices,
        loginToken,
        clearLocalCart,
        mergeCart,
        deletePro,
        checkSkuId,
        getCartList,
        checkGoods
    }
},{persist: true})