<template>
  <div v-if="this.post[0].title.rendered === 'Пост не найден'" class="post row col-12 col-md-8 col-lg-9 left">
    <h1 class="col">
      Поста не существует
    </h1>
  </div>

  <div v-else class="post row col-12 col-md-8 col-lg-9 left single">
    <div  class="col-12 col-md-10">
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
    data() {
      return {
        offset: 0,
        loaded: [],
        titles: [],
        news: [],
        articles: [],
      }
    },
    async asyncData({$axios, params}) {
      let post = await $axios.$get('https://igrader.ru/wp-json/wp/v2/posts?slug=' + params.slug)
      if(post.length === 0) {
        post = [{
          title: {
            rendered: 'Пост не найден'
          }
        }]
        return {post}
      }
      let urls = ['http://localhost:3000/post/' + params.slug]
      let articles = [post[0].title.rendered]
      let ids = [post[0].id]
      return {post, urls, articles, ids}
    },
    computed: {
      cleanText() {
        return this.post[0].title.rendered.replace(/<\/?[^>]+(>|$)/g, "");
      },
    },
	}
</script>
