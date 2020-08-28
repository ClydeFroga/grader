<template>
  <div class="col-12 col-lg-9 news left">

    <div v-if="this.events.length === 0">
      <h1>
        Ближайших мероприятий нет
      </h1>
    </div>

    <div >
      <div class="news__breadcrumbs">
        <nuxt-link to="/">Главная</nuxt-link>
        <span> / </span>
        <span>Мероприятия</span>
      </div>
      <div v-for="(post, ind) of events" :key="post.id" class="row news__one">
        <div class="col-12 col-sm">
          <nuxt-link :to="{name: 'post-slug', params: {slug: post.slug}}">
            <img :src="post.x_featured_media_large" :alt="post.alt">
          </nuxt-link>

        </div>

        <div class="col-12 col-sm-7">
          <div>
            <span class="news__date">
              {{new Date(+(post.x_metadata._start_ts + '000')).toLocaleDateString('ru')}} - {{new Date(+(post.x_metadata._end_ts + '000')).toLocaleDateString('ru')}}
            </span>
          </div>
          <nuxt-link :to="{name: 'events-slug', params: {slug: post.slug}}">
            <div v-html="post.title.rendered" class="news__title">

            </div>
            <div v-html="post.excerpt.rendered.slice(0, 120) + ' ...'" class="news__excerpt">
            </div>
          </nuxt-link>
        </div>
      </div>
    </div>

  </div>
</template>

<script>
  export default {
    head() {
      return {
        title: 'Ближайшие мероприятия | iGrader.ru'
      }
    },
    data: () => ({
      page: 1,
    }),
    async asyncData({$axios}) {
      let events = []
      let url = 'https://igrader.ru/wp-json/wp/v2/events'
      await $axios.$get(url)
      .then(responce => {
        if (responce.length === 0) {
          return {events}
        }
        for(let item of responce) {
          let date = +(item.x_metadata._end_ts + '000');
          if(date > Date.now()) {
            events.push(item)
          }
        }
      })
      events.sort(function (a, b) {
        if (a.x_metadata._start_ts > b.x_metadata._start_ts) {
          return 1;
        }
        if (a.x_metadata._start_ts < b.x_metadata._start_ts) {
          return -1;
        }
        return 0;
      });

      return {events, url}
    },
  }
</script>

<style scoped>

</style>
