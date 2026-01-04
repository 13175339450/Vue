<template>
    <div class="child">
        <h3>子组件</h3>
        父传来的 => {{ fathInfo }}
        <hr>
        <button @click="sendToFather(childInfo)">传给父亲</button>
    </div>
</template>

<script lang="ts" setup name="child-props">
    import { ref } from 'vue'; 

    const childInfo = ref('SON');
    defineProps(['fathInfo', 'sendToFather'])

</script>

<style scoped>
    .child {
        background-color: skyblue;
        padding: 10px;
        box-shadow: 0 0 10px black;
        border-radius: 10px;
    }
</style>