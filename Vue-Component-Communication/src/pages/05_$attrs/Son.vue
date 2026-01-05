<template>
    <div class="son">
        <h2>儿子组件</h2>
        <h4>a: {{ aa }}</h4>
        <h4>c: {{ cc }}</h4>
        <GrandSon v-bind="$attrs" />
    </div>
</template>

<script lang="ts" setup name="father-v-model">
    import GrandSon from './GrandSon.vue'
    // Son组件里接收了 aa和cc，剩余的bb和dd会放在attrs里，被子组件接收
    defineProps(['aa', 'cc'])
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