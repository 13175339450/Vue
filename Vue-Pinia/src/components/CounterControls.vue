<template>
  <div class="counter-controls">
    <!-- 按钮区域 -->
    <div class="button-group">
      <button @click="handleDecrement">-</button>
      <button @click="handleIncrement">+</button>
    </div>

    <!-- 步长选择区域 -->
    <div class="step-selector">
      <label for="step">步长:</label>
      <!-- v-model 直接绑定到 store 的 step 属性 -->
      <select id="step" v-model.number="counterStore.step">
        <option value="1">1</option>
        <option value="2">2</option>
        <option value="3">3</option>
        <option value="5">5</option>
      </select>
    </div>
  </div>
</template>

<script setup>
// 从我们创建的 store 文件中引入 useCounterStore 函数
import { useCounterStore } from '@/stores/counter'

// 调用函数，获取 store 实例
const counterStore = useCounterStore()

// 定义按钮的点击事件处理函数
const handleIncrement = () => {
  // 调用 store 中定义的 action 来修改状态
  counterStore.increment()
}

const handleDecrement = () => {
  counterStore.decrement()
}
</script>

<style scoped>
.counter-controls {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
  padding: 20px;
  border: 1px solid #ccc;
  border-radius: 8px;
}
.button-group button {
  padding: 10px 20px;
  font-size: 18px;
  margin: 0 5px;
  cursor: pointer;
}
.step-selector {
  font-size: 16px;
}
.step-selector select {
  margin-left: 10px;
  padding: 5px;
  font-size: 16px;
}
</style>