<template>
  <div class="col-12 col-lg-3 side">
    <div class="foxy">
      <img class="wrapper__adImg" src="https://picsum.photos/250/375/?random=5">
    </div>

    <div v-if="this.width > 992" class="foxy foxy-news">
      <h2 class="field__title" >
        <a href="#">
          Новости
        </a>
      </h2>
      <nuxt-link v-for="post of posts" :key="post.id" :to="{name: 'post-slug', params: {slug: post.slug}}" class="foxy-news-line">
        <div class="foxy__text" v-html="post.title.rendered.slice(0, 45) + ' ...'">
        </div>
        <div>
          <img :alt="post.alt" :src="post.x_featured_media_large">
        </div>
      </nuxt-link>
      </div>

    <div class="foxy">
      <img class="wrapper__adImg" src="https://picsum.photos/250/375/?random=5">
    </div>

    <div v-if="journal.acf !== undefined" class="foxy">
      <h2 class="field__title" >
        <a href="#">
          Свежий номер
        </a>
      </h2>
      <nuxt-link class="wrapper__adText" :to="{name: 'archive-slug', params: {slug: journal.slug}}">
      <img class="wrapper__adImg" :src="journal.acf.ssylka_na_oblozhku">
        Online-версия
      </nuxt-link>
      <nuxt-link class="wrapper__adText" :to="{name: 'pages-slug', params: {slug: 'about'}}">
        Оформить подписку
      </nuxt-link>
    </div>


<!--    <div class="foxy" id="adfox_159374506763656431"></div>-->

<!--    <div v-if="this.width > 992" class="foxy foxy-news">-->
<!--      <h2 class="field__title" >-->
<!--        <a href="#">-->
<!--          Новости-->
<!--        </a>-->
<!--      </h2>-->
<!--      <nuxt-link v-for="post of posts" :key="post.id" :to="{name: 'post-slug', params: {slug: post.slug}}" class="foxy-news-line">-->
<!--        <div class="foxy__text" v-html="post.title.rendered.slice(0, 45) + ' ...'">-->
<!--        </div>-->
<!--        <div>-->
<!--          <img :alt="post.alt" :src="post.x_featured_media_large">-->
<!--        </div>-->
<!--      </nuxt-link>-->
<!--    </div>-->

<!--    <div class="foxy" id="adfox_159480168913443656"></div>-->

<!--    <div v-if="journal.acf !== undefined" class="foxy">-->
<!--      <h2 class="field__title" >-->
<!--        <a href="#">-->
<!--          Свежий номер-->
<!--        </a>-->
<!--      </h2>-->
<!--      <nuxt-link class="wrapper__adText" :to="{name: 'archive-slug', params: {slug: journal.slug}}">-->
<!--        <img class="wrapper__adImg" :src="journal.acf.ssylka_na_oblozhku">-->
<!--        Online-версия-->
<!--      </nuxt-link>-->
<!--      <nuxt-link class="wrapper__adText" :to="{name: 'pages-slug', params: {slug: 'about'}}">-->
<!--        Оформить подписку-->
<!--      </nuxt-link>-->
<!--    </div>-->
  </div>
</template>

<script>

  export default {
    data() {
      return {
        posts: [],
        width: 1920,
        // journal: [],
        slug: []
      }
    },
    mounted() {
      let width = document.documentElement.clientWidth
      this.width = width
      this.$axios.$get('https://igrader.ru/wp-json/wp/v2/posts?mainthemes=1599&per_page=3')
      .then(responce => {
        this.posts = responce
      })

    },
    computed: {
      journal() {
        return this.$store.getters['lastMag/journal']
      },
    },
	}
</script>


<style scoped>
  @media (max-width: 992px) {
    h2.field__title {
      display: none;
    }
  }


</style>
