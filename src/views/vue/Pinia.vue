<template>
    <div class="vant--vuex">
        <div class="page-title">Pinia Test Page</div>
        <p>store Root is: {{ reactiveData.text }}</p>
        <p>store doubleCount is: {{ reactiveData.count }}</p>
        <van-button type="primary" @click="double">double</van-button>
    </div>
</template>

<script lang="ts" setup>
import { computed, reactive } from 'vue'
import { useStorePoppy } from "@/store/poppy";

const storePoppy = useStorePoppy();
const reactiveData = reactive({
    text: computed(() => storePoppy.text),
    count: computed(() => storePoppy.count)
})

const double = () => {
    storePoppy.DoubleCount()
}
</script>

<style scoped lang="less">
.vant--vuex {
    text-align: center;
}
</style>
