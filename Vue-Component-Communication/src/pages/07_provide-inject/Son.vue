<template>
    <div class="son">
        <h2>儿子组件</h2>
        <GrandSon/>
    </div>
</template>

<script lang="ts" setup name="father-v-model">
    import GrandSon from './GrandSon.vue'
</script>

<style scoped>
    .son{
        background-color: rgb(164, 230, 175);
        padding: 20px;
        border-radius: 10px;
    }

    hr {
        /* 去掉默认样式 */
        border: none;
    }
</style>