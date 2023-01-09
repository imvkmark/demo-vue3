<template>
    <div class="height">
        <code>
            os :
            <br>
            {{ ua.getOS() }} <br>
            browser :
            <br>
            {{ ua.getBrowser() }} <br>
            engine :
            <br>
            {{ ua.getEngine() }} <br>
            device :
            <br>
            {{ ua.getDevice() }} <br>
            cpu :
            <br>
            {{ ua.getCPU() }} <br>
            ua :
            <br>
            {{ ua.getUA() }} <br>
            dpr : {{ dpr }}
        </code>
    </div>
</template>

<script lang="ts" setup>
import { onMounted, ref } from "vue";
import UAParser from "ua-parser-js";

let ua = new UAParser(navigator.userAgent)

let canvas, gl, glRenderer;

const gu = ref('')
const dpr = window.devicePixelRatio;

function getCanvas() {
    canvas = document.createElement('canvas');
    console.log(canvas);
    return canvas;
}

function getGl() {
    gl = getCanvas().getContext('experimental-webgl');

    return gl;
}

function getGlRenderer() {
    let debugInfo = getGl().getExtension('WEBGL_debug_renderer_info');
    console.log(getGl(), debugInfo, getGl().getParameter(debugInfo.UNMASKED_RENDERER_WEBGL));
    glRenderer = debugInfo == null ? 'unknown' : getGl().getParameter(debugInfo.UNMASKED_RENDERER_WEBGL);

    return glRenderer;
}

function getModels() {
    var gpu = getGlRenderer();
    gu.value = gpu;
}

onMounted(() => {
    getModels()
})

</script>

<style lang="less">
#app {
    border: 4px solid var(--wr-border-color);
}
</style>
<style lang="less" scoped>
.height {
    border: 1px solid var(--wr-title-color);
    box-sizing: border-box;
    height: 100%;
    overflow-y: auto;
}
</style>
