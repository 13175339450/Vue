<template>
    <div>
        <!-- v-model 是双向绑定，v-bind 是单向绑定 -->
        姓: <input type="text" v-model="firstName" ><br/>
        名: <input type="text" v-model="lastName" ><br/>
        全名: {{ fullName }}
    </div>
</template>

<script lang="ts" setup name="Compute-HXL">
    import { ref, computed } from "vue";

    // 响应式数据
    let firstName = ref("张");
    let lastName = ref("三");

    // 计算属性当firstName 或 lastName 变化时，fullName 会自动更新，否则不会重新计算（缓存）
    let fullName = computed( () => {
        return firstName.value + lastName.value;
    });
</script>