import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/add-your-own-hero',
      name: 'add-your-own-hero',
      component: () => import('../views/AddYourOwnHeroView.vue')
    },
    {
      path: '/character/:id',
      component: () => import('../views/CardDetailView.vue')

    }

  ]
})

export default router
