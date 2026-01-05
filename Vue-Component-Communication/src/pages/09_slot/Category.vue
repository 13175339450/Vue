<template>
    <div class="category">
        <h2>{{ title }}</h2>
        <!-- 插槽位置 -->
        <slot> <h1>没有则展示默认值</h1> </slot>
    </div>
</template>

<script setup>
    defineProps(['title'])
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

    h2 {
        /* 文字居中 */
        text-align: center;
        background-color: rgb(42, 165, 89);
        border-radius: 10px;
    }
</style>