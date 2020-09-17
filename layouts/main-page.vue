<template>
  <div>
    <header-my />
    <Nuxt />
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
    mounted() {
      // this.adfox()
    },
    computed: {
      cookies() {
        const cookieRes = this.$cookies.get('cookie')
        return cookieRes !== 1;
      }
    },
    methods: {
      adfox() {
        if(window.Ya) {
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
          window.Ya.adfoxCode.create({
            ownerId: 299653,
            containerId: 'adfox_159374525659365226',
            params: {
              pp: 'g',
              ps: 'dkqx',
              p2: 'gwau'
            }
          });
          window.Ya.adfoxCode.create({
            ownerId: 299653,
            containerId: 'adfox_159374935502579870',
            params: {
              pp: 'i',
              ps: 'dkqx',
              p2: 'gwna'
            }
          });
          window.Ya.adfoxCode.create({
            ownerId: 299653,
            containerId: 'adfox_159374952133726391',
            params: {
              pp: 'i',
              ps: 'dkqx',
              p2: 'gwnb'
            }
          });
          window.Ya.adfoxCode.create({
            ownerId: 299653,
            containerId: 'adfox_159712112538951246',
            params: {
              pp: 'i',
              ps: 'dkqx',
              p2: 'gxim'
            }
          });
        }
      }
    }
  }
</script>
