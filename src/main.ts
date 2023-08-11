import { createApp } from 'vue'
// route
import router from '@/router/index'
import 'vant/es/toast/style';
import { key, store } from '@/store'
import App from './App.vue'


const app = createApp(App)
app
    .use(router)
    .use(store, key).mount('#app')
