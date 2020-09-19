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

    <div class="col-12 sticky stickyKratko">
      <div class="row row-cols-1 row-cols-md-3 wrapper__botCol">

        <div class="col" v-for="(title, ind) of sticky" :key="title.id" v-if="ind < 3">
          <div>
            <nuxt-link :to="{name: 'post-slug', params: {slug: title.slug}}">
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

    <div class="long-ad" id="adfox_159374525659365226"></div>

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
    mounted() {
      this.$nextTick(() => {
        this.checkLatest()
      })
    },
    async fetch ({ params, store }) {
      if (store.getters['lastMag/journal'].length === 0) {
        await store.dispatch('lastMag/fetch')
      }
      if (store.getters['botNews/news'].length === 0) {
        store.dispatch('botNews/fetch')
      }
      if (store.getters['mainPage/sticky'].length === 0) {
        await store.dispatch('mainPage/sticky')
      }
    },
    async asyncData() {
      const url = 'https://promotech.igrader.ru/wp-json/wp/v2/posts?mainthemes=1599&per_page=12';
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
          nav.innerHTML = `Вы просмотрели все записи`
          document.preventDefault
        })
      },
      checkLatest() {
        let a = this.$cookies.get('latestNews')
        if (a !== this.latest) {
          this.$cookies.set('latestNews', this.latest, {
            path: '/',
            maxAge: 60 * 60 * 24 * 7,
            sameSite: 'Lax'
          })
          let c = document.querySelector('.news_read')
          c.classList.remove('read' )
        }
      },
    },
    computed: {
      sticky() {
        return this.$store.getters['mainPage/sticky']
      }
    }
	}
</script>

<style scoped>
  .field__title {
    margin-top: 0;
  }
</style>
