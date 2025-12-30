<!-- 写 HTML 代码 -->
<template>
    <div class="app">
        <h1> hello my vue !</h1>
    </div>
    <!-- 使用 Person 组件 -->
    <Person/>
    <!-- 使用 Car 组件 -->
    <Car/>
</template>

<!-- 写 TS 脚本 -->
<script lang="ts">

    // 引入 Person 组件
    import Person from './components/Person.vue'
    // 引入 Car 组件
    import Car from './components/Car.vue'
    
    export default {
        name: "App", // 定义并导出 App 组件
        components: { // 注册 Person 组件
            Person,
            Car
        }
    }
</script>

<!-- 写 CSS 样式 -->
<style>
    .app {
        text-align: center;
        color: #42b983;
        background-color: #ddd;
    }
</style>