<template>

  <div class="col-12 col-lg-9 news left">

    <div class="news__breadcrumbs">
      <nuxt-link to="/">Главная</nuxt-link>
      <span> / </span>
      <nuxt-link to="/magazins">Архив</nuxt-link>
      <span> / </span>
      <span>{{this.cat[0].name}}</span>
    </div>

    <div class="row magazine__main" v-for="post of cat" :key="post.id">
      <div class="col-12 col-sm-auto">
          <img class="magazine__imgSingle" :src="post.acf.ssylka_na_oblozhku">
      </div>
      <div class="col-12 col-sm">
        <div class="magazine__titleSingle">
          {{post.name}}
        </div>
        <p class="magazine__textSingle">
          {{post.description}}
        </p>
        <div class="magazine__links">
          <a :href="post.acf.floowie_link" target="_blank">Листать журнал</a>
          <a v-if="post.acf.pdf_magazine.length > 0" target="_blank" :href="post.acf.pdf_magazine">Смотреть pdf</a>
          <nuxt-link to="/pages/about">Оформить подписку</nuxt-link>
        </div>
      </div>
    </div>

    <div v-if="this.posts.length === 0">
      <h1>
        Постов для этого журнала не найдено
      </h1>
    </div>
    <div v-else v-for="post of posts" :key="post.id" class="row news__one">
      <div class="col-12 col-sm">
        <nuxt-link :to="{name: 'post-slug', params: {post:post.x_cats_slug[0], slug: post.slug}}">
          <img :src="post.x_featured_media_large" :alt="post.alt">
        </nuxt-link>
      </div>

      <div class="col-12 col-sm-7">
        <div>
          <nuxt-link :to="{name: 'category-slug', params: {slug: post.x_cats_slug[0]}}" class="news__cat">
            {{post.x_cats[0]}}
          </nuxt-link>
          <span class="news__date">
              {{post.x_date}}
            </span>
        </div>
        <nuxt-link :to="{name: 'post-slug', params: {post:post.x_cats_slug[0], slug: post.slug}}">
          <div v-html="post.title.rendered" class="news__title">

          </div>
          <div v-html="post.excerpt.rendered.slice(0, 120)" class="news__excerpt">
          </div>
        </nuxt-link>
      </div>
    </div>


    <button @click.prevent="fetchData" class="loadmore" type="button">
      Загрузить еще
    </button>

  </div>
</template>

<script>
  export default {
    validate({ params }) {
      let val = /^\d+$/.test(params.slug)
      return !val
    },
    data: () => ({
      page: 1,
      titles: [],
    }),
    head() {
      return {
        title: this.cat[0].name + ' | iGrader.ru',
        meta: [
          { property: 'og:type', content: 'article'},
          { property: 'og:title', content: this.cat[0].name },
          { property: 'og:description', content:  this.cat[0].description },
          { property: 'og:url', content: 'http://localhost/igrader/magazins/' + this.cat[0].slug },
          { property: 'og:site_name', content: 'iGrader.ru' },
          { property: 'og:image', content: this.cat[0].acf.ssylka_na_oblozhku },
          { property: 'og:image:secure_url', content: this.cat[0].acf.ssylka_na_oblozhku },
          { property: 'og:article:published_time', content: this.cat[0].acf.reliz_jrnl },
          { property: 'twitter:card', content: "summary/" },
          { property: 'twitter:title', content: this.cat[0].name },
          { property: 'twitter:description', content: this.cat[0].description },
          { property: 'twitter:image', content: this.cat[0].acf.ssylka_na_oblozhku },
        ]
      }
    },
    async fetch ({store }) {
      if (store.getters['lastMag/journal'].length === 0) {
        await store.dispatch('lastMag/fetch')
      }
      if (store.getters['botNews/news'].length === 0) {
        await store.dispatch('botNews/fetch')
      }
    },
    async asyncData({params, redirect}) {
      let cat = await fetch('http://localhost/igrader/wp-json/wp/v2/magazins?slug=' + params.slug)
      cat = await cat.json()
      if(cat.length === 0) {
        redirect(301, `/404`)
      }
      const url = 'http://localhost/igrader/wp-json/wp/v2/posts?magazins=' + cat[0].id;
      let posts = await fetch(url)
      posts = await posts.json()

      return {posts, url, cat}
    },
    methods: {
      async fetchData() { //загрузить еще
        let a = document.querySelector('.loadmore')
        a.blur()
        this.page++
        await this.$axios.$get(this.url + "&page=" + this.page)
        .then(responce => {
          if(responce.length < 10) {
            let nav =  document.querySelector('.loadmore')
            nav.innerHTML = `Вы просмотрели все записи`
            nav.setAttribute('disabled', '')
          }
          for(let item of responce) {
            this.posts.push(item)
          }
        })
        .catch(function (e) {
          let nav =  document.querySelector('.loadmore')
          nav.innerHTML = `Вы просмотрели все записи`
          nav.setAttribute('disabled', '')
          document.preventDefault
        })
      },
    },
	}
</script>

<style scoped>

</style>
