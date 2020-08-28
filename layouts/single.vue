<template>
  <div >
    <header-my/>
      <nuxt/>
    <footer-my/>
  </div>
</template>

<script>
  import headerMy from "../components/header"
  import footerMy from "../components/footer"
  // import asideMy from "../components/aside"

  export default {
    components: {
      headerMy,
      footerMy,
      // asideMy,
    },
    // async fetch({store}) {
    //   if (store.getters['botNews/news'].length === 0) {
    //     await store.dispatch('botNews/fetch')
    //   }
    // },
    computed: {
      posts() {
        return this.$store.getters['botNews/news']
      },
    },
  }
</script>
