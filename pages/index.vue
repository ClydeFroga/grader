<template>
    <div class="wrapper">
      <div class="container-md">
        <div class="row">
          <div class="col-12 col-lg wrapper__topCol">
            <div class="row bug">
              <div class="col-12 col-xl-8">

                <div v-swiper:mySwiper="swiperOptions">
                  <div class="swiper-wrapper">
                    <div class="swiper-slide" v-for="post of topSlider" :key="post.id">
                      <nuxt-link class="col field__blockFull tops" :to="{name: 'post-slug', params: {post:post.x_cats_slug[0], slug: post.slug}}">

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
                          <div class="Sw-text" v-html="post.excerpt.rendered.slice(0, 120) + ' ...'"></div>
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

<!--              <div v-if="this.width < 577" class="col-12 long-ad" id="adfox_159374525659365226"></div>-->

              <div class="col col-xl-4">
                  <nuxt-link class="wrapper__title title-top" to="/kratko">
                    Новости
                  </nuxt-link>
                <nuxt-link :to="{name: 'post-slug', params: {post:post.x_cats_slug[0], slug: post.slug}}" v-for="post of news" :key="post.id" class="orangeHover wrapper__text" >
                  <p v-html="post.title.rendered"></p>
                  <span>
                    {{post.x_date}}
                  </span>
                </nuxt-link>

              </div>
            </div>

            <div class="row row-cols-1 row-cols-md-3 wrapper__botCol">

                <div class="col" v-for="(post, ind) of sticky" :key="post.id" v-if="ind < 3">
                  <div>
                    <nuxt-link :to="{name: 'post-slug', params: {post:post.x_cats_slug[0], slug: post.slug}}">
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
            <div class="foxy" id="adfox_159374506763656431"></div>

            <div class="foxy" id="adfox_159480168913443656"></div>

          </div>
        </div>

          <div  class="long-ad" id="adfox_159374525659365226"></div>

        <div v-if="this.width > 576" class="wrapper__mainthemes">
          <span>
            Все материалы по теме
          </span>
          <ul>
            <li v-for="post of categories" :key="post.id" class="orangeHover"><nuxt-link :to="{name: 'category-slug', params: {slug: post.slug}}">{{post.name}}</nuxt-link></li>
          </ul>
        </div>

        <div class="grader">
          <p><strong>iGrader.ru</strong> - обзор рынка спецтехники, грузовиков и коммерческого транспорта. Тест-драйвы погрузчиков, экскаваторов и другой строительной техники </p>
        </div>

        <div class="row field">
          <div class="col-12 col-lg">

            <h2 class="field__title">
              <nuxt-link :to="{ name: 'news-slug', params: { slug: 'analitika' } }">
                Аналитика
              </nuxt-link>
            </h2>

            <div class="row-cols-1 row-cols-md-2 row">
              <nuxt-link class="col field__blockFull" v-for="(post, ind) of analitika" :key="post.id" :to="{name: 'post-slug', params: {post:post.x_cats_slug[0], slug: post.slug}}" v-if="(width > 576) || (width <= 576 && ind < 3)">

                <div class="field__block">
                  <div class="field__imgBlc">
                    <img :alt="post.alt" :src="post.x_featured_media_large">
                    <p class="field__text textMiddle" v-html="post.title.rendered"></p>
                  </div>
                </div>

                <div class="field__botText" v-html="post.excerpt.rendered.slice(0, 120) + ' ...'"></div>

              </nuxt-link>
            </div>

            <h2 v-if="width > 576" class="field__title">
              <nuxt-link :to="{ name: 'news-slug', params: { slug: 'kruglyj-stol' } }">
                Круглый стол
              </nuxt-link>
            </h2>

            <div v-if="width > 576" class="field__four row row-cols-1 row-cols-md-2 row-cols-xl-4">
              <nuxt-link v-for="post of kruglyjStol" :key="post.id" class="col" :to="{name: 'post-slug', params: {post:post.x_cats_slug[0], slug: post.slug}}">
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
            <div v-if="journal.acf !== undefined" class="foxy">
              <nuxt-link class="wrapper__adText" :to="{name: 'magazins-slug', params: {slug: journal.slug}}">
                <img class="wrapper__adImg" :src="journal.acf.ssylka_na_oblozhku">
                Online-версия
              </nuxt-link>
              <nuxt-link class="wrapper__adText" :to="{name: 'pages-slug', params: {slug: 'about'}}">
                Оформить подписку
              </nuxt-link>
            </div>

            <div class="foxy" id="adfox_159374518828642846"></div>
          </div>
        </div>


        <div class="long-ad" id="adfox_159374528706764377"></div>
    </div>




    <div class="big container-fluid">
      <h2 class="container-md bigTitle">
        <nuxt-link :to="{ name: 'news-slug', params: { slug: 'krupniym-planom' } }">
          Крупным планом
        </nuxt-link>

      </h2>

      <div class="bigBlc row">

        <div v-swiper:mySwip="middleSwiper">
          <div class="swiper-wrapper">
            <a v-for="post of krupniymPlanom" :key="post.id" class="swiper-slide">
              <nuxt-link :to="{name: 'post-slug', params: {post:post.x_cats_slug[0], slug: post.slug}}" class="col field__blockFull">
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
          <nuxt-link :to="{ name: 'tag-slug', params: { slug: 'dorozhniki-2' } }">
            Дорожники
          </nuxt-link>
        </h2>

        <div class="row lastLoad">
          <div class="col-lg-8 col-xl-9">
            <div class="row riders">
              <div class="col-12 col-xl-4">
                <nuxt-link class="orangeHover" v-for="(post, ind) of riders" :key="post.id" v-if="ind === 0" :to="{name: 'post-slug', params: {post:post.x_cats_slug[0], slug: post.slug}}">
                  <img :alt="post.alt" :src="post.x_featured_media_large">
                  <p v-html="post.title.rendered" class="riders__main orangeHover">
                  </p>
                </nuxt-link>
              </div>

              <div class="col-12 col-xl-8 ">

                <div class="row riders__row row-cols-lg-2 row-cols-1">
                  <nuxt-link class="orangeHover col riders__col" v-for="(post, ind) of riders" :key="post.id" v-if="ind > 0 && ind < 3" :to="{name: 'post-slug', params: {post:post.x_cats_slug[0], slug: post.slug}}">
                    <img :alt="post.alt" :src="post.x_featured_media_large">
                    <p class="orangeHover riders__sec" v-html="post.title.rendered">
                    </p>
                  </nuxt-link>

                  <span class="riders__deco"></span>
                </div>

                <div class="row riders__row row-cols-lg-2 row-cols-1">

                  <nuxt-link class="orangeHover col riders__col" v-for="(post, ind) of riders" :key="post.id" v-if="ind > 2 && ind < 5" :to="{name: 'post-slug', params: {post:post.x_cats_slug[0], slug: post.slug}}">
                    <img :alt="post.alt" :src="post.x_featured_media_large">
                    <p class="orangeHover riders__sec" v-html="post.title.rendered">
                    </p>
                  </nuxt-link>

                  <span class="riders__deco"></span>

                </div>

                <div class="row riders__row row-cols-lg-2 row-cols-1" v-if="width > 576">

                  <nuxt-link class="orangeHover col riders__col" v-for="(post, ind) of riders" :key="post.id" v-if="ind > 4" :to="{name: 'post-slug', params: {post:post.x_cats_slug[0], slug: post.slug}}">
                    <img :alt="post.alt" :src="post.x_featured_media_large">
                    <p class="orangeHover riders__sec" v-html="post.title.rendered">
                    </p>
                  </nuxt-link>

                  <span class="riders__deco"></span>
                </div>

              </div>
            </div>
          </div>

          <div class="col-3">
            <div class="foxy">
              <nuxt-link v-if="golos === 0" :to="{ name: 'post-slug', params: {post:'vybor-professionalov',  slug: 'luchshij-avtogrejder' } }">
                <img class="wrapper__adImg" src="https://igrader.ru/wp-content/uploads/2020/03/golosuem_2-01.jpg">
              </nuxt-link>
              <nuxt-link v-else-if="golos === 1" :to="{ name: 'post-slug', params: {post:'vybor-professionalov',  slug: 'luchshij-ekskavator-pogruzchik-vybor-professionalov' } }">
                <img class="wrapper__adImg" src="https://igrader.ru/wp-content/uploads/2020/05/golosuem_1-01.jpg">
              </nuxt-link>
              <nuxt-link v-else-if="golos === 2" :to="{ name: 'post-slug', params: {post:'vybor-professionalov',  slug: 'luchshij-teleskopicheskij-pogruzchik' } }">
                <img class="wrapper__adImg" src="https://igrader.ru/wp-content/uploads/2020/05/golosuem_3-01.jpg">
              </nuxt-link>
            </div>
          </div>
        </div>

        <h2 class="field__title">
          <nuxt-link :to="{ name: 'news-slug', params: { slug: 'servismenyi' } }">
            Сервисмены
          </nuxt-link>
        </h2>

        <div class="row">
          <div class="col-12 col-lg">

            <div class="field__four row row-cols-1 row-cols-md-2 row-cols-xl-4">
              <nuxt-link class="col" v-for="post of servismenyi" :key="post.id" :to="{name: 'post-slug', params: {post:post.x_cats_slug[0], slug: post.slug}}">
                <img :alt="post.alt" :src="post.x_featured_media_large">
                <p v-html="post.title.rendered" class="field__span"></p>
                <span class="serv">{{post.x_date}}</span>
              </nuxt-link>
            </div>

            <div v-swiper:botSwiper="swiperOptions2">
              <div class="swiper-wrapper">
                <div  class="swiper-slide" v-for="post of stranitciIstorii" :key="post.id">
                  <nuxt-link class="col field__blockFull" :to="{name: 'post-slug', params: {post:post.x_cats_slug[0], slug: post.slug}}">
                    <div class="field__block">
                      <div data-not-lazy class="field__imgBlc" :style="{'background-image': `url(${post.x_featured_media_large})`, backgroundSize: 'cover'}" >
                        <div  class="sw-top">
                          <span>{{post.x_types[0]}}</span>
                          <p v-html="post.title.rendered">
                          </p>
                          <div>
                            <span>{{post.x_cats[0]}}</span>
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
            <div class="foxy" id="adfox_159374935502579870"></div>
            <div class="foxy" id="adfox_159374952133726391"></div>
            <div class="foxy" id="adfox_159712112538951246"></div>
          </div>

        </div>

        <h2 class="field__title">
          <nuxt-link :to="{name: 'news-slug', params: {slug: 'specialoffer'}}">
            Спецпредложения
          </nuxt-link>
        </h2>

        <div class="row">
          <nuxt-link class="col-12 col-md" v-for="post of specialoffers" :key="post.id" :to="{name: 'post-slug', params: {post:post.x_cats_slug[0], slug: post.slug}}">
            <img :alt="post.alt" :src="post.x_featured_media_large">
            <p v-html="post.title.rendered" class="field__spanBot">
            </p>
          </nuxt-link>
        </div>

        <h2 class="field__title">
          <nuxt-link :to="{name: 'news-slug', params: {slug: 'vybor-professionalov'}}">
            Открытое голосование
          </nuxt-link>
        </h2>

        <div class="row">
          <nuxt-link class="col-12 col-md" v-for="post of vyborProfessionalov" :key="post.id" :to="{name: 'post-slug', params: {post:post.x_cats_slug[0], slug: post.slug}}">
            <img :alt="post.alt" :src="post.x_featured_media_large">
            <p v-html="post.title.rendered" class="field__spanBot">
            </p>
          </nuxt-link>
        </div>
      </div>

  </div>
</template>


<script>
import {directive, Swiper, SwiperSlide} from 'vue-awesome-swiper'
import 'swiper/swiper-bundle.esm'
import 'swiper/swiper-bundle.css'
import rand from 'lodash/random'

export default {
  components: {
    Swiper,
    SwiperSlide
  },
  directives: {
    swiper: directive
  },
  mounted() {
    if(this.$route.query.p) {
      this.preview(this.$route.query.p).then(result => this.$router.replace({ name: 'post-slug', params: {draft: true, jwt: this.cookies, slug: result.slug, post: result.x_cats_slug[0]} }))
    }
    this.golos = rand(0, 2);
    this.width = document.documentElement.clientWidth
    this.$nextTick(() => {
      this.rest();
    })
  },
  destroyed() {
    window.removeEventListener('scroll', this.rest);
  },
  data: () => ({
    swiperOptions: {
      loop: true,
      autoplay: {
        delay: 5000,
      },

      navigation: {
        nextEl: '.swiper-next',
        prevEl: '.swiper-prev',
      },
    },
    swiperOptions2: {
      loop: true,
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
    width: 1920,
    golos: null,
    riders: [],
    servismenyi: [],
    stranitciIstorii: [],
    vyborProfessionalov: [],
    specialoffers: [],
  }),
  async fetch({store}) {
    if (store.getters['lastMag/journal'].length === 0) {
      await store.dispatch('lastMag/fetch')
    }
    if (store.getters['mainPage/topSlider'].length === 0) {
      await store.dispatch('mainPage/fetch')
      await store.dispatch('mainPage/sticky')
    }
  },
  computed: {
    leftBot() {
      let a =  document.querySelector('.wrapper__topCol');
      return a.getBoundingClientRect().top;
    },
    topSlider() {
      return this.$store.getters['mainPage/topSlider']
    },
    news() {
      return this.$store.getters['mainPage/news']
    },
    journal() {
      return this.$store.getters['lastMag/journal']
    },
    sticky() {
      return this.$store.getters['mainPage/sticky']
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
    cookies() {
      return this.$cookies.get('jwt')
    }
  },
  methods: {
    async rest() {
      if (this.$store.getters['mainPage/riders'].length === 0) {
        await this.$store.dispatch('mainPage/rest')
      }
      this.vyborProfessionalov = this.$store.getters['mainPage/vyborProfessionalov']
      this.specialoffers = this.$store.getters['mainPage/specialoffers']
      this.servismenyi = this.$store.getters['mainPage/servismenyi']
      this.stranitciIstorii = this.$store.getters['mainPage/stranitciIstorii']
      this.riders = this.$store.getters['mainPage/riders']
    },
    async preview(id) {
      let titles = ''
      titles = await fetch('https://igrader.ru/wp-json/wp/v2/posts/' + id, {
        headers: {
          'Authorization': 'Bearer ' + this.cookies
        }
      })
      titles = await titles.json()
      return titles
    }
  }
}
</script>


<style>
.long-ad {
  max-width: 728px;
  width: 100%;
  height: auto;
}
</style>
