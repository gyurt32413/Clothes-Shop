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
      name: "women",
      component: () => import("../views/WomenClothing.vue"),
    },
    {
      path: "/men",
      name: "men",
      component: () => import("../views/MenClothing.vue"),
    },
    {
      path: "/kids",
      name: "kids",
      component: () => import("../views/KidsClothing.vue"),
    },
    {
      path: "/sports",
      name: "sports",
      component: () => import("../views/SportsClothing.vue"),
    },
    {
      path: "/product/:id",
      name: "product",
      component: () => import("../views/ProductPage.vue"),
    },
    {
      path: "/checkout",
      name: "checkout",
      component: () => import("../views/CheckoutPage.vue"),
    },
  ],
});

export default router;
