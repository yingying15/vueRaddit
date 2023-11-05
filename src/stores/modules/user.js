import { defineStore } from "pinia";
import {ref} from "vue";
import { login } from '@/apis/user.js'


export const useUserStores= defineStore('userStore',()=>{
    //用户数据
    const user=ref({})

    //登录请求
    const tologin=async (data)=>{
        const res =await login(data)
        user.value=res.data.result
    }
    //清空用户信息
    const clearUser=()=>{
        user.value={}
    }
    //暴露出去
    return{
        tologin,
        user,
        clearUser
    }
},{persist: true})