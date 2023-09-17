<template>
  <section id="about" class="about">
    <div class="about__box">
      <div class="about__img">
        <img
          class="about__img-content"
          src="../assets/img/photo1Rec.webp"
          alt="picture"
        />
      </div>
    </div>

    <div class="about__infos">
      <h2 class="about__infos-title">{{ $t("about.title") }}</h2>
      <p class="about__infos-description">{{ $t("about.description01") }}</p>
      <p class="about__infos-description">{{ $t("about.description02") }}</p>
      <p class="about__infos-description">{{ $t("about.description03") }}</p>
      <a
        v-magnetic="{ strength: 0.5, maxDistance: 40 }"
        class="about__infos-btn"
        href="/pdf/Labie_Auban_CV.pdf"
        download
      >
        <div class="about__infos-btn-content" v-magnetic>
          {{ $t("about.download") }}
          <img src="../assets/img/icons/download.svg" alt="icon download" />
        </div>
      </a>
    </div>
  </section>
</template>

<script>
export default {
  name: "AboutComponent",
  mounted() {
    this.initScrollAnimations();
  },
  methods: {
    initScrollAnimations() {
      this.$gsap.registerPlugin(this.$ScrollTrigger);

      // Animation pour l'image
      this.$gsap.from(".about__img-content", {
        opacity: 0,
        y: -50,
        scrollTrigger: {
          trigger: ".about__img-content",
          start: "top 80%",
          end: "bottom 20%",
          toggleActions: "play none none reverse",
        },
      });

      // Animation pour le titre et la description
      this.$gsap.from(".about__infos-title, .about__infos-description", {
        opacity: 0,
        y: 50,
        stagger: 0.2,
        scrollTrigger: {
          trigger: ".about__infos",
          start: "top 80%",
          end: "bottom 20%",
          toggleActions: "play none none reverse",
        },
      });

      // Animation pour le bouton
      this.$gsap.from(".about__infos-btn", {
        opacity: 0,
        y: 50,
        scrollTrigger: {
          trigger: ".about__infos-btn",
          start: "top 100%",
          end: "bottom 20%",
          toggleActions: "play none none reverse",
        },
      });
    },
  },
};
</script>

<style lang="scss" scoped>
.about {
  max-width: 1920px;
  max-height: fit-content;
  margin: auto;
  display: flex;
  flex-direction: column;
  position: relative;
  background: var(--color-background-primary);

  .about__box {
    width: 100%;
    background: var(--color-secondary);

    .about__img {
      .about__img-content {
        width: 100%;
        height: 40rem;
        object-fit: cover;
        position: relative;
        filter: grayscale(1);
        transition: 0.2s ease;

        &:hover {
          filter: grayscale(0);
        }
      }
    }
  }

  .about__infos {
    width: 100%;
    padding: 10rem 5rem;
    display: flex;
    flex-direction: column;
    align-items: center;

    .about__infos-title {
      @include Title;
    }

    .about__infos-description {
      font-size: 1.6rem;
      line-height: 1.2;
      color: var(--color-text-tertiary);
      font-weight: 300;
      text-align: left;

      &:nth-of-type(2) {
        margin: 5rem 0;
      }

      &:last-of-type {
        margin-bottom: 10rem;
      }
    }

    .about__infos-btn {
      @include animationCircleHover;
      @include ButtonPrimary;

      .about__infos-btn-content {
        display: flex;
        align-items: center;

        img {
          filter: invert(1);
          margin-left: 1rem;
        }
      }
    }
  }

  @media only screen and (min-width: 768px) {
    .about__box {
      flex-direction: row;
    }
  }

  @media only screen and (min-width: 1024px) {
    flex-direction: row;
    padding: 0 15rem;

    &::before {
      content: "About";
      position: absolute;
      top: 0;
      left: -1rem;
      font-size: 20rem;
      letter-spacing: 1rem;
      -webkit-text-fill-color: transparent;
      -webkit-text-stroke: 2px var(--color-secondary);
      transform: rotateZ(180deg);
      writing-mode: vertical-lr;
      height: 100%;
      display: flex;
      justify-content: center;
    }

    .about__box {
      width: 35%;

      .about__img {
        width: 130%;
        height: 100%;
        display: flex;
        align-items: flex-end;

        .about__img-content {
          width: 95%;
          height: 80%;
          object-position: right;
        }
      }
    }

    .about__infos {
      width: 70%;
      align-items: flex-start;
      padding: 10rem 0 10rem 10rem;
    }
  }

  @media only screen and (min-width: 1280px) {
    max-height: 1200px;
  }

  @media only screen and (min-width: 1440px) {
    .about__infos {
      .about__infos-description {
        width: 70%;
      }
    }
  }
}
</style>
