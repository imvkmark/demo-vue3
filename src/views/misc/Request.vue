<template>
    <div class="vant--request">
        <p>
            Axios Request Page
            <br>
            请求在 Mock 模式下可用, 使用 Better-Mock 生成的数据
        </p>
        <p>
            <van-button type="primary" @click="getUserInfo">
                点击获取XPoet信息
            </van-button>
        </p>
        <div v-if="userInfo?.name">name: {{ userInfo?.name }}</div>
        <div v-if="userInfo?.bio">bio: {{ userInfo?.bio }}</div>
        <div v-if="userInfo?.blog">blog: {{ userInfo?.blog }}</div>
    </div>
</template>

<script lang="ts" setup>
import { ref, Ref } from 'vue'
import { apiUserProfileInfo } from '@/services/user/profile';

const userInfo: Ref = ref(null)
const loading = ref(false)

const getUserInfo = () => {
    loading.value = true
    apiUserProfileInfo()
        .then((response) => {
            console.log('response: ', response)
            userInfo.value = response.data
            loading.value = false
        })
        .catch((error) => {
            loading.value = false
            console.error(error)
        })
}
</script>

<style scoped>
.vant--request {
    text-align: center;
}
</style>
