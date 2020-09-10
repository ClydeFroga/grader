<template>
  <header class="graderHeader">

      <nav class="navbar navbar-expand-lg">
        <div class="container-md">
          <nuxt-link class="navbar-brand" to="/">
            <img
              class="graderHeader__logo"
              src="../static/whiteLogo.png"
              alt="logo"
            />
          </nuxt-link>

          <button
            class="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
            @click="openDropdown('.expanded')"
          >
                <svg-icon width="30" height="30" class="navbar-toggler-icon" name="list"></svg-icon>
              </button>

          <div class="collapse navbar-collapse expanded" id="navbarSupportedContent">
            <ul class="navbar-nav mr-auto">
              <li class="nav-item dropdown" @click="openDrop('.top_drop')">
                <a class="nav-link dropdown-toggle" href="#">
                  Журнал «Грейдер»
                </a>
                <div class="dropdown-menu top_drop hide" aria-labelledby="navbarDropdown">
                  <a class="dropdown-item nav-m" href="https://igrader.promogroupmedia.ru/">О журнале</a>
                  <nuxt-link class="dropdown-item nav-m" to="/archive">Архив</nuxt-link>
                  <nuxt-link class="dropdown-item nav-m" :to="{name: 'pages-slug', params: {slug: 'about'}}">Подписка на журнал</nuxt-link>
                </div>
              </li>
              <li class="nav-item ">
                <nuxt-link class="nav-link nav-m" to="/events">Мероприятия</nuxt-link>
              </li>
              <li class="nav-item ">
                <nuxt-link class="nav-link nav-m" to="/comtrans-2019">Comtrans 2019</nuxt-link>
              </li>
              <li class="nav-item ">
                <nuxt-link class="nav-link nav-m" :to="{name: 'news-slug', params: {slug: 'specialoffer'}}">🔥 Спецпредложения</nuxt-link>
              </li>
              <li class="nav-item ">
                <nuxt-link class="nav-link nav-m" :to="{name: 'pages-slug', params: {slug: 'adv'}}">Рекламодателям</nuxt-link>
              </li>
            </ul>
          </div>

          <span  @click="openModal()" class="searchIcon">
            <i>
              <svg-icon name="search" width="15" height="15"></svg-icon>
            </i>
          </span>
          </div>
      </nav>

    <nav class="graderHeader__bot navbar navbar-expand-lg">
      <div class=" collapse navbar-collapse expanded"  id="navbarSupportedContent">
        <div class="container-md collapsed-cont">

        <ul class="nav nav-tabs">
          <li class="nav-item ">
            <nuxt-link class="nav-link nav-m lane_read" :to="{ name: 'lane'}">Полоса</nuxt-link>
          </li>
          <li class="nav-item ">
            <nuxt-link class="nav-link nav-m news_read" :to="{ name: 'kratko'}">Новости</nuxt-link>
          </li>
          <li class="nav-item ">
            <nuxt-link class="nav-link nav-m" :to="{ name: 'news-slug', params: { slug: 'ryinok' } }">Обзор рынка</nuxt-link>
          </li>
          <li class="nav-item ">
            <nuxt-link class="nav-link nav-m" :to="{ name: 'news-slug', params: { slug: 'ispyitateli' } }">Испытатели</nuxt-link>
          </li>
          <li class="nav-item ">
            <nuxt-link class="nav-link nav-m" :to="{ name: 'news-slug', params: { slug: 'krupniym-planom' } }">Крупным планом</nuxt-link>
          </li>
          <li class="nav-item ">
            <nuxt-link class="nav-link nav-m" :to="{ name: 'news-slug', params: { slug: 'servismenyi' } }">Сервисмены</nuxt-link>
          </li>
          <li class="nav-item">
            <nuxt-link class="nav-link " :to="{ name: 'news-slug', params: { slug: 'stranitci-istorii' } }">Страницы истории</nuxt-link>
          </li>

          <li  class="nav-item dropdown" @click="openDrop('.bot_dropdown')">
            <a class="nav-link dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">Ещё рубрики</a>
            <div class="dropdown-menu bot_dropdown">
              <nuxt-link class="dropdown-item nav-m" :to="{ name: 'news-slug', params: { slug: 'analitika' } }">Аналитика</nuxt-link>
              <nuxt-link class="dropdown-item nav-m" :to="{ name: 'news-slug', params: { slug: 'kruglyj-stol' } }">Круглый стол</nuxt-link>
              <nuxt-link class="dropdown-item nav-m" :to="{ name: 'news-slug', params: { slug: 'technology' } }">Технологии</nuxt-link>
            </div>
          </li>
        </ul>

        </div>
      </div>
    </nav>

    <div class="searchBlock" id="search">
      <div class="input-group">
        <input @keyup.enter.prevent="allRequests(searchQuery)" v-model="searchQuery" type="search" class="form-control" placeholder="Что ищем?" aria-describedby="button-addon2">
        <div class="input-group-append">
          <button @click="allRequests(searchQuery)" class="btn" type="submit" id="button-addon2">Поиск</button>
        </div>
      </div>
    </div>
  </header>
</template>

<script>
  export default {
    data() {
      return {
        searchQuery: '',
        open: 0
      }
    },
    mounted() {
      this.$nextTick(() => {
        fetch('https://igrader.ru/wp-json/last_news/v1/last-news')
        .then(responce => responce.json())
        .then(result => {
          this.latestNews(result.last_id)
        })
        fetch('https://igrader.ru/wp-json/last_news/v1/last-polosa')
        .then(responce => responce.json())
        .then(result => {
          this.latestLane(result.last_id)
        })
      })
    },
    methods: {
    allRequests(request) {
      let modal = document.querySelector('.searchBlock')
      modal.style.display = ''
      this.$router.push('/search/' + request)
      this.searchQuery = ''
    },
    openModal() {
      let modal = document.querySelector('.searchBlock')
      modal.style.display = 'block'
      window.onclick = function(event) {
        if (event.target == modal) {
          modal.style.display = "none";
        }
      }
    },
    openDropdown(dropdown) {
      let exp = document.querySelectorAll(dropdown)
      let items = document.querySelectorAll('.nav-m')

      for (let el of exp) {
        el.classList.toggle('collapse')
      }

      if(this.open === 0) {
        window.addEventListener('click', function(e) {
          for (let el of items) {
            if(e.target === el) {
              for (let ele of exp) {
                ele.classList.toggle('collapse')
              }
            }
          }
        })
        if(this.open === 0) {
          this.open++
        }
      }
    },
    openDrop(menu) {
      let el = document.querySelector(menu)
      el.classList.toggle('open')
    },
    latestNews(id) {
      let a = this.$cookies.get('latestNews')
      if (a !== id) {
        let b = document.querySelector('.news_read')
        b.classList.add('read')
      }
    },
    latestLane(id) {
      let a = this.$cookies.get('latestLane')
      if (a !== id) {
        let b = document.querySelector('.lane_read')
        b.classList.add('read')
      }
    }
  }
};
</script>

<style scoped>
  .open {
    display: block;
  }
</style>
