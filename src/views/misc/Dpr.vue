<template>
    <div class="dpr">
        这里限定的图片宽度是 300
        <p>加载 300 宽度</p>
        <img :src="imageFix(myUrl, 300)" width="300" alt="300"/>
        <p>加载 600 宽度</p>
        <img :src="imageFix(myUrl, 600)" width="300" alt="600"/>
        <p>自动根据 DPR 加载, DPR {{ dpr }}</p>
        <img :src="image(myUrl, 300)" width="300" alt="DPR"/>
        <p>加载 1080 宽度</p>
        <img :src="imageFix(myUrl, 1080)" width="300" alt="1080"/>
        <p>加载原图</p>
        <img :src="imageFix(myUrl)" width="300" alt="origin"/>

        <hr>
        这里限定的图片宽度是 300
        <p>加载 300 宽度</p>
        <img :src="imageFix(thirdUrl, 300)" width="300" alt="300"/>
        <p>加载 600 宽度</p>
        <img :src="imageFix(thirdUrl, 600)" width="300" alt="600"/>
        <p>自动根据 DPR 加载, DPR {{ dpr }}</p>
        <img :src="image(thirdUrl, 300)" width="300" alt="DPR"/>
        <p>加载 1080 宽度</p>
        <img :src="imageFix(thirdUrl, 1080)" width="300" alt="1080"/>
        <p>加载原图</p>
        <img :src="imageFix(thirdUrl)" width="300" alt="origin"/>
    </div>
</template>

<script lang="ts" setup>

const dpr = window.devicePixelRatio;

const myUrl = 'https://test-oss.iliexiang.com/_res/images/02.jpg';
const thirdUrl = 'https://mofangyo.oss-cn-hangzhou.aliyuncs.com/ccimgs/18b38fb34b1f4601ad5cc52e85a71e85.jpg';

const image = (url: string, width: number = 0) => {
    const w = Number(width * window.devicePixelRatio).toFixed(0);
    if (!width) {
        return url;
    }
    return url + '?x-oss-process=image/resize,l_' + w;
}
const imageFix = (url: string, width: number = 0) => {
    if (!width) {
        return url;
    }
    return url + '?x-oss-process=image/resize,l_' + width;
}

</script>

<style lang="less" scoped>
.dpr {
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
}
</style>
