import { createRouter, createWebHashHistory, type RouteRecordRaw } from 'vue-router'
import HomeView from '@/views/HomeView.vue'
import MainLayout from '@/shared/layouts/MainLayout.vue'
import countersRoute from '@/counter/router'
import clientsRoutes from '@/clients/routes'
import { clearLayoutTitle } from './routes-guards'

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    component: MainLayout,
    beforeEnter: [clearLayoutTitle],
    children: [
      {
        path: 'home',
        name: 'home',
        component: HomeView
      },
      {
        path: '/',
        redirect: '/home'
      }
    ]
  },
  {
    path: '/counters',

    ...countersRoute
  },
  { path: '/clients', ...clientsRoutes },

  {
    path: '/:pathMatch(.*)*',
    redirect: { name: 'home' }
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
