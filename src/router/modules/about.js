export default [
  {
    path: '/About/Team',
    name: 'about-team',
    component: () => import('@/pages/About/Team.vue'),
  },
  {
    path: '/About/Company',
    name: 'about-company',
    component: () => import('@/pages/About/Company.vue'),
  },
]