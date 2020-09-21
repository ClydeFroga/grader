<template>
  <footer class="foote">
    <div class="container-md">
      <div class="row">
        <div class="col">
          <div class="foote__line">
            <span class="foote__title">Мы в социальных сетях</span>
            <a href="https://vk.com/igrader">Вконтакте</a>
            <a href="https://www.facebook.com/igrader.ru/">Facebook</a>
            <a href="https://www.instagram.com/igrader.ru/">Instagram</a>
            <a href="https://www.youtube.com/channel/UC65JCgS9xdHws3qesOXCtLw">Youtube</a>
            <a href="https://ok.ru/group/57275248017513">Ok</a>
          </div>
          <div class="foote__line">
            <span class="foote__title">Правила</span>
            <nuxt-link :to="{name: 'pages-slug', params: {slug: 'rules'}}">Условия использования сайта</nuxt-link>
            <nuxt-link :to="{name: 'pages-slug', params: {slug: 'for_users'}}">Политика конфиденциальности</nuxt-link>
            <nuxt-link :to="{name: 'pages-slug', params: {slug: 'politika-obrabotki-personalnyih-dannyih'}}">Политика обработки персональных данных</nuxt-link>
          </div>
        </div>
        <div class="col-4">
          <p class="foote__white">
            © ООО "ПромоГрупп Медиа", 2016-2020
          </p>
          <p class="foote__gray">
            Копирование материалов запрещено.
          </p>
          <p class="foote__white">
            Возрастное ограничение 16+
          </p>
          <p class="foote__gray">
            Сетевое издание igrader.ru зарегистрировано <br>
            в Федеральной службе по надзору в сфере связи, <br>
            информационных технологий и массовых коммуникаций <br>
            (Роскомнадзор). <br>
            Свидетельство ЭЛ № ФС 77 - 76723 от 02.09.2019
          </p>
        </div>
      </div>
      <div class="row">
        <div class="container">
        </div>
      </div>
    </div>
  </footer>
</template>
