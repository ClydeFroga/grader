import Vue from "vue";

Vue.mixin({

  computed: {
    readTime() {
      let length = this.titles[this.readTimePost].content.rendered.replace(/[^а-яА-Я]/g, "");
      this.readTimePost++
      let result = `${Math.ceil(length.length / 1000)}`;
      let number = result % 100;
      if (number >= 5 && number <= 20) {
        return `${result} минут на чтение`;
      }
      number = result % 100;
      if (number == 1) {
        return `${result} минута на чтение`;
      }
      if (number >= 2 && number <= 4) {
        return `${result} минуты на чтение`;
      }
    },
  },
  methods: {
    readProgress() {
      let a =
        (this.leftOps.scrollHeight -
          this.leftOps.getBoundingClientRect().bottom) /
        (this.leftOps.scrollHeight - this.height);

      if (a >= 0) {
        this.progress.style.width = `${a * 100}%`;
      } else {
        this.progress.style.width = 0;
      }
    },
    leftOpps() {
      this.leftOps = document.querySelector(".left");
    },
  },
});
