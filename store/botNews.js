import rand from 'lodash/random'


export const state = () => ({
  news: [],
})

export const mutations = {
  setNews(state, news) {
    state.news = news
  },
}

export const actions = {
  async fetch({commit}) {
    let r = rand(0, 100)

    const news = await this.$axios.$get('https://igrader.ru/wp-json/wp/v2/posts?mainthemes_exclude=1599&per_page=4&offset=' + r)

    commit('setNews', news)
  }
}

export const getters = {
  news: state => state.news,
}
