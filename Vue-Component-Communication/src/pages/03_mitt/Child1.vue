<template>
    <div class="child">
        <h2>子组件1: 哥哥</h2>
        哥哥的电脑: {{ computer }}
        <hr>
        <button @click="emitter.emit('give-computer', computer)">给弟弟送电脑玩</button>
    </div>
</template>

<script lang="ts" setup name="child1-mitt">
    // 引入mitt事件总线
    import emitter from '@/utils/emitter';
    import { ref } from 'vue';

    const computer = ref("笔记本电脑");
</script>

<style scoped>
    .child {
        background-color: skyblue;
        padding: 10px;
        box-shadow: 0 0 10px black;
        border-radius: 10px;
    }
</style>