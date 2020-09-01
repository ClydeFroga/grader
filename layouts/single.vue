<template>
  <div >
    <header-my/>
    <nuxt/>
    <cookie v-if="cookies" />
    <footer-my/>
  </div>
</template>

<script>
  import headerMy from "../components/header"
  import footerMy from "../components/footer"
  import cookie from "../components/cookie";


  export default {
    components: {
      headerMy,
      footerMy,
      cookie
    },

    computed: {
      posts() {
        return this.$store.getters['botNews/news']
      },
      cookies() {
        const cookieRes = this.$cookies.get('cookie')
        return cookieRes !== 1;
      }
    },
  }
</script>
