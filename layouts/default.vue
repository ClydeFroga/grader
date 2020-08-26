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

    <footer-my/>
  </div>
</template>

<script>
  import headerMy from "../components/header"
  import footerMy from "../components/footer"
  import asideMy from "../components/aside"
  import botNews from "../components/botNews"

  export default {
    components: {
      headerMy,
      footerMy,
      asideMy,
      botNews,
    }
  }
</script>
