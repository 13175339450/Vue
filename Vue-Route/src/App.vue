<template>
    <div class="parent">
        <h1>动物世界展示</h1>
        <div class="child">
            <!-- 导航链接 -->
            <nav class="nav-links">
                <router-link :to="{path: '/cat'}" active-class="active">🐱 猫</router-link>
                <router-link :to="{path: '/dog'}" active-class="active">🐶 狗</router-link>
                <router-link :to="{path: '/mouse'}" active-class="active">🐭 老鼠</router-link>
            </nav>
            
            <hr class="divider"/>
            
            <!-- 路由内容区域 -->
            <router-view class="routerView"></router-view>
        </div>
    </div>
</template>

<script setup lang="ts">
    import { RouterView, RouterLink } from 'vue-router';
</script>

<style scoped>
    /* 父容器：全屏居中布局 */
    .parent {
        display: flex;
        flex-direction: column; /* 垂直方向排列 */
        justify-content: center;
        align-items: center;
        min-height: 100vh; /* 使用视口高度 */
        padding: 30px 20px;
        background: linear-gradient(135deg, #f5f7fa 0%, #e4edf5 100%); /* 渐变背景 */
        font-family: 'Segoe UI', 'Microsoft YaHei', sans-serif;
    }

    /* 主标题样式 */
    h1 {
        color: #2c3e50;
        font-size: 2.5rem;
        margin-bottom: 30px;
        padding: 15px 30px;
        background: white;
        border-radius: 12px;
        box-shadow: 0 4px 15px rgba(0, 0, 0, 0.08);
        border-left: 5px solid #42b983;
        letter-spacing: 1px;
    }

    /* 子容器：卡片式设计 */
    .child {
        width: 90%;
        max-width: 900px; /* 最大宽度限制 */
        background: white;
        border-radius: 16px;
        padding: 40px;
        box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
        border: 1px solid rgba(66, 185, 131, 0.2);
        transition: transform 0.3s ease, box-shadow 0.3s ease;
    }

    .child:hover {
        transform: translateY(-5px); /* 悬停上浮效果 */
        box-shadow: 0 15px 35px rgba(0, 0, 0, 0.12);
    }

    /* 导航链接容器 */
    .nav-links {
        display: flex;
        justify-content: center;
        gap: 25px; /* 链接间距 */
        margin-bottom: 30px;
        flex-wrap: wrap; /* 小屏幕时换行 */
    }

    /* 基础链接样式 */
    a {
        padding: 12px 28px;
        text-decoration: none;
        color: #2c3e50;
        border-radius: 50px; /* 胶囊形状 */
        font-weight: 600;
        font-size: 1.1rem;
        transition: all 0.3s ease;
        background: #f8f9fa;
        border: 2px solid transparent;
        display: inline-flex;
        align-items: center;
        gap: 8px; /* 图标和文字间距 */
    }

    /* 链接悬停效果 */
    a:hover {
        transform: translateY(-2px);
        box-shadow: 0 5px 15px rgba(66, 185, 131, 0.2);
        border-color: #42b983;
        background: white;
        color: #42b983;
    }

    /* 激活状态链接 */
    .active {
        background: linear-gradient(135deg, #42b983, #2ecc71);
        color: white !important;
        border-color: #42b983;
        box-shadow: 0 4px 12px rgba(66, 185, 131, 0.3);
    }

    /* 分隔线 */
    .divider {
        border: none;
        height: 1px;
        background: linear-gradient(to right, transparent, rgba(66, 185, 131, 0.3), transparent);
        margin: 35px 0;
    }

    /* 路由视图区域 */
    .routerView {
        border: 1px solid rgba(66, 185, 131, 0.2);
        border-radius: 12px;
        padding: 40px;
        margin: 20px auto;
        background: #f8fdfa; /* 浅绿色背景 */
        box-shadow: inset 0 2px 10px rgba(0, 0, 0, 0.05);
        min-height: 300px; /* 最小高度保证内容区域 */
        animation: fadeIn 0.5s ease; /* 淡入动画 */
    }

    /* 响应式设计 */
    @media (max-width: 768px) {
        .parent {
            padding: 20px 15px;
        }
        
        h1 {
            font-size: 2rem;
            padding: 12px 20px;
        }
        
        .child {
            width: 95%;
            padding: 25px;
        }
        
        .nav-links {
            gap: 15px;
        }
        
        a {
            padding: 10px 20px;
            font-size: 1rem;
        }
        
        .routerView {
            padding: 25px;
        }
    }

    @media (max-width: 480px) {
        .nav-links {
            flex-direction: column; /* 小屏幕垂直排列 */
            align-items: center;
        }
        
        a {
            width: 200px;
            justify-content: center;
        }
    }

    /* 淡入动画 */
    @keyframes fadeIn {
        from {
            opacity: 0;
            transform: translateY(10px);
        }
        to {
            opacity: 1;
            transform: translateY(0);
        }
    }
</style>