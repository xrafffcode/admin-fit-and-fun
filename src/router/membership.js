const membershipRoutes = [
  {
    path: 'membership',
    component: () => import('@/pages/app/membership/memberships.vue'),
    name: 'memberships',
    meta: { permission: 'membership-list' },
  },
  {
    path: 'membership/create',
    component: () => import('@/pages/app/membership/create.vue'),
    name: 'membership-create',
    meta: { permission: 'membership-create' },
  },
  {
    path: 'membership/:id/edit',
    component: () => import('@/pages/app/membership/edit.vue'),
    name: 'membership-edit',
    meta: { permission: 'membership-edit' },
  },
]
    
export default membershipRoutes
    