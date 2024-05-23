const attendanceRoutes = [
  {
    path: 'attendance',
    component: () => import('@/pages/app/attendance/attendances.vue'),
    name: 'attendances',
    meta: { permission: 'attendance-list' },
  },
  {
    path: 'attendance/create',
    component: () => import('@/pages/app/attendance/create.vue'),
    name: 'attendance-create',
    meta: { permission: 'attendance-create' },
  },
  {
    path: 'attendance/:id/edit',
    component: () => import('@/pages/app/attendance/edit.vue'),
    name: 'attendance-edit',
    meta: { permission: 'attendance-edit' },
  },
]
    
export default attendanceRoutes
    