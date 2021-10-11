import { createApp } from 'vue'
import App from './App.vue'

import { setupRouter } from './route/index'

const app = createApp(App)

// 全局配置
// app.config.compilerOptions.isCustomElement
// 全局属性
app.config.globalProperties.appName = 'my vue3 demo'

function plugin() {
  console.log('vue plugin')
}

app.use(plugin)

// 全局混入
app.mixin({
  beforeCreate() {
    console.log('beforeCreate')
  },
})

// 注册全局组件
app.component('GlobalComponent', {})
// app.directive('') // 全局指令

setupRouter(app)
app.mount('#app')
