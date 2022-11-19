<template>
    <div class="x--list">
        <h3>Vant</h3>
        <p>
            <router-link :to="{ name: 'vant.element'}">Vant 元素</router-link>
            <router-link :to="{ name: 'vant.parent'}">Parent</router-link>
            <router-link :to="{ name: 'vant.children'}">Children</router-link>
        </p>
    </div>
</template>

<script lang="ts" setup>
</script>
