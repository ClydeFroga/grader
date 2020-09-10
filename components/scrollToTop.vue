<template>
  <a @click.prevent="scrolltop" :style="{display: show}" class="arrow">
<!--    <svg width="25" height="25" >-->
<!--      <use xlink:href="@/static/svgsprite.svg#upArrow"></use>-->
<!--    </svg>-->
    <svg-icon name="arrowUp">

    </svg-icon>
  </a>
</template>

<script>
  export default {
    data: () => ({
      show: 'none'
    }),
    mounted: function () {
      window.addEventListener('scroll', this.onScroll);
    },
    methods: {
      onScroll () {
        if(pageYOffset > 500) {
          this.show = ''
        } else {
          this.show = 'none'
        }
      },
      scrolltop() {
        window.scrollTo({
          top: 0,
          behavior: "smooth"
        });
      }
    },
  }
</script>

<style scoped>
  .arrow {
    position: fixed;
    right: 60px;
    bottom: 40px;
    cursor: pointer;
    width: 40px;
    height: 45px;
    z-index: 100;
  }
  .arrow svg {
    width: 40px;
    height: 45px;
  }
</style>
