import rand from 'lodash/random'

export const state = () => ({
  topSlider: [],
  news: [],
  categories: [],
  analitika: [],
  kruglyjStol: [],
  krupniymPlanom: [],
  riders: [],
  servismenyi: [],
  stranitciIstorii: [],
  specialoffers: [],
  vyborProfessionalov: [],
  })

  export const mutations = {
    setTopSlider(state, topSlider) {
      state.topSlider = topSlider
    },
    setNews(state, news) {
      state.news = news
    },
    setCategories(state, categories) {
      state.categories = categories
    },
    setAnalitika(state, analitika) {
      state.analitika = analitika
    },
    setKruglyjStol(state, kruglyjStol) {
      state.kruglyjStol = kruglyjStol
    },
    setKrupniymPlanom(state, krupniymPlanom) {
      state.krupniymPlanom = krupniymPlanom
    },
    setRiders(state, riders) {
      state.riders = riders
    },
    setServismenyi(state, servismenyi) {
      state.servismenyi = servismenyi
    },
    setStranitciIstorii(state, stranitciIstorii) {
      state.stranitciIstorii = stranitciIstorii
    },
    setSpecialoffers(state, specialoffers) {
      state.specialoffers = specialoffers
    },
    setVyborProfessionalov(state, vyborProfessionalov) {
      state.vyborProfessionalov = vyborProfessionalov
    },
  }

  export const actions = {
    async fetch({commit}) {
      const topSlider = await this.$axios.$get('https://igrader.ru/wp-json/wp/v2/posts?mainthemes=1601,1603,1604,1033&per_page=8')
      const news = await this.$axios.$get('https://igrader.ru/wp-json/wp/v2/posts?mainthemes=1599&per_page=5')

      commit('setTopSlider', topSlider)
      commit('setNews', news)
    },
    async load3({commit}) {
      const categories = await this.$axios.$get('https://igrader.ru/wp-json/wp/v2/categories?per_page=100')
      const analitika = await this.$axios.$get('https://igrader.ru/wp-json/wp/v2/posts?mainthemes=1600&per_page=4')
      commit('setCategories', categories)
      commit('setAnalitika', analitika)
    },
    async load4({commit}) {
      const kruglyjStol = await this.$axios.$get('https://igrader.ru/wp-json/wp/v2/posts?mainthemes=1604&per_page=4')
      const krupniymPlanom = await this.$axios.$get('https://igrader.ru/wp-json/wp/v2/posts?mainthemes=1603&per_page=5')

      commit('setKruglyjStol', kruglyjStol)
      commit('setKrupniymPlanom', krupniymPlanom)
    },
    async load5({commit}) {
      const riders = await this.$axios.$get('https://igrader.ru/wp-json/wp/v2/posts?tags=223&mainthemes__exclude=1599&per_page=7')
      commit('setRiders', riders)
    },
    async load6({commit}) {
      const servismenyi = await this.$axios.$get('https://igrader.ru/wp-json/wp/v2/posts?mainthemes=1605&per_page=4')
      const stranitciIstorii = await this.$axios.$get('https://igrader.ru/wp-json/wp/v2/posts?mainthemes=1606&per_page=5')
      commit('setServismenyi', servismenyi)
      commit('setStranitciIstorii', stranitciIstorii)
    },
    async load7({commit}) {
      const vyborProfessionalov = await this.$axios.$get('https://igrader.ru/wp-json/wp/v2/posts?mainthemes=1607&per_page=3')
      commit('setVyborProfessionalov', vyborProfessionalov)
      const countOffers = await this.$axios.$get('https://igrader.ru/wp-json/wp/v2/mainthemes/1980')
      const r = rand(0, countOffers.count - 3)
      const specialoffers = await this.$axios.$get('https://igrader.ru/wp-json/wp/v2/posts?mainthemes=1980&per_page=3&offset=' + r)
      commit('setSpecialoffers', specialoffers)
    },
  }

  export const getters = {
    topSlider: state => state.topSlider,
    news: state => state.news,
    categories: state => state.categories,
    analitika: state => state.analitika,
    kruglyjStol: state => state.kruglyjStol,
    krupniymPlanom: state => state.krupniymPlanom,
    riders: state => state.riders,
    servismenyi: state => state.servismenyi,
    stranitciIstorii: state => state.stranitciIstorii,
    specialoffers: state => state.specialoffers,
    vyborProfessionalov: state => state.vyborProfessionalov,
  }
