

import { defineStore } from "pinia";
import {ref,computed} from "vue";
import { getCategory } from '@/apis/category.js'

export const useCategoryStores=defineStore('category', ()=>{
    const cateList=ref('')
    //设置导航分类
    const setList=async()=>{
        const res=await getCategory()
        cateList.value= res.data.result
    }

    const getList=computed(()=>{
        return cateList.value
    })
    return{
        cateList,
        setList,
        getList
    }
});