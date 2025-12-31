<template>
    <div>

    </div>
</template>


<script lang="ts" setup name="Generic-HXL">
    import { type Student, type StudentList } from '../types';

    // 别名 @ 表示从 src 目录开始查找
    // import { type Student, type StudentList } from '@/types';

    let studentOne: Student = {
        id: 1,
        name: '张三',
        age: 20
    }

    let studentList: StudentList = [
        { id: 1, name: '张三', age: 20 },
        { id: 2, name: '李四', age: 22 },
        { id: 3, name: '王五', age: 21 }
    ];
</script>

<!-- scoped 具备样式 -->
<style scoped>  
</style>