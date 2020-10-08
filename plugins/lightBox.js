import Vue from 'vue'

Vue.mixin({
  methods:{
    lightBox() {
      let modal = document.querySelector('.modalForImg ')
      let close = document.querySelector('.modalForImg > div')
      let modalImg = document.querySelector('.modalImg')
      let right = document.querySelector('.bi-arrow-right-short')
      let left = document.querySelector('.bi-arrow-left-short')

      let im = []
      let imgs = []
      let i = 0
      document.addEventListener('click', function (e) {
        imgs = document.querySelectorAll('div.left figure')
        if(close === e.target ) {
          modal.style.display = 'none'
          document.querySelector('body').style.overflow = 'auto'
          modalImg.src = ''
          document.removeEventListener('wheel', zoom1)
          modalImg.style.transform =`scale(1)`
        } else if(right === e.target || right === e.target.parentNode) {
          modalImg.src = ''
          let nextImg = []
          if(imgs[i+1]) {
            nextImg = imgs[i+1].querySelector('img')
          } else { //если последний
            i = -1
            nextImg = imgs[0].querySelector('img')
          }

          if(nextImg === null) {
            i++
            nextImg = imgs[i+1].querySelector('img')
          }

          modalImg.src = nextImg.src
          i++

        } else if(left === e.target || left === e.target.parentNode) {
          modalImg.src = ''
          let prevImg = []
          if(imgs[i-1]) {
            prevImg = imgs[i-1].querySelector('img')
          } else { //если первый
            i = imgs.length
            prevImg = imgs[imgs.length - 1].querySelector('img')
          }
          if(prevImg === null) {
            i--
            prevImg = imgs[i - 1].querySelector('img')
          }
          modalImg.src = prevImg.src
          i--

        } else {
          i = 0;
          for(let img of imgs) {
            if(e.target === img || img === e.target.parentNode) {
              im = e.target.querySelector('img')
              if(im === null) {
                im = e.target.parentNode.querySelector('img')
              }
              modalImg.src = im.src
              modal.style.display = 'flex'
              document.querySelector('body').style.overflow = 'hidden'
              zoom()
              return ;
            } else {
              i++
            }
          }
        }
      })

      let scale = 1;
      let zoom = function () {
        document.addEventListener('wheel',  zoom1)
      }

      function zoom1(event) {
        scale += event.deltaY * -0.01;
        scale = Math.min(Math.max(.125, scale), 4);
        modalImg.style.transform = `scale(${scale})`;
      }
    }
  }
})
