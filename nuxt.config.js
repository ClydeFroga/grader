module.exports = {
  mode: 'universal',
  target: 'server',
  sitemap: {
    hostname: 'http://hahlek3u.beget.tech/',
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

  ],

  components: true,

  buildModules: [

  ],

  modules: [
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
    // 'nuxt-fullpage.js',
  ],


  redirect: [
    { from: '^/news/?$', to: '/kratko' }
  ],
  loading: { color: "#ff9900" },

  build: {
    extend(config, ctx) {

    }
  }
}
