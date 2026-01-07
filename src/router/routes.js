import about from "./modules/about.js";

export default [
  {
    path: '/',
    component: () => import('@/layouts/default.vue'),
    children: [
      {
        path: '',
        redirect: '/Index'
      },
      {
        path: 'Index',
        name: 'Index',
        component: () => import('@/pages/Index.vue'),
      },
      {
        path: 'Home',
        name: 'Home',
        component: () => import('@/pages/Home.vue'),
      },
      ...about,
      {
        path: 'Contact',
        name: 'Contact',
        component: () => import('@/pages/Contact.vue'),
      },
    ]
  },
]