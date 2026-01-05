<template>
    <div class="father">
        <div class="category-container">
            <Category title="美食">
                <ul>
                    <li v-for="item in foods" :key="item.id">{{ item.name }}</li>
                </ul>
            </Category>

            <Category title="图片">
                <img :src="image" alt="">
            </Category>
        </div>
    </div>
</template>

<script lang="ts" setup name="father-father">
    import Category from './Category.vue'
    import { ref } from 'vue'


    const foods = ref([{
        id: 1,
        name: '鸡柳大人'
    }, {
        id: 2,
        name: '鱼香肉丝'
    }, {
        id: 3,
        name: '红烧肉'
    }, {
        id: 4,
        name: '青椒肉丝'
    }])

    const image = ref("https://fastly.picsum.photos/id/149/800/600.jpg?hmac=AYwr6bXmg8NXaFQNGx4kqeW3pTXwKhlaY34NAAwIXCI")

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

    .category-container{
        /* 浮动 */
        display: flex;
        /* 均分开 */
        justify-content: space-evenly;
    }

    img {
        width: 100%;
        height: 75%;
    }
</style>