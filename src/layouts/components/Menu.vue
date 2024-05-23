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
          title: 'Admin',  
          to: '/app/admin',
          permission: 'admin-list',
        },
        {
          title: 'Member',
          to: '/app/member',
          permission: 'member-list',
        },
        {
          title: 'Program',
          to: '/app/program',
          permission: 'program-list',
        },        
        {
          title: 'Goal',
          to: '/app/goal',
          permission: 'goal-list',
        },
        {
          title: 'Shake',
          to: '/app/shake',
          permission: 'shake-list',
        },
        {
          tittle: 'Attendance',
          to: '/app/attendance',
          permission: 'attendance-list',
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
