<template>
    <div class="x--list">
        <h3>Misc 其他</h3>
        <p>
            <router-link :to="{ name: 'misc.request'}">Mock</router-link>
        </p>
        <p>
            <router-link :to="{ name: 'misc.height'}">Height(高度)</router-link>
        </p>
        <p>
            <router-link :to="{ name: 'misc.geo'}">Geo(获取地理位置)</router-link>
        </p>
    </div>
</template>

<script lang="ts" setup>

</script>
