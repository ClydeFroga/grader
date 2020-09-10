<template>
  <div class="container-md">
    <div class="row">

      <div class="post col-12 col-lg-7 left single">

          <div class="loaded" v-for="post of titles" :key="post.id">
          <h1 class="single__title" :id="post.id" v-html="post.title.rendered"></h1>
          <div class="single__date">
            {{post.x_date}}
          </div>
          <div class="single__breadcrumbs">
            <nuxt-link to="/">Главная</nuxt-link>
            <span class="single__separator"> / </span>
            <nuxt-link :to="{name: 'category-slug', params: {slug: post.x_cats_slug[0]}}">{{post.x_cats[0]}}</nuxt-link>
          </div>
          <div class="row">
            <div class="col-lg-12">
              <div class="single__main">
                <img class="mainImg" :alt="post.alt" :src="post.x_featured_media_large">
              </div>
              <div class="single__text" v-html="post.content.rendered"></div>
            </div>
          </div>
        </div>

      </div>

      <div class="col-12 col-md-1 col-lg-2">

        <div class=" sharing__wrapper">

          <a :href="'http://vk.com/share.php?url=https://igrader.ru' + $route.path + '&title=' + this.titles[0].title.rendered + '&description=' + cleanText + '&image=' + this.titles[0].x_featured_media" class="sharing__item vk">
            <svg width="25" height="25" fill="white">
              <use xlink:href="@/static/svgsprite.svg#vk_logo"></use>
            </svg>
          </a>

          <a :href="'http://www.facebook.com/sharer.php?s=100&p[url]=https://igrader.ru' + $route.path + '&p[title]=' + this.titles[0].title.rendered + '&p[summary]=' + cleanText + '&p[images][0]=' + this.titles[0].x_featured_media" class="sharing__item fb">
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
        <div class="foxy ad" id="adfox_15983472592613563"></div>

        <div class="foxy ad">
          <img class="wrapper__adImg" src="https://picsum.photos/250/375/?random=5">
        </div>
        <div class="foxy ad">
          <img class="wrapper__adImg" src="https://picsum.photos/250/375/?random=5">
        </div>
        <div  v-if="journal.acf !== undefined" class="foxy fresh">
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
    <div>
      <h2 class="field__title">
        <a href="#">
          Новые материалы на портале
        </a>
      </h2>
      <div class="row field">
        <div class="col-12 col-lg">

          <div class="row-cols-1 row-cols-md-2 row">
            <nuxt-link v-for="post of posts" :key="post.id" class="col field__blockFull" :to="{name: 'post-slug', params: {slug: post.slug}}">

              <div class="field__block">
                <div class="field__imgBlc">
                  <img :alt="post.alt" :src="post.x_featured_media_large">
                  <p class="field__text" v-html="post.title.rendered">
                  </p>
                </div>
              </div>

              <div class="field__botText">
                <p v-html="post.excerpt.rendered.slice(0, 120) + ' ...'">
                </p>
              </div>

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
      }
    },
    layout: 'single',
    data() {
      return {
        offset: 0,
        loaded: [],
        news: [],
        i: 0,
        golos: null
      }
    },
    mounted: function () {
      setTimeout(() => this.kratko(), 3000)
      if(document.documentElement.clientWidth > 992) {
        setTimeout(() => window.addEventListener('scroll', this.selectBlc), 5000)
      }
      this.adfox()
      this.findOpr()
    },
    destroyed() {
      window.removeEventListener('scroll', this.loadPost);
      window.removeEventListener('scroll', this.selectBlc);
    },
    async fetch({store}) {
      // if (store.getters['botNews/news'].length === 0) {
      //   await store.dispatch('botNews/fetch')
      // }
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
      let urls = ['https://hahlek3u.beget.tech/post/' + params.slug]   //заменить!!!!!!
      let articles = [titles[0].title.rendered.replace(/&#\d+;/g, '')]
      let ids = [titles[0].id]
      return {titles, urls, articles, ids}
    },
    computed: {
      cleanText() {
        return this.titles[0].title.rendered.replace(/<\/?[^>]+(>|$)/g, "");
      },
      posts() {
        return this.$store.getters['botNews/news']
      },
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
    },
    methods: {
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

                let url = 'https://hahlek3u.beget.tech/post/' + item.slug       //заменить!!!
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
          if(pageYOffset > this.right + 100) {
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
          if (item === 1599) {
            window.addEventListener('scroll', this.loadPost);
          }
        }
      },
      adfox() {
        window.Ya.adfoxCode.create({
          ownerId: 299653,
          containerId: 'adfox_15983472592613563',
          params: {
            p1: 'clzeo',
            p2: 'gxsz',
            pfc: 'dcwtq',
            pfb: 'ikavk'
          }
        });
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
      }
    },
	}
</script>

<style scoped>
  .wp-polls-loading {
    display: none;
  }
</style>
