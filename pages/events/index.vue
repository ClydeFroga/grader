<template>
  <div class="col-12 col-lg-9 news left">
    <div>
      <div class="news__breadcrumbs">
        <nuxt-link to="/">Главная</nuxt-link>
        <span> / </span>
        <span>Мероприятия</span>
      </div>
      <div v-for="post of events" :key="post.id" class="row news__one">
        <div class="col-12 col-sm">
          <nuxt-link :to="{name: 'events-slug', params: {slug: post.slug}}">
            <img :src="post.x_featured_media_large" :alt="post.alt">
          </nuxt-link>

        </div>

        <div class="col-12 col-sm-7">
          <div>
            <span class="news__date">
              {{post.acf.from}} - {{post.acf.to}}
            </span>
            <span class="news__cat">{{post.acf.city}}</span>
          </div>
          <nuxt-link :to="{name: 'events-slug', params: {slug: post.slug}}">
            <div v-html="post.title.rendered" class="news__title">

            </div>
            <div v-html="post.excerpt.rendered.slice(0, 120) + ' ...'" class="news__excerpt">
            </div>
          </nuxt-link>
        </div>
      </div>

      <div class="long-ad" id="adfox_159374525659365226"></div>

      <button @click.prevent="fetchData" class="loadmore" type="button">
        Загрузить еще
      </button>

      <div v-if="urls" class="eventGifs">
        <a v-for="(post, ind) of urls" :key="post.id" :href='link_url[ind]'>
          <img :src="post">
        </a>
      </div>

    </div>

  </div>
</template>

<script>
  export default {
    head() {
      return {
        title: 'Ближайшие мероприятия | iGrader.ru'
      }
    },
    data: () => ({
      page: 1,
      gifs: [],
      urls: [],
      link_url: []
    }),
    mounted() {
      this.$nextTick(() => {
        this.loadGifs()
      })
    },
    async fetch({store}) {
      if (store.getters['botNews/news'].length === 0) {
        await store.dispatch('botNews/fetch')
      }
      if (store.getters['lastMag/journal'].length === 0) {
        await store.dispatch('lastMag/fetch')
      }
    },
    async asyncData({redirect}) {
      let events = []
      let url = 'https://promotech.igrader.ru/wp-json/wp/v2/activity'
      await fetch(url)
      .then(responce => responce.json())
      .then(result => {
        if (result.length === 0) {
            redirect(301, `/404`)
        }
        result.sort(function (a, b) {
          if (a.acf.from > b.acf.from) return -1;
          if (a.acf.from == b.acf.from) return 0;
          if (a.acf.from < b.acf.from) return 1;
        })
        events = result
      })

      return {events, url}
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
          nav.setAttribute('disabled', '')
          nav.innerHTML = `Вы просмотрели все записи`
          document.preventDefault
        })
      },
      loadGifs() {
        let blc = document.querySelector('.eventGifs')
        let urls = []
        let link_url = []
        let links = []
        fetch('https://promotech.igrader.ru/wp-json/wp/v2/sidebar/events-gif')
        .then(responce => responce.json())
        .then(result => {
          let gifs = result._links.widgets
          for(let gif of gifs) {
            links.push(gif.href)
          }
          for(let link of links) {
            fetch(link)
            .then(responce => responce.json())
            .then(result => {
              urls.push(result.options.url.replace(/igrader/, 'promotech.igrader'))
              link_url.push(result.options.link_url)
            })
          }
        })


        this.urls = urls
        this.link_url = link_url
      }
    },
  }
</script>

<style scoped lang="scss">
  .eventGifs {
    margin: 2rem 0;
    display: flex;
    justify-content: space-around;
    a {
     img {
       width: 100%;
       height: auto;
     }
    }
  }
  .news__one.old {
    opacity: .8;
  }
</style>
