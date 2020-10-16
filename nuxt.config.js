module.exports = {
  mode: 'universal',
  target: 'server',
  sitemap: {
    hostname: 'https://igrader.ru/',
    gzip: true,
    exclude: [
      '/draft',
    ],
  },
  head: {
    title: 'Грейдер -  обзор рынка спецтехники, грузовиков и коммерческого транспорта',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Портал igrader.ru - обзор рынка спецтехники, грузовиков и коммерческого транспорта. Тест-драйвы погрузчиков, экскаваторов и другой строительной техники.' }
    ],
    link: [
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
    '~/plugins/lightBox',
    '~/plugins/loadBot',
    '~/plugins/readProgress',
  ],
  components: true,

  buildModules: [
    ['@nuxtjs/google-analytics', {
      id: 'UA-71349912-1'
    }]
  ],

  pageTransition: {
    name: 'page',
    mode: ''
  },

  yandexMetrika: {
    id: '23728024',
    webvisor: true,
    clickmap:true,
    trackHash:false,
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
    ['nuxt-lazy-load', {
      defaultImage: '/placeholder.png',
    }],
    'cookie-universal-nuxt',
    '@nuxtjs/sitemap',
    '@nuxtjs/component-cache',
    'nuxt-precompress',
    // ["nuxt-compress", {
    //     gzip: { cache: true },
    //     brotli: { threshold: 10240}
    //   }
    // ],
    '@nuxtjs/redirect-module',
    'nuxt-fullpage.js',
    'nuxt-validate',
  ],

  nuxtPrecompress: {
    enabled: true,
    report: false,
    test: /\.(js|css|html|txt|xml|svg)$/,
    middleware: {
      enabled: true,
      enabledStatic: true,
      encodingsPriority: ['br', 'gzip'],
    },
    gzip: {
      enabled: true,
      filename: '[path].gz[query]',
      threshold: 10240,
      minRatio: 0.8,
      compressionOptions: { level: 9 },
    },
    brotli: {
      enabled: true,
      filename: '[path].br[query]',
      compressionOptions: { level: 11 },
      threshold: 10240,
      minRatio: 0.8,
    },
  },

  nuxtValidate: {
    lang: 'ru',
  },

  router: {
    linkExactActiveClass: 'active' // tailwind class with custom color
  },

  redirect: [
    { from: '^/news/?$', to: '/kratko' },
    {  from: '^/comtrans/(.*)$',
      to: (from, req) => {
        const param = req.url.match(/comtrans\/(.*)$/)[1]
        return `/comtrans-2019/${param}`
      }
    },
    {  from: '^/\\d+/\\d+/(.*)$',
      to: (from, req) => {
        const param = req.url.match(/\/\d*\/\d*\/(.+)/)[1]
        return `/difference/${param}`
      }
    },
  ],

  loading: { color: "#ff9900" },

  build: {
    // extend(config, ctx) {
    //
    // }
  }

}
