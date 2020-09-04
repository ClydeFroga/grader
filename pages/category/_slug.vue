<template>
  <div class="col-12 col-sm-9 news left">
    <div v-if="this.posts.length === 0">
      <h1>
        Постов в этой категории не найдено
      </h1>
    </div>
    <div v-else>
      <div class="news__breadcrumbs">
        <nuxt-link to="/">Главная</nuxt-link>
        <span> / </span>
        <span>{{this.cat[0].name}}</span>
      </div>

      <div v-for="post of posts" :key="post.id" class="row news__one">
        <div class="col-12 col-sm">
          <nuxt-link :to="{name: 'post-slug', params: {slug: post.slug}}">
            <img :src="post.x_featured_media_large" :alt="post.alt">
          </nuxt-link>

        </div>

        <div class="col-12 col-sm-7">
          <div>
            <nuxt-link :to="{name: 'news-slug', params: {slug: post.x_types_slug[0]}}" class="news__cat">
              {{post.x_types[0]}}
            </nuxt-link>
            <span class="news__date">
              {{post.x_date}}
            </span>
          </div>
          <nuxt-link :to="{name: 'post-slug', params: {slug: post.slug}}">
            <div v-html="post.title.rendered" class="news__title">

            </div>
            <div v-html="post.excerpt.rendered" class="news__excerpt">
            </div>
          </nuxt-link>
        </div>
      </div>

      <button @click.prevent="fetchData" class="loadmore" type="button">
        Загрузить еще
      </button>
    </div>

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
      MyTypes: []
    }),
    head() {
      return {
        title: this.cat[0].name + ' | Лесной комплекс '
      }
    },
    async asyncData({params, redirect}) {
      let cat = await fetch('https://igrader.ru/wp-json/wp/v2/categories?search=' + params.slug)
      cat = await cat.json()
      if(cat.length === 0) {
        redirect(301, `/404`)
      }
      const url = 'https://igrader.ru/wp-json/wp/v2/posts?categories=' + cat[0].id;
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
          nav.innerHTML = `<p>Вы просмотрели все записи</p>`
          document.preventDefault
        })
      },
    },
  }
</script>
