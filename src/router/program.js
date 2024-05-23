const programRoutes = [
  {
    path: 'program',
    component: () => import('@/pages/app/program/programs.vue'),
    name: 'programs',
    meta: { permission: 'program-list' },
  },
  {
    path: 'program/create',
    component: () => import('@/pages/app/program/create.vue'),
    name: 'program-create',
    meta: { permission: 'program-create' },
  },
  {
    path: 'program/:id/edit',
    component: () => import('@/pages/app/program/edit.vue'),
    name: 'program-edit',
    meta: { permission: 'program-edit' },
  },
]
    
export default programRoutes
    