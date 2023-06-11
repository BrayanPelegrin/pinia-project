export default {
  component: () => import('@/clients/layout/ClientLayout.vue'),
  children: [
    {
      path: '',
      name: 'clients',
      component: () => import('@/clients/views/ClientsListPage.vue')
    },
    {
      path: ':id',
      name: 'clients-id',
      component: () => import('@/clients/views/ClientPage.vue')
    }
  ]
}
