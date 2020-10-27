import Vue from 'vue'

Vue.mixin({
  methods:{
    loadbot() {
      let adTop = this.longAd.getBoundingClientRect().top
      if(adTop < 1000) {
        window.removeEventListener('scroll', this.loadbot)
        if(this.stickyBot) {
          this.stickyBot()
        }
        this.botNews()
      }
    },
  }
})
