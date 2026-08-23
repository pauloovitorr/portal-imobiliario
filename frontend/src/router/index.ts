import { createRouter, createWebHistory } from 'vue-router'


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('../views/HomeView.vue'),
      meta: { layout: 'GeralLayout' }
    },
    {
      path: '/imoveis/:finalidade/:cidade/:tipos?/:bairros?',
      name: 'imoveis-listagem',
      component: () => import('../views/Imoveis.vue'),
      meta: { layout: 'GeralLayout' }
    },
    // {
    //   path: '/imovel/:slug-:id',
    //   name: 'imovel-detalhe',
    //   component: () => import('../views/ImovelDetalheView.vue'),
    //   meta: { layout: 'GeralLayout' }
    // },
  ],
})

export default router
