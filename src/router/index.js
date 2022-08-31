import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView,
    },
    {
      path: "/women",
      name: "women-clothing",
      component: () => import("../views/WomenClothing.vue"),
    },
    {
      path: "/product",
      name: "product",
      component: () => import("../views/ProductPage.vue"),
    },
    {
      path: "/checkout",
      name: "checkout",
      component:() => import('../views/CheckoutPage.vue')
    },
  ],
});

export default router;
