<template>
  <div class="container-md">
    <div class="row">

      <div class="post col-12 col-lg-7 left single">

          <div class="loaded" v-for="(post, ind) of titles" :key="post.id">
          <h1 class="single__title" :id="post.id" v-html="post.title.rendered"></h1>
          <div class="single__date">
            {{post.x_date}}
          </div>

          <div class="single__breadcrumbs">
            <nuxt-link to="/">Главная</nuxt-link>
            <span v-if="post.x_types_slug[0]" class="single__separator"> / </span>
            <nuxt-link v-if="post.x_types_slug[0]" :to="{name: 'news-slug', params: {slug: post.x_types_slug[0]}}">{{post.x_types[0]}}</nuxt-link>
            <span class="single__separator"> / </span>
            <nuxt-link :to="{name: 'category-slug', params: {slug: post.x_cats_slug[0]}}">{{post.x_cats[0]}}</nuxt-link>
          </div>

          <div class="row">
            <div class="col-lg-12">
              <div class="single__main">
                <img class="mainImg" :alt="post.alt" :src="post.x_featured_media_large">
              </div>
              <div class="single__text" v-html="post.content.rendered"></div>
              <div v-if="disq === 1599" class="sharing__wrapper static">
                <a :href="'http://vk.com/share.php?url=https://igrader.ru' + $route.path + '&title=' + articles[ind] + '&description=' + cleanText(post.excerpt.rendered) + '&image=' + post.x_featured_media" class="sharing__item vk">
                  <svg width="25" height="25" fill="white">
                    <use xlink:href="@/static/svgsprite.svg#vk_logo"></use>
                  </svg>
                </a>

                <a :href="'http://www.facebook.com/sharer.php?s=100&p[url]=https://igrader.ru' + $route.path + '&p[title]=' + articles[ind] + '&p[summary]=' + cleanText(post.excerpt.rendered) + '&p[images][0]=' + post.x_featured_media" class="sharing__item fb">
                  <svg width="25" height="25" fill="white">
                    <use xlink:href="@/static/svgsprite.svg#fb_logo"></use>
                  </svg>
                </a>

                <a :href="'http://www.odnoklassniki.ru/dk?st.cmd=addShare&st.s=1&st._surl=https://igrader.ru'+ $route.path +'&st.comments=' + articles[ind]" class="sharing__item od">
                  <svg width="25" height="25" fill="white">
                    <use xlink:href="@/static/svgsprite.svg#classmates_logo"></use>
                  </svg>
                </a>

                <a :href="'https://telegram.me/share/url?url=https://igrader.ru'+  $route.path +'&amp;text=' + articles[ind]" class="sharing__item telegram">
                  <svg width="25" height="25" fill="white">
                    <use xlink:href="@/static/svgsprite.svg#pocket_logo"></use>
                  </svg>
                </a>

                <a :href="'viber://forward?text=' + articles[ind]" class="sharing__item viber">
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
      </div>

      <div class="col-12 col-md-1 col-lg-2">
        <div v-if="this.disq !== 1599" class="sharing__wrapper">

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

        <div v-if="this.width > 992 && this.disq !== 1599" class="foxy foxy-news">
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

        <div v-if="journal.acf !== undefined" class="foxy fresh">
          <h2 class="field__title" >
            <a href="#">
              Свежий номер
            </a>
          </h2>
          <nuxt-link class="wrapper__adText" :to="{name: 'archive-slug', params: {slug: journal.slug}}">
            <img class="wrapper__adImg" :src="journal.acf.ssylka_na_oblozhku">
            Online-версия
          </nuxt-link>
          <nuxt-link class="wrapper__adText" :to="{name: 'pages-slug', params: {slug: 'about'}}">
            Оформить подписку
          </nuxt-link>
        </div>
      </div>
    </div>

    <div v-if="this.disq !== 1599" class="comments">
      <Disqus />
    </div>

    <div>
      <h2 class="field__title">
        <nuxt-link :to="{name: 'news-slug', params: {slug: this.titles[0].x_types_slug[0]}}">
          {{this.titles[0].x_types[0]}}
        </nuxt-link>
      </h2>

      <div class="kratko row row-cols-2 row-cols-md-4">
        <nuxt-link :to="{name: 'post-slug', params: {slug: post.slug}}" class="col" v-for="(post, ind) of postsSame" :key="post.id" v-if="ind < 6">
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
        <a>
          Ещё по теме
        </a>
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
  import rand from 'lodash/random'

  export default {
    head() {
      return {
        title: this.titles[0].title.rendered.replace(/&#\d+;/g, ''),
        meta: [
          { hid: 'description', name: 'description', content: this.titles[0].excerpt.rendered.replace(/&#\d+;/g, '').slice(0, 180) + ' ...' }
        ],
      }
    },
    layout: 'single',
    data() {
      return {
        width: 1920,
        offset: 0,
        loaded: [],
        news: [],
        i: 0,
        golos: null,
        disq: 1599,
        postsRight: [],
        postsBot: [],
        postsSame: [],
      }
    },
    mounted: function () {
      let width = document.documentElement.clientWidth
      this.width = width
      setTimeout(() => this.kratko(), 3000)
      if(document.documentElement.clientWidth > 992) {
        setTimeout(() => window.addEventListener('scroll', this.selectBlc), 5000)
      }
      this.findOpr()
    },
    destroyed() {
      window.removeEventListener('scroll', this.loadPost);
      window.removeEventListener('scroll', this.selectBlc);
    },
    async fetch({store}) {
      if (store.getters['lastMag/journal'].length === 0) {
        await store.dispatch('lastMag/fetch')
      }
    },
    async asyncData({params, redirect}) {
      let titles = await fetch('https://igrader.ru/wp-json/wp/v2/posts?slug=' + params.slug)
      titles = await titles.json()
      if(titles.length === 0) {
        redirect(301, `/404`)
      }
      let urls = ['http://localhost:3000/post/' + params.slug]   //заменить!!!!!!
      let articles = [titles[0].title.rendered.replace(/&#\d+;/g, '')]
      let ids = [titles[0].id]
      return {titles, urls, articles, ids}
    },
    computed: {
      journal() {
        return this.$store.getters['lastMag/journal']
      },
      left() {
        return document.querySelector('.left');
      },
      first() {
        return document.querySelector(".loaded");
      },
      body() {
        return document.querySelector('body')
      },
      ad() {
        return document.querySelectorAll('.ad')
      },
      right() {
        let all_height = 500
        for (let item of this.ad) {
          all_height += item.offsetHeight
        }
        return all_height
      },
      num() {
        let num = rand(0, this.ad.length - 1)
        return num
      },
      longAd() {
        return document.querySelector('.long-ad')
      },
    },
    methods: {
      cleanText(text) {
        return text.replace(/<\/?[^>]+(>|$)/g, "");
      },
      loadPost() {
        if(this.leftBot() < 1000 && this.offset < 5) {
          if(!this.body.classList.contains('loading')) {
            this.body.classList.add('loading')
            this.offset++
            this.$axios.$get('https://igrader.ru/wp-json/wp/v2/posts?mainthemes' + '&offset=' + this.offset + '&per_page=1&exclude=' + this.titles[0].id)
            .then(responce => {
              for(let item of responce) {
                let name = item.title.rendered.replace(/&#\d+;/g, '')
                document.title = name
                this.articles.push(name)
                this.ids.push(item.id)

                let url = 'http://localhost:3000/post/' + item.slug       //заменить!!!
                this.urls.push(url)
                history.pushState({page_title: name}, '', url)
                this.titles.push(item)
              }
            }).then(() => {
              this.news = document.querySelectorAll(".loaded");
              setTimeout(() => this.body.classList.remove('loading'), 3000)
            })
          }
        }
        if(this.firstBot() < 0) {
          for( let i = this.news.length - 1; i > -1; i--) {
            if(this.news[i].getBoundingClientRect().bottom > 0) {
              continue;
            } else {
              if(!this.articles[i+1]) {
                document.title = this.articles[i]
                return
              }
              let art = this.articles[i+1]
              document.title = art
              window.history.replaceState({page_title: art}, '', this.urls[i+1]);
              return
            }
          }
        } else {
          document.title = this.articles[0];
          window.history.replaceState({page_title: this.articles[0]}, '', this.urls[0]);
        }
      },
      firstBot() {
        return this.first.getBoundingClientRect().bottom;
      },
      leftBot() {
        return this.left.getBoundingClientRect().bottom;
      },
      selectBlc() {
        if(this.leftHeight() > this.right + 500) {
          if(pageYOffset > this.right + 500) {
            if(this.ad.length === 0) {
              window.removeEventListener('scroll', this.selectBlc)
            }
            this.ad[this.num].classList.add('sharing__wrapper')
          } else {
            if(this.ad.length === 0) {
              window.removeEventListener('scroll', this.selectBlc)
            }
            this.ad[this.num].classList.remove('sharing__wrapper')
          }
        }
      },
      leftHeight() {
        let a = document.querySelector('.left')
        return a.offsetHeight
      },
      kratko() {
        for(let item of this.titles[0].mainthemes) {
          this.disq = item
          if (item === 1599) {
            window.addEventListener('scroll', this.loadPost);
            break
          }
        }
        window.addEventListener('scroll', this.loadbot)
        if(this.disq !== 1599) {
          this.loadRightNews()
        }
      },
      oprosFunc(id, opros) {
        let spisok = document.getElementsByName('poll_' + id)
        let vote = document.getElementsByName('vote')[0]
        let results = opros.result.data
        const voted = this.$cookies.get('voted_'+ id)
        let labels = document.querySelectorAll('.wp-polls-ul > li > label')

        if(voted == 1) {
          vote.outerHTML = 'Вы уже проголосовали'
          del()
          return
        }

        function del() {
          for(let item of spisok) {
            item.remove()
          }
          let ul = document.querySelector('.wp-polls-ul')
          let li = document.querySelectorAll('.wp-polls-ul > li')
          for(let item of li) {
            item.remove()
          }

          for(let item of results) {
            ul.insertAdjacentHTML('beforeend', `<span class="res__name">` + item.polla_answers + `</span>` +
              `<span class="res__res"> (`+  item.pourcent +`%, `+ item.polla_votes +` Голосов) </span>` +
              `<div class="res__bar" style="height: 15px; width:` + item.pourcent + `%;"></div>`)
          }
        }

        function cook() {
          window.$nuxt.$cookies.set('voted_' + id, 1, {
            path: '/',
            maxAge: 60 * 60 * 24 * 365,
          })
        }

        let gg = null
        window.addEventListener('mouseup', function (e) {
          if(e.target == vote) {
            if (gg !== null) {
              fetch('https://igrader.ru/wp-json/wp/v2/add_vote?id=' + id + '&vote_id=' + gg, {
                method: 'POST'
              }).then(() => {
                vote.outerHTML = 'Спасибо за ваш голос'
                cook()
                vote.setAttribute('disabled', '')
                del()
              });
            }
            return
          }
          for(let item of spisok) {
            if(e.target == item) {
              gg = e.target.value
            }
          }
          for(let item of labels) {
            if(e.target == item) {
              gg = e.target.control.attributes[3].nodeValue
            }
          }
        })
      },
      findOpr() {
        let a = document.querySelector('.wp-polls')
        let b = ''
        if (a !== null) {
          b = a.id.match(/\d+/)
          fetch('https://igrader.ru/wp-json/wp/v2/poll?id=' + b)
          .then(responce => responce.json())
          .then(result => {
            this.oprosFunc(b, result)
          })
        }
      },
      loadRightNews() {
        let a = null
        switch(this.disq){
          case 1600:
          case 1604:a = '1600,1604';break;
          case 1603:a = '1033,1638,1605';break;
          case 1599:a = '1601,1033,1602';break;
          case 1605:
          case 1638:
          case 1033:
          case 1602:a = '1601';break;
          case 1601:
          case 1606:
          default:a = '1599';break;
        };
        this.$axios.$get('https://igrader.ru/wp-json/wp/v2/posts?mainthemes=' + a + '&per_page=3&exclude=' + this.titles[0].id)
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
        let r = rand(0, 30)
        let a = ''
        let b = ''
        switch(this.disq){
          case 1603:a='1601,1602,1605';break;
          case 1601:
          case 1606:
          case 1599:a='1603';break;
          case 1605:
          case 1638:
          case 1033:a='1602';break;
          case 1602:a='1605,1638,1033';break;
          case 1600:
          case 2110:
          case 1604:
          default:a='1601';break;
        }
        this.$axios.$get('https://igrader.ru/wp-json/wp/v2/posts?mainthemes=' + this.disq + '&per_page=4&exclude=' + this.titles[0].id + '&offset=' + r)
        .then(responce => {
          this.postsSame = responce
        })
        this.$axios.$get('https://igrader.ru/wp-json/wp/v2/posts?mainthemes=' + a + '&per_page=4&exclude=' + this.titles[0].id + '&offset=' + r)
        .then(responce => {
          this.postsBot = responce
        })
      },
    },
	}
</script>

<style scoped>
  .wp-polls-loading {
    display: none;
  }
</style>
