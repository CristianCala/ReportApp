import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import DashboardView from "../views/DashboardView.vue";

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: "/",
            name: "home",
            component: HomeView,
        },
        {
            path: "/dashboard",
            name: "Dashboard",
            component: DashboardView,
        },
        {
            path: "/pagos",
            name: "Pagos",
            component: () => import("../views/PagosView.vue"),
        }
    ],
});

export default router;
