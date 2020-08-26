<template>
    <div class="wrapper">
      <div class="container-md">
        <div class="row">
          <div class="col-12 col-lg wrapper__topCol">
            <div class="row bug">
              <div class="col-12 col-xl-8">

                <div v-swiper:mySwiper="swiperOptions">
                  <div class="swiper-wrapper">
                    <div class="swiper-slide" v-for="(post, ind) of topSlider" :key="post.id" v-if="ind < 5">
                      <nuxt-link class="col field__blockFull tops" :to="{name: 'post-slug', params: {slug: post.slug}}">

                        <div class="field__block topper">
                          <div class="field__imgBlc">
                            <img data-not-lazy :alt="post.alt" :src="post.x_featured_media_large">
                            <p class="field__text" v-html="post.title.rendered"></p>

                          </div>
                        </div>

                        <div class="field__botText">
                          <div class="Sw-cat">
                            {{post.x_types[0]}}
                          </div>
                          <p class="Sw-text" v-html="post.excerpt.rendered.slice(0, 120) + ' ...'"></p>
                        </div>

                      </nuxt-link>
                    </div>

                  </div>
                  <!-- Add Arrows -->
                  <div class="swiper-next topper">
                    <svg-icon width="20" height="20" name="arrowRight"></svg-icon>
                  </div>
                  <div class="swiper-prev topper">
                    <svg-icon width="20" height="20" name="arrowLeft"></svg-icon>
                  </div>
                </div>

              </div>

              <div v-if="this.width <= 576" class="long-ad">
                <img src="https://picsum.photos/728/90/?random=1">
              </div>

              <div class="col col-xl-4">
                <h2 class="wrapper__title">
                  Новости
                </h2>
                <nuxt-link :to="{name: 'post-slug', params: {slug: post.slug}}" v-for="post of news" :key="post.id" class="orangeHover wrapper__text" >
                  <p v-html="post.title.rendered"></p>
                  <span>
                    {{post.x_date}}
                  </span>
                </nuxt-link>

              </div>
            </div>

            <div class="row row-cols-1 row-cols-md-3 wrapper__botCol">

                <div class="col" v-for="(post, ind) of topSlider" :key="post.id" v-if="ind > 4">
                  <div>
                    <nuxt-link :to="{name: 'post-slug', params: {slug: post.slug}}">
                      <div class="wrapper__trpl">
                        <img :alt='post.alt' :src="post.x_featured_media_large">
                        <span>{{post.x_types[0]}}</span>
                        <p v-html="post.title.rendered" class="wrapper__trplText"></p>
                      </div>

                    </nuxt-link>
                  </div>
                </div>


            </div>
          </div>

          <div class="col-lg-3">
            <div class="foxy">
              <img class="wrapper__adImg" src="https://picsum.photos/250/375/?random=5">
            </div>
            <div class="foxy">
              <img class="wrapper__adImg" src="https://picsum.photos/250/375/?random=4">
            </div>
          </div>
        </div>

        <div v-if="this.width > 576" class="long-ad">
          <img src="https://picsum.photos/728/90/?random=1">
        </div>

        <div v-if="this.width > 576" class="wrapper__mainthemes">
          <span>
            Все материалы по теме
          </span>
          <ul>
            <li v-for="post of categories" :key="post.id" class="orangeHover"><nuxt-link :to="{name: category-slug, params: {slug: post.slug}}">{{post.name}}</nuxt-link></li>
          </ul>
        </div>

        <div class="grader">
          <p><strong>iGrader.ru</strong> - обзор рынка спецтехники, грузовиков и коммерческого транспорта. Тест-драйвы погрузчиков, экскаваторов и другой строительной техники </p>
        </div>

        <div class="row field">
          <div class="col-12 col-lg">
            <h2 class="field__title">
              <a href="#">
                Аналитика
              </a>
            </h2>

            <div class="row-cols-1 row-cols-md-2 row">
              <nuxt-link class="col field__blockFull" v-for="(post, ind) of analitika" :key="post.id" :to="{name: 'post-slug', params: {slug: post.slug}}" v-if="(width > 576) || (width <= 576 && ind < 3)">

                <div class="field__block">
                  <div class="field__imgBlc">
                    <img :alt="post.alt" :src="post.x_featured_media_large">
                    <p class="field__text" v-html="post.title.rendered"></p>
                  </div>
                </div>

                <div class="field__botText">
                  <p v-html="post.excerpt.rendered.slice(0, 120) + ' ...'"></p>
                </div>

              </nuxt-link>
            </div>

            <h2 v-if="width > 576" class="field__title">
              <a href="#">
                Круглый стол
              </a>
            </h2>

            <div v-if="width > 576" class="field__four row row-cols-1 row-cols-md-2 row-cols-xl-4">
              <nuxt-link v-for="post of kruglyjStol" :key="post.id" class="col" :to="{name: 'post-slug', params: {slug: post.slug}}">
                <img :alt='post.alt' :src="post.x_featured_media_large">
                <p v-html="post.title.rendered" class="field__span"></p>
              </nuxt-link>
            </div>
          </div>

          <div class="col-12 col-lg-3">
            <h2 class="field__title" >
              <a href="#">
                Свежий номер
              </a>

            </h2>
            <div class="foxy">
              <img class="wrapper__adImg" src="https://picsum.photos/250/375/?random=5">
              <a class="wrapper__adText" href="#">
                Online-версия
              </a>
              <a class="wrapper__adText" href="#">
                Оформить подписку
              </a>
            </div>
            <div class="foxy">
              <img class="wrapper__adImg" src="https://picsum.photos/250/375/?random=5">
            </div>
          </div>
        </div>
    </div>

    <div class="big container-fluid">
      <h2 class="container-md bigTitle">
        Крупным планом
      </h2>

      <div class="bigBlc row">

        <div v-swiper:mySwip="middleSwiper">
          <div class="swiper-wrapper">
            <a v-for="post of krupniymPlanom" :key="post.id" class="swiper-slide">
              <nuxt-link :to="{name: 'post-slug', params: {slug: post.slug}}" class="col field__blockFull">
                <div class="field__block">
                  <div class="field__imgBlcBig">
                    <img data-not-lazy :alt="post.alt" :src="post.x_featured_media_large">
                    <p v-html="post.title.rendered" class="field__textTop"></p>
                  </div>
                </div>
              </nuxt-link>
            </a>
          </div>

        </div>

      </div>

    </div>

      <div class="container-md">
        <h2 class="field__title">
          <a href="#">
            Дорожники
          </a>
        </h2>

        <div class="row">
          <div class="col-lg-8 col-xl-9">
            <div class="row riders">
              <div class="col-12 col-xl-4">
                <nuxt-link class="orangeHover" v-for="(post, ind) of riders" :key="post.id" v-if="ind === 0" :to="{name: 'post-slug', params: {slug: post.slug}}">
                  <img :alt="post.alt" :src="post.x_featured_media_large">
                  <p v-html="post.title.rendered" class="orangeHover">
                  </p>
                </nuxt-link>
              </div>

              <div class="col-12 col-xl-8 ">
                <div class="row riders__row row-cols-lg-2 row-cols-1">
                  <nuxt-link class="orangeHover col riders__col" v-for="(post, ind) of riders" :key="post.id" v-if="ind > 0 && ind < 3" :to="{name: 'post-slug', params: {slug: post.slug}}">
                    <img :alt="post.alt" :src="post.x_featured_media_large">
                    <span class="orangeHover" v-html="post.title.rendered">
                    </span>
                  </nuxt-link>

                  <span class="riders__deco"></span>
                </div>

                <div class="row riders__row row-cols-lg-2 row-cols-1">

                  <nuxt-link class="orangeHover col riders__col" v-for="(post, ind) of riders" :key="post.id" v-if="ind > 2 && ind < 5" :to="{name: 'post-slug', params: {slug: post.slug}}">
                    <img :alt="post.alt" :src="post.x_featured_media_large">
                    <span class="orangeHover" v-html="post.title.rendered">
                    </span>
                  </nuxt-link>

                  <span class="riders__deco"></span>

                </div>

                <div class="row riders__row row-cols-lg-2 row-cols-1" v-if="width > 576">

                  <nuxt-link class="orangeHover col riders__col" v-for="(post, ind) of riders" :key="post.id" v-if="ind > 4" :to="{name: 'post-slug', params: {slug: post.slug}}">
                    <img :alt="post.alt" :src="post.x_featured_media_large">
                    <span class="orangeHover" v-html="post.title.rendered">
                    </span>
                  </nuxt-link>

                  <span class="riders__deco"></span>
                </div>
              </div>
            </div>
          </div>

          <div class="col-3">
            <div class="foxy">
              <img class="wrapper__adImg" src="https://picsum.photos/250/375/?random=5">
            </div>
          </div>
        </div>

        <h2 class="field__title">
          <a href="#">
            Сервисмены
          </a>
        </h2>

        <div class="row">
          <div class="col-12 col-lg">

            <div class="field__four row row-cols-1 row-cols-md-2 row-cols-xl-4">
              <nuxt-link class="col" v-for="post of servismenyi" :key="post.id" :to="{name: 'post-slug', params: {slug: post.slug}}">
                <img :alt="post.alt" :src="post.x_featured_media_large">
                <p v-html="post.title.rendered" class="field__span">
                </p>
              </nuxt-link>
            </div>

            <div v-swiper:botSwiper="swiperOptions">
              <div class="swiper-wrapper">
                <div class="swiper-slide" v-for="post of stranitciIstorii" :key="post.id">
                  <nuxt-link class="col field__blockFull" :to="{name: 'post-slug', params: {slug: post.slug}}">
                  <div class="field__block">
                    <div class="field__imgBlc">
                      <img data-not-lazy :alt="post.alt" :src="post.x_featured_media_large">
                      <div class="sw-top">
                        <span>{{post.x_types[0]}}</span>
                        <p v-html="post.title.rendered">
                        </p>
                        <div>
                          <span>{{post.x_cats[0]}}</span>
                          <span>{{post.x_date}}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  </nuxt-link>
                </div>
              </div>
              <!-- Add Arrows -->
              <div class="swiper-next">
                <svg-icon width="20" height="20" name="arrowRight"></svg-icon>
              </div>
              <div class="swiper-prev">
                <svg-icon width="20" height="20" name="arrowLeft"></svg-icon>
              </div>
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
          </div>

        </div>

        <h2 class="field__title">
          <a href="#">
            Спецпредложения
          </a>
        </h2>

        <div class="row">
          <nuxt-link class="col-12 col-md" v-for="post of specialoffers" :key="post.id" :to="{name: 'post-slug', params: {slug: post.slug}}">
            <img :alt="post.alt" :src="post.x_featured_media_large">
            <p v-html="post.title.rendered" class="field__spanBot">
            </p>
          </nuxt-link>
        </div>

        <h2 class="field__title">
          <a href="#">
            Открытое голосование
          </a>
        </h2>

        <div class="row">
          <nuxt-link class="col-12 col-md" v-for="post of vyborProfessionalov" :key="post.id" :to="{name: 'post-slug', params: {slug: post.slug}}">
            <img :alt="post.alt" :src="post.x_featured_media_large">
            <p v-html="post.title.rendered" class="field__spanBot">
            </p>
          </nuxt-link>
        </div>
      </div>

  </div>
</template>


<script>
  import { Swiper, SwiperSlide, directive } from 'vue-awesome-swiper'
  import  'swiper/swiper-bundle.esm'
  import 'swiper/swiper-bundle.css'

export default {
  components: {
    Swiper,
    SwiperSlide
  },
  directives: {
    swiper: directive
  },
  mounted() {
    let width = document.documentElement.clientWidth
    return this.width = width
  },
  layout: 'main-page',
  data: () => ({
    swiperOptions: {
      loop: true,
      fadeEffect: {
        crossFade: true
      },
      autoplay: {
        delay: 5000,
      },
      navigation: {
        nextEl: '.swiper-next',
        prevEl: '.swiper-prev',
      },
    },
    middleSwiper: {
      loop: true,
      slidesPerView: 1,
      autoplay: {
        delay: 5000,
      },
      breakpoints: {
        476: {
          slidesPerView: 2,
        },
        768: {
          slidesPerView: 3,
        },
        992: {
          slidesPerView: 4,
        },
        1200: {
          slidesPerView: 5,
          autoplay: false
        }
      }
    },
    width: 1920
  }),
  async fetch({store}) {
    if (store.getters['mainPage/topSlider'].length === 0) {
      await store.dispatch('mainPage/fetch')
    }
  },
  computed: {
    topSlider() {
      return this.$store.getters['mainPage/topSlider']
    },
    news() {
      return this.$store.getters['mainPage/news']
    },
    categories() {
      return this.$store.getters['mainPage/categories']
    },
    analitika() {
      return this.$store.getters['mainPage/analitika']
    },
    kruglyjStol() {
      return this.$store.getters['mainPage/kruglyjStol']
    },
    krupniymPlanom() {
      return this.$store.getters['mainPage/krupniymPlanom']
    },
    riders() {
      return this.$store.getters['mainPage/riders']
    },
    servismenyi() {
      return this.$store.getters['mainPage/servismenyi']
    },
    stranitciIstorii() {
      return this.$store.getters['mainPage/stranitciIstorii']
    },
    specialoffers() {
      return this.$store.getters['mainPage/specialoffers']
    },
    vyborProfessionalov() {
      return this.$store.getters['mainPage/vyborProfessionalov']
    },
  },
}
</script>
