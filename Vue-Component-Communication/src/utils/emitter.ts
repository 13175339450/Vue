// 引入 mitt 库
import mitt from 'mitt'

// 创建 mitt 实例为 emitter，绑定事件、触发事件
const emitter = mitt()

// 暴露 emitter 实例
export default emitter
