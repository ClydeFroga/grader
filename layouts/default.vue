<template>
	<div>
    <header-my/>
    <div v-if="this.$route.name === 'post-slug' || this.$route.name === 'comtrans-2019-slug'" class="progressMy"></div>
    <div v-if="$route.path !== '/'" class="container-md">
      <div class="row">
        <nuxt/>
        <aside-my v-if="$route.name !== 'post-slug' && $route.name !== 'comtrans-2019-slug' && $route.name !== 'events-slug'"/>
      </div>
      <bot-news v-if="$route.name !== 'lane' && $route.name !== 'post-slug' && $route.name !== 'comtrans-2019-slug' && $route.name !== 'events-slug'"/>
    </div>
    <scroll-to-top v-if="$route.path !== '/'" />
    <Nuxt v-if="$route.path === '/'" />
    <cookie />
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
    // beforeMount() {
    //   this.adfoxDestr()
    // },
    mounted() {
      this.adfox()
      setTimeout(() => {
        this.$ga.event('send', 'event', 'new visitor')
      }, 15000)
    },
    updated() {
      setTimeout(() => {
        this.adfoxRel()
      }, 1500)
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
          }); //
          window.Ya.adfoxCode.create({
            ownerId: 299653,
            containerId: 'adfox_159480168913443656',
            params: {
              pp: 'h',
              ps: 'dkqx',
              p2: 'gwmx'
            }
          }); //
          window.Ya.adfoxCode.create({
            ownerId: 299653,
            containerId: 'adfox_159374935502579870',
            params: {
              pp: 'i',
              ps: 'dkqx',
              p2: 'gwna'
            }
          }); //
          window.Ya.adfoxCode.create({
            ownerId: 299653,
            containerId: 'adfox_159374952133726391',
            params: {
              pp: 'i',
              ps: 'dkqx',
              p2: 'gwnb'
            }
          }); //
          window.Ya.adfoxCode.create({
            ownerId: 299653,
            containerId: 'adfox_159712112538951246',
            params: {
              pp: 'i',
              ps: 'dkqx',
              p2: 'gxim'
            }
          }); //
          window.Ya.adfoxCode.create({
              ownerId: 299653,
              containerId: 'adfox_159374525659365226',
              params: {
                pp: 'g',
                ps: 'dkqx',
                p2: 'gwau'
              }
          }); // D1
          window.Ya.adfoxCode.create({
            ownerId: 299653,
            containerId: 'adfox_159374518828642846',
            params: {
              pp: 'i',
              ps: 'dkqx',
              p2: 'gwmy'
            }
          }); // C
          window.Ya.adfoxCode.create({
            ownerId: 299653,
            containerId: 'adfox_159374528706764377',
            params: {
              pp: 'i',
              ps: 'dkqx',
              p2: 'gwmz'
            }
          }); // D2
        }
      },
      adfoxRel() {
        if(window.Ya) {
          window.Ya.adfoxCode.reload()
        }
      },
      // adfoxDestr() {
      //   if(window.Ya) {
      //     window.Ya.adfoxCode.destroy();
      //   }
      // },
    }
  }
</script>

<style scoped lang="scss">
  .row {
    justify-content: space-between;
  }
  .progressMy {
    height: 3px;
    background: linear-gradient(90deg, rgba(255,153,0,1) 0%, rgba(247,99,12,1) 100%);;
    position: fixed;
    top: 0;
    z-index: 5;
    width: 0;
  }
</style>
