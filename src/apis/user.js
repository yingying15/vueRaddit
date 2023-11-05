import request from '@/utils/request'

//登录接口
export const login = (data) => 
    request({
        url: '/login',
        method: 'post',
        data
    })

    

