export const state = () => ({
  journal: [],
})

export const mutations = {
  setJournal(state, journal) {
    state.journal = journal
  },
}

export const actions = {
  async fetch({commit}) {
    let journal = []
    fetch('http://promotech.igrader.ru/wp-json/wp/v2/magazins?orderby=slug&order=desc&per_page=2')
    .then(responce => responce.json())
    .then(result => {
      let journals = result.sort(function (a, b) {
        if (a.acf.reliz_jrnl > b.acf.reliz_jrnl) {
          return -1;
        }
        if (a.acf.reliz_jrnl < b.acf.reliz_jrnl) {
          return 1;
        }
        return 0;
      });

      let now = new Date();
      let month = `${(now.getMonth() + 1)}`
      if(month.length === 1) {
        month = '0' + month
      }
      let day = `${now.getDate()}`
      if(day.length === 1) {
        day = '0' + day
      }
      let nowTrue = `${now.getFullYear()}` + month + day

      if(journals[0].acf.reliz_jrnl >= nowTrue) {
        journal = journals[1]
      } else  {
        journal = journals[0]
      }
      commit('setJournal', journal)
    })

  }
}

export const getters = {
  journal: state => state.journal,
}
