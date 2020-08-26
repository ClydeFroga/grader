<template>
  <div class="col-3 side">
    <div class="foxy">
      <img class="wrapper__adImg" src="https://picsum.photos/250/375/?random=5">
    </div>
    <div class="foxy foxy-news">
      <h2 class="field__title" >
        <a href="#">
          Новости
        </a>
      </h2>
      <nuxt-link v-for="post of posts" :key="post.id" :to="{name: 'post-slug', params: {slug: post.slug}}" class="foxy-news-line">
        <div class="foxy__text" v-html="post.title.rendered.slice(0, 45) + ' ...'">
        </div>
        <div>
          <img :alt="post.alt" :src="post.x_featured_media_large">
        </div>
      </nuxt-link>
      </div>
    <div class="foxy">
      <img class="wrapper__adImg" src="https://picsum.photos/250/375/?random=5">
    </div>
    <div class="foxy">
      <img class="wrapper__adImg" src="https://picsum.photos/250/375/?random=5">
    </div>
    <div class="foxy">
      <h2 class="field__title" >
        <a href="#">
          Свежий номер
        </a>
      </h2>
      <img class="wrapper__adImg" src="https://picsum.photos/250/375/?random=5">
      <a class="wrapper__adText" href="#">
        Online-версия
      </a>
      <a class="wrapper__adText" href="#">
        Оформить подписку
      </a>
    </div>
  </div>
</template>

<script>

  export default {
    data() {
      return {
        posts: []
      }
    },
    mounted() {
      this.$axios.$get('https://igrader.ru/wp-json/wp/v2/posts?mainthemes=1599&per_page=3')
      .then(responce => {
        this.posts = responce
      })
    },
	}
</script>
