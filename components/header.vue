<template>
  <header class="graderHeader">

      <nav class="navbar navbar-expand-lg">
        <div class="container-md">
          <nuxt-link class="navbar-brand" to="/">
            <img
              class="graderHeader__logo"
              src="@/static/whiteLogo.png"
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
              <li class="nav-item dropdown">
                <a class="nav-link dropdown-toggle" href="#" @click="openDropdown('.top_drop')">
                  Журнал «Грейдер»
                </a>
                <div class="dropdown-menu top_drop hide" aria-labelledby="navbarDropdown">
                  <a class="dropdown-item" href="https://igrader.promogroupmedia.ru/">О журнале</a>
                  <nuxt-link class="dropdown-item" to="/archive">Архив</nuxt-link>
                  <nuxt-link class="dropdown-item" :to="{name: 'pages-slug', params: {slug: 'about'}}">Подписка на журнал</nuxt-link>
                </div>
              </li>
              <li class="nav-item">
                <nuxt-link class="nav-link" to="/events">Мероприятия</nuxt-link>
              </li>
              <li class="nav-item">
                <nuxt-link class="nav-link" to="/comtrans-2019">Comtrans 2019</nuxt-link>
              </li>
              <li class="nav-item">
                <nuxt-link class="nav-link" :to="{name: 'news-slug', params: {slug: 'specialoffer'}}">🔥 Спецпредложения</nuxt-link>
              </li>
              <li class="nav-item">
                <nuxt-link class="nav-link" :to="{name: 'pages-slug', params: {slug: 'adv'}}">Рекламодателям</nuxt-link>
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
          <li class="nav-item">
            <nuxt-link class="nav-link active" :to="{ name: 'lane'}">Полоса</nuxt-link>
          </li>
          <li class="nav-item">
            <nuxt-link class="nav-link" :to="{ name: 'kratko'}">Новости</nuxt-link>
          </li>
          <li class="nav-item">
            <nuxt-link class="nav-link" :to="{ name: 'news-slug', params: { slug: 'ryinok' } }">Обзор рынка</nuxt-link>
          </li>
          <li class="nav-item">
            <nuxt-link class="nav-link" :to="{ name: 'news-slug', params: { slug: 'ispyitateli' } }">Испытатели</nuxt-link>
          </li>
          <li class="nav-item">
            <nuxt-link class="nav-link" :to="{ name: 'news-slug', params: { slug: 'krupniym-planom' } }">Крупным планом</nuxt-link>
          </li>
          <li class="nav-item">
            <nuxt-link class="nav-link" :to="{ name: 'news-slug', params: { slug: 'servismenyi' } }">Сервисмены</nuxt-link>
          </li>
          <li class="nav-item">
            <nuxt-link class="nav-link" :to="{ name: 'news-slug', params: { slug: 'stranitci-istorii' } }">Страницы истории</nuxt-link>
          </li>

          <li @click="openDropdown('.bot_dropdown')" class="nav-item dropdown bot_dropbtn">
            <a class="nav-link dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">Ещё рубрики</a>
            <div class="dropdown-menu bot_dropdown hide">
              <nuxt-link class="dropdown-item" :to="{ name: 'news-slug', params: { slug: 'analitika' } }">Аналитика</nuxt-link>
              <nuxt-link class="dropdown-item" :to="{ name: 'news-slug', params: { slug: 'kruglyj-stol' } }">Круглый стол</nuxt-link>
              <nuxt-link class="dropdown-item" :to="{ name: 'news-slug', params: { slug: 'technology' } }">Технологии</nuxt-link>
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
    }
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
    openDropdown(dropdownw) {
      let exp = document.querySelectorAll(dropdownw)

      if(dropdownw == '.expanded') {
        for (let el of exp) {
          el.classList.toggle('collapse')
        }
      } else {
        let dropdown = document.querySelector(dropdownw)
        let item = document.querySelectorAll('.dropdown-item')

        dropdown.classList.toggle('hide')

        document.addEventListener('mouseup', function (e) {
          const its_menu = e.target == dropdown || dropdown.contains(e.target);
          const its_item = true
          console.log(item)

          if (its_item || !its_menu && !dropdown.classList.contains('hide')) {
            dropdown.classList.add('hide');
            document.removeEventListener('mouseup', () => {

            })
          }
        })
      }
    },
  }
};
</script>
