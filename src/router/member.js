const memberRoutes = [
  {
    path: 'member',
    component: () => import('@/pages/app/member/members.vue'),
    name: 'members',
    meta: { permission: 'member-list' },
  },
  {
    path: 'member/create',
    component: () => import('@/pages/app/member/create.vue'),
    name: 'member-create',
    meta: { permission: 'member-create' },
  },
  {
    path: 'member/:id/edit',
    component: () => import('@/pages/app/member/edit.vue'),
    name: 'member-edit',
    meta: { permission: 'member-edit' },
  },
]
    
export default memberRoutes
    