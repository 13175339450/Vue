<template>
    <div class="child">
        <h3>子组件</h3>
        <hr>
        <button @click="emit('send-info', sonInfo)">给父亲发送信息</button>
    </div>
</template>

<script lang="ts" setup name="child-props">
    import { ref } from 'vue'; 

    let sonInfo = ('SON')
    // 声明事件
    const emit = defineEmits(['send-info'])
</script>

<style scoped>
    .child {
        background-color: skyblue;
        padding: 10px;
        box-shadow: 0 0 10px black;
        border-radius: 10px;
    }
</style>