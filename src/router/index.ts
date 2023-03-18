import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'Blin-Calc',
      component: () => import('@/views/BlinCalc.vue')
    }
  ]
})

export default router
