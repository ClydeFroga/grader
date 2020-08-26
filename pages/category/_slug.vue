<template>
  <div class="col-12 col-sm-9 news left">
    <div v-if="this.posts.length === 0">
      <h1>
        Постов в этой категории не найдено
      </h1>
    </div>
    <div v-else>
      <div class="news__breadcrumbs">
        <nuxt-link to="/">Главная</nuxt-link>
        <span> / </span>
        <span>{{this.cat[0].name}}</span>
      </div>

      <div v-for="post of posts" :key="post.id" class="row news__one">
        <div class="col-12 col-sm">
          <nuxt-link :to="{name: 'post-slug', params: {slug: post.slug}}">
            <img :src="post.x_featured_media_large" :alt="post.alt">
          </nuxt-link>

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
          <nuxt-link :to="{name: 'post-slug', params: {slug: post.slug}}">
            <div v-html="post.title.rendered" class="news__title">

            </div>
            <div v-html="post.excerpt.rendered" class="news__excerpt">
            </div>
          </nuxt-link>
        </div>
      </div>

      <button @click.prevent="fetchData" class="loadmore" type="button">
        Загрузить еще
      </button>
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
      let cat = await $axios.$get('https://igrader.ru/wp-json/wp/v2/categories?search=' + params.slug)
      if(cat.length === 0) {
        cat = [{
          name: 'Посты не найдены'
        }
        ]
        let posts = []
        return {cat, posts}
      }
      const url = 'https://igrader.ru/wp-json/wp/v2/posts?categories=' + cat[0].id;
      const posts = await $axios.$get(url)

      return {posts, url, cat}
    },
    methods: {
      async fetchData() { //загрузить еще
        let a = document.querySelector('.loadmore')
        a.blur()
        this.page++
        await this.$axios.$get(this.url + "&page=" + this.page)
        .then(responce => {

          // let z = 0
          for(let item of responce) {
            this.posts.push(item)
            // setTimeout(() => this.posts.push(item), z)
            // z += 300
          }
        })
        .catch(function (e) {
          let nav =  document.querySelector('.loadmore')
          nav.innerHTML = `<p>Вы просмотрели все записи</p>`
          document.preventDefault
        })
      },
    },
  }
</script>
