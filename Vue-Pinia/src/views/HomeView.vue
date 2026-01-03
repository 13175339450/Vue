<template>
  <main class="home-view">
    <h1>Pinia 计数器示例</h1>
    
    <!-- 显示从 store 中获取的 count 值 -->
    <div class="count-display">
      <h2>当前总和: {{ count }}</h2>
    </div>

    <!-- 引入我们创建的计数器组件 -->
    <CounterControls />
  </main>
</template>

<script setup>
// 1. 引入我们的 store 和组件
import { useCounterStore } from '@/stores/counter'
import CounterControls from '@/components/CounterControls.vue'
import {toRefs} from 'vue'
import { storeToRefs } from 'pinia'

// 2. 获取 store 实例
const counterStore = useCounterStore()

// 会将 counterStore里 所有的数据都封装 ref
// let { count } = toRefs(counterStore)

// 只将 store 里的数据封装 ref
let { count } = storeToRefs(counterStore)
</script>

<style scoped>
.home-view {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  background-color: #f5f5f5;
}
.count-display {
  font-size: 24px;
  margin: 20px 0;
  padding: 20px 40px;
  background-color: #fff;
  border-radius: 8px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
}
</style>