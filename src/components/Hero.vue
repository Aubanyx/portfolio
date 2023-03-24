<template>
  <transition name="slide">
    <section id="hero" class="container">
      <div class="hero">
        <!--        <div class="title__Box">-->
        <!--          <h4 class="title">{{ $t("hero.title") }}</h4>-->
        <!--        </div>-->
        <div class="hero__describe">
          <h4 class="hero__describe__welcome">Welcome to my site</h4>
          <h1 class="hero__describe__presentation">
            Hi ! I'm <strong class="accent">Auban</strong><br />Developer Front-End<br />
            & UI UX Designer
          </h1>
          <!--          <p></p>-->
          <a class="hero__button" href="#">Get it touch</a>
        </div>
        <div class="hero__box">
          <img
            class="hero__box--img"
            src="../assets/img/photo1Rec.png"
            alt="picture"
          />
          <!--          <div class="hero__box&#45;&#45;img"></div>-->
        </div>
      </div>
      <div class="scrollDown">
        <a class="scrollDownIcon" href="#about"><span></span></a>
        <!--      <p>Scroll2</p>-->
      </div>
      <div class="follow">
        <p class="follow--text">{{ $t("hero.follow") }}</p>
        <a class="hero__github" href="https://github.com/Aubanyx"
          ><img src="../assets/img/github.svg" alt="Logo Github"
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
    // const hero = document.querySelector("#hero");
    // hero.style.transform = "translateY(100%)";
    // setTimeout(() => {
    //   hero.style.transform = "translateY(0)";
    //   hero.style.transition = "all 0.7s ease-in-out";
    // }, 2900);
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
  background: var(--backgroundColor);
  height: 100vh;
  width: 100%;
  position: relative;
  display: flex;
  align-items: center;

  .hero {
    //display: flex;
    ////flex-direction: column;
    //justify-content: center;
    //align-items: center;
    //height: 100%;
    //width: 100%;
    //z-index: 2;

    display: flex;
    justify-content: center;
    align-items: center;
    height: 50%;
    width: 100%;
    z-index: 1;
    margin: 0 15rem;

    //.title__Box {
    //  background: #202023;
    //  width: 80%;
    //  text-align: left;
    //
    //  .title {
    //    font-size: 5rem;
    //    color: var(--tertiaryColor);
    //    padding: 2rem;
    //    z-index: 2;
    //  }
    //}

    .hero__describe {
      display: flex;
      flex-direction: column;
      justify-content: center;
      width: 50%;
      height: 100%;
      text-align: left;

      .hero__describe__welcome {
        font-size: 2rem;
        color: var(--firstColor);
      }

      .hero__describe__presentation {
        font-size: 5rem;
        font-weight: bold;
        color: var(--tertiaryColor);
        margin: 1.6rem 0 5rem;
        line-height: 1.2;
        //z-index: -1;

        .accent {
          color: var(--firstColor);
        }
      }

      .hero__button {
        background: var(--firstColor);
        color: white;
        width: fit-content;
        padding: 1.6rem 2.4rem;
        font-size: 2rem;
        border-radius: 5rem;
        z-index: 2;
        transition: all 0.2s ease;

        &:hover {
          background: var(--backgroundColor);
          border: 1px solid var(--firstColor);
          color: var(--firstColor);
        }
      }
    }

    .hero__box {
      display: flex;
      justify-content: flex-end;
      align-items: center;
      width: 50%;
      height: 100%;
      //position: relative;
      z-index: 2;

      //&::before {
      //  content: "";
      //  position: absolute;
      //  top: -3rem;
      //  right: 0;
      //  background: var(--firstColor);
      //  height: 90%;
      //  width: 57%;
      //  z-index: 0;
      //  border-radius: 0 0 0 10%;
      //}

      .hero__box--img {
        height: 100vh;
        position: absolute;
        transform: scaleX(-1);
        z-index: 0;
        bottom: 0;
        right: 0;
        filter: grayscale(1);
      }
    }
  }

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
        border: 2px solid var(--tertiaryColor);
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
          background-color: var(--firstColor);
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

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-end;

    .follow--text {
      font-size: 2rem;
      writing-mode: vertical-rl;
      text-orientation: mixed;
      color: var(--tertiaryColor);

      width: 3rem;
      display: flex;
      align-items: center;

      &::after {
        background-color: var(--tertiaryColor);
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
        color: var(--tertiaryColor);
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
        filter: var(--img);
      }
    }

    .hero__linkedin {
      display: flex;
      align-items: center;
      justify-content: flex-end;

      &::before {
        content: "LinkedIn";
        font-size: 1.6rem;
        color: var(--tertiaryColor);
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
        filter: var(--img);
      }
    }
  }
}
</style>
