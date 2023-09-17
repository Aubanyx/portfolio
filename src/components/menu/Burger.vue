<template>
  <div
    v-magnetic="{ strength: 0.5 }"
    id="burger"
    :class="{ 'burger--active': isBurgerActive }"
    @click.prevent="toggle"
  >
    <slot>
      <button
        v-magnetic="{ strength: 0.5 }"
        type="button"
        class="burger__button"
        title="Menu"
      >
        <span class="button__bar button__bar--1"></span>
        <span class="button__bar button__bar--2"></span>
        <span class="button__bar button__bar--3"></span>
      </button>
    </slot>
  </div>
</template>

<script>
export default {
  name: "BurgerComponent",
  computed: {
    isBurgerActive() {
      return this.$store.state.isNavOpen;
    },
  },
  methods: {
    toggle() {
      this.$store.commit("toggleNav");

      if (this.isBurgerActive) {
        document.body.style.overflowY = "hidden";
      } else {
        document.body.style.overflowY = "";
      }
    },
  },
};
</script>

<style lang="scss" scoped>
#burger {
  @include animationCircleHover;
  background: var(--color-primary);
  border-radius: 50%;
  padding: 1rem;
  z-index: 999;
  align-self: center;

  .burger--active {
    .burger__button {
      transform: rotate(-180deg);
    }

    .button__bar--1 {
      transform: rotate(45deg);
    }

    .button__bar--2 {
      opacity: 0;
    }

    .button__bar--3 {
      transform: rotate(-45deg);
    }
  }

  .burger__button {
    position: relative;
    height: 30px;
    width: 32px;
    display: block;
    z-index: 999;
    border: 0;
    border-radius: 0;
    background-color: transparent;
    pointer-events: all;
    transition: transform 0.6s cubic-bezier(0.165, 0.84, 0.44, 1);

    &:hover {
      .button__bar--2 {
        transform: scaleX(1);
      }
    }

    .button__bar {
      background: white;
      position: absolute;
      top: 50%;
      right: 6px;
      left: 6px;
      height: 2px;
      width: auto;
      margin-top: -1px;
      transition: transform 0.6s cubic-bezier(0.165, 0.84, 0.44, 1),
        opacity 0.3s cubic-bezier(0.165, 0.84, 0.44, 1),
        background-color 0.6s cubic-bezier(0.165, 0.84, 0.44, 1);

      &--1 {
        -webkit-transform: translateY(-6px);
        transform: translateY(-6px);
      }

      &--2 {
        transform-origin: 100% 50%;
        transform: scaleX(0.8);
      }

      &--3 {
        transform: translateY(6px);
      }
    }
  }
}

button {
  cursor: pointer;

  &:focus {
    outline: 0;
  }
}

.no-touchevents {
  .button__bar--2:hover {
    transform: scaleX(1);
  }
}
</style>
