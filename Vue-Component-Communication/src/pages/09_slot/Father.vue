<template>
    <div class="father">
        <div class="game-container">
                    <Game>
            <!-- 将名为 gameSlot 的插槽内容赋值给 sonData -->
            <template v-slot:gameSlot="sonData">
                <!-- 无序列表 -->
                <ul>
                    <li v-for="item in sonData.games" :key="item.id">{{ item.name }}</li>
                </ul>
            </template>
        </Game>

        <Game>
            <!-- 将名为 gameSlot 的插槽内容结构到 games 数据 -->
            <template v-slot:gameSlot="{ games }">
                <!-- 有序列表 -->
                <ol>
                    <li v-for="item in games" :key="item.id">{{ item.name }}</li>
                </ol>
            </template>
        </Game>

        <Game>
            <!-- 将名为 gameSlot 的插槽内容结构到 games 数据 -->
            <template #gameSlot="{ games }">
                <h3 v-for="item in games" :key="item.id">{{ item.name }}</h3>
            </template>
        </Game>
        </div>
    </div>
</template>

<script lang="ts" setup>
    import Game from './Game.vue'
</script>

<style scoped>
    .father{
        /* 居中 */
        /* 1. 设置一个宽度 */
        width: 900px;
        /* 2. 设置左右外边距为 auto，浏览器会自动平分剩余空间 */
        margin: 0 auto;

        background-color: rgb(165, 164, 164);
        padding: 20px;
        border-radius: 10px;
    }

    .game-container{
        /* 设置浮动 */
        display: flex;
        /* 子元素均分开来 */
        justify-content: space-evenly;
    }
</style>