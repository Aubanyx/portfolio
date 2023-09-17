<template>
  <transition name="slide">
    <section id="hero" class="hero">
      <div class="hero__box">
        <h1 class="hero__box__name">
          <span>Auban</span>
          <span>Labie</span>
        </h1>
        <p class="hero__box__text">{{ $t("hero.text") }}</p>
      </div>
      <div class="hero__scrollDown">
        <a class="hero__scrollDownIcon" href="#about"><span></span></a>
      </div>
      <div class="hero__follow">
        <p class="hero__follow--text">{{ $t("hero.follow") }}</p>
        <a
          class="hero__follow__github"
          href="https://github.com/Aubanyx"
          ><img src="../assets/img/icons/github.svg" alt="Logo Github"
        /></a>
        <a
          class="hero__follow__linkedin"
          href="https://www.linkedin.com/in/aubanlabie/"
          ><img src="../assets/img/icons/linkedin.svg" alt="Logo LinkedIn"
        /></a>
      </div>
    </section>
  </transition>
</template>

<script>
export default {
  name: "HeroComponent",
  mounted() {
    this.setupParallax();
  },
  methods: {
    setupParallax() {
      const title = document.querySelector(".hero__box__name");
      const subtitle = document.querySelector(".hero__box__text");

      window.addEventListener("scroll", () => {
        let scrollPosition = window.scrollY;
        this.$gsap.to(title, { y: -scrollPosition * 0.5 });
        this.$gsap.to(subtitle, { y: -scrollPosition * 0.3 });
      });
    },
  },
};
</script>

<style lang="scss" scoped>
.slide-enter-active,
.slide-leave-active {
  transition: transform 20s ease-in-out;
}

.slide-enter {
  transform: translateY(-100%);
}

.slide-leave-to {
  transform: translateY(100%);
}

.hero {
  max-width: 1920px;
  max-height: 1200px;
  margin: auto;
  background: var(--color-background-primary);
  height: 100vh;
  width: 100%;
  position: relative;
  display: flex;
  align-items: center;
  overflow: hidden;
  padding: 2rem;

  &__box {
    display: flex;
    flex-direction: column;
    width: min-content;
    z-index: 1;

    &__name {
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      font-size: clamp(7rem, 4.3333rem + 8.3333vw, 15rem);
      font-weight: bold;
      text-transform: uppercase;
      line-height: 0.85;
      color: var(--color-text-tertiary);
    }

    &__text {
      width: 75%;
      line-height: 1.2;
      font-size: 1.2rem;
      font-weight: 300;
      text-align: left;
      align-self: flex-start;
      color: var(--color-text-tertiary);
      margin-top: 2rem;
      margin-bottom: 4rem;
    }
  }

  &__scrollDown {
    display: flex;
    flex-direction: column;
    align-items: center;
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    margin-bottom: 5rem;
    z-index: 2;

    &Icon {
      display: flex;

      span {
        position: relative;
        width: 3rem;
        height: 5rem;
        border: 2px solid var(--color-text-tertiary);
        border-radius: 50px;
        box-sizing: border-box;

        &::before {
          content: "";
          width: 0.8rem;
          height: 0.8rem;
          position: absolute;
          top: 0.8rem;
          right: 0;
          left: 50%;
          transform: translateX(-50%);
          background-color: var(--color-primary);
          border-radius: 100%;
          animation: scrollAnimation 2s infinite;
          box-sizing: border-box;
        }

        @keyframes scrollAnimation {
          0% {
            transform: translate(-50%, 0);
            opacity: 0;
          }
          40% {
            opacity: 1;
          }
          80% {
            transform: translate(-50%, 2.5rem);
            opacity: 0;
          }
          100% {
            opacity: 0;
          }
        }
      }
    }
  }

  &__follow {
    position: absolute;
    bottom: 0;
    right: 0;
    margin: 3.5rem;
    z-index: 2;
    flex-direction: column;
    justify-content: center;
    align-items: flex-end;
    display: none;

    &--text {
      font-size: 2rem;
      writing-mode: vertical-rl;
      text-orientation: mixed;
      color: var(--color-text-tertiary);
      width: 3rem;
      display: flex;
      align-items: center;

      &::after {
        background-color: var(--color-background-quaternary);
        content: "";
        display: inline-block;
        height: 5rem;
        position: relative;
        width: 1px;
        margin: 1rem 0;
      }
    }

    &__github {
      display: flex;
      align-items: center;
      justify-content: flex-end;

      &::before {
        content: "GitHub";
        font-size: 1.6rem;
        color: var(--color-text-tertiary);
        width: 0;
        left: 0;
        overflow: hidden;
        margin-right: 1rem;
        transition: 0.2s ease;
      }

      &:hover::before {
        width: 100%;
      }

      img {
        width: 3rem;
        filter: var(--filter-img);
      }
    }

    &__linkedin {
      display: flex;
      align-items: center;
      justify-content: flex-end;

      &::before {
        content: "LinkedIn";
        font-size: 1.6rem;
        color: var(--color-text-tertiary);
        width: 0;
        left: 0;
        overflow: hidden;
        margin-right: 1rem;
        transition: 0.2s ease;
      }

      &:hover::before {
        width: 100%;
      }

      img {
        width: 3rem;
        filter: var(--filter-img);
      }
    }
  }
}

@media only screen and (min-width: 768px) {
  .hero {
    padding: 5rem;
  }
}

@media only screen and (min-width: 1024px) {
  .hero {
    padding: 15rem;

    &__follow {
      display: flex;
    }
  }
}
</style>
