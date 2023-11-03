import './assets/main.css'

import { createApp } from 'vue'
// import { createPinia } from 'pinia'
import pinia  from '@/stores/index.js'
import App from './App.vue'
import router from './router'
import '@/styles/common.scss'
import '@/assets/iconfont/iconfont.css'
//注册全局组件,插件注册的方式
import {componentPlugin} from '@/components/index.js'
//使用vueuse得到指定元素是否会显示在视口中
import { useIntersectionObserver } from '@vueuse/core'

const app = createApp(App)

// app.use(createPinia())
app.use(pinia)
app.use(router)
//插件注册
app.use(componentPlugin)
app.mount('#app')


//注册全局指令,监听传进来的el元素,这里是img，binding是传进来指令的参数
app.directive('lazy-img',{
    //页面渲染的时候执行
    mounted(el,binding){
        //监听元素是否显示在视口中,isIntersecting是个布尔值,true代表进入到视口中
        useIntersectionObserver(
            el,
            ([{ isIntersecting }]) => {
                //进入到视口中,就加载图片 就是给src赋值
                if(isIntersecting){
                    //el图片元素
                    el.src=binding.value
                }

            },
        )
    }
})

