<template>
    <div class="grandSon">
        <h2>孙子组件</h2>
        <h4>爷爷的存款: {{ money }} 万元</h4>
        <h4>爷爷的车: {{ car.name }} 价值 {{ car.price }} 万元</h4>
        <button @click="costMoney(3)">花钱</button>
    </div>
</template>

<script lang="ts" setup name="father-v-model">
    import { inject } from 'vue'

    // 接收 money 和 car 从父组件提供的
    let {money, costMoney} = inject('moneyContext', {money: 0, costMoney: (x:number)=>{}})
    // 通过默认值隐晦提示 父组件的car里有name和price属性
    const car = inject('car', {name: '未知', price: 0})
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

    button {
        border-radius: 5px;
        background-color: rgb(230, 200, 164);
        cursor: pointer;
    }
</style>