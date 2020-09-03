<template>
  <div class="col-12 col-lg-9 news left">
    <h2 class="field__title">
      <a>
        Новости
      </a>
    </h2>

    <div class="kratko row row-cols-1 row-cols-md-3">
      <nuxt-link :to="{name: 'post-slug', params: {slug: post.slug}}" class="col" v-for="(post, ind) of posts" :key="post.id" v-if="ind < 6">
        <div class="kratko__imgBlc">
          <img :alt="post.alt" :src="post.x_featured_media_large" class="kratko__img">
        </div>
        <div class="kratko__text">
          <span class="kratko__date">
            {{post.x_date}}
          </span>
          <p class="kratko__title" v-html="post.title.rendered"></p>
          <span class="kratko__cat">
            {{post.x_cats[0]}}
          </span>
        </div>
      </nuxt-link>

    </div>

    <div class="long-ad">
      <img src="https://picsum.photos/728/90/?random=1">
    </div>

    <div class="kratko row row-cols-1 row-cols-md-3">
      <nuxt-link :to="{name: 'post-slug', params: {slug: post.slug}}" class="col" v-for="(post, ind) of posts" :key="post.id" v-if="ind > 5">
        <div class="kratko__imgBlc">
          <img :alt="post.alt" :src="post.x_featured_media_large" class="kratko__img">
        </div>
        <div class="kratko__text">
          <span class="kratko__date">
            {{post.x_date}}
          </span>
          <p class="kratko__title" v-html="post.title.rendered"></p>
          <span class="kratko__cat">
            {{post.x_cats[0]}}
          </span>
        </div>
      </nuxt-link>

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
        title: 'Новости | iGrader.ru'
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
    async asyncData({$axios}) {
      const url = 'https://igrader.ru/wp-json/wp/v2/posts?mainthemes=1599&per_page=12';
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
          for(let item of responce) {
            this.posts.push(item)
          }
        })
        .catch(function (e) {
          let nav =  document.querySelector('.loadmore')
          nav.innerHTML = `Вы просмотрели все записи`
          document.preventDefault
        })
      },
    },
	}
</script>

<style scoped>
  .field__title {
    margin-top: 0;
  }
</style>
