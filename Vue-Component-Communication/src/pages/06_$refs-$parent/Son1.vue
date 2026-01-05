<template>
    <div class="son">
        <h2>子组件1</h2>
        电脑: {{ computer }}
        <br>
        书: {{ book }} 本
        <!-- 根据组件嵌套关系 接受对应的父组件实例 -->
        <button @click="minusHouse($parent)">减掉父亲一套房产</button>
    </div>
</template>

<script lang="ts" setup name="son1-refs-parent">
    import { ref } from 'vue';
    const computer = ref('联想');
    const book = ref(5);

    // 子组件1 调用父组件的 minusHouse 方法
    function minusHouse(parent:any) {
        parent.houseNum--
    }

    // 暴露 computer 和 book 属性供外界获取
    defineExpose({computer, book})
</script>

<style scoped>
    .son{
        /* 子组件1 离 父组件上层 20px */
        margin-top: 20px;
        background-color: rgb(164, 230, 175);
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