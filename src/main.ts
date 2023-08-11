import { createApp } from 'vue'
// route
import router from '@/router/index'
import 'vant/es/toast/style';
import App from './App.vue'
import useDirective from "@/utils/use-directive";
import { createPinia } from "pinia";

const pinia = createPinia();

const app = createApp(App)


useDirective(app)
    .use(router)
    .use(pinia)
    .mount('#app')
