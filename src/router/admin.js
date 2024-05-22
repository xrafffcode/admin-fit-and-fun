const adminRoutes = [
  {
    path: 'admin',
    component: () => import('@/pages/app/admin/admins.vue'),
    name: 'admins',
    meta: { coach: 'admin-list' },
  },
  {
    path: 'admin/create',
    component: () => import('@/pages/app/admin/create.vue'),
    name: 'admin-create',
    meta: { coach: 'admin-create' },
  },
  {
    path: 'admin/:id/edit',
    component: () => import('@/pages/app/admin/edit.vue'),
    name: 'admin-edit',
    meta: { coach: 'admin-edit' },
  },
]
    
export default adminRoutes