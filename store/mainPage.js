import rand from 'lodash/random'

export const state = () => ({
  sticky: [],
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
    setSticky(state, sticky) {
      state.sticky = sticky
    },
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
    async sticky({commit}) {
      let sticky = await fetch('http://promotech.igrader.ru/wp-json/wp/v2/posts?sticky=true&per_page=5')
      sticky = await sticky.json()
      commit('setSticky', sticky)
    },
    async fetch({commit}) {
      let topSlider = await fetch('http://promotech.igrader.ru/wp-json/wp/v2/posts?mainthemes=1601,1603,1604,1033&per_page=5')
      topSlider = await topSlider.json()
      let news = await fetch('http://promotech.igrader.ru/wp-json/wp/v2/posts?mainthemes=1599&per_page=5')
      news = await news.json()
      commit('setTopSlider', topSlider)
      commit('setNews', news)
    },
    async load3({commit}) {
      let categories = await fetch('http://promotech.igrader.ru/wp-json/wp/v2/categories?per_page=100')
      categories = await categories.json()
      let analitika = await fetch('http://promotech.igrader.ru/wp-json/wp/v2/posts?mainthemes=1600&per_page=4')
      analitika = await analitika.json()
      commit('setCategories', categories)
      commit('setAnalitika', analitika)
    },
    async load4({commit}) {
      let kruglyjStol = await fetch('http://promotech.igrader.ru/wp-json/wp/v2/posts?mainthemes=1604&per_page=4')
      kruglyjStol = await kruglyjStol.json()
      let krupniymPlanom = await fetch('http://promotech.igrader.ru/wp-json/wp/v2/posts?mainthemes=1603&per_page=5')
      krupniymPlanom = await krupniymPlanom.json()
      commit('setKruglyjStol', kruglyjStol)
      commit('setKrupniymPlanom', krupniymPlanom)
    },
    async load5({commit}) {
      let riders = await fetch('http://promotech.igrader.ru/wp-json/wp/v2/posts?tags=223&mainthemes__exclude=1599&per_page=7')
      riders = await riders.json()
      commit('setRiders', riders)
    },
    async load6({commit}) {
      let servismenyi = await fetch('http://promotech.igrader.ru/wp-json/wp/v2/posts?mainthemes=1605&per_page=4')
      servismenyi = await servismenyi.json()
      let stranitciIstorii = await fetch('http://promotech.igrader.ru/wp-json/wp/v2/posts?mainthemes=1606&per_page=5')
      stranitciIstorii = await stranitciIstorii.json()
      commit('setServismenyi', servismenyi)
      commit('setStranitciIstorii', stranitciIstorii)
    },
    async load7({commit}) {
      let vyborProfessionalov = await fetch('http://promotech.igrader.ru/wp-json/wp/v2/posts?mainthemes=1607&per_page=3')
      vyborProfessionalov = await vyborProfessionalov.json()
      commit('setVyborProfessionalov', vyborProfessionalov)
      let countOffers = await fetch('http://promotech.igrader.ru/wp-json/wp/v2/mainthemes/1980')
      let r = rand(0, countOffers.count - 3)
      let specialoffers = await fetch('http://promotech.igrader.ru/wp-json/wp/v2/posts?mainthemes=1980&per_page=3&offset=' + r)
      specialoffers = await specialoffers.json()
      commit('setSpecialoffers', specialoffers)
    },
  }

  export const getters = {
    sticky: state => state.sticky,
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
