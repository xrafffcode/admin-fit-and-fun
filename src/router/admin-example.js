const adminExampleRoutes = [
  {
    path: '/admin-example',
    component: () => import('../pages/admin/example/examples.vue'),
    name: 'admin-example',
  },
  {
    path: '/admin-example/create',
    component: () => import('../pages/admin/example/create-example.vue'),
    name: 'admin-example-create',
  },
  {
    path: '/admin-example/:id',
    component: () => import('../pages/admin/example/example.vue'),
    name: 'admin-example-view',
  },
  {
    path: '/admin-example/:id/edit',
    component: () => import('../pages/admin/example/edit-example.vue'),
    name: 'admin-example-edit',
  },
]

export default adminExampleRoutes
