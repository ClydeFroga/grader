<template>
  <div class="col-12 col-lg-3 side">

    <div class="foxy" id="adfox_159374506763656431"></div>

    <div v-if="this.width > 992 && $route.name !== 'kratko'" class="foxy foxy-news">
      <h2 class="field__title" >
        <a href="#">
          Новости
        </a>
      </h2>
      <nuxt-link v-for="post of posts" :key="post.id" :to="{name: 'post-slug', params: {post:post.x_cats_slug[0], slug: post.slug}}" class="foxy-news-line">
        <div class="foxy__text" v-html="post.title.rendered.slice(0, 45) + ' ...'">
        </div>
        <div>
          <img :alt="post.alt" :src="post.x_featured_media_large">
        </div>
      </nuxt-link>
      </div>

    <div class="foxy" id="adfox_159480168913443656"></div>

    <div class="foxy" id="adfox_159374518828642846"></div>

    <div v-if="journal !== undefined && journal.acf !== undefined" class="foxy">
      <h2 class="field__title" >
        <a href="#">
          Свежий номер
        </a>
      </h2>
      <nuxt-link class="wrapper__adText" :to="{name: 'magazins-slug', params: {slug: journal.slug}}">
      <img class="wrapper__adImg" :src="journal.acf.ssylka_na_oblozhku">
        Online-версия
      </nuxt-link>
      <nuxt-link class="wrapper__adText" :to="{name: 'pages-slug', params: {slug: 'about'}}">
        Оформить подписку
      </nuxt-link>
    </div>

  </div>
</template>

<script>

  export default {
    data() {
      return {
        posts: [],
        width: 1920,
        slug: []
      }
    },
    mounted() {
      this.width = document.documentElement.clientWidth
      this.side()
      let category = this.$route.params.slug
      return {category}
    },
    updated() {
      if(this.$route.params.slug !== this.category) {
        this.category = this.$route.params.slug
        this.side()
      }
    },
    computed: {
      journal() {
        return this.$store.getters['lastMag/journal']
      },
    },
    methods: {
      side() {
        let disq = this.$route.params.slug
        let a = ''

        switch(disq){
          case 'analitika':
          case 'kruglyj-stol':a = '1600,1604';break;
          case 'krupniym-planom':a = '1033,1638,1605';break;
          case 'ryinok':a = '1599';break;
          case 'kratko':a = '1601,1033,1602';break;
          case 'servismenyi':
          case 'kulibiny':
          case 'technology':
          case 'ispyitateli':a = '1601';break;
          case 'stranitci-istorii':
          default:a = '1599';break;
        }
        this.$axios.$get('https://promotech.igrader.ru/wp-json/wp/v2/posts?mainthemes=' + a + '&per_page=3')
        .then(responce => {
          this.posts = responce
        })
      },
    }
	}
</script>


<style scoped>
  @media (max-width: 992px) {
    h2.field__title {
      display: none;
    }
  }
</style>
