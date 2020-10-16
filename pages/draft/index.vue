<template>
  <div class="col-12 col-lg-9 news left">
    <form name="form">
        <div class="form-group">
          <input class="form-control" required v-model="login" type="text" placeholder="Логин">
          <input class="form-control" required v-model="password" type="password" placeholder="Пароль">
        </div>
        <button class="btn btn-success" type="submit" @click.prevent="auth">
          Авторизоваться
        </button>
      </form>
    <div class="alert alert-danger" v-for="err of errors">
      <span v-html="err"></span>
    </div>
    <div class="alert alert-success" v-for="sc of succ">
      <span v-html="sc"></span>
    </div>
  </div>
</template>

<script>
export default {
  async fetch ({ params, redirect, store }) {

  },
  data: () => ({
    login: '',
    password: '',
    errors: [],
    succ: []
  }),
  head() {
    return {
      title: 'Авторизация | iGrader.ru',
      meta: [
        { name: 'robots', content: 'noindex'},
      ],
    }
  },
  async asyncData({params, redirect}) {

  },
  methods: {
    async auth() {
      let formData = new FormData()
      formData.append('username', this.login)
      formData.append('password', this.password)

      let response = await fetch('https://promotech.igrader.ru/wp-json/jwt-auth/v1/token', {
        method: 'POST',
        body: formData
      });
      let result = await response.json()

      if(!result.token) {
        this.errors.push(result.message)
      } else {
        this.$cookies.set('jwt',result.token , {
          path: '/',
          maxAge: 60 * 60 * 12,
          sameSite: 'Lax'
        })
        this.errors = []
        this.succ.push('Успешно')
      }
    }
  },
  computed: {

  }
}
</script>

<style lang="scss" scoped>
  .alert {
    margin-top: 2rem;
  }
  input {
    margin-bottom: 2rem;
  }
</style>
