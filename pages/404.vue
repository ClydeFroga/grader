<template>
  <div class="col-12 col-lg-9 news left">
    <img class="img404" src="@/static/404.png">
    <p>
      Кажется кто-то закатал эту страницу в асфальт или она никогда не существовала.
      Воспользуйтесь поиском или посмотрите топчик.
    </p>
  </div>
</template>

<script>
export default {
  // layout: 'main-page',
  async fetch ({store }) {
    if (store.getters['lastMag/journal'].length === 0) {
      await store.dispatch('lastMag/fetch')
    }
    if (store.getters['botNews/news'].length === 0) {
      store.dispatch('botNews/fetch')
    }
    if (store.getters['mainPage/sticky'].length === 0) {
      await store.dispatch('mainPage/sticky')
    }
  },
  head() {
    return {
      title: 'К сожалению, ничего не найдено 404'
    }
  },
  data: () => ({
  }),
}
</script>

<style scoped >
p {
  margin: 2rem auto;
}
.img404 {
  width: 70%;
  min-width: 500px;
  display: flex;
  margin: 0 auto;
}
</style>
