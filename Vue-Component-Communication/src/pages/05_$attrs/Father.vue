<template>
    <div class="father">
        <h2>爷爷组件</h2>
        <h4>a: {{ a }}</h4>
        <h4>b: {{ b }}</h4>
        <Son :aa="a" :bb="b" v-bind="{cc:'4', dd:'5'}" />
    </div>
</template>

<script lang="ts" setup name="father-v-model">
    import { ref } from 'vue'

    import Son from './Son.vue'

    const a = ref('1');
    const b = ref('2');
</script>

<style scoped>
    .father{
        /* 居中 */
        /* 1. 设置一个宽度 */
        width: 900px;
        /* 2. 设置左右外边距为 auto，浏览器会自动平分剩余空间 */
        margin: 0 auto;

        height: 700px;
        background-color: rgb(165, 164, 164);
        padding: 20px;
        border-radius: 10px;
    }

    hr {
        /* 去掉默认样式 */
        border: none;
    }
</style>