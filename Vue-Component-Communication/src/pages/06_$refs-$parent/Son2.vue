<template>
    <div class="son">
        <h2>子组件2</h2>
        玩具: {{ toy }}
        <br>
        书: {{ book }} 本
    </div>
</template>

<script lang="ts" setup name="son2-refs-parent">
    import { ref } from 'vue';
    const toy = ref('奥特曼');
    const book = ref(6);

    // 暴露 book 属性供外界获取
    defineExpose({book})
</script>

<style scoped>
    .son{
        /* 子组件2 比 子组件1 高 20px */
        margin-top: 20px;
        background-color: rgb(230, 200, 164);
        padding: 20px;
        border-radius: 10px;
    }

    hr {
        /* 去掉默认样式 */
        border: none;
    }
</style>