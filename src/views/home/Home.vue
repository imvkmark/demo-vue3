<template>
    <div class="home-container">
        <p>
            <img class="logo" alt="Vue logo" src="@/assets/logo.png"/>
        </p>
        <p>
            Vite3.x + Vue3.x + TypeScript + Vant3
        </p>
        <p>
            IconFont
            <icon-font type="icon-measure"/>
            Antdv
        </p>
    </div>
    <div class="x--list">
        <p>
            本项目基于 Vite / Vue3 / TypeScript / Vant3 的可以用于正式开发用的一个骨架
        </p>
    </div>
</template>

<script lang="ts" setup>
import IconFont from '@/components/core/IconFont';</script>

<style scoped lang="less">
.home-container {
    text-align: center;
    padding-top: 20px;
    .logo {
        width: 20%;
    }
}
</style>
