<template>
    <div class="game">
        <h2>游戏</h2>
        <slot name="gameSlot" :games="gameList"></slot>
    </div>
</template>

<script setup lang="ts">
    import { ref } from 'vue'
    
    // 数据定义在子里
    const gameList = ref([{
        id: 1,
        name: '王者荣耀'
    }, {
        id: 2,
        name: '原神'
    }, {
        id: 3,
        name: '和平精英'
    }, {
        id: 4,
        name: '使命召唤16'
    }])
</script>

<style scoped>
    .game{
        width: 200px;
        background-color: skyblue;
        border-radius: 10px;
        box-shadow: 0 0 10px;
        text-align: center;
    }
</style>