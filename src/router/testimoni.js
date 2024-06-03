const testimoniRoutes = [
  {
    path: 'testimoni',
    component: () => import('@/pages/app/testimoni/testimonis.vue'),
    name: 'testimonis',
    meta: { permission: 'testimoni-list' },
  },
  {
    path: 'testimoni/create',
    component: () => import('@/pages/app/testimoni/create.vue'),
    name: 'testimoni-create',
    meta: { permission: 'testimoni-create' },
  },
  {
    path: 'testimoni/:id/edit',
    component: () => import('@/pages/app/testimoni/edit.vue'),
    name: 'testimoni-edit',
    meta: { permission: 'testimoni-edit' },
  },
]
    
export default testimoniRoutes
    