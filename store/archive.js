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
    let unsorted = await fetch('https://igrader.ru/wp-json/wp/v2/magazins?orderby=slug&order=desc&per_page=12')
    unsorted = await unsorted.json()
    let sorted = unsorted.sort(function (a, b) {
      if (a.acf.reliz_jrnl > b.acf.reliz_jrnl) {
        return -1;
      }
      if (a.acf.reliz_jrnl < b.acf.reliz_jrnl) {
        return 1;
      }
      return 0;
    });
    let main = [];
    let date = new Date();
    let mounth = `${date.getMonth() + 1}`
    if (mounth.length === 1) {
      mounth = '0' + mounth
    }
    let day = date.getDate()
    if(day.length === 1) {
      day = '0' + day
    }
    let date_now = `${date.getFullYear()}` + mounth + day
    for(let item of sorted) {
      if(item.acf.reliz_jrnl <= date_now) {
        main.push(item)
      }
    }

    commit('setMain', main)
  }
}

export const getters = {
  main: state => state.main,
}
