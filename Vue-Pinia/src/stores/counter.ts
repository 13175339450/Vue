// 从 pinia 中引入 defineStore 函数
import { defineStore } from 'pinia'

// 使用 defineStore 定义一个 Store
// 第一个参数 'counter' 是 Store 的唯一 ID，Pinia 用它来连接 DevTools
// 第二个参数是一个选项对象
export const useCounterStore = defineStore('counter', {
  // state 是一个函数，必须返回一个对象，用于存储状态
  state: () => ({
    count: 0,       // 当前的总和
    step: 1,        // 每次加减的步长
  }),

  // actions 是用来修改 state 的方法
  actions: {
    // 增加 count 的方法
    increment() {
      // 在 actions 中，你可以通过 this 直接访问 state 中的属性
      this.count += this.step
    },
    // 减少 count 的方法
    decrement() {
      this.count -= this.step
    },
  },
})