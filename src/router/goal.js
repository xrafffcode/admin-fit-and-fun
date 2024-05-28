const goalRoutes = [
  {
    path: 'program',
    component: () => import('@/pages/app/goal/goals.vue'),
    name: 'goals',
    meta: { permission: 'goal-list' },
  },
  {
    path: 'program/create',
    component: () => import('@/pages/app/goal/create.vue'),
    name: 'goal-create',
    meta: { permission: 'goal-create' },
  },
  {
    path: 'program/:id/edit',
    component: () => import('@/pages/app/goal/edit.vue'),
    name: 'goal-edit',
    meta: { permission: 'goal-edit' },
  },
]
    
export default goalRoutes
    