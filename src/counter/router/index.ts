export default {
  component: () => import('@/shared/layouts/MainLayout.vue'),
  children: [
    {
      path: 'counter-sp',
      name: 'counter-sp',
      component: () => import('@/counter/views/CounterPage.vue')
    },
    {
      path: 'counter-op',
      name: 'counter-op',
      component: () => import('@/counter/views/CounterOpPage.vue')
    }
  ]
}
