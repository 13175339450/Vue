<template>
    <div class="father">
        <h2>父组件</h2>
        <hr>
        <!-- $event 是什么？啥时候可以 .target？
            对于原生事件, $event 是事件对象 => 能 .target 获取事件目标元素
            对于自定义事件, $event 是事件触发时传递的参数  => 不能 .target
        -->
        <!-- 语法糖双向绑定 -->
        <!-- <input type="text" v-model="username"> -->
        <!-- 手动实现双向绑定 -->
        <!-- <input type="text" :value="username" @input="username = (<HTMLInputElement>$event.target).value"> -->

        <!-- 自定义 input 组件-->
         <MyInput v-model="username"></MyInput>
        <!-- 自定义组件的手动实现双向绑定 -->
        <!-- <MyInput :value="username" @input="username = $event"></MyInput> -->
    </div>
</template>

<script lang="ts" setup name="father-v-model">
    import { ref } from 'vue'

    // 引入自定义 input 组件
    import MyInput from './MyInput.vue'

    const username = ref('zhangsan')
</script>

<style scoped>
    .father{
        /* 居中 */
        /* 1. 设置一个宽度 */
        width: 900px;
        /* 2. 设置左右外边距为 auto，浏览器会自动平分剩余空间 */
        margin: 0 auto;

        
        background-color: rgb(165, 164, 164);
        padding: 20px;
        border-radius: 10px;
    }
</style>