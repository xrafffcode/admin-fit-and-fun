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
      title: 'Exercise',
      icon: 'bx-layer',
      to: '/app/exercise',
      permission: 'program-list',
    }"
  />

  <VerticalNavLink
    :item="{
      title: 'Program',
      icon: 'bx-target-lock',
      to: '/app/program',
      permission: 'goal-list',
    }"
  />

  <VerticalNavLink
    :item="{
      title: 'Shake',
      icon: 'bx-drink',
      to: '/app/shake',
      permission: 'shake-list',
    }"
  />

  <VerticalNavLink
    :item="{
      title: 'Attendance',
      icon: 'bx-check-square',
      to: '/app/attendance',
      permission: 'attendance-list',
    }"
  />

  <VerticalNavLink
    :item="{
      title: 'Membership',
      icon: 'bx-id-card',
      to: '/app/membership',
      permission: 'membership-list',
    }"
  />  

  <VerticalNavLink
    :item="{
      title: 'Member Progress',
      icon: 'bx-trophy',
      to: '/app/member-progress',
      permission: 'member-progress-list',
    }"
  />
  
  <VerticalNavLink
    :item="{
      title: 'Testimonial',
      icon: 'bx-message-detail',
      to: '/app/testimonial',
      permission: 'testimonial-list',
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
          title: 'Role',
          to: '/app/role',
          permission: 'role-list',
        },
        {
          title: 'Permission',
          to: '/app/permission',
          permission: 'permission-list',
        },
      ],
    }"
  />

  <VerticalNavLink
    :item="{
      title: 'Web Configuration',
      icon: 'bx-cog',
      to: '/app/web-configuration',
      permission: 'web-configuration-list',
    }"
  />
</template>
