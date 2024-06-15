const memberProgressRoutes = [
  {
    path: 'member-progress',
    component: () => import('@/pages/app/member-progress/member-progress.vue'),
    name: 'member-progress',
    meta: { permission: 'member-progress-list' },
  },
  {
    path: 'member-progress/create',
    component: () => import('@/pages/app/member-progress/create.vue'),
    name: 'member-progress-create',
    meta: { permission: 'member-progress-create' },
  },
  {
    path: 'member-progress/:id/edit',
    component: () => import('@/pages/app/member-progress/edit.vue'),
    name: 'member-progress-edit',
    meta: { permission: 'member-progress-edit' },
  },
]
    
export default memberProgressRoutes
    