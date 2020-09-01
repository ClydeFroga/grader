<template>
	<div>
    <header-my/>
    <div class="container-md">
      <div class="row">
        <nuxt/>
        <aside-my/>
      </div>
      <bot-news/>
    </div>
    <scroll-to-top />
    <cookie v-if="cookies" />
    <footer-my/>
  </div>
</template>

<script>
  import headerMy from "../components/header"
  import footerMy from "../components/footer"
  import asideMy from "../components/aside"
  import botNews from "../components/botNews"
  import scrollToTop from "../components/scrollToTop";
  import cookie from "../components/cookie";

  export default {
    components: {
      headerMy,
      footerMy,
      asideMy,
      botNews,
      scrollToTop,
      cookie,
    },
    computed: {
      cookies() {
        const cookieRes = this.$cookies.get('cookie')
        return cookieRes !== 1;
      }
    }
  }
</script>

<style scoped>
  .row {
    justify-content: space-between;
  }
</style>
