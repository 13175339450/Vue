<template>
    <div class="car">
        <div class="car1">
            <h2>汽车信息</h2>
            <p>品牌: {{ car1.brand }}</p>
            <p>价格: {{ car1.price }} 万元</p>
            <button @click="addPrice1"> 涨价 </button>
        </div>
        <div class="car2">
            <h2>汽车信息</h2>
            <p>品牌: {{ car2.brand }}</p>
            <p>价格: {{ car2.price }} 万元</p>
            <button @click="addPrice2"> 涨价 </button>
        </div>
    </div>

</template>

<script lang="ts" setup>
    // 导入ref函数 和 reactive函数
    import { ref, reactive } from "vue";
    
    //------------ 对象类型 响应式数据 ------------
    let car1 = reactive({
        brand: "特斯拉",
        price: 50,
    });

    let car2 = ref({
        brand: "宝马",
        price: 70,
    });

    //------------ 修改对象类型 响应式数据 ------------
    function addPrice1() {
        car1.price += 5;
    }
    // ref对象 修改属性 需要通过 .value 来访问，因为 ref包装了一层 reactive
    function addPrice2() {
        car2.value.price += 5;
    }
</script>

<style scoped>
    /* 在相对位置下才能使用 % */
    .car {
        /* 子绝父相 */
        position: relative;
        width: 400px;
        height: 150px;
        border: 2px solid #000;
        background-color: aqua;
        /* 外边距 */
        margin: 20px auto; 
        /* 内边距 */
        padding: 10px;
    }
    .car1 {
        position: absolute;
        top: 0;
        left: 10%;
        /* background-color: #42b983; */
    }

    .car2 {
        position: absolute;
        top: 0;
        right: 10%;
        /* background-color: #42b983; */
    }

    button {
        position: relative;
        margin-top: 2px;
        padding: 5px 10px;
        background-color: #42b983;
        color: #fff;
        border: none;
        /* 圆角 */
        border-radius: 4px;
        /* 鼠标悬停效果: 小手 */
        cursor: pointer;
    }

</style>