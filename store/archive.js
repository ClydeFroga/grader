export const state = () => ({
  main: [],
})

export const mutations = {
  setMain(state, main) {
    state.main = main
  },
}

export const actions = {
  async fetch({commit}) {
    let unsorted = await fetch('http://promotech.igrader.ru/wp-json/wp/v2/magazins?orderby=slug&order=desc&per_page=12')
    unsorted = await unsorted.json()
    let main = unsorted.sort(function (a, b) {
      if (a.acf.reliz_jrnl > b.acf.reliz_jrnl) {
        return -1;
      }
      if (a.acf.reliz_jrnl < b.acf.reliz_jrnl) {
        return 1;
      }
      return 0;
    });

    commit('setMain', main)
  }
}

export const getters = {
  main: state => state.main,
}
