<template>
    <div class="click">
        <VanButton ref="refButton" @click="showClickToast" type="primary" v-prevent-click="3000" class="button">测试点击(自定义指令)
        </VanButton>
        <div ref="refDiv" v-prevent-click class="button" @click="showDivToast">
            Div 点击测试
        </div>
        <VanButton @click="showClickToast" type="primary" class="button" :disabled="true">测试点击</VanButton>
        <VanButton @click="showClickToast" type="primary" class="button">测试点击</VanButton>
    </div>
</template>

<script lang="ts" setup>

import { showToast } from "vant";
import { ref } from "vue";
import { canDoNext } from "@/utils/utils";

const refButton = ref(null)
const refDiv = ref<HTMLElement>()

let i = 1;
const showClickToast = () => {
    showToast(String(i++))
}
const showDivToast = () => {
    canDoNext(refDiv.value) && (
        showToast(String(i++))
    )
}

</script>

<style lang="less" scoped>
.click {
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    .button {
        position: relative;
        top: -20%;
    }
}
</style>
