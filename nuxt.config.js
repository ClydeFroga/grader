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
      // {src: 'https://code.jquery.com/jquery-3.5.1.slim.min.js'},
      // {src: 'https://cdn.jsdelivr.net/npm/popper.js@1.16.0/dist/umd/popper.min.js'},
      // {src: 'https://stackpath.bootstrapcdn.com/bootstrap/4.5.0/js/bootstrap.min.js'},
      {src: 'https://yastatic.net/pcode/adfox/loader.js', crossorigin: "anonymous" },
    ]
  },

  css: [
    '@assets/style.css',
  ],

  plugins: [
    // {src: '~/plugins/collapse.js'},
    // {src: '~/plugins/dropdown.js'},
  ],

  components: true,

  buildModules: [
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
