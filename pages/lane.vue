<template>
  <div class="col-12 col-lg-9 left">
    <div class="lane" v-for="(post, ind) of posts" :key="post.id">
      <nuxt-link :to="{name: 'post-slug', params: {slug: post.slug}}" class="lane__title">
        <h2 v-html="post.title.rendered"></h2>
      </nuxt-link>

      <div class="lane__cat">
        <nuxt-link :to="{name: 'category-slug', params: {slug: post.x_cats_slug[0]}}" class="lane__title">{{post.x_cats[0]}}</nuxt-link>
      </div>

      <div class="lane__excerpt" v-html="post.excerpt.rendered.slice(0, 180) + ' ...'"></div>

      <nuxt-link :to="{name: 'post-slug', params: {slug: post.slug}}">
        <img class="lane__img" :alt="post.alt" :src="post.x_featured_media_large">
      </nuxt-link>


     <div class="lane__bot">
       <nuxt-link :to="{name: 'post-slug', params: {slug: post.slug}}" class="lane__cont">
         Читать продолжение...
       </nuxt-link>
       <span class="lane__date">
         {{post.x_date}}
       </span>
     </div>

      <div v-if="ind == 1" class="long-ad" id="adfox_159374525659365226"></div>


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
    mounted() {
      this.$nextTick(() => {
        this.checkLatest()
      })
    },
    head() {
      return {
        title: 'Полоса | iGrader.ru'
      }
    },
    async asyncData() {
      const url = 'https://promotech.igrader.ru/wp-json/wp/v2/posts?tags=2099&per_page=12';
      let posts = await fetch(url)
      posts = await posts.json()
      let latest = posts[0].id
      return {posts, url, latest}
    },
    methods: {
      async fetchData() { //загрузить еще
        let a = document.querySelector('.loadmore')
        a.blur()
        this.page++
        await this.$axios.$get(this.url + "&page=" + this.page)
        .then(responce => {
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
      checkLatest() {
        let a = this.$cookies.get('latestLane')
        if (a !== this.latest) {
          this.$cookies.set('latestLane', this.latest, {
            path: '/',
            maxAge: 60 * 60 * 24 * 7,
            sameSite: 'Lax'
          })
          let c = document.querySelector('.lane_read')
          c.classList.remove('read' )
        }
      }
    },
  }
</script>

<style scoped>

</style>
