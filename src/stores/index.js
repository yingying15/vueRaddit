import { createPinia } from 'pinia'
//得到仓库实例
const pinia = createPinia()
//导出仓库实例
export default pinia
//导入category仓库
export * from '@/stores/modules/category.js'