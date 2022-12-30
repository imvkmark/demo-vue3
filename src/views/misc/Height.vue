<template>
    <div class="height">
        <code>
            # app { height:100% }
        </code>
        <br>
        <code>
            # height {height: 100%;}
        </code>
        <div v-for="x in 100" :key="x">
            <p>
                Axios Request Page {{ x }} / 100
            </p>
        </div>
    </div>
</template>

<script lang="ts" setup>

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
