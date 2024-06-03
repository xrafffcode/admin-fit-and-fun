const testimonialRoutes = [
  {
    path: 'testimonial',
    component: () => import('@/pages/app/testimonial/testimonials.vue'),
    name: 'testimonials',
    meta: { permission: 'testimonial-list' },
  },
  {
    path: 'testimonial/create',
    component: () => import('@/pages/app/testimonial/create.vue'),
    name: 'testimonial-create',
    meta: { permission: 'testimonial-create' },
  },
  {
    path: 'testimonial/:id/edit',
    component: () => import('@/pages/app/testimonial/edit.vue'),
    name: 'testimonial-edit',
    meta: { permission: 'testimonial-edit' },
  },
]

export default testimonialRoutes
