<template>
    <div class="vant--vuex">
        <div class="page-title">Vuex Test Page</div>
        <p>store Root is: {{ reactiveData.text }}</p>
        <p>store doubleCount is: {{ reactiveData.count }}</p>
        <van-button type="primary" @click="double">double</van-button>
    </div>
</template>

<script lang="ts" setup>
import { computed, reactive } from 'vue'
import { useStore } from '@/store'


const store = useStore()
const reactiveData = reactive({
    text: computed(() => store.state.text),
    count: computed(() => store.state.vant.count)
})

const double = () => {
    store.commit('vant/DOUBLE_COUNT')
}
</script>

<style scoped lang="less">
.vant--vuex {
    text-align: center;
}
</style>
