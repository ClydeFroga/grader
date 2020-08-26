<template>
  <div>
    <header-my />
    <Nuxt />
    <footer-my/>
  </div>
</template>

<script>
  import headerMy from "../components/header"
  import footerMy from "../components/footer"

  export default {
    components: {
      headerMy,
      footerMy
    }
  }
</script>
