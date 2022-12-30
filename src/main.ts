import { createApp } from 'vue'
// ui @vant
import useUi from '@/utils/use-ui'
// route
import router from '@/router/index'
import { key, store } from '@/store'
import App from './App.vue'


const app = createApp(App)
useUi(app)
    .use(router)
    .use(store, key).mount('#app')
