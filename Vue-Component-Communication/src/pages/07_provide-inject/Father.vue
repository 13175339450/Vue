<template>
    <div class="father">
        <h2>爷爷组件</h2>
        存款: {{ money }} 万元
        <br>
        车: {{ car.name }} 价值 {{ car.price }} 万元
        <hr>
        <Son/>
    </div>
</template>

<script lang="ts" setup name="father-v-model">
    import { ref, provide } from 'vue'
    import Son from './Son.vue'

    const money = ref(1000000)
    const car = ref({
        name: '奔驰',
        price: 1000,
    })

    function costMoney(value:number) {
        money.value -= value
    }

    // 提供 money 和 car 给子组件使用
    provide('moneyContext', {money, costMoney})
    provide('car', car)
</script>

<style scoped>
    .father{
        /* 居中 */
        /* 1. 设置一个宽度 */
        width: 900px;
        /* 2. 设置左右外边距为 auto，浏览器会自动平分剩余空间 */
        margin: 0 auto;

        height: 700px;
        background-color: rgb(165, 164, 164);
        padding: 20px;
        border-radius: 10px;
    }

    hr {
        /* 去掉默认样式 */
        border: none;
    }
</style>