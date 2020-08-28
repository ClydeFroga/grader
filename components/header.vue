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
          >
                <svg-icon width="30" height="30" class="navbar-toggler-icon" name="list"></svg-icon>
              </button>

          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav mr-auto">
              <li class="nav-item dropdown">
                <a
                  class="nav-link dropdown-toggle"
                  href="#"
                  id="navbarDropdown"
                  role="button"
                  data-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  Журнал «Грейдер»
                </a>
                <div class="dropdown-menu" aria-labelledby="navbarDropdown">
                  <a class="dropdown-item" href="https://igrader.promogroupmedia.ru/">О журнале</a>
                  <nuxt-link class="dropdown-item" to="/archive">Архив</nuxt-link>
                  <nuxt-link class="dropdown-item" to="/about">Подписка на журнал</nuxt-link>
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
                <a class="nav-link" href="#">Рекламодателям</a>
              </li>
            </ul>
          </div>

          <span data-toggle="modal" data-target="#search" class="searchIcon">
            <i>
              <svg-icon name="search" width="15" height="15"></svg-icon>
            </i>
          </span>
          </div>
      </nav>

    <nav class="graderHeader__bot navbar navbar-expand-lg">
      <div class=" collapse navbar-collapse"  id="navbarSupportedContent">
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

          <li class="nav-item dropdown">
            <a class="nav-link dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">Ещё рубрики</a>
            <div class="dropdown-menu bot_dropdown">
              <nuxt-link class="dropdown-item" :to="{ name: 'news-slug', params: { slug: 'analitika' } }">Аналитика</nuxt-link>
              <nuxt-link class="dropdown-item" :to="{ name: 'news-slug', params: { slug: 'kruglyj-stol' } }">Круглый стол</nuxt-link>
              <nuxt-link class="dropdown-item" :to="{ name: 'news-slug', params: { slug: 'technology' } }">Технологии</nuxt-link>
            </div>
          </li>
        </ul>

        </div>
      </div>
    </nav>

    <div class="modal fade" id="search" tabindex="-1" role="dialog" aria-hidden="true">
      <div class="modal-dialog modal-dialog-centered">
        <div class="modal-content modal-search">
          <div class="input-group">
            <input type="search" class="form-control" placeholder="Что ищем?" aria-label="Recipient's username" aria-describedby="button-addon2">
            <div class="input-group-append">
              <button class="btn" type="submit" id="button-addon2">Поиск</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </header>
</template>

<script>
export default {
  methods: {
    openMenu() {
      // let a = document.getElementById('botMenu')
      // console.log(a.style.display)

    }
  }
};
</script>
