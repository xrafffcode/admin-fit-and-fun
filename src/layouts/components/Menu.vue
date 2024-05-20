<script setup>
import { useAuthStore } from '@/stores/auth'

import VerticalNavLink from '@layouts/components/VerticalNavLink.vue'

const { checkAuth } = useAuthStore()

checkAuth()
</script>

<template>
  <VerticalNavLink
    :item="{
      title: 'Dashboard',
      icon: 'bx-home',
      to: '/app/dashboard',
      permission: 'dashboard',
    }"
  />

  <VerticalNavLink
    :item="{
      title: 'User Management',
      icon: 'bx-user',
      permission: 'user-management',
      children: [
        {
          title: 'Coach',
          to: '/app/coach',
          permission: 'coach-list',
        },
        {
          title: 'Peran',
          to: '/app/role',
          permission: 'role-list',
        },
        {
          title: 'Hak Akses',
          to: '/app/permission',
          permission: 'permission-list',
        },
      ],
    }"
  />
</template>
