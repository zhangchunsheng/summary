export default [
  {
    path: '/',
    name: 'summary',
    components: {
      default: () => import('@/views/summary/summary-2020')
    },
    meta: {
      keepAlive: true
    }
  },
  {
    path: '*',
    redirect: {
      name: 'summary'
    }
  }
];
