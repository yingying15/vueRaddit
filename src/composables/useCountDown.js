//封装倒计时函数
import {ref,onUnmounted,computed} from 'vue'
import dayjs from 'dayjs'
export const useCountDown=()=>{
    let timer=null
    //定义返回值,就是变化的时间
    const time=ref(0)
    //每次时间变化都要传出去,所以要实时更改格式
    const formatTime = computed(() => dayjs.unix(time.value).format('mm分ss秒'))
    //定义逻辑函数
    const start=(startTime)=>{
        //将传进来的值赋值给,要报露在外面的formateTime
        time.value=startTime
        timer=setInterval(()=>{
            time.value--
        },1000)
    }
    //页面销毁时候清除定时器
    onUnmounted(()=>timer && clearInterval(timer))
    return{
        formatTime,
        start
    }
}