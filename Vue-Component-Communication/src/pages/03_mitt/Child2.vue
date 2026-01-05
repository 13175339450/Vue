<template>
    <div class="child">
        <h2>子组件2: 弟弟</h2>
        弟弟的玩具: {{ toy }}
        <hr>
        哥哥给的电脑: {{ computer }}
    </div>
</template>

<script lang="ts" setup name="child2-mitt">
    // 引入mitt事件总线
    import emitter from '@/utils/emitter';
    import { onUnmounted, ref } from 'vue';

    const toy = ref("奥特曼");

    const computer = ref("");
    
    // 这里的value就是哥哥传递过来的电脑，不能重名为computer，否则会覆盖掉computer
    emitter.on('give-computer', (value:any) => {
        console.log(value);
        computer.value = value;
    })

    // 组件卸载时，移除事件监听，可以避免内存泄漏
    onUnmounted(() => {
        emitter.off('give-computer');
    })
</script>

<style scoped>
    .child {
        background-color: skyblue;
        padding: 10px;
        box-shadow: 0 0 10px black;
        border-radius: 10px;
    }
</style>