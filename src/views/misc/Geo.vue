<template>
    <div class="height">
        {{ totalFetchTime }}
        <p v-if="success">
            <a v-if="url" :href="url" target="_blank">{{ status }}</a>
        </p>
        <p v-else>
            {{ status }}
        </p>
    </div>
</template>

<script lang="ts" setup>
import { onMounted, ref } from "vue";
import Timer from "easytimer.js";


const status = ref('');
const totalFetchTime = ref('');
const url = ref('')
const success = ref(false);

onMounted(() => {
    // 计时器
    const timer = new Timer();
    timer.start({
        callback: (timer: Timer) => {
            totalFetchTime.value = timer.getTotalTimeValues().toString();
            if (success.value) {
                timer.stop();
            }
        }
    })

    // 检查是否支持
    if (!navigator.geolocation) {
        status.value = '你的浏览器不支持地理位置';
    } else {
        status.value = '定位中……';
        navigator.geolocation.getCurrentPosition((position: GeolocationPosition) => {
            success.value = true;
            const latitude = position.coords.latitude;
            const longitude = position.coords.longitude;

            status.value = `纬度：${latitude} °，经度：${longitude} °`;
            url.value = `https://www.openstreetmap.org/#map=18/${latitude}/${longitude}`;
        }, () => {
            status.value = '无法获取你的位置信息'
        });
    }
})

</script>

<style lang="less" scoped>
.height {
    padding: 10px 8px;
    height: 100%;
    overflow-y: auto;
}
</style>
