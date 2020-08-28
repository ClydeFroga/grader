<template>
  <div class="container-md">
    <div class="row">
      <div v-if="this.post[0].title.rendered === 'Пост не найден'" class="post row col-12 col-md-8 col-lg-9 left">
        <h1 class="col">
          Поста не существует
        </h1>
      </div>

      <div v-else class="post col-12 col-lg-7 left single">

        <div class="loaded">
          <h1 class="single__title" :id="this.post[0].id" v-html="this.post[0].title.rendered"></h1>
          <div class="single__date">
            {{this.post[0].x_date}}
          </div>
          <div class="single__breadcrumbs">
            <nuxt-link to="/">Главная</nuxt-link>
            <span class="single__separator"> / </span>
            <nuxt-link :to="{name: 'news-slug', params: {slug: this.post[0].x_cats_slug[0]}}">{{this.post[0].x_cats[0]}}</nuxt-link>
          </div>
          <div class="row">
            <div class="col-lg-12">
              <div class="single__main">
                <img class="mainImg" :alt="this.post[0].alt" :src="this.post[0].x_featured_media_large">
              </div>
              <div class="single__text" v-html="this.post[0].content.rendered"></div>
            </div>
          </div>
        </div>

        <div class="loaded" v-for="post of titles" :key="post.id">
          <nuxt-link class="tag" v-for="(tag, ind) of post.x_tags" :key="tag" :to="{ name: 'tag-slug', params: { slug: post.x_tags_slug[ind] } }">
            {{ tag }}
          </nuxt-link>
          <h1 :id="post.id" v-html="post.title.rendered"></h1>
          <div class="row">
            <div class="col-lg-12">
              <div class="main">
                <img class="mainImg" :alt="post.alt" :src="post.x_featured_media_large">
              </div>
              <div class="text" v-html="post.content.rendered">
              </div>
            </div>
          </div>
        </div>


      </div>

      <div class="col-lg-2">

      </div>

      <div class="col-12 col-lg-3 side">
        <div class="foxy" id="adfox_15983472592613563"></div>
        <script>
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
        </script>
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
        <div class="foxy">
          <img class="wrapper__adImg" src="https://picsum.photos/250/375/?random=5">
        </div>
        <div  v-if="journal.acf !== undefined" class="foxy">
          <h2 class="field__title" >
            <a href="#">
              Свежий номер
            </a>
          </h2>
          <nuxt-link class="wrapper__adText" :to="{name: 'archive-slug', params: {slug: journal.slug}}">
            <img class="wrapper__adImg" :src="journal.acf.ssylka_na_oblozhku">
            Online-версия
          </nuxt-link>
          <nuxt-link class="wrapper__adText" to="/about">
            Оформить подписку
          </nuxt-link>
        </div>
      </div>
    </div>
    <div>
      <h2 class="field__title">
        <a href="#">
          Новые материалы на портале
        </a>
      </h2>
      <div class="row field">
        <div class="col-12 col-lg">

          <div class="row-cols-1 row-cols-md-2 row">
            <nuxt-link v-for="post of posts" :key="post.id" class="col field__blockFull" :to="{name: 'post-slug', params: {slug: post.slug}}">

              <div class="field__block">
                <div class="field__imgBlc">
                  <img :alt="post.alt" :src="post.x_featured_media_large">
                  <p class="field__text" v-html="post.title.rendered">
                  </p>
                </div>
              </div>

              <div class="field__botText">
                <p v-html="post.excerpt.rendered.slice(0, 120) + ' ...'">
                </p>
              </div>

            </nuxt-link>

          </div>
        </div>

        <div class="col-12 col-lg-3">
          <div class="foxy">
            <img class="wrapper__adSmallImg" src="https://picsum.photos/250/375/?random=5">
          </div>
          <div class="foxy">
            <img class="wrapper__adSmallImg" src="https://picsum.photos/250/375/?random=5">
          </div>
          <div class="foxy">
            <img class="wrapper__adSpecialImg" src="https://picsum.photos/250/375/?random=5">
          </div>
        </div>
      </div>
    </div>
  </div>

</template>

<script>
  export default {
    validate({ params }) {
      let val = /^\d+$/.test(params.slug)
      return !val
    },
    head() {
      return {
        title: this.post[0].title.rendered,
      }
    },
    layout: 'single',
    data() {
      return {

      }
    },
    async fetch({store}) {
      if (store.getters['botNews/news'].length === 0) {
        await store.dispatch('botNews/fetch')
      }
      if (store.getters['lastMag/journal'].length === 0) {
        await store.dispatch('lastMag/fetch')
      }
    },
    async asyncData({$axios, params, redirect}) {
      let post = await $axios.$get('https://igrader.ru/wp-json/wp/v2/comtrans?slug=' + params.slug)
      if(post.length === 0) {
        redirect(301, `/404`)
      }
      return {post}
    },
    computed: {
      cleanText() {
        return this.post[0].title.rendered.replace(/<\/?[^>]+(>|$)/g, "");
      },
      posts() {
        return this.$store.getters['botNews/news']
      },
      journal() {
        return this.$store.getters['lastMag/journal']
      },
    },
  }
</script>
