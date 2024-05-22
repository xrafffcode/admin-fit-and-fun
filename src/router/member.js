const memberRoutes = [
  {
    path: 'member',
    component: () => import('@/pages/app/member/members.vue'),
    name: 'members',
    meta: { coach: 'member-list' },
  },
  {
    path: 'member/create',
    component: () => import('@/pages/app/member/create.vue'),
    name: 'member-create',
    meta: { coach: 'member-create' },
  },
  {
    path: 'member/:id/edit',
    component: () => import('@/pages/app/member/edit.vue'),
    name: 'member-edit',
    meta: { coach: 'member-edit' },
  },
]
    
export default memberRoutes
    