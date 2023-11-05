import { createPinia } from 'pinia'
import piniaPluginPersistedstate from 'pinia-plugin-persistedstate'
//得到仓库实例
const pinia = createPinia()
pinia.use(piniaPluginPersistedstate)
//导出仓库实例
export default pinia
//导入category仓库
export * from '@/stores/modules/category.js'
//导入user仓库
export * from '@/stores/modules/user.js'    
//导入cart仓库
export * from '@/stores/modules/cart.js'    