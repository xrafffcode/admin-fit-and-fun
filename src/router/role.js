const roleRoutes = [
  {
    path: 'role',
    component: () => import('@/pages/app/role/roles.vue'),
    name: 'roles',
    meta: { role: 'role-list' },
  },
  {
    path: 'role/create',
    component: () => import('@/pages/app/role/create.vue'),
    name: 'role-create',
    meta: { role: 'role-create' },
  },
  {
    path: 'role/:id/edit',
    component: () => import('@/pages/app/role/edit.vue'),
    name: 'role-edit',
    meta: { role: 'role-edit' },
  },
]
    
export default roleRoutes
    