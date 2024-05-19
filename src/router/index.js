import { createRouter, createWebHistory } from 'vue-router'
import adminRoutes from './admin'
import publicRouter from './public'
import { useAuthStore } from '@/stores/auth'


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    { path: '/admin', redirect: 'admin/dashboard' },
    {
      path: '/admin',
      component: () => import('../layouts/default.vue'),
      meta: { requiresAuth: true },
      children: [
        {
          path: 'dashboard',
          component: () => import('../pages/admin/dashboard.vue'),
          name: 'dashboard',
        },
        ...adminRoutes,
      ],
    },
    {
      path: '/',
      component: () => import('../layouts/blank.vue'),
      children: [
        ...publicRouter,
      ],
    },
    { path: '/login', redirect: 'auth/login' },
    {
      path: '/auth',
      component: () => import('../layouts/auth.vue'),
      children: [
        {
          path: 'login',
          component: () => import('../pages/login.vue'),
          name: 'login',
          meta: { requiresUnauth: true },
        },
      ],
    },
  ],
})

router.beforeEach(async (to, from, next) => {
  const authStore = useAuthStore()

  if (to.meta.requiresAuth) {
    try {
      await authStore.checkAuth()

      next()
    } catch (error) {
      next({ name: 'login' })
    }
  } else if (to.meta.requiresUnauth && authStore.token) {
    next({ name: 'dashboard' })
  } else {
    next()
  }
})
export default router
