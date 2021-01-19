import { createRouter, createWebHashHistory } from "vue-router";

const Home = () => import("../views/Home.vue");
const User = () => import("../components/user/User.vue");

const routes = [
  {
    path: "",
    redirect: "Home"
  },
  {
    path: "/",
    component: Home
  },
  {
    path: "/home",
    component: Home,
    children: [
      {
        path: "/user",
        component: User
      }
    ]
  }
];

const router = createRouter({
  history: createWebHashHistory(),
  routes
});

export default router;
