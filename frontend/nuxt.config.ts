
export default defineNuxtConfig({
  ssr: false, // enquanto faço o front

  // Desativa SSR nas páginas do painel para economizar recursos de servidor
  routeRules: {
    '/admin/**': { ssr: false }
  },

  modules: [
    '@nuxtjs/seo',
    '@nuxt/image',
    '@pinia/nuxt',
    'nuxt-auth-sanctum'
  ],

  // Dados globais para SEO e Open Graph
  site: {
    url: process.env.NUXT_PUBLIC_SITE_URL || 'http://localhost:3000',
    name: 'Meu Lugar',
    description: 'Encontre as melhores casas, apartamentos e terrenos para comprar, alugar ou para temporada.',
    defaultLocale: 'pt-BR',
    debug: false
  },

  // Ajustes finos de SEO
  // seo: {
  //   redirectToCanonicalUrl: true,
  // },

  // Busca URLs dinâmicas dos imóveis cadastradas na API
  sitemap: {
    sources: [
      `${process.env.NUXT_PUBLIC_API_BASE || 'http://localhost:8000/api'}/sitemap-urls`
    ],
  },

  // Processamento de imagens de mídia e uploads
  image: {
    domains: (process.env.NUXT_IMAGE_DOMAINS || 'localhost,127.0.0.1').split(','),
    format: ['webp'],
  },

  // Exposição de variáveis de ambiente para consumo via useRuntimeConfig()
  runtimeConfig: {
    public: {
      backendUrl: process.env.NUXT_PUBLIC_BACKEND_URL || 'http://localhost:8000',
      apiBase: process.env.NUXT_PUBLIC_API_BASE || 'http://localhost:8000/api',
    }
  },

  //  LARAVEL SANCTUM
  sanctum: {
    baseUrl: process.env.NUXT_PUBLIC_BACKEND_URL || 'http://localhost:8000', // Aponta para a raiz sem o /api
    endpoints: {
      csrf: '/sanctum/csrf-cookie',
      login: '/api/login',
      logout: '/api/logout',
      user: '/api/user',
    },
    redirect: {
      onLogin: '/',
      onLogout: '/login',
      onAuthOnly: '/login',
      onGuestOnly: '/',
    },
  },

  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },

  css: [
    '~/assets/css/main.css'
  ],

})