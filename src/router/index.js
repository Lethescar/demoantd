import { createRouter, createWebHashHistory } from "vue-router";

const LayoutPage = () => import("../views/layoutPage/LayoutPage.vue");

const routes = [
  {
    path: "",
    redirect: "layoutPage"
  },
  {
    path: "/",
    component: LayoutPage
  },
  {
    path: "/layoutPage",
    component: LayoutPage,
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes
});

export default router;
