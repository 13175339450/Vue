<template>
        <div class="father">
        <h2>父组件</h2>
        房子有: {{ houseNum }} 套
        <button @click="addBookToChildren($refs)">给儿子们每人加书</button>
        <Son1 ref="son1" />
        <Son2 ref="son2" />
    </div>
</template>

<script lang="ts" setup name="father-refs-parent">
    import { ref } from 'vue';
    import Son1 from './Son1.vue'
    import Son2 from './Son2.vue'
import { k } from 'vue-router/dist/router-CWoNjPRp.mjs';

    const houseNum = ref(20)

    // 给儿子们每人加书 需要儿子们暴露 book 属性
    function addBookToChildren(refs:any) {
        for (const key in refs) {
            refs[key].book += 3
        }
    }

    // 对外暴露自己的 houseNum 属性
    defineExpose({houseNum})
</script>

<style scoped>
    .father{
        /* 居中 */
        /* 1. 设置一个宽度 */
        width: 900px;
        /* 2. 设置左右外边距为 auto，浏览器会自动平分剩余空间 */
        margin: 0 auto;

        /* height: 700px; */
        background-color: rgb(165, 164, 164);
        padding: 20px;
        border-radius: 10px;
    }

    hr {
        /* 去掉默认样式 */
        border: none;
    }

    button {
        border-radius: 5px;
        background-color: rgb(230, 200, 164);
        cursor: pointer;
    }
</style>