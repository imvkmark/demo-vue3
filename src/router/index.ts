import { createRouter, createWebHashHistory, createWebHistory, Router, RouteRecordRaw } from 'vue-router'
import Vant from '@/layouts/Vant.vue';
import Plain from '@/layouts/Plain.vue';

const routes: Array<RouteRecordRaw> = [
    {
        path: '/',
        component: Vant,
        children: [
            { path: '/', redirect: '/readme' },
            { path: 'readme', component: () => import('@/views/home/Home.vue'), name: 'home.readme' },
            { path: 'vue', component: () => import('@/views/vue/Vue.vue'), name: 'vue.home' },
            { path: 'misc', component: () => import('@/views/misc/Misc.vue'), name: 'misc.home' },
            { path: 'vant', component: () => import('@/views/vant/Vant.vue'), name: 'vant.home' }
        ]
    },
    {
        path: '/vue',
        component: Plain,
        children: [
            { path: 'simple', component: () => import('@/views/vue/Simple.vue'), name: 'vue.simple' },
            { path: 'vuex', component: () => import('@/views/vue/Vuex.vue'), name: 'vue.vuex' }
        ]
    },
    {
        path: '/misc',
        component: Plain,
        children: [
            { path: 'request', component: () => import('@/views/misc/Request.vue'), name: 'misc.request' },
            { path: 'height', component: () => import('@/views/misc/Height.vue'), name: 'misc.height' }
        ]
    },
    {
        path: '/vant',
        component: Plain,
        children: [
            { path: 'element', component: () => import('@/views/vant/Element.vue'), name: 'vant.element' },
            { path: 'children', component: () => import('@/views/vant/Children.vue'), name: 'vant.children' },
            { path: 'parent', component: () => import('@/views/vant/Parent.vue'), name: 'vant.parent' }
        ]
    }
]

const router: Router = createRouter({
    history: createWebHistory(),
    routes
})

export default router
