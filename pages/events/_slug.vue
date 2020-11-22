<template>
  <div class="col-12">
    <div class="row">
      <div  class="post col-12 col-lg-7 left single">

        <div class="loaded">
          <h1 class="single__title" :id="this.titles[0].id" v-html="this.titles[0].title.rendered"></h1>
          <div class="single__date">
            {{this.titles[0].x_date}}
          </div>
          <div class="single__breadcrumbs">
            <nuxt-link to="/">Главная</nuxt-link>
            <span class="single__separator"> / </span>
            <nuxt-link to="/events">Мероприятия</nuxt-link>
          </div>
          <div class="row">
            <div class="col-lg-12 forTm">
              <div class="single__main">
                <img data-not-lazy class="mainImg" :alt="this.titles[0].alt" :src="this.titles[0].x_featured_media_large">
              </div>
              <div class="single__text dates">
                <p>
                  <strong>Дата:</strong> {{this.titles[0].acf.from}} - {{this.titles[0].acf.to}}
                </p>
                <p>
                  <strong>Время:</strong> {{this.titles[0].acf.event_start}} - {{this.titles[0].acf.event_end}}
                </p>
                <p>
                  <strong>Адрес:</strong> {{this.titles[0].acf.address}} , {{this.titles[0].acf.city}}
                </p>
              </div>
              <div class="single__text" v-html="this.titles[0].content.rendered"></div>
            </div>
          </div>
        </div>
      </div>

      <div class="col-12 col-md-1 col-lg-2">
        <div class="sharing__wrapper">

          <a :href="'http://vk.com/share.php?url=https://igrader.ru' + $route.path + '&title=' + this.titles[0].title.rendered + '&description=' + cleanText(this.titles[0].excerpt.rendered) + '&image=' + this.titles[0].x_featured_media" class="sharing__item vk">
            <svg width="25" height="25" fill="white">
              <use xlink:href="@/static/svgsprite.svg#vk_logo"></use>
            </svg>
          </a>

          <a :href="'http://www.facebook.com/sharer.php?s=100&p[url]=https://igrader.ru' + $route.path + '&p[title]=' + this.titles[0].title.rendered + '&p[summary]=' + cleanText(this.titles[0].excerpt.rendered) + '&p[images][0]=' + this.titles[0].x_featured_media" class="sharing__item fb">
            <svg width="25" height="25" fill="white">
              <use xlink:href="@/static/svgsprite.svg#fb_logo"></use>
            </svg>
          </a>

          <a :href="'http://www.odnoklassniki.ru/dk?st.cmd=addShare&st.s=1&st._surl=https://igrader.ru'+ $route.path +'&st.comments=' + this.titles[0].title.rendered" class="sharing__item od">
            <svg width="25" height="25" fill="white">
              <use xlink:href="@/static/svgsprite.svg#classmates_logo"></use>
            </svg>
          </a>

          <a :href="'https://telegram.me/share/url?url=https://igrader.ru'+  $route.path +'&amp;text=' + this.titles[0].title.rendered" class="sharing__item telegram">
            <svg width="25" height="25" fill="white">
              <use xlink:href="@/static/svgsprite.svg#pocket_logo"></use>
            </svg>
          </a>

          <a :href="'viber://forward?text=' + this.titles[0].title.rendered" class="sharing__item viber">
            <svg width="25" height="25" fill="white">
              <use xlink:href="@/static/svgsprite.svg#viber_logo"></use>
            </svg>
          </a>

          <a :href="'whatsapp://send?text=https://igrader.ru' + $route.path" class="sharing__item wApp">
            <svg width="25" height="25" fill="white">
              <use xlink:href="@/static/svgsprite.svg#wApp_logo"></use>
            </svg>
          </a>
        </div>
      </div>

      <div class="col-12 col-lg-3 side">

        <div class="foxy ad" id="adfox_159374506763656431"></div>

        <transition name="sideNews">
          <div v-if="this.width > 992" class="foxy foxy-news">
            <h2 class="field__title" >
              <a>
                Читайте также
              </a>
            </h2>

            <nuxt-link v-if="ind < 3" v-for="(post, ind) of postsRight" :key="post.id" :to="{name: 'post-slug', params: {post:post.x_cats_slug[0], slug: post.slug}}" class="foxy-news-line">
              <div class="foxy__text" v-html="post.title.rendered.slice(0, 45) + ' ...'">
              </div>
              <div>
                <img :alt="post.alt" :src="post.x_featured_media_large">
              </div>
            </nuxt-link>
          </div>
        </transition>

        <div class="foxy ad" id="adfox_159480168913443656"></div>

        <div class="foxy" id="adfox_159374518828642846"></div>

        <div v-if="journal.acf !== undefined" class="foxy fresh">
          <h2 class="field__title" >
            <a href="#">
              Свежий номер
            </a>
          </h2>
          <nuxt-link class="wrapper__adText" :to="{name: 'magazins-slug', params: {slug: journal.slug}}">
            <img class="wrapper__adImg" :src="journal.acf.ssylka_na_oblozhku">
            Online-версия
          </nuxt-link>
          <nuxt-link class="wrapper__adText" :to="{name: 'pages-slug', params: {slug: 'about'}}">
            Оформить подписку
          </nuxt-link>
        </div>
      </div>
    </div>

    <div class="long-ad" id="adfox_159374525659365226"></div>



    <h2 class="field__title">
      <nuxt-link to="/lane">
        Полоса
      </nuxt-link>
    </h2>

    <div class="field__four row row-cols-1 row-cols-md-2 row-cols-xl-4">
      <nuxt-link v-for="post of lane" :key="post.id" class="col" :to="{name: 'post-slug', params: {post:post.x_cats_slug[0], slug: post.slug}}">
        <img :alt='post.alt' :src="post.x_featured_media_large">
        <p v-html="post.title.rendered" class="field__span"></p>
      </nuxt-link>
    </div>

    <div class="long-ad" id="adfox_159374528706764377"></div>

    <div>
      <h2 class="field__title">
        <nuxt-link to="/kratko">
          Новости
        </nuxt-link>
      </h2>

      <div class="kratko row row-cols-2 row-cols-md-4">
        <nuxt-link :to="{name: 'post-slug', params: {post:post.x_cats_slug[0], slug: post.slug}}" class="col" v-for="(post, ind) of postsRight" :key="post.id" v-if="ind < 6">
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
    </div>
  </div>

</template>

<script>

  export default {
    validate({ params }) {
      let val = /^\d+$/.test(params.slug)
      return !val
    },
    head() {
      return {
        title: this.titles[0].title.rendered + ' | iGrader.ru',
        meta: [
          { hid: 'description', name: 'description', content: this.titles[0].excerpt.rendered.replace(/&(#)?(amp;)?\d+;|<\w+>/g, '').replace(/&nbsp;/g, ' ').slice(0, 80) + ' ...' },
          { property: 'og:image', content: this.titles[0].x_featured_media_large }
        ],
      }
    },
    data() {
      return {
        offset: 0,
        loaded: [],
        news: [],
        articles: [],
        width: 1920,
        postsRight: [],
        lane: []
      }
    },
    mounted() {
      let width = document.documentElement.clientWidth
      this.width = width
      this.$nextTick(() => {
        this.loadRightNews()
      })
    },
    async fetch({store}) {
      if (store.getters['lastMag/journal'].length === 0) {
        await store.dispatch('lastMag/fetch')
      }
    },
    async asyncData({params, redirect}) {
      let titles = await fetch('https://igrader.ru/wp-json/wp/v2/activity?slug=' + params.slug)
      titles = await titles.json()
      if(titles.length === 0) {
        redirect(301, `/404`)
      }
      return {titles}
    },
    computed: {
      journal() {
        return this.$store.getters['lastMag/journal']
      },
      longAd() {
        return document.querySelector('.long-ad')
      },
    },
    methods: {
      cleanText(text) {
        return text.replace(/<\/?[^>]+(>|$)/g, "");
      },
      loadRightNews() {
        this.$axios.$get('https://igrader.ru/wp-json/wp/v2/posts?mainthemes=1599&per_page=4&exclude=' + this.titles[0].id)
        .then(responce => {
          this.postsRight = responce
          this.loadLane()
        })
      },
      loadLane() {
        this.$axios.$get('https://igrader.ru/wp-json/wp/v2/posts?tags=2099&per_page=4')
        .then(responce => {
          this.lane = responce
        })
      }
    },
  }
</script>


