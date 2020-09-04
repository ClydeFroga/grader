<template>
  <div class="col-12 col-lg-9 left">
    <div class="magazine">
      <div class="magazine__item" v-for="post of posts" :key="post.id">
        <nuxt-link class="magazine__anchor" :to="{name: 'archive-slug', params: {slug: post.slug}}">
          <img class="magazine__img" :src="post.acf.ssylka_na_oblozhku">
          <p class="magazine__title">{{post.name}}</p>
        </nuxt-link>
      </div>
    </div>
    <div class="magazine">
      <div class=" magazine__item" v-for="post of articles" :key="post.id">
        <nuxt-link class="magazine__anchor" :to="{name: 'archive-slug', params: {slug: post.slug}}">
          <img class="magazine__img" :src="post.acf.ssylka_na_oblozhku">
          <p class="magazine__title">{{post.name}}</p>
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
    async fetch({store}) {
      if (store.getters['archive/main'].length === 0) {
        await store.dispatch('archive/fetch')
      }
      if (store.getters['botNews/news'].length === 0) {
        await store.dispatch('botNews/fetch')
      }
    },
    data: () => ({
      page: 1,
      articles: [],
    }),
    head() {
      return {
        title: 'Архив журнала "Грейдер" | iGrader.ru',
      }
    },
    computed: {
      posts() {
        return this.$store.getters['archive/main']
      }
    },
    methods: {
      async fetchData() { //загрузить еще
        let a = document.querySelector('.loadmore')
        a.blur()
        this.page++
        await this.$axios.$get("https://igrader.ru/wp-json/wp/v2/magazins?orderby=slug&order=desc&per_page=12&page=" + this.page)
        .then(responce => {
          for(let item of responce) {
            this.articles.push(item)
          }
        })
        .catch(function (e) {
          let nav =  document.querySelector('.loadmore')
          nav.innerHTML = `Вы просмотрели все записи`
          document.preventDefault
        })
      },
    }
  }
</script>
