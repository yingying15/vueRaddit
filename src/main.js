import './assets/main.css'

import { createApp } from 'vue'
// import { createPinia } from 'pinia'
import pinia  from '@/stores/index.js'
import App from './App.vue'
import router from './router'
import '@/styles/common.scss'
import '@/assets/iconfont/iconfont.css'

const app = createApp(App)

// app.use(createPinia())
app.use(pinia)
app.use(router)

app.mount('#app')
