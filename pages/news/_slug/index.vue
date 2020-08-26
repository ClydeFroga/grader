<template>
  <div class="col-12 col-sm-9 news left">
    <div v-if="this.posts.length === 0">
      <h1>
        Постов в этой категории не найдено
      </h1>
    </div>
    <div v-else>
      <div class="news__breadcrumbs">
        <a href="#">Главная</a>
        <span> / </span>
        <span>Категория</span>
      </div>
      <div v-for="post of posts" :key="post.id" class="row news__one">
        <div class="col-12 col-sm">
          <img :src="post.x_featured_media_large" :alt="post.alt">
        </div>
        <div class="col-12 col-sm-7">
          <div>
            <nuxt-link to="" class="news__cat">
              {{post.x_categories}}
            </nuxt-link>
            <span class="news__date">
              {{post.x_date}}
            </span>
          </div>
          <a href="#">
            <div v-html="post.title.rendered" class="news__title">

            </div>
            <div v-html="post.excerpt.rendered" class="news__excerpt">
            </div>
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
	export default {
    data: () => ({
      page: 1,
      titles: [],
      MyTypes: []
    }),
    head() {
      return {
        title: this.cat[0].name + ' | Лесной комплекс '
      }
    },
    async asyncData({$axios, params}) {
      let cat = await $axios.$get('https://igrader.ru/wp-json/wp/v2/mainthemes?search=' + params.slug)
      if(cat.length === 0) {
        cat = [{
          name: 'Посты не найдены'
        }
        ]
        let posts = []
        return {cat, posts}
      }
      const url = 'https://igrader.ru/wp-json/wp/v2/posts?mainthemes=' + cat[0].id;
      const posts = await $axios.$get(url)

      return {posts, url, cat}
    }

	}
</script>
