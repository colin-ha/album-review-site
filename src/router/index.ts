import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import NotWritten from '@/views/NotWritten.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/album/running',
      name: 'running',
      component: () => import('../views/reviews/Running.vue'),
    },
    {
      path: '/notwritten',
      name: 'notwritten',
      component: () => import('../views/NotWritten.vue'),
    },
  ],
})

export default router
