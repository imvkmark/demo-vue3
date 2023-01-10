<template>
    <router-view/>
</template>

<script lang="ts" setup>

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
    height: var(--wr-app-height);
}
</style>
