<template>
    <div class="category">
        <!-- 插槽位置 -->
        <!-- 默认插槽名是 default -->
        <slot name="s1"> <h1>没有则展示默认值1</h1> </slot>
        <slot name="s2"> <h1>没有则展示默认值2</h1> </slot>
    </div>
</template>

<script setup>
</script>

<style scoped>
    .category{
        background-color: skyblue;
        border-radius: 10px;
        box-shadow: 0 0 10px;
        padding: 10px;
        width: 200px;
        height: 300px;
    }
</style>