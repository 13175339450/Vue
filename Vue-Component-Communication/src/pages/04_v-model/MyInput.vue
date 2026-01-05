<template>
    <input type="text" :value="modelValue" @input="emit('update:modelValue', (<HTMLInputElement>$event.target).value)">
</template>

<script lang="ts" setup name="my-input">
    // 定义属性 modelValue，用于接收父组件传递的值
    defineProps(['modelValue'])
    // 定义事件 update:modelValue是自定义事件名，用于更新父组件的 modelValue
    const emit = defineEmits(['update:modelValue'])
</script>

<style scoped>
    input {
        width: 300px;
        height: 30px;
        font-size: 20px;
        padding: 5px;
        border-radius: 5px;
        border: 1px solid #d60e0e;
    }
</style>