<!-- 写 HTML 代码 -->
<template>
    <div class="app">
        <h1> Vue </h1>
    </div>
    <!-- 使用 Basic1 组件 -->
    <!-- <Basic1/> -->
    <!-- 使用 Basic2 组件 -->
    <!-- <Basic2/> -->
    <!-- 使用 Compute 组件 -->
    <!-- <Compute/> -->
    <!-- 使用 Watch 组件 -->
    <!-- <Watch/> -->
    <!-- 使用 WatchEffect 组件 -->
    <WatchEffect/>
</template>

<!-- 写 TS 脚本 -->
<!-- <script lang="ts">

    // 引入 Person 组件
    import Basic1 from './components/01-Basics.vue'
    // 引入 Car 组件
    import Basic2 from './components/02-Basic.vue'
    // 引入 Compute 组件
    import Compute from './components/03-Compute.vue'
    // 引入 Watch 组件
    import Watch from './components/04-Watch.vue';
    // 引入 WatchEffect 组件
    import WatchEffect from './components/05-WatchEffect.vue';
    
    export default {
        name: "App", // 定义并导出 App 组件
        components: { // 注册 Person 组件
            Basic1,
            Basic2,
            Compute,
            Watch,
            WatchEffect
        }
    }
</script> -->
<script lang="ts" setup name="App">

    // 引入 Person 组件
    import Basic1 from './components/01-Basics.vue'
    // 引入 Car 组件
    import Basic2 from './components/02-Basic.vue'
    // 引入 Compute 组件
    import Compute from './components/03-Compute.vue'
    // 引入 Watch 组件
    import Watch from './components/04-Watch.vue';
    // 引入 WatchEffect 组件
    import WatchEffect from './components/05-WatchEffect.vue';

</script>

<!-- 写 CSS 样式 -->
<style>
    .app {
        text-align: center;
        color: #42b983;
        background-color: #ddd;
    }
</style>