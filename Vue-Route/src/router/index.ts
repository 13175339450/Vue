// 引入路由
import { createRouter, createWebHistory } from "vue-router";

// 引入要呈现的组件
import Dog from "../views/Dog.vue";
import Cat from "../views/Cat.vue";
import Mouse from "../views/Mouse.vue";
import DogDetail from "../views/DogDetail.vue";

// 创建路由器
const router = createRouter({
  // 使用HTML5的History工作模式
  history: createWebHistory(),
  // 定义路由规则
  routes: [
    { path: "/", component: Dog },
    {
      name: "gou",
      path: "/dog",
      component: Dog,
      children: [
        // {
        //   name: "gou-detail",
        //   path: "detail",
        //   component: DogDetail,
        // },
        {
          // ?表示age参数可传可不传
          name: "gou-detail",
          path: "detail/:id/:name/:age?",
          component: DogDetail,
        },
      ],
    },
    { path: "/cat", component: Cat },
    { path: "/mouse", component: Mouse },
  ],
});

// 导出路由器
export default router;
