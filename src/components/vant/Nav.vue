<template>
    <VanTabbar :fixed="true" safe-area-inset-bottom v-model="active">
        <VanTabbarItem
            :name="nav.name"
            v-for="(nav, index) in navList"
            :key="index"
            :class="{ active: nav.isActive }"
            @click="navClick(nav)">
            {{ nav.title }}
        </VanTabbarItem>
    </VanTabbar>
</template>

<script lang="ts" setup>
import { onMounted, ref, watch } from 'vue'
import { useRouter } from 'vue-router'
import { NavItem } from '@/components/vant/types'


const router = useRouter()

const active = ref('home.readme')
const navList = [
    {
        title: 'Readme',
        name: 'home.readme',
        isActive: false
    },
    {
        title: 'Vue',
        name: 'vue.home',
        isActive: false
    },
    {
        title: 'Misc',
        name: 'misc.home',
        isActive: false
    },
    {
        title: 'Vant',
        name: 'vant.home',
        isActive: false
    }
];
const navClick = (e: NavItem) => {
    router.push({
        name: e.name
    })
}

const changeNavActive = (name: any) => {
    navList.forEach((v: NavItem) => {
        if (v.name === name) {
            active.value = v.name
        }
    })
}

watch(
    () => {
        return router.currentRoute.value
    },
    (_n) => {
        changeNavActive(_n.path)
    }
)

onMounted(() => {
    router.isReady().then(() => {
        changeNavActive(router.currentRoute.value.name)
    })
})

</script>
