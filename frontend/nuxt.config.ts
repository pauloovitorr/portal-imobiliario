export default defineNuxtConfig({
  ssr: false, // enquanto faço o front
  // ssr: {noExternal: ['maplibre-gl']}

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

  // LARAVEL SANCTUM
  sanctum: {
    // URL base do  backend Laravel
    baseUrl: process.env.NUXT_PUBLIC_BACKEND_URL,

    // Mapeamento dos endpoints de autenticação que o Laravel Sanctum responde
    endpoints: {
      csrf: '/sanctum/csrf-cookie', // Rota que gera o token de proteção contra ataques CSRF
      login: '/api/login',          // Rota onde o Nuxt envia as credenciais (e-mail e senha) para autenticar
      logout: '/api/logout',        // Rota que encerra a sessão atual no backend
      user: '/api/user',            // Rota que busca os dados do usuário logado atualmente
    },

    // Regras de redirecionamento automático baseadas no estado de autenticação do usuário
    redirect: {
      onLogin: '/',       // Para onde o usuário é enviado logo após fazer login com sucesso
      onLogout: '/login', // Para onde o usuário é enviado após sair da conta
      onAuthOnly: '/login', // Para onde um visitante não logado é redirecionado se tentar acessar uma página protegida
      onGuestOnly: '/',     // Para onde um usuário já logado é redirecionado se tentar acessar páginas exclusivas para hóspedes (como a tela de login)
    },
  },

  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },

  css: [
    '~/assets/css/main.css'
  ],

})