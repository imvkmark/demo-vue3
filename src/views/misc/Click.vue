<template>
    <div class="click">
        <VanButton @click="showClickToast" type="primary" class="button">测试点击</VanButton>
    </div>
</template>

<script lang="ts" setup>

import { showToast } from "vant";

let i = 1;
const showClickToast = () => {
    showToast(String(i++))
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
