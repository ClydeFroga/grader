<template>
	<div>
    <header-my/>
    <div class="container-md">
      <div class="row">
        <nuxt/>
        <aside-my v-if="$route.name !== 'post-slug' && $route.name !== 'comtrans-2019-slug' && $route.name !== 'events-slug'"/>
      </div>
      <bot-news v-if="$route.name !== 'lane' && $route.name !== 'post-slug' && $route.name !== 'comtrans-2019-slug' && $route.name !== 'events-slug'"/>
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
    },
    mounted() {
      // this.test()
      // this.adfox()
    },
    updated() {
      // setTimeout(() => {
      //   this.test()
      // }, 100)
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
      },
      test() {
        window.Ya.adfoxCode.create({
          ownerId: 299653,
          containerId: 'adfox_15983472592613563',
          params: {
            p1: 'clzeo',
            p2: 'gxsz',
            pfc: 'dcwtq',
            pfb: 'ikavk'
          }
        });
      }
    }
  }
</script>

<style scoped>
  .row {
    justify-content: space-between;
  }
</style>
