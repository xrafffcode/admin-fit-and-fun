const trialApplicantRoutes = [
    {
        path: 'trial-applicant',
        component: () => import('@/pages/app/trial-applicant/trial-applicants.vue'),
        name: 'trial-applicants',
        meta: { permission: 'trial-applicant-list' },
    },
    {
        path: 'trial-applicant/create',
        component: () => import('@/pages/app/trial-applicant/create.vue'),
        name: 'trial-applicant-create',
        meta: { permission: 'trial-applicant-create' },
    },
    {
        path: 'trial-applicant/:id/edit',
        component: () => import('@/pages/app/trial-applicant/edit.vue'),
        name: 'trial-applicant-edit',
        meta: { permission: 'trial-applicant-edit' },
    },
]

export default trialApplicantRoutes
