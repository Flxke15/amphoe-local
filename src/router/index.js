import { createRouter, createWebHistory } from 'vue-router'
import routes from './routes.js'

const router = createRouter({
  history: createWebHistory('/web'),
  routes: routes,
})

export default router
