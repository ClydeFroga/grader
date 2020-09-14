<template>
  <div class="col-12">
    <div class="row">

      <div  class="post col-12 col-lg-7 left single">

        <div class="loaded" v-for="(post, ind) of titles" :key="post.id">
          <h1 class="single__title" :id="post.id" v-html="post.title.rendered"></h1>
          <div class="single__date">
            {{post.x_date}}
          </div>
          <div class="single__breadcrumbs">
            <nuxt-link to="/">Главная</nuxt-link>
            <span  class="single__separator"> / </span>
            <nuxt-link to="/comtrans-2019">COMTRANS 2019</nuxt-link>
            <span class="single__separator"> / </span>
            <nuxt-link :to="{name: 'category-slug', params: {slug: post.x_cats_slug[0]}}">{{post.x_cats[0]}}</nuxt-link>
          </div>
          <div class="row">
            <div class="col-lg-12">
              <div class="single__main">
                <img class="mainImg" :alt="post.alt" :src="post.x_featured_media_large">
              </div>
              <div class="single__text" v-html="post.content.rendered"></div>
              <div class="sharing__wrapper static">
                <a :href="'http://vk.com/share.php?url=https://igrader.ru' + $route.path + '&title=' + post.title.rendered + '&description=' + cleanText(post.excerpt.rendered) + '&image=' + post.x_featured_media" class="sharing__item vk">
                  <svg width="25" height="25" fill="white">
                    <use xlink:href="@/static/svgsprite.svg#vk_logo"></use>
                  </svg>
                </a>

                <a :href="'http://www.facebook.com/sharer.php?s=100&p[url]=https://igrader.ru' + $route.path + '&p[title]=' + post.title.rendered + '&p[summary]=' + cleanText(post.excerpt.rendered) + '&p[images][0]=' + post.x_featured_media" class="sharing__item fb">
                  <svg width="25" height="25" fill="white">
                    <use xlink:href="@/static/svgsprite.svg#fb_logo"></use>
                  </svg>
                </a>

                <a :href="'http://www.odnoklassniki.ru/dk?st.cmd=addShare&st.s=1&st._surl=https://igrader.ru'+ $route.path +'&st.comments=' + post.title.rendered" class="sharing__item od">
                  <svg width="25" height="25" fill="white">
                    <use xlink:href="@/static/svgsprite.svg#classmates_logo"></use>
                  </svg>
                </a>

                <a :href="'https://telegram.me/share/url?url=https://igrader.ru'+  $route.path +'&amp;text=' + post.title.rendered" class="sharing__item telegram">
                  <svg width="25" height="25" fill="white">
                    <use xlink:href="@/static/svgsprite.svg#pocket_logo"></use>
                  </svg>
                </a>

                <a :href="'viber://forward?text=' + post.title.rendered" class="sharing__item viber">
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
          </div>
        </div>

        <div class="long-ad">
          <img src="https://picsum.photos/728/90/?random=1">
        </div>

        <div class="sp-form-outer sp-force-hide">
          <div
            id="sp-form-143557"
            sp-id="143557"
            sp-hash="75c996cc38cd9c8f6b58e209feaf3cef7030d612d73db39c36a59291991b4c83"
            sp-lang="ru"
            class="sp-form sp-form-regular sp-form-embed"
            sp-show-options="%7B%22satellite%22%3Afalse%2C%22maDomain%22%3A%22login.sendpulse.com%22%2C%22formsDomain%22%3A%22forms.sendpulse.com%22%2C%22condition%22%3A%22onEnter%22%2C%22scrollTo%22%3A25%2C%22delay%22%3A10%2C%22repeat%22%3A3%2C%22background%22%3A%22rgba(0%2C%200%2C%200%2C%200.5)%22%2C%22position%22%3A%22bottom-right%22%2C%22animation%22%3A%22%22%2C%22hideOnMobile%22%3Afalse%2C%22urlFilter%22%3Afalse%2C%22urlFilterConditions%22%3A%5B%7B%22force%22%3A%22hide%22%2C%22clause%22%3A%22contains%22%2C%22token%22%3A%22%22%7D%5D%2C%22analytics%22%3A%7B%22ga%22%3A%7B%22eventLabel%22%3A%22%D0%A4%D0%BE%D1%80%D0%BC%D0%B0_%D0%BF%D0%BE%D0%B4%D0%BF%D0%B8%D1%81%D0%BA%D0%B8_%D0%94%D0%B0%D0%B9%D0%B4%D0%B6%D0%B5%D1%81%D1%82_dprom_%D0%94%D0%B0%D0%B9%D0%B4%D0%B6%D0%B5%D1%81%D1%82_dprom_%D0%94%D0%B0%D0%B9%D0%B4%D0%B6%D0%B5%D1%81%D1%82_dprom%22%2C%22send%22%3Afalse%7D%2C%22ym%22%3A%7B%22counterId%22%3A47347473%2C%22eventLabel%22%3A%22%D0%A4%D0%BE%D1%80%D0%BC%D0%B0_%D0%BF%D0%BE%D0%B4%D0%BF%D0%B8%D1%81%D0%BA%D0%B8_%D0%94%D0%B0%D0%B9%D0%B4%D0%B6%D0%B5%D1%81%D1%82_dprom%22%2C%22targetId%22%3A%22forma_podpiska%22%2C%22send%22%3Atrue%7D%7D%7D"
          >
            <div class="sp-form-fields-wrapper">
              <div class="sp-message"><div></div></div>
              <form novalidate="" class="sp-element-container ui-sortable ui-droppable sp-field-nolabel">
                <div class="sp-field sp-field-full-width" sp-id="sp-ef5d6dd8-f452-4ebe-820a-7d3f23b8184f">
                  <div style="font-family: 'Segoe UI', Segoe, 'Avenir Next', 'Open Sans', sans-serif; line-height: 1.2;">
                    <p style="text-align: center;">
                            <span style="color: #000000;">
                                <strong>Понравился материал? Подпишитесь</strong><br />
                                на отраслевой дайджест и получайте подборку статей каждый месяц
                            </span>
                      <span style="color: #000000;">.<br /></span>
                    </p>
                  </div>
                </div>
                <div class="sp-field" sp-id="sp-9b1f4896-bb7c-48d0-8a16-a8b63c1c4034">
                  <label class="sp-control-label"><span></span><strong>*</strong></label>
                  <input
                    type="text"
                    sp-type="input"
                    name="sform[NjA0NjQ4Mw==]"
                    class="sp-form-control"
                    placeholder="Имя Отчество"
                    sp-tips="%7B%22required%22%3A%22%D0%9E%D0%B1%D1%8F%D0%B7%D0%B0%D1%82%D0%B5%D0%BB%D1%8C%D0%BD%D0%BE%D0%B5%20%D0%BF%D0%BE%D0%BB%D0%B5%22%7D"
                    required="required"
                  />
                </div>
                <div class="sp-field" sp-id="sp-ab2f8b4a-4327-4589-aaf7-2372221b18db">
                  <label class="sp-control-label"><span></span><strong>*</strong></label>
                  <input
                    type="email"
                    sp-type="email"
                    name="sform[email]"
                    class="sp-form-control"
                    placeholder="Email"
                    sp-tips="%7B%22required%22%3A%22%D0%9E%D0%B1%D1%8F%D0%B7%D0%B0%D1%82%D0%B5%D0%BB%D1%8C%D0%BD%D0%BE%D0%B5%20%D0%BF%D0%BE%D0%BB%D0%B5%22%2C%22wrong%22%3A%22%D0%9D%D0%B5%D0%B2%D0%B5%D1%80%D0%BD%D1%8B%D0%B9%20email-%D0%B0%D0%B4%D1%80%D0%B5%D1%81%22%7D"
                    required="required"
                  />
                </div>
                <div class="sp-field sp-button-container" sp-id="sp-a910838d-0d6b-4604-8734-a9cccc8e2dcc">
                  <button id="sp-a910838d-0d6b-4604-8734-a9cccc8e2dcc" class="sp-button" onclick="yaCounter23728024.reachGoal('followsendpulse'); return true;">Подписаться</button>
                </div>
              </form>
              <div class="sp-link-wrapper sp-brandname__left"></div>
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
        <div class="foxy ad">
          <img class="wrapper__adImg" src="https://picsum.photos/250/375/?random=5">
        </div>

<!--        <div class="foxy ad" id="adfox_159374506763656431"></div>-->

        <div v-if="this.width > 992" class="foxy foxy-news">
          <h2 class="field__title" >
            <a>
              Читайте также
            </a>
          </h2>

          <nuxt-link v-for="post of postsRight" :key="post.id" :to="{name: 'post-slug', params: {slug: post.slug}}" class="foxy-news-line">
            <div class="foxy__text" v-html="post.title.rendered.slice(0, 45) + ' ...'">
            </div>
            <div>
              <img :alt="post.alt" :src="post.x_featured_media_large">
            </div>
          </nuxt-link>
        </div>

        <div class="foxy ad">
          <img class="wrapper__adImg" src="https://picsum.photos/250/375/?random=5">
        </div>

<!--        <div class="foxy ad" id="adfox_159480168913443656"></div>-->

        <div  v-if="journal.acf !== undefined" class="foxy">
          <h2 class="field__title" >
            <a href="#">
              Свежий номер
            </a>
          </h2>
          <nuxt-link class="wrapper__adText" :to="{name: 'archive-slug', params: {slug: journal.slug}}">
            <img class="wrapper__adImg" :src="journal.acf.ssylka_na_oblozhku">
            Online-версия
          </nuxt-link>
          <nuxt-link class="wrapper__adText" to="/about">
            Оформить подписку
          </nuxt-link>
        </div>
      </div>
    </div>

    <div>
      <h2 class="field__title">
        <nuxt-link to="/comtrans-2019">
          {{this.titles[0].x_types[0]}}
        </nuxt-link>
      </h2>

      <div class="kratko row row-cols-2 row-cols-md-4">
        <nuxt-link :to="{name: 'comtrans-2019-slug', params: {slug: post.slug}}" class="col" v-for="(post, ind) of postsSame" :key="post.id" v-if="ind < 6">
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

      <h2 class="field__title">
        <nuxt-link :to="{name: 'news-slug', params: {slug: 'ryinok'}}">
          Рынок
        </nuxt-link>
      </h2>
      <div class="row field">
        <div class="col-12 col-lg">

          <div class="row-cols-1 row-cols-md-2 row">
            <nuxt-link v-for="post of postsBot" :key="post.id" class="col field__blockFull" :to="{name: 'post-slug', params: {slug: post.slug}}">

              <div class="field__block">
                <div class="field__imgBlc">
                  <img :alt="post.alt" :src="post.x_featured_media_large">
                  <p class="field__text" v-html="post.title.rendered">
                  </p>
                </div>
              </div>

              <div class="field__botText" v-html="post.excerpt.rendered.slice(0, 120) + ' ...'"></div>

            </nuxt-link>

          </div>
        </div>

        <div class="col-12 col-lg-3">
          <div class="foxy">
            <img class="wrapper__adSmallImg" src="https://picsum.photos/250/375/?random=5">
          </div>
          <div class="foxy">
            <img class="wrapper__adSmallImg" src="https://picsum.photos/250/375/?random=5">
          </div>
          <div class="foxy">
            <img class="wrapper__adSpecialImg" src="https://picsum.photos/250/375/?random=5">
          </div>

<!--          <div class="foxy" id="adfox_159374935502579870"></div>-->
<!--          <div class="foxy" id="adfox_159374952133726391"></div>-->
<!--          <div class="foxy" id="adfox_159712112538951246"></div>-->
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import rand from "lodash/random";

export default {
    head() {
      return {
        title: this.titles[0].title.rendered,
        meta: [
          { hid: 'description', name: 'description', content: this.titles[0].excerpt.rendered.replace(/&#\d+;/g, '').slice(0, 180) + ' ...' }
        ],
        script: [
          {src: '//web.webformscr.com/apps/fc3/build/default-handler.js?1579692714610', type: "text/javascript" },
        ]
      }
    },
    data() {
      return {
        width: 1920,
        postsRight: [],
        postsBot: [],
        postsSame: [],
      }
    },
    mounted() {
      this.width = document.documentElement.clientWidth
      this.$nextTick(() => {
        this.loadRightNews()
        window.addEventListener('scroll', this.loadbot)
      })
    },
    async fetch({store}) {
      if (store.getters['lastMag/journal'].length === 0) {
        await store.dispatch('lastMag/fetch')
      }
    },
    async asyncData({params, redirect}) {
      let titles = await fetch('https://igrader.ru/wp-json/wp/v2/comtrans?slug=' + params.slug)
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
        this.$axios.$get('https://igrader.ru/wp-json/wp/v2/posts?mainthemes=1599&per_page=3&exclude=' + this.titles[0].id)
        .then(responce => {
          this.postsRight = responce
        })
      },
      loadbot() {
        let adTop = this.longAd.getBoundingClientRect().top
        if(adTop < 500) {
          window.removeEventListener('scroll', this.loadbot)
          this.botNews()
        }
      },
      botNews() {
        let r = rand(0, 21)
        this.$axios.$get('https://igrader.ru/wp-json/wp/v2/comtrans?per_page=4&exclude=' + this.titles[0].id + '&offset=' + r)
        .then(responce => {
          this.postsSame = responce
        })
        this.$axios.$get('https://igrader.ru/wp-json/wp/v2/posts?mainthemes=1601&per_page=4&exclude=' + this.titles[0].id + '&offset=' + r)
        .then(responce => {
          this.postsBot = responce
        })
      },
    }
  }
</script>
