<template>
  <div class="about col-12 col-lg-7 left single pages" >
    <div v-for="post of posts" :key="post.id" v-if="posts.length !== 0">
      <h1>{{post.title.rendered}}</h1>
      <div class="news__breadcrumbs">
        <nuxt-link to="/">Главная</nuxt-link>
        <span> / </span>
        <span>{{post.title.rendered}}</span>
      </div>
      <div class="single__text" v-html="post.content.rendered"></div>
    </div>

    <div v-if="$route.path === '/pages/about'" >
      <form @submit.prevent="sendMail" class="aboutForm">
        <p>
          Подписывайтесь на печатную и электронную версию журнала «Грейдер»
        </p>
        <label>
          Email<span class="red">*</span>
        </label>
        <input
          type="email"
          v-model="email"
          class="sp-form-control"
          placeholder="username@gmail.com"
          required
        />

        <label>
          Имя Отчество<span class="red">*</span>
        </label>
        <input
          type="text"
          v-model="firstName"
          class="sp-form-control"
          placeholder="Сергей Анатольевич"
          required
        />

        <label>
          Фамилия<span class="red">*</span>
        </label>
        <input
          type="text"
          v-model="lastName"
          class="sp-form-control"
          placeholder="Иванов"
          required
        />

        <label>
          Должность<span class="red">*</span>
        </label>
        <input
          type="text"
          v-model="position"
          class="sp-form-control"
          placeholder='Директор'
          required
        />

        <label>
          Компания<span class="red">*</span>
        </label>
        <input
          type="text"
          v-model="company"
          class="sp-form-control"
          placeholder='ООО "Мощь"'
          required
        />

        <label>
          Отрасль<span class="red">*</span>
        </label>
        <input
          type="text"
          v-model="department"
          class="sp-form-control"
          placeholder='Дорожное строительство'
          required
        />

        <button type="submit">
          Подписаться
        </button>
        <p class="subs" @click.prevent="closeForm">Спасибо, я уже подписан</p>
        <div>
          <input type="checkbox" id="first" name="first" required>
          <label for="first"> Подписываясь на рассылку, вы соглашаетесь с <nuxt-link to="/pages/for_users">Правилами пользования и Политикой конфиденциальности</nuxt-link> и даете согласие на использование файлов cookie и передачу своих персональных данных *</label>
        </div>
        <div>
          <input type="checkbox" id="second" name="second" required>
          <label for="second"> Да, пожалуйста уведомляйте меня о новостях, событиях и предложениях *</label>
        </div>

      </form>
    </div>






  </div>
</template>

<script>
  export default {
    data() {
      return {
        email: '',
        firstName: '',
        lastName: '',
        position: '',
        company: '',
        department: '',
      }
    },
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
      let posts = await fetch('http://localhost/igrader/wp-json/wp/v2/pages?slug=' + params.slug)
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
            fetch('http://localhost/igrader/wp-json/contact-form-7/v1/contact-forms/'+ formId +'/feedback', {
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
      sendMail() {
        let butt = document.querySelector('.aboutForm > button')
        let res = document.querySelector('.subs')

        fetch('http://localhost/igrader/wp-json/last_news/v1/send-pulse?id=88939322&email=' + this.email + '&firstName=' + this.firstName + '&lastName=' + this.lastName + '&position=' + this.position + '&company=' + this.company + '&department=' +this.department)
        .then(responce => responce.json())
        .then(result => {
          if(result.result === true) {
            butt.remove()
            res.innerText = 'Спасибо за вашу подписку'
          } else {
            console.log(result)
            res.innerText = 'Произошла ошибка, пожалуйста, сообщите нам'
          }
        })
      },
      closeForm() {
        let form = document.querySelector('.aboutForm')
        form.style.display = 'none'
      }
    }
	}
</script>


<style scoped lang="scss">
  .aboutForm {
    margin: 2rem 0;
    border: 1px solid #cccccc;
    padding: 1rem;
    * {
      font-family: "Roboto Regular", sans-serif;
    }
    p {
      text-align: center;
      font-size: 1rem;
      font-weight: 800;
    }

    > label, input {
      display: flex;
      width: 100%;
      font-size: .8rem;
    }

    > label {
      margin-top: .9rem;
      margin-bottom: 0;
    }

    .red {
      display: block;
      color: red;
      margin: 0;
      font-size: 0.5rem;
    }

    .subs {
      color: #0089bf;
      font-size: 0.8rem;
      cursor: pointer;
    }

    > input {
      border: 1px solid #cccccc;
      padding: 5px 15px;
    }
    button {
      display: flex;
      margin: 1rem auto;
      text-align: center;
      background-color: #0089bf;
      border: none;
      border-bottom: 2px solid black;
      padding: 3px 15px;
      color: white;
    }
    > div {
      display: flex;
      margin-bottom: 1rem;
      > input {
        width: auto;
        margin-right: 1rem;
      }
      > label, a {
        margin-bottom: 0;
        font-size: .75rem;
        color: #444444;
        a {
          color: #1d2953;
        }
      }

    }


  }

</style>
