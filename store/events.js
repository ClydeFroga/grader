// export const state = () => ({
//   posts: [],
//   startDates: [],
//   endDates : [],
// })
//
// export const mutations = {
//   setPosts(state, posts) {
//     state.posts = posts
//   },
//   setStartDates(state, startDates) {
//     state.startDates = startDates
//   },
//   setEndDates(state, endDates) {
//     state.endDates = endDates
//   },
// }
//
// export const actions = {
//   async fetch({commit}) {
//     let endDates = []
//     let startDates = []
//     let events = []
//     fetch('https://promotech.igrader.ru/wp-json/wp/v2/events')
//     .then(responce => responce.json())
//     .then(result => {
//       if (result.length === 0) {
//         return
//       }
//       for(let item of result) {
//         let date = +(item.x_metadata._end_ts + '000');
//         if(date > Date.now()) {
//           let formDate = new Date(date)
//           let b = new Date(+(item.x_metadata._start_ts + '000'))
//           events.push(item)
//           startDates.push(formDate.toLocaleDateString('ru'))
//           endDates.push(b.toLocaleDateString('ru'))
//         }
//       }
//     })
//     events = events.reverse()
//     startDates = startDates.reverse()
//     endDates = endDates.reverse()
//
//     commit('setPosts', events)
//     commit('setStartDates', startDates)
//     commit('setEndDates', endDates)
//   }
// }
//
// export const getters = {
//   posts: state => state.posts,
//   startDates: state => state.startDates,
//   endDates: state => state.endDates,
// }
