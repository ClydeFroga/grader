<template>
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

</template>

<script>
  import rand from 'lodash/random'

	export default {
    data() {
      return {
        posts: []
      }
    },
    mounted() {
      let r = rand(0, 100)
      this.$axios.$get('https://igrader.ru/wp-json/wp/v2/posts?mainthemes_exclude=1599&per_page=4&offset=' + r)
      .then(responce => {
        this.posts = responce
      })
    },
    //
    //  fetch({store}) {
    //   if (store.getters['botNews/news'].length === 0) {
    //      store.dispatch('botNews/fetch')
    //   }
    // },
    // computed: {
    //   posts() {
    //     return this.$store.getters['botNews/news']
    //   },
    // }
  }
</script>

<style scoped>
  .field {
    margin-top: 1rem;
  }
</style>
