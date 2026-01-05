<template>
    <div class="grandSon">
        <h2>孙子组件</h2>
        <h4>a: {{ aa }}</h4>
        <h4>b: {{ bb }}</h4>
        <h4>c: {{ cc }}</h4>
        <h4>d: {{ dd }}</h4>
    </div>
</template>

<script lang="ts" setup name="father-v-model">
    // Son组件里接收了 aa和cc，则GrandSon组件里只能接收到 bb 和 dd
    defineProps(['aa', 'bb', 'cc', 'dd'])
</script>

<style scoped>
    .grandSon{
        /* 居中 */
        background-color: rgb(149, 185, 186);
        padding: 20px;
        border-radius: 10px;
    }

    hr {
        /* 去掉默认样式 */
        border: none;
    }
</style>