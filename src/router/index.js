import { createRouter, createWebHistory } from 'vue-router'
import appRoutes from './app'
import publicRouter from './public'
import { useAuthStore } from '@/stores/auth'


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    { path: '/app', redirect: 'app/dashboard' },
    {
      path: '/app',
      component: () => import('@/layouts/default.vue'),
      meta: { requiresAuth: true },
      children: [
        {
          path: 'dashboard',
          component: () => import('@/pages/app/dashboard.vue'),
          name: 'dashboard',
          meta: { permission: 'dashboard' },
        },
        ...appRoutes,
      ],
    },
    {
      path: '/',
      component: () => import('@/layouts/blank.vue'),
      children: [
        ...publicRouter,
      ],
    },
    { path: '/login', redirect: 'auth/login' },
    {
      path: '/auth',
      component: () => import('@/layouts/auth.vue'),
      children: [
        {
          path: 'login',
          component: () => import('@/pages/login.vue'),
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
      if (!authStore.user) {
        await authStore.checkAuth()
      }

      const userPermissions = authStore.user?.permissions || []

      if (to.meta.permissions) {
        const hasPermission = to.meta.permissions.every(permission => userPermissions.includes(permission))
        if (!hasPermission) {
          next({ name: '403' })

          return
        }
      }

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
