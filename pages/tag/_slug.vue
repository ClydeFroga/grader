<template>
  <div class="col-12 col-lg-9 news left">

    <div>
      <div class="news__breadcrumbs">
        <nuxt-link to="/">Главная</nuxt-link>
        <span> / </span>
        <span>{{this.cat}}</span>
      </div>

      <div v-for="(post, index) of posts" :key="post.id" class="row news__one">
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
            <div v-html="post.excerpt.rendered.slice(0, 180) + ' ...'" class="news__excerpt">
            </div>
          </nuxt-link>
        </div>

        <div v-if="index === 2" class="sticky stickyNews">
          <div class="row row-cols-1 row-cols-md-3 wrapper__botCol">

            <div class="col" v-for="(title, ind) of sticky" :key="title.id" v-if="ind < 3 && index === 2">
              <div>
                <nuxt-link :to="{name: 'post-slug', params: {post:title.x_cats_slug[0], slug: title.slug}}">
                  <div class="wrapper__trpl">
                    <img :alt='title.alt' :src="title.x_featured_media_large">
                    <span>{{title.x_types[0]}}</span>
                    <p v-html="title.title.rendered" class="wrapper__trplText"></p>
                  </div>

                </nuxt-link>
              </div>
            </div>

          </div>
        </div>
      </div>

      <button @click.prevent="fetchData" class="loadmore" type="button">
        Загрузить еще
      </button>

      <div  class="long-ad" id="adfox_159374525659365226"></div>

    </div>
  </div>
</template>

<script>
  export default {
    async fetch ({store }) {
      if (store.getters['lastMag/journal'].length === 0) {
        await store.dispatch('lastMag/fetch')
      }
      if (store.getters['botNews/news'].length === 0) {
        await store.dispatch('botNews/fetch')
      }
      if (store.getters['mainPage/sticky'].length === 0) {
        await store.dispatch('mainPage/sticky')
      }
    },
    data: () => ({
      page: 1,
      titles: [],
    }),
    head() {
      return {
        title: this.cat + ' | iGrader.ru'
      }
    },
    async asyncData({params, redirect}) {
      let cat = '';
      const url = 'http://localhost/igrader/wp-json/wp/v2/posts?tag_slug=' + params.slug;
      let posts = []
      await fetch(url)
      .then(responce => responce.json())
      .then(result => {
        if(result.length === 0) {
          redirect(301, `/404`)
        }
        posts = result;
        cat = result[0].x_tags[0]
      })

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
          document.preventDefault
        })
      },
      computed: {
        sticky() {
          return this.$store.getters['mainPage/sticky']
        }
      }
    },
  }
</script>
