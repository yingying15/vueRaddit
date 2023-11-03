import ImageView from './ImageView/index.vue';
import XtxSku from './XtxSku/index.vue';
//全局注册组件
export const componentPlugin={
    install(app){
    // app.component('组件名字'，组件配置对象)
    app.component('ImageVi',ImageView)
    app.component('XtxSku',XtxSku)
    }
}

