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

const app = createApp(App)

// app.use(createPinia())
app.use(pinia)
app.use(router)
//插件注册
app.use(componentPlugin)
app.mount('#app')

