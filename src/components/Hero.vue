<template>
  <section id="hero" class="container">
    <div class="hero">
      <h4 class="title">{{ $t("hero.title") }}</h4>
    </div>
    <div class="scrollDown">
      <a class="scrollDownIcon" href="#about"><span></span></a>
      <!--      <p>Scroll2</p>-->
    </div>
    <div class="follow">
      <p class="follow--text">{{ $t("hero.follow") }}</p>
      <a class="hero__github" href="https://github.com/Aubanyx"><img src="../assets/img/github.svg" alt="Logo Github"></a>
      <a class="hero__linkedin" href="https://www.linkedin.com/in/aubanlabie/"><img src="../assets/img/linkedin.svg" alt="Logo LinkedIn"></a>
    </div>
  </section>
</template>

<script>
export default {
  name: "Hero"
}
</script>

<style lang="scss" scoped>
.container {
  background: var(--secondaryColor);
  height: 100vh;
  width: 100%;
  position: relative;
  //z-index: -1;

  .hero {
    display: flex;
    flex-direction: column;
    justify-content: center;
    height: 100%;
    width: 100%;
    z-index: 2;

    .title {
      font-size: 5rem;
      color: var(--tertiaryColor);
      z-index: 2;
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
    margin-bottom: 3.7rem;
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
          content: '';
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
        transition: .2s ease;
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
        transition: .2s ease;
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
