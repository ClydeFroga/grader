<template>
  <div class="about col-12 col-lg-7 left single adv" >
    <div v-for="post of posts" :key="post.id">
      <h1>{{post.title.rendered}}</h1>
      <div class="news__breadcrumbs">
        <nuxt-link to="/">Главная</nuxt-link>
        <span> / </span>
        <span>{{post.title.rendered}}</span>
      </div>
      <div class="single__text" v-html="post.content.rendered"></div>
    </div>
  </div>
</template>

<script>
	export default {
    head() {
      return {
        title: this.posts[0].title.rendered + ' | iGrader.ru'
      }
    },
    async fetch ({ params, redirect, store }) {
      if (store.getters['lastMag/journal'].length === 0) {
        await store.dispatch('lastMag/fetch')
      }
      if (store.getters['botNews/news'].length === 0) {
        store.dispatch('botNews/fetch')
      }
    },
    async asyncData({$axios, params, redirect}) {
      let posts = await $axios.$get('https://igrader.ru/wp-json/wp/v2/pages?slug=' + params.slug)
      if(posts.length === 0) {
        redirect(301, `/404`)
      }
      return {posts}
    },
	}
</script>
