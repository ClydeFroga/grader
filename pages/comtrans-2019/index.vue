<template>
  <div class="col-12 col-lg-9 news left">
    <h2 class="field__title">
      <a>
        COMTRANS 2019
      </a>
    </h2>

    <div class="description">
      <p>
        Спецпроект «<strong>Выставка COMTRANS 2019</strong>» глазами портала igrader.ru.
      </p>
      <p>
        В режиме реального времени для читателей портала мы публиковали обзоры новинок техники, грузовиков, коммерческого и пассажирского транспорта, представленных на выставке COMTRANS / КОМТРАНС 2019.
      </p>
      <p class="last">
        Подробные обзоры, интервью с участниками читайте в этой подборке. До встречи на COMTRANS 2021!
      </p>
    </div>

    <div class="kratko row row-cols-1 row-cols-md-3">
      <nuxt-link :to="{name: 'comtrans-2019-slug', params: {slug: post.slug}}" class="col" v-for="(post, ind) of posts" :key="post.id" v-if="ind < 6">
        <div class="kratko__imgBlc">
          <img :alt="post.alt" :src="post.x_featured_media_large" class="kratko__img">
        </div>
        <div class="kratko__text">
          <span class="kratko__date">
            {{post.x_date}}
          </span>
          <p class="kratko__title" v-html="post.title.rendered.slice(0, 80) + ' ...'"></p>
          <span class="kratko__cat">
            {{post.x_cats[0]}}
          </span>
        </div>
      </nuxt-link>

    </div>

    <div class="long-ad">
      <div  class="long-ad" id="adfox_159374525659365226"></div>
    </div>

    <div class="kratko row row-cols-1 row-cols-md-3">
      <nuxt-link :to="{name: 'comtrans-2019-slug', params: {slug: post.slug}}" class="col" v-for="(post, ind) of posts" :key="post.id" v-if="ind > 5">
        <div class="kratko__imgBlc">
          <img :alt="post.alt" :src="post.x_featured_media_large" class="kratko__img">
        </div>
        <div class="kratko__text">
          <span class="kratko__date">
            {{post.x_date}}
          </span>
          <p class="kratko__title" v-html="post.title.rendered.slice(0, 80) + ' ...'"></p>
          <span class="kratko__cat">
            {{post.x_cats[0]}}
          </span>
        </div>
      </nuxt-link>

    </div>

    <button @click.prevent="fetchData" class="loadmore" type="button">
      Загрузить еще
    </button>

    <div class="long-ad" id="adfox_159374528706764377"></div>
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
        title: 'Выставка COMTRANS 2019 | iGrader.ru'
      }
    },
    async fetch ({ params, store }) {
      if (store.getters['lastMag/journal'].length === 0) {
        await store.dispatch('lastMag/fetch')
      }
      if (store.getters['botNews/news'].length === 0) {
        await store.dispatch('botNews/fetch')
      }
    },
    async asyncData() {
      const url = 'http://localhost/igrader/wp-json/wp/v2/comtrans?per_page=12';
      let posts = await fetch(url)
      posts = await posts.json()
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
          nav.innerHTML = `<p>Вы просмотрели все записи</p>`
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
  .description p {
    font-size: 1.2em;
    color: #3f4e55;
    margin-bottom: 1em;
  }
  .description strong {
    font-size: 1em;
    color: #3f4e55;
  }
  .last {
    margin-bottom: 2rem !important;
  }
</style>
