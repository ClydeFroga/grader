<template>
  <div class="about col-12 col-lg-7 left single adv" >
    <div v-for="post of posts" :key="post.id" v-if="posts.length !== 0">
      <h1>{{post.title.rendered}}</h1>
      <div class="news__breadcrumbs">
        <nuxt-link to="/">Главная</nuxt-link>
        <span> / </span>
        <span>{{post.title.rendered}}</span>
      </div>
      <div class="single__text" v-html="post.content.rendered"></div>
    </div>
  </div>
</template>

<script>
  export default {
    head() {
      return {
        title: this.posts[0].title.rendered + ' | iGrader.ru'
      }
    },
    mounted() {
      let form = document.querySelector('.wpcf7')
      if(form) {
        this.listener()
      }
    },
    async fetch ({ store }) {
      if (store.getters['lastMag/journal'].length === 0) {
        await store.dispatch('lastMag/fetch')
      }
      if (store.getters['botNews/news'].length === 0) {
        await store.dispatch('botNews/fetch')
      }
    },
    async asyncData({params, redirect}) {
      let posts = await fetch('https://igrader.ru/wp-json/wp/v2/pages?slug=' + params.slug)
      posts = await posts.json()
      if(posts.length === 0) {
        redirect(301, `/404`)
      }
      return {posts}
    },
    methods: {
      listener() {
        let button = document.querySelector('.wpcf7 .wpcf7-submit')
        document.addEventListener('click', function (e) {
          if(e.target === button) {
            e.preventDefault()
            let form = new FormData()
            let output = document.querySelector('.wpcf7-response-output')
            let formId = document.querySelector('.wpcf7').id.match(/(?<=wpcf7-f)\d+/)[0]
            let inputs = document.querySelectorAll('.wpcf7 .form-input')
            for(let item of inputs) {
              form.set(item.name, item.value);
            }
            button.setAttribute('disabled', 'disabled')
            fetch('https://igrader.ru/wp-json/contact-form-7/v1/contact-forms/'+ formId +'/feedback', {
              method: 'POST',
              body: form
            }).then(responce => responce.json())
            .then(result => {
              output.textContent = result.message
              output.classList.add('alert')
              if(result.status === 'mail_sent') {
                button.remove()
                output.classList.add('alert-success')
              } else if (result.status === 'validation_failed') {
                button.removeAttribute('disabled', 'disabled')
                output.classList.remove('alert-warning')
                output.classList.add('alert-danger')
              } else {
                button.removeAttribute('disabled', 'disabled')
                output.classList.remove('alert-danger')
                output.classList.add('alert-warning')
              }
            })
          }
        })
      },
    }
	}
</script>
