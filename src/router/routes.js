import about from "./modules/about.js";

export default [
  {
    path: '/',
    component: () => import('@/layouts/default.vue'),
    children: [
      {
        path: '',
        redirect: '/Home'
      },
      {
        path: 'Home',
        name: 'Home',
        component: () => import('@/pages/Home.vue'),
      },
    ]
  },
]