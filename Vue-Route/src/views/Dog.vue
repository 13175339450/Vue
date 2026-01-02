<template>
    <div class="dog-container">
        <!-- 左边栏：狗狗列表 -->
        <div class="sidebar">
            <ul>
                <li v-for="dog in dogs" :key="dog.id">
                    <!-- ======== query 传参 ======== -->
                    <!-- 第一种写法 -->
                    <!-- <router-link :to="`/dog/detail?id=${dog.id}
                        &name=${dog.name}&age=${dog.age}`
                    ">
                        {{ dog.name }} -->

                    <!-- 第二种写法 -->
                    <!-- <router-link 
                        :to="{
                            path: '/dog/detail',
                            query: {
                                id: dog.id,
                                name: dog.name,
                                age: dog.age
                            }
                        }">
                        {{ dog.name }}
                    </router-link> -->

                    <!-- 第三种写法 使用name属性 -->
                    <!-- <router-link 
                        :to="{
                            name: 'gou-detail',
                            query: {
                                id: dog.id,
                                name: dog.name,
                                age: dog.age
                            }
                        }">
                        {{ dog.name }}
                    </router-link> -->

                    <!-- ======== params 传参 ======== -->
                    <!-- 第一种 -->
                    <!-- <router-link :to="`/dog/detail/${dog.id}
                      /${dog.name}/${dog.age}`">
                        {{ dog.name }}
                    </router-link> -->
                    <!-- 第二种 -->
                    <router-link 
                        :to="{
                            name: 'gou-detail', // 必须使用name！
                            params: {
                                id: dog.id,
                                name: dog.name,
                                age: dog.age
                            }
                        }">
                        {{ dog.name }}
                    </router-link>
                </li>
            </ul>
        </div>
        <!-- 右边：路由内容 -->
        <div class="router-view">
            <router-view>
            </router-view>
        </div>
    </div>
</template>

<script lang="ts" setup name="Dog">
import { ref } from "vue";

let dogs = ref([
    {
        id: 1,
        name: "旺财",
        age: 3,
    },
    {
        id: 2,
        name: "小黑",
        age: 5,
    },
    {
        id: 3,
        name: "豆豆",
        age: 2,
    },
    {
        id: 4,
        name: "花花",
        age: 4,
    }
])
</script>

<style scoped>
.dog-container {
    display: flex;
    min-height: 200px;
}

.sidebar {
    text-align: center;
    flex: 0 0 40px;
    border: 2px solid #e0e0e0;
    border-radius: 10px;
    padding: 30px;
    margin: 10px;
}

.sidebar ul {
    list-style: none;
    padding: 0;
    margin: 0;
}

.sidebar li {
    margin-bottom: 10px;
}

.sidebar a {
    color: #4266b8;
    text-decoration: none;
}

.sidebar a:hover {
    color: #2a4a8c;
    text-decoration: underline;
}

.router-view {
    flex: 1;
    padding-left: 10px;
    border: 1px solid #190101;
    border-radius: 10px;
    margin-left: 10px;
}
</style>