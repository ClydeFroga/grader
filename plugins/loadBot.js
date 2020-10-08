import Vue from 'vue'

Vue.mixin({
  methods:{
    loadbot() {
      let adTop = this.longAd.getBoundingClientRect().top
      if(adTop < 500) {
        window.removeEventListener('scroll', this.loadbot)
        this.botNews()
      }
    },
  }
})