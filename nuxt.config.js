export default {
  mode: 'universal',
  target: 'server',
  sitemap: {
    hostname: 'http://localhost:3000/',
    gzip: true,
  },
  head: {
    title: 'Грейдер -  обзор рынка спецтехники, грузовиков и коммерческого транспорта',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: process.env.npm_package_description || '' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/faviconMini.png' }
    ],
    script: [
      {src: 'https://yastatic.net/pcode/adfox/loader.js', crossorigin: "anonymous" },
    ]
  },

  css: [
    '../assets/style.css',
  ],

  plugins: [

  ],

  components: true,

  buildModules: [
    ['@nuxtjs/google-analytics', {
      id: ''
    }]
  ],

  modules: [
    '@nuxtjs/axios',
    '@nuxtjs/svg-sprite',
    'nuxt-lazy-load',
    'cookie-universal-nuxt',
    '@nuxtjs/sitemap',
    '@nuxtjs/component-cache',
    [
      "nuxt-compress",
      {
        gzip: {
          cache: true
        },
        brotli: {
          threshold: 10240
        }
      }
    ],
    '@nuxtjs/redirect-module',

  ],
  redirect: [
    { from: '^/news/?$', to: '/kratko' }
  ],
  loading: { color: "#ff9900" },

  build: {
  }
}
