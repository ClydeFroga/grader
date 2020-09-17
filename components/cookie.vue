<template>
	<div v-show="cookies" class="cookie">
    <div class="container-md">
      <div class="row cookie__mid">
        <div class="col-12 col-xl cookie__text">
          <span>
           Мы используем Cookies для наилучшего представления нашего сайта. Если Вы продолжите использовать сайт, мы будем считать что Вас это устраивает.
          </span>
        </div>
        <div class="col-12 col-xl-3 cookie__bot">
          <a href="#" class="" @click.prevent="setCookie">Ok</a>
          <nuxt-link class="" :to="{name: 'pages-slug', params: {slug: 'privacy'}}">Политика конфиденциальности</nuxt-link>

        </div>
      </div>

    </div>
  </div>
</template>

<script>
  export default {
		methods: {
      setCookie() {
        this.$cookies.set('cookie', 1, {
          path: '/',
          maxAge: 60 * 60 * 24 * 30,
          sameSite: 'Lax'
        })
        let a = document.querySelector('.cookie')
        a.style.display = 'none'
      }
    },
    computed: {
      cookies() {
        const cookieRes = this.$cookies.get('cookie')
        return cookieRes !== 1;
      }
    },
	}
</script>
