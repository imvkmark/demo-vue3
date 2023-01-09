<template>
    <router-view/>
</template>

<script lang="ts" setup>
import UAParser from "ua-parser-js";

let ua = new UAParser(navigator.userAgent)

let height = '100%';
if (ua.getOS().name === 'iOS' && ua.getOS().version === '15.0') {
    height = '100vh'
}
</script>

<style lang="less">
@import "./assets/less/style.less";
@import "node_modules/@popjs/util/dist/less/index";

#app {
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji";
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    box-sizing: border-box;
    position: relative;
    width: 100%;
    height: v-bind(height);
}
</style>
