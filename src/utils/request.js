import axios from 'axios'
import { useUserStores } from '@/stores/index.js'
import router from '@/router/index.js'

const instance = axios.create({
  baseURL: 'http://pcapi-xiaotuxian-front-devtest.itheima.net',
  timeout: 5000,

});



// 添加请求拦截器
instance.interceptors.request.use(function (config) {
  //仓库
  const userStore = useUserStores()
  //如果有token，将token添加到请求头中
  const token = userStore.user.token
  if (token) {
    config.headers.Authorization = `Bearer ${token}`
  }
  return config;
}, function (error) {
  // 对请求错误做些什么
  return Promise.reject(error);
});

// 添加响应拦截器
instance.interceptors.response.use(function (response) {
  // 2xx 范围内的状态码都会触发该函数。
  return response;
}, function (error) {
  //token过期
  if (error.response.status === 401) {
    const userStore = useUserStores()//仓库
    ElMessage.error('已过期,请重新登录')
    router.push('/login')
    userStore.clearUser()
    return
  }
  // 超出 2xx 范围的状态码都会触发该函数。报错
  ElMessage.error(error.response.data.message);
  return Promise.reject(error);
});

export default instance