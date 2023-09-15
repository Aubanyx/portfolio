<template>
  <transition name="slide">
    <section id="hero" class="container">
      <!--      <div class="text">-->
      <!--        <p class="text__developer">developer</p>-->
      <!--        <p class="text__and">&</p>-->
      <!--        <p class="text__designer">designer</p>-->
      <!--      </div>-->
      <div class="hero__box">
        <h1 class="hero__box__name">
          <span>Auban</span>
          <span>Labie</span>
        </h1>
        <p class="hero__box__text">{{ $t("hero.text") }}</p>
<!--        <a-->
<!--          v-magnetic="{ strength: 0.5, maxDistance: 40 }"-->
<!--          class="hero__box__btn"-->
<!--          href="#"-->
<!--        ><div class="buttonSend" v-magnetic>-->
<!--          Get it touch-->
<!--          <img-->
<!--            class="button&#45;&#45;send"-->
<!--            src="../assets/img/icons/send.svg"-->
<!--            alt="icon send"-->
<!--          /></div-->
<!--        ></a>-->
        <!--        <div class="hero__box__dev">-->
        <!--          <h2>Developer</h2>-->
        <!--          <h2>Designer</h2>-->
        <!--        </div>-->
        <!--        <p>-->
        <!--          Creative developer at the intersection of design and technology, I am-->
        <!--          passionate about crafting inspiring digital experiences. Merging-->
        <!--          aesthetics with advanced technology, I create elegant digital-->
        <!--          solutions that capture attention and turn ideas into unique-->
        <!--          interactions.-->
        <!--        </p>-->
      </div>
      <!--      <div class="hero">-->
      <!--        &lt;!&ndash;        <div class="title__Box">&ndash;&gt;-->
      <!--        &lt;!&ndash;          <h4 class="title">{{ $t("hero.title") }}</h4>&ndash;&gt;-->
      <!--        &lt;!&ndash;        </div>&ndash;&gt;-->
      <!--        <div class="hero__describe">-->
      <!--          &lt;!&ndash;          <h4 class="hero__describe__welcome">Welcome to my site</h4>&ndash;&gt;-->
      <!--          <h1 class="hero__describe__presentation">-->
      <!--            Hi ! I'm <strong class="accent">Auban</strong><br />Developer-->
      <!--            Front-End<br />-->
      <!--            & UI UX Designer-->
      <!--          </h1>-->
      <!--          &lt;!&ndash;          <p></p>&ndash;&gt;-->
<!--                <a-->
<!--                  v-magnetic="{ strength: 0.5, maxDistance: 40 }"-->
<!--                  class="hero__button"-->
<!--                  href="#"-->
<!--                  ><div class="buttonSend" v-magnetic>-->
<!--                    Get it touch-->
<!--                    <img-->
<!--                      class="button&#45;&#45;send"-->
<!--                      src="../assets/img/icons/send.svg"-->
<!--                      alt="icon send"-->
<!--                    /></div-->
<!--                ></a>-->
      <!--        </div>-->
      <!--        <div class="hero__box">-->
      <!--          <img-->
      <!--            class="hero__box&#45;&#45;img"-->
      <!--            src="../assets/img/photo1Rec.png"-->
      <!--            alt="picture"-->
      <!--          />-->
      <!--          &lt;!&ndash;          <div class="hero__box&#45;&#45;img"></div>&ndash;&gt;-->
      <!--        </div>-->
      <!--      </div>-->
      <div class="scrollDown">
        <a class="scrollDownIcon" href="#about"><span></span></a>
        <!--      <p>Scroll2</p>-->
      </div>
      <div class="follow">
        <p class="follow--text">{{ $t("hero.follow") }}</p>
        <a class="hero__github" href="https://github.com/Aubanyx"
          ><img src="../assets/img/icons/github.svg" alt="Logo Github"
        /></a>
        <a class="hero__linkedin" href="https://www.linkedin.com/in/aubanlabie/"
          ><img src="../assets/img/linkedin.svg" alt="Logo LinkedIn"
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
      // Assurez-vous que ces sélecteurs correspondent à ceux de votre HTML
      const title = document.querySelector(".hero__box__name");
      const subtitle = document.querySelector(".hero__box__text");

      // Écouter l'événement de scroll
      window.addEventListener("scroll", () => {
        let scrollPosition = window.scrollY;

        // Appliquer un effet de déplacement différent pour chaque élément
        this.$gsap.to(title, { y: -scrollPosition * 0.5 });
        this.$gsap.to(subtitle, { y: -scrollPosition * 0.3 });
      });
    },
  },
};
</script>

<style lang="scss" scoped>
//.SlideHero {
//  transform: translateY(100%);
//}
//.SlideHero--off {
//  transform: translateY(0);
//  transition: all 0.5s ease-out;
//}

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

.container {
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
  //border: 5rem solid var(--color-background-secondary);
  padding: 2rem;

  .hero__box {
    display: flex;
    flex-direction: column;
    //width: 100%;
    width: min-content;
    z-index: 1;

    .hero__box__name {
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      //font-size: 7rem;
      font-size: clamp(7rem, 4.3333rem + 8.3333vw, 15rem);
      //font-size: clamp(7rem, 2.6667rem + 13.5417vw, 20rem);
      font-weight: bold;
      text-transform: uppercase;
      line-height: 0.85;
      color: var(--color-text-tertiary);
    }

    .hero__box__text {
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

    .hero__box__btn {
      @include animationCircleHover;
      @include ButtonPrimary;

      .buttonSend {
        display: flex;
        align-items: center;

        .button--send {
          filter: invert(1);
          margin-left: 1rem;
        }
      }
    }

    .hero__box__dev {
      display: flex;
      flex-direction: column;
      align-items: flex-end;
      font-size: 4rem;
      font-weight: bold;
      text-transform: uppercase;
      margin-top: 5rem;
    }
  }

  //.text {
  //  display: flex;
  //  flex-direction: column;
  //  justify-content: center;
  //  align-items: center;
  //  width: 100%;
  //  margin: 10rem;
  //
  //  .text__developer,
  //  .text__and,
  //  .text__designer {
  //    color: var(--color-text-tertiary);
  //    //font-size: 17rem;
  //    font-size: clamp(10rem, -1.4286rem + 14.881vw, 20rem);
  //    font-weight: bold;
  //    text-transform: uppercase;
  //    position: relative;
  //    z-index: 1;
  //  }
  //
  //  .text__developer, .text__designer {
  //    &::before {
  //      content: "web";
  //      position: absolute;
  //      bottom: 10rem;
  //      left: -10rem;
  //      //font-size: 15rem;
  //      font-size: clamp(10rem, -1.4286rem + 14.881vw, 20rem);
  //      letter-spacing: 1rem;
  //      -webkit-text-fill-color: transparent;
  //      -webkit-text-stroke: 2px var(--color-secondary);
  //      z-index: -1;
  //    }
  //  }
  //
  //  .text__developer {
  //    align-self: flex-start;
  //  }
  //
  //  .text__and {
  //  }
  //
  //  .text__designer {
  //    align-self: flex-end;
  //  }
  //}

  //.hero {
  //  //display: flex;
  //  ////flex-direction: column;
  //  //justify-content: center;
  //  //align-items: center;
  //  //height: 100%;
  //  //width: 100%;
  //  //z-index: 2;
  //
  //  display: flex;
  //  justify-content: flex-start;
  //  align-items: center;
  //  height: 50%;
  //  width: 100%;
  //  z-index: 1;
  //  //margin: 0 15rem;
  //
  //  //.title__Box {
  //  //  background: #202023;
  //  //  width: 80%;
  //  //  text-align: left;
  //  //
  //  //  .title {
  //  //    font-size: 5rem;
  //  //    color: var(--tertiaryColor);
  //  //    padding: 2rem;
  //  //    z-index: 2;
  //  //  }
  //  //}
  //
  //  .hero__describe {
  //    display: flex;
  //    flex-direction: column;
  //    justify-content: center;
  //    width: 50%;
  //    height: 100%;
  //    text-align: left;
  //
  //    //.hero__describe__welcome {
  //    //  font-size: 2rem;
  //    //  color: var(--color-primary);
  //    //}
  //
  //    .hero__describe__presentation {
  //      font-size: 5rem;
  //      font-weight: bold;
  //      color: var(--tertiaryColor);
  //      margin: 0 0.5rem 1.6rem;
  //      line-height: 1.2;
  //      //z-index: -1;
  //
  //      .accent {
  //        //color: var(--color-primary);
  //        position: relative;
  //
  //        &::before {
  //          content: "";
  //          position: absolute;
  //          bottom: 1rem;
  //          left: 0;
  //          width: 100%;
  //          height: 25%;
  //          background: var(--color-primary);
  //          z-index: -1;
  //          transition: height 0.2s ease;
  //        }
  //
  //        &:hover::before {
  //          height: 70%;
  //        }
  //      }
  //    }
  //
  //    .hero__button {
  //      @include animationCircleHover;
  //      @include ButtonPrimary;
  //
  //      .buttonSend {
  //        display: flex;
  //        align-items: center;
  //
  //        .button--send {
  //          filter: invert(1);
  //          margin-left: 1rem;
  //        }
  //      }
  //    }
  //  }
  //
  //  .hero__box {
  //    display: none;
  //    justify-content: flex-end;
  //    align-items: center;
  //    width: 50%;
  //    height: 100%;
  //    //position: relative;
  //    z-index: 2;
  //
  //    //&::before {
  //    //  content: "";
  //    //  position: absolute;
  //    //  top: -3rem;
  //    //  right: 0;
  //    //  background: var(--color-primary);
  //    //  height: 90%;
  //    //  width: 57%;
  //    //  z-index: 0;
  //    //  border-radius: 0 0 0 10%;
  //    //}
  //
  //    .hero__box--img {
  //      height: 90vh;
  //      position: absolute;
  //      transform: scaleX(-1);
  //      z-index: 0;
  //      bottom: 0;
  //      right: 0;
  //      filter: grayscale(1);
  //
  //      display: none;
  //    }
  //  }
  //}

  .scrollDown {
    display: flex;
    flex-direction: column;
    align-items: center;
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    //margin-bottom: 3.7rem;
    margin-bottom: 5rem;
    z-index: 2;

    .scrollDownIcon {
      display: flex;
      //align-self: center;

      span {
        position: relative;
        width: 3rem;
        height: 5rem;
        //margin-left: -15px;
        border: 2px solid var(--color-text-tertiary);
        border-radius: 50px;
        box-sizing: border-box;
        //background: green;

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

  .follow {
    //background: violet;
    //height: 100%;
    //width: 100%;
    position: absolute;
    bottom: 0;
    right: 0;
    margin: 3.5rem;
    z-index: 2;
    //display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-end;
    display: none;

    .follow--text {
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

    .hero__github {
      display: flex;
      align-items: center;
      justify-content: flex-end;
      //overflow: hidden;

      &::before {
        content: "GitHub";
        font-size: 1.6rem;
        color: var(--color-text-tertiary);
        //background: chartreuse;
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

    .hero__linkedin {
      display: flex;
      align-items: center;
      justify-content: flex-end;

      &::before {
        content: "LinkedIn";
        font-size: 1.6rem;
        color: var(--color-text-tertiary);
        //background: chartreuse;
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
  .container {
    padding: 5rem;
  }
}

@media only screen and (min-width: 1024px) {
  .container {
    padding: 15rem;

    .follow {
      display: flex;
    }
  }
}
</style>
