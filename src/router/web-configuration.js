const webConfigurationRoutes = [
  {
    path: 'web-configuration',
    component: () => import('@/pages/app/web-configuration/web-configuration.vue'),
    name: 'web-configuration',
    meta: { permission: 'web-configuration' },
  },
]

export default webConfigurationRoutes
