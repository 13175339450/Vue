<template>
    <ul>
        <!-- <li>编号: {{ route.query.id }}</li>
        <li>名字: {{ route.query.name }}</li>
        <li>年龄: {{ route.query.age }}岁</li> -->
        <li>编号: {{ params.id }}</li>
        <li>名字: {{ params.name }}</li>
        <li>年龄: {{ params.age }}岁</li>
    </ul>
</template>

<script lang="ts" setup name="DogDetail">
    import { toRefs } from 'vue';

    import { useRoute } from 'vue-router';
    const route = useRoute();

    console.log(route);
    // 不能直接解构，否则会失去响应式
    // let {query} = toRefs(route); // Query 传参
    let { params} = toRefs(route); // Params 传参
</script>

<style scoped>

</style>