<template>
    <div class="watch">
        <div class="simpleWatch">
            <h2>Watch 简单类型</h2>
            <p>当前数字：{{ number }}</p>
            <button @click="changeSum">增加数字</button>
        </div>
        <div class="complexWatch">
            <h2>Watch 复杂类型</h2>
            <p>姓名：{{ person.name }}</p>
            <p>年龄：{{ person.age }}</p>
            <button @click="changeName">修改姓名</button>
            <button @click="changeAge">修改年龄</button>
            <button @click="changePerson">整体修改对象</button>
        </div>
        <div class="anyOneWatch">
            <h2>Watch 监视某一个属性</h2>
            <p>姓名：{{ people.name }}</p>
            <p>年龄：{{ people.age }}</p>
            <p>车辆1: {{ people.cars.car1 }}</p>
            <p>车辆2: {{ people.cars.car2 }}</p>
            <button @click="changeCar1">修改车辆1</button>
            <button @click="changeCar2">修改车辆2</button>
            <button @click="changeCar">整体修改车辆对象</button>
        </div>
    </div>
    
</template>

<!-- 总结：
    监视的要是对象里的属性，那么最好写函数式，注意点：若是对象监视的是地址值，需要关注对象内部，需要手动开启深度监视
-->
<script lang="ts" setup name="Watch-HXL">

    import { ref, reactive, watch } from 'vue';

    //------ 简单类型 ------
    const number = ref(0);

    function changeSum() {
        number.value += 1;
    };

    const stopWatch = watch(number, (newVal, oldVal) => {
        console.log(`Number changed from ${oldVal} to ${newVal}`);
        if (newVal >= 5) {
        stopWatch(); // 停止监听
        }
    });

    //------ 复杂类型 ------
    const person = ref({
        name: '张三',
        age: 20
    });
    function changeName() {
        person.value.name += "~";
    };
    function changeAge() {
        person.value.age += 1;
    };
    function changePerson() {
        person.value = {
            name: '李四',
            age: 30
        };
    };

    // 监视复杂类型时，需加 deep 选项
    // 第一个参数是被监视的对象
    // 第二个参数是监视的毁掉
    // 第三个参数是配置对象（deep、immediate）
    watch(person, (newVal, oldVal) => {
        console.log('Person changed:', oldVal, '=>', newVal);
    }, { deep: true /** , immediate: true */});

    // ------ 监视某一个属性 ------
    const people = ref({
        name: '王五',
        age: 25,
        cars: {
            car1: '自行车',
            car2: '电瓶车'
        }
    });
    function changeCar1() {
        people.value.cars.car1 = '摩托车';
    };
    function changeCar2() {
        people.value.cars.car2 = '汽车';
    };
    function changeCar() {
        people.value.cars = {
            car1: '火车', // 如果改为自行车，在只监视car1的情况下不会触发watch回调，因为car1返回的值没有变化
            car2: '飞机'
        };
    };
    // 1.只监视 cars.car1 属性的变化 需要加 ()=> 方式，因为只能监视 "对象类型" ，而 cars.car1 是一个简单类型
    // watch(() => people.value.cars.car1, (newVal, oldVal) => {
    //     console.log('Car1 changed:', oldVal, '=>', newVal);
    // });

    // 2. 监视 cars 对象的变化 （此时changeCar1和changeCar2都会触发watch回调，而ChangeCar不会，因为此时监视的是Cars这个整体原对象！）
    // changeCar直接将引用指向新对象，而监视的是旧对象，旧对象依然没变，所以没有回调
    // watch(people.value.cars, (newVal, oldVal) => {
    //     console.log('Cars changed:', oldVal, '=>', newVal);
    // });

    // 3. 监视 cars 对象的变化，添加 deep 选项 （此时changeCar1、changeCar2和ChangeCar都会触发watch回调）
    // 必须且推荐加上 ()=> 方式
    watch(() => people.value.cars, (newVal, oldVal) => {
        console.log('Cars changed:', oldVal, '=>', newVal);
    }, { deep: true });
</script>

<style>
    .watch {
        border: 1px solid #ccc;
        padding: 20px;
        margin: 20px;
        text-align: center;
    }
    .simpleWatch {
        border: 1px solid #ccc;
        padding: 20px;
        margin: 20px;
        text-align: center;
    }
    .complexWatch {
        border: 1px solid #ccc;
        padding: 20px;
        margin: 20px;
        text-align: center;
    }
    .anyOneWatch {
        border: 1px solid #ccc;
        padding: 20px;
        margin: 20px;
        text-align: center;
    }
</style>