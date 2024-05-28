const programRoutes = [
  {
    path: 'exercise',
    component: () => import('@/pages/app/program/programs.vue'),
    name: 'programs',
    meta: { permission: 'program-list' },
  },
  {
    path: 'exercise/create',
    component: () => import('@/pages/app/program/create.vue'),
    name: 'program-create',
    meta: { permission: 'program-create' },
  },
  {
    path: 'exercise/:id/edit',
    component: () => import('@/pages/app/program/edit.vue'),
    name: 'program-edit',
    meta: { permission: 'program-edit' },
  },
]
    
export default programRoutes
    