import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import DashboardView from '../views/DashboardView.vue'

const router = createRouter({
	history: createWebHistory(import.meta.env.BASE_URL),
	routes: [
		{
			path: '/',
			name: 'home',
			component: HomeView
		},
/* 		{
			path: '/about',
			name: 'about',
			component: () => import('../views/AboutView.vue')
		} */
		/* this.$router.push({ name: 'Dashboard' }) */
		{
			path: '/dashboard',
			name: 'Dashboard',
			component: DashboardView
		},
	]
})

export default router
