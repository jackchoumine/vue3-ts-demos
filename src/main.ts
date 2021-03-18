import { createApp } from 'vue'
import App from './App.vue'

import { setupRouter } from './route/index'

const app = createApp(App)
setupRouter(app)
app.mount('#app')
