<template>
  <div class="col-12 col-lg-9 left">
    <div class="lane" v-for="post of posts" :key="post.id">
      <nuxt-link :to="{name: 'post-slug', params: {slug: post.slug}}" class="lane__title">
        <h2 v-html="post.title.rendered"></h2>
      </nuxt-link>

      <div class="lane__cat">
        <nuxt-link :to="{name: 'category-slug', params: {slug: post.x_cats_slug[0]}}" class="lane__title">{{post.x_cats[0]}}</nuxt-link>
      </div>

      <p class="lane__excerpt" v-html="post.excerpt.rendered"></p>

      <img class="lane__img" :alt="post.alt" :src="post.x_featured_media_large">

     <div class="lane__bot">
       <a href="#" class="lane__cont">
         Читать продолжение...
       </a>
       <span class="lane__date">
         {{post.x_date}}
       </span>
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
        title: 'Полоса | iGrader.ru'
      }
    },
    async asyncData({$axios, params}) {
      const url = 'https://igrader.ru/wp-json/wp/v2/posts?tags=2099&per_page=12';
      const posts = await $axios.$get(url)
      return {posts, url}
    },
    methods: {
      async fetchData() { //загрузить еще
        let a = document.querySelector('.loadmore')
        a.blur()
        this.page++
        await this.$axios.$get(this.url + "&page=" + this.page)
        .then(responce => {

          // let z = 0
          for(let item of responce) {
            this.posts.push(item)
            // setTimeout(() => this.posts.push(item), z)
            // z += 300
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

<style scoped>

</style>
