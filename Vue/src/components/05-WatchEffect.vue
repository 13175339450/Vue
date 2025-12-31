<template>
    <div class="watchEffect">
        <h2>当水温超过80℃ 或 水位超过40cm 触发服务器报警</h2>
        <div>
            <p>当前温度：{{ temprature }} ℃</p>
            <p>当前水位：{{ waterheight }} cm</p>
            <button @click="increaseWater">增加水位</button>
            <button @click="increaseTemp">增加温度</button>
        </div>
    </div>
    
</template>

<!-- 总结：
    监视的要是对象里的属性，那么最好写函数式，注意点：若是对象监视的是地址值，需要关注对象内部，需要手动开启深度监视
-->
<script lang="ts" setup name="Watch-HXL">

    import { ref, watch, watchEffect } from 'vue';
    const temprature = ref(0);
    const waterheight = ref(0);

    function increaseTemp() {
        temprature.value += 10;
    };

    function increaseWater() {
        waterheight.value += 10;
    };

    // 1. 使用 Watch 监视
    // watch([temprature, waterheight], ([newTemp, newWater], [oldTemp, oldWater]) => {
    //     if (newTemp >= 80 || newWater >= 40) {
    //         console.log('Watch: 警报！水温或水位过高！');
    //     }
    // });

    // 2. 使用 WatchEffect 监视
    // 注意：WatchEffect 会在组件挂载时立即执行一次 并且监视 所有在其内部访问的响应式数据
    watchEffect(() => {
        if (temprature.value >= 80 || waterheight.value >= 40) {
            console.log('WatchEffect: 警报！水温或水位过高！');
        }
    });

</script>

<style>
    .watchEffect {
        border: 1px solid #ccc;
        padding: 20px;
        margin: 20px;
        text-align: center;
    }
</style>