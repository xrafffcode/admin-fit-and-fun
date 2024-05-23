const shakeRoutes = [
  {
    path: 'shake',
    component: () => import('@/pages/app/shake/shakes.vue'),
    name: 'shakes',
    meta: { permission: 'shake-list' },
  },
  {
    path: 'shake/create',
    component: () => import('@/pages/app/shake/create.vue'),
    name: 'shake-create',
    meta: { permission: 'shake-create' },
  },
  {
    path: 'shake/:id/edit',
    component: () => import('@/pages/app/shake/edit.vue'),
    name: 'shake-edit',
    meta: { permission: 'shake-edit' },
  },
]
    
export default shakeRoutes
    