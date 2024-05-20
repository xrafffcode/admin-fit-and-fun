const permissionRoutes = [
  {
    path: 'permission',
    component: () => import('@/pages/app/permission/permissions.vue'),
    name: 'permissions',
    meta: { permission: 'permission-list' },
  },
  {
    path: 'permission/create',
    component: () => import('@/pages/app/permission/create.vue'),
    name: 'permission-create',
    meta: { permission: 'permission-create' },
  },
  {
    path: 'permission/:id/edit',
    component: () => import('@/pages/app/permission/edit.vue'),
    name: 'permission-edit',
    meta: { permission: 'permission-edit' },
  },
]
  
export default permissionRoutes
  