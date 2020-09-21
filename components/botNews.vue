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
          <nuxt-link v-for="post of posts" :key="post.id" class="col field__blockFull" :to="{name: 'post-slug', params: {post:post.x_cats_slug[0], slug: post.slug}}">

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
        <div class="foxy" id="adfox_159374935502579870"></div>
        <div class="foxy" id="adfox_159374952133726391"></div>
        <div class="foxy" id="adfox_159712112538951246"></div>
      </div>
    </div>
  </div>

</template>

<script>


  export default {
    computed: {
      posts() {
        return this.$store.getters['botNews/news']
      },
    }
  }
</script>

<style scoped>
  .field {
    margin-top: 1rem;
  }
</style>
