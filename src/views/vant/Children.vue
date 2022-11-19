<template>
    <van-popup
        :show="props.show"
        @close="closeArrowLeft"
        round closeable
        position="bottom"
        close-icon-position="top-left">
        <h3>流程</h3>
    </van-popup>
</template>

<script lang="ts" setup>

const props = defineProps({
    show: {
        type: Boolean,
        required: true
    }
})
const emits = defineEmits([
    'clickCloseIcon'
])

const closeArrowLeft = function () {
    emits('clickCloseIcon', false);
}
</script>
<style scoped>
h3 {
    text-align: center;
}
</style>
