<template>
    <div>
        <h2>Watch 示例</h2>
        <p>当前数字：{{ number }}</p>
        <button @click="changeSum">增加数字</button>
    </div>
    
</template>

<script lang="ts" setup name="Watch-HXL">

    import { ref, watch } from 'vue';

    //------ 简单类型 ------
    const number = ref(0);

    function changeSum() {
        number.value += 1;
    };

    const stopWatch = watch(number, (newVal, oldVal) => {
        console.log(`Number changed from ${oldVal} to ${newVal}`);
        if (newVal >= 5) {
        stopWatch(); // 停止监听
        }
    });

    //------ 复杂类型 ------
</script>