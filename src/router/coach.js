const coachRoutes = [
  {
    path: 'coach',
    component: () => import('@/pages/app/coach/coachs.vue'),
    name: 'coachs',
    meta: { coach: 'coach-list' },
  },
  {
    path: 'coach/create',
    component: () => import('@/pages/app/coach/create.vue'),
    name: 'coach-create',
    meta: { coach: 'coach-create' },
  },
  {
    path: 'coach/:id/edit',
    component: () => import('@/pages/app/coach/edit.vue'),
    name: 'coach-edit',
    meta: { coach: 'coach-edit' },
  },
]
    
export default coachRoutes
    