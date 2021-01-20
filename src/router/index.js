import { createRouter, createWebHashHistory } from "vue-router";

const Login = () => import("../views/login/Login.vue");
const Home = () => import("../views/Home.vue");
const User = () => import("../components/user/User.vue");

const routes = [
  {
    path: "",
    redirect: "login"
  },
  {
    path: "/",
    component: Login
  },
  {
    path: "/login",
    component: Login
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
