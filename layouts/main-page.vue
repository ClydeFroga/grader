<template>
  <div>
    <header-my />
    <Nuxt />
    <cookie  v-if="cookies" />
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
    mounted() {
      this.adfox()
    },
    computed: {
      cookies() {
        const cookieRes = this.$cookies.get('cookie')
        return cookieRes !== 1;
      }
    },
    methods: {
      adfox() {
        window.Ya.adfoxCode.create({
          ownerId: 299653,
          containerId: 'adfox_159374506763656431',
          params: {
            pp: 'g',
            ps: 'dkqx',
            p2: 'gwmw'
          }
        });
        window.Ya.adfoxCode.create({
          ownerId: 299653,
          containerId: 'adfox_159480168913443656',
          params: {
            pp: 'h',
            ps: 'dkqx',
            p2: 'gwmx'
          }
        });
      }
    }
  }
</script>
