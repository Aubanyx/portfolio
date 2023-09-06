<template>
  <transition name="fade">
    <button
      v-magnetic="{ strength: 0.5 }"
      id="button"
      v-show="this.scY > 300"
      @click="toUp"
    >
      <img
        v-magnetic="{ strength: 0.5 }"
        src="../assets/img/arrow.svg"
        alt="arrow"
      />
    </button>
  </transition>
</template>

<script>
export default {
  name: "ScrollToUp",
  data() {
    return {
      scTimer: 0,
      scY: 0,
    };
  },
  mounted() {
    window.addEventListener("scroll", this.handleScroll);
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
        // behavior: "smooth"
      });
    },
  },
};
</script>

<style lang="scss" scoped>
#button {
  @include animationCircleHover;
  position: fixed;
  right: 3.5rem;
  bottom: 3.5rem;
  width: 6rem;
  height: 6rem;
  cursor: pointer;
  background: var(--color-primary);
  border-radius: 50%;

  img {
    width: 4rem;
    height: 4rem;
    transform: rotateZ(180deg) !important;
    //filter: var(--imgfilter);
    filter: brightness(10);
  }
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s !important;
}
.fade-enter,
.fade-leave-to {
  opacity: 0;
}

@media only screen and (min-width: 1920px) {
  #button {
    left: calc(50% + 960px - 6rem - 3.5rem);
  }
}
</style>
