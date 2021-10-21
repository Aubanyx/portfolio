<template>
  <transition name="fade">
    <button id="button" v-show="this.scY > 300" @click="toUp"><img src="../assets/img/arrow.svg" alt="arrow"></button>
  </transition>
</template>

<script>
export default {
  name: "ScrollToUp",
  data() {
    return {
      scTimer: 0,
      scY: 0,
    }
  },
  mounted() {
    window.addEventListener('scroll', this.handleScroll);
  },
  methods: {
    handleScroll() {
      if (this.scTimer) {
        return;
      }
      this.scTimer = setTimeout(() => {
        this.scY = window.scrollY;
        clearTimeout(this.scTimer);
        this.scTimer = 0;
      }, 100);
    },
    toUp() {
      window.scrollTo({
        top: 0,
        behavior: "smooth"
      });
    }
  },
}
</script>

<style lang="scss" scoped>
#button {
  position: fixed;
  right: 1rem;
  bottom: 1rem;
  width: 6rem;
  height: 6rem;
  background: transparent;
  //opacity: 1;
  cursor: pointer;
  transition: transform .3s;

  &:hover {
    transform: rotateZ(360deg);
  }

  img {
    width: inherit;
    transform: rotateZ(180deg);
  }
}

.fade-enter-active, .fade-leave-active {
  transition: opacity .5s;
}
.fade-enter, .fade-leave-to {
  opacity: 0;
}
</style>
