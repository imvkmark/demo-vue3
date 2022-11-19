<template>
    <van-nav-bar title="导航条" left-arrow @click-left="onClickLeft"/>
    <p>
        <van-button type="primary" @click="toggleTrade">
            打开Popup
        </van-button>
    </p>
    <p>
        点击 '打开 Popup' 的时候可以底部弹窗, 但是点击底部弹窗的关闭按钮却无法触发关闭, 需要进行跟踪
    </p>
    <children :show="visibleTrade" @clickCloseIcon="toggleTrade"/>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
import Children from '@/views/vant/Children.vue';
import { Toast } from "vant";

const visibleTrade = ref(false)

const onClickLeft = function () {
    Toast('点击了返回')
}
const toggleTrade = function () {
    visibleTrade.value = !visibleTrade.value
}

</script>
<style lang="less" scoped>
p {
    text-align: center;
}
</style>
