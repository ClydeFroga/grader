module.exports = {
  mode: 'universal',
  target: 'server',
  sitemap: {
    hostname: 'https://igrader.ru/',
    gzip: true,
  },
  head: {
    title: 'Грейдер -  обзор рынка спецтехники, грузовиков и коммерческого транспорта',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Портал igrader.ru - обзор рынка спецтехники, грузовиков и коммерческого транспорта. Тест-драйвы погрузчиков, экскаваторов и другой строительной техники.' }
    ],
    link: [
      // { rel: 'icon', type: 'image/png', href: 'favicon2.png' }
    ],
    script: [
      {src: 'https://yastatic.net/pcode/adfox/loader.js', crossorigin: "anonymous" },
    ]
  },

  css: [
    '../assets/style.css',
  ],

  plugins: [
    '~/plugins/disqus',
  ],
  components: true,

  buildModules: [
    ['@nuxtjs/google-analytics', {
      id: 'UA-71349912-1'
    }]
  ],

  layoutTransition: {
    name: 'layout',
    mode: ''
  },

  pageTransition: {
    name: 'page',
    mode: ''
  },

  yandexMetrika: {
    id: '23728024',
    webvisor: true,
    clickmap:true,
    trackHash:true,
    trackLinks:true,
    accurateTrackBounce:true,
  },


  modules: [
    '@nuxtjs/yandex-metrika',
    ['nuxt-rfg-icon', {
    masterPicture: 'static/favicon.png'
     }],
    '@nuxtjs/manifest',
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
    'nuxt-fullpage.js',
    'nuxt-validate',
  ],




  nuxtValidate: {
    lang: 'ru',
  },

  router: {
    linkExactActiveClass: 'active' // tailwind class with custom color
  },

  redirect: [
    { from: '^/news/?$', to: '/kratko' }
  ],
  loading: { color: "#ff9900" },

  build: {
    extend(config, ctx) {

    }
  }
}
