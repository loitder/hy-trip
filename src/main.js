import { createApp } from 'vue'
import App from './App.vue'
//第三方样式
import "normalize.css"
//自定义
import "./assets/css/index.css"
//路由映射
import router from './router'
//状态管理
import pinia from './stores'
createApp(App).use(router).use(pinia).mount('#app')
