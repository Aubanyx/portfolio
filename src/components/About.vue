<template>
  <section id="about" class="container">
    <div class="about__box">
      <div class="about__img">
        <img
          class="about__img--img"
          src="../assets/img/photo.png"
          alt="picture"
        />
      </div>
      <div class="about__box__numbers">
        <div class="about__box__numbers__text">
          <p class="about__box__numbers__text__number">01+</p>
          <p class="about__box__numbers__text__title">
            {{ $t("about.years") }}
          </p>
        </div>
        <div class="about__box__numbers__text">
          <p class="about__box__numbers__text__number">01+</p>
          <p class="about__box__numbers__text__title">
            {{ $t("about.completed") }}
          </p>
        </div>
        <div class="about__box__numbers__text">
          <p class="about__box__numbers__text__number">99+</p>
          <p class="about__box__numbers__text__title">
            {{ $t("about.coffees") }}
          </p>
        </div>
<!--        <img-->
<!--          class="badgr"-->
<!--          src="https://api.badgr.io/public/assertions/W4Cb_jwhRXKr3RtHnyrkaw/image"-->
<!--          alt="Change Enthusiast"-->
<!--        />-->
<!--        <img-->
<!--          class="badgr"-->
<!--          src="https://api.badgr.io/public/assertions/1ivBwIkpQcSl3LzWXdz0nQ/image"-->
<!--          alt="Solution-Oriented"-->
<!--        />-->
<!--        <img-->
<!--          class="badgr"-->
<!--          src="https://api.badgr.io/public/assertions/9Jx_NeJVTRCTf1n-ny_KFw/image"-->
<!--          alt="Continuous Learner"-->
<!--        />-->
<!--        <img-->
<!--          class="badgr"-->
<!--          src="https://api.badgr.io/public/assertions/KTYONKedTOqIXwiqolImcg/image"-->
<!--          alt="Team player"-->
<!--        />-->
      </div>
      <p class="about__box__description">{{ $t("about.description01") }}</p>
      <!--      <div class="about__divInfo">-->
      <!--        <div class="about__info">-->
      <!--          <p class="about__info__description">Web developer, with extensive knowledge and years of experience, working-->
      <!--            in web technologies and Ui / Ux design, delivering quality work.</p>-->
      <!--          <a class="about__info__btn" href="../assets/pdf/Labie_Auban_CV.pdf" download="">Download CV<img-->
      <!--              class="about__info__btn__icon" src="../assets/img/download.svg" alt="Icône de téléchargement"></a>-->
      <!--        </div>-->
      <!--      </div>-->
    </div>

    <div class="about__infos">
      <h2 class="about__infos__title">{{ $t("about.title") }}</h2>
      <h3 class="about__infos__subtitle">{{ $t("about.subtitle") }}</h3>

      <p class="about__infos__description">{{ $t("about.description01") }}</p>

      <p class="about__infos__description">{{ $t("about.description02") }}</p>

      <p class="about__infos__description">{{ $t("about.description03") }}</p>

      <a
        class="about__infos__btn btnGlitch"
        href="../assets/pdf/Labie_Auban_CV.pdf"
        download=""
        >{{ $t("about.download")
        }}<span aria-hidden class="btnGlitchGlitch"
          >{{ $t("about.download") }} </span
        ><span aria-hidden class="btnGlitchGlitchTag">R25</span>
        <!--        <img-->
        <!--          class="about__infos__btn__icon"-->
        <!--          src="../assets/img/download.svg"-->
        <!--          alt="Icône de téléchargement"-->
        <!--      />-->
      </a>
    </div>
  </section>
</template>

<script>
export default {
  name: "AboutComponent",
};
</script>

<style lang="scss" scoped>
.container {
  //background: red;
  //height: auto;
  //height: 100vh;
  //padding: 10rem 0;
  display: flex;
  flex-direction: column;

  .about__box {
    width: 100%;
    background: var(--firstColor);
    //padding: 10rem 0;
    //padding-top: 0;
    padding-bottom: 10rem;
    //z-index: 0;

    .about__box__numbers {
      display: flex;
      justify-content: space-between;
      margin: 5rem 10rem;
      flex-direction: column;
      align-items: center;

      .about__box__numbers__text {
        display: flex;
        flex-direction: column;
        width: min-content;

        &:nth-child(2) {
          padding: 2rem 0;
        }

        .about__box__numbers__text__number {
          font-size: 6rem;
          font-weight: bold;
          color: var(--secondaryColor);
        }

        .about__box__numbers__text__title {
          font-size: 2rem;
          color: var(--quaternaryColor);
          margin-top: 1rem;
        }
      }
    }

    .about__box__description {
      font-size: 1.7rem;
      line-height: normal;
      color: var(--quaternaryColor);
      font-weight: 200;
      text-align: justify;
      padding: 0 10rem;
    }

    .about__img {
      //border: none;
      //position: relative;

      //&::before {
      //  content: "";
      //  background: var(--firstColor);
      //  width: 30rem;
      //  height: 30rem;
      //  border-radius: 30% 5% 30% 5%;
      //  position: absolute;
      //  top: -2rem;
      //  right: 2rem;
      //  z-index: -1;
      //}
      //&::after {
      //  content: "";
      //  position: absolute;
      //  height: 100%;
      //  width: 100%;
      //  background-color: aqua;
      //  background-blend-mode: difference;
      //  mix-blend-mode: multiply;
      //  z-index: 999;
      //}

      .about__img--img {
        //width: 30rem;
        width: 100%;
        height: 40rem;
        object-fit: cover;
        position: relative;
        filter: grayscale(1);
        transition: 0.2s ease;
        //margin-bottom: 3rem;
        //border: 3px solid white;
        //border-radius: 30% 5% 30% 5%;

        &:hover {
          filter: grayscale(0);
        }
      }
    }
  }

  .about__infos {
    width: 100%;
    padding: 10rem 10rem;
    display: flex;
    flex-direction: column;
    //justify-content: center;
    align-items: center;
    background: var(--backgroundColor);
    z-index: 0;

    .about__infos__title {
      //font-size: 3rem;
      //font-weight: bold;
      @include Title;
      margin-bottom: 1rem;
    }

    .about__infos__subtitle {
      //font-size: 2rem;
      //font-weight: 100;
      @include Subtitle;
      margin-bottom: 10rem;
    }

    .about__infos__description {
      @include Text;
      font-weight: 200;
      text-align: justify;

      &:nth-of-type(2) {
        margin: 5rem 0;
      }
    }

    .about__infos__description:last-of-type {
      margin-bottom: 10rem;
    }

    //.about__infos__btn {
    //  background: var(--firstColor);
    //  padding: 2rem;
    //  font-size: 1.5rem;
    //  font-weight: bold;
    //  color: var(--quaternaryColor);
    //  border-radius: 0.8rem;
    //  display: flex;
    //  align-items: center;
    //
    //  &:hover {
    //    background: var(--firstColor);
    //  }
    //
    //  .about__infos__btn__icon {
    //    width: 3rem;
    //    padding-left: 1rem;
    //  }
    //}

    .btnGlitch {
      //--primary: hsl(0, 85%, calc(50 * 1%));
      //--shadow-primary: hsl(180, 90%, 50%);
      //--primary-hue: 0;
      //--primary-lightness: 50;
      //--color: hsl(0, 0%, 100%);
      //--font-size: 26px;
      //--shadow-primary-hue: 180;
      //--label-size: 9px;
      //--shadow-secondary-hue: 60;
      //--shadow-secondary: hsl(60, 90%, 60%);
      //--clip: polygon(0 0, 100% 0, 100% 100%, 95% 100%, 95% 90%, 85% 90%, 85% 100%, 8% 100%, 0 70%);
      //--border: 4px;
      //--shimmy-distance: 5;
      //--clip-one: polygon(0 2%, 100% 2%, 100% 95%, 95% 95%, 95% 90%, 85% 90%, 85% 95%, 8% 95%, 0 70%);
      //--clip-two: polygon(0 78%, 100% 78%, 100% 100%, 95% 100%, 95% 90%, 85% 90%, 85% 100%, 8% 100%, 0 78%);
      //--clip-three: polygon(0 44%, 100% 44%, 100% 54%, 95% 54%, 95% 54%, 85% 54%, 85% 54%, 8% 54%, 0 54%);
      //--clip-four: polygon(0 0, 100% 0, 100% 0, 95% 0, 95% 0, 85% 0, 85% 0, 8% 0, 0 0);
      //--clip-five: polygon(0 0, 100% 0, 100% 0, 95% 0, 95% 0, 85% 0, 85% 0, 8% 0, 0 0);
      //--clip-six: polygon(0 40%, 100% 40%, 100% 85%, 95% 85%, 95% 85%, 85% 85%, 85% 85%, 8% 85%, 0 70%);
      //--clip-seven: polygon(0 63%, 100% 63%, 100% 80%, 95% 80%, 95% 80%, 85% 80%, 85% 80%, 8% 80%, 0 70%);
      //font-family: 'Cyber', sans-serif;

      color: var(--quaternaryColor);
      background: transparent;
      text-transform: uppercase;
      font-size: 26px;
      outline: transparent;
      letter-spacing: 2px;
      position: relative;
      font-weight: 700;
      border: 0;
      min-width: 300px;
      height: 75px;
      line-height: 75px;

      &::after,
      &::before {
        content: "";
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        clip-path: polygon(
          0 0,
          100% 0,
          100% 100%,
          95% 100%,
          95% 90%,
          85% 90%,
          85% 100%,
          8% 100%,
          0 70%
        );
        z-index: -1;
      }

      &::before {
        background: var(--secondaryColor);
        transform: translate(4px, 0);
      }

      &::after {
        background: var(--firstColor);
      }

      .btnGlitchGlitch {
        position: absolute;
        top: calc(4px * -1);
        left: calc(4px * -1);
        right: calc(4px * -1);
        bottom: calc(4px * -1);
        background: var(--secondaryColor);
        text-shadow: 2px 2px var(--secondaryColor),
          -2px -2px var(--backgroundColor);
        clip-path: polygon(
          0 0,
          100% 0,
          100% 100%,
          95% 100%,
          95% 90%,
          85% 90%,
          85% 100%,
          8% 100%,
          0 70%
        );
        animation: glitch 2s infinite;
        display: none;

        &::before {
          content: "";
          position: absolute;
          top: calc(4px * 1);
          right: calc(4px * 1);
          bottom: calc(4px * 1);
          left: calc(4px * 1);
          clip-path: polygon(
            0 0,
            100% 0,
            100% 100%,
            95% 100%,
            95% 90%,
            85% 90%,
            85% 100%,
            8% 100%,
            0 70%
          );
          background: var(--firstColor);
          z-index: -1;
        }
      }
      .btnGlitchGlitchTag {
        position: absolute;
        padding: 1px 4px;
        letter-spacing: 1px;
        line-height: 1;
        bottom: -5%;
        right: 5%;
        color: var(--tertiaryColor);
        font-size: 9px;
      }
    }
    .btnGlitch:hover .btnGlitchGlitch {
      display: block;
    }
  }

  @keyframes glitch {
    0% {
      clip-path: polygon(
        0 2%,
        100% 2%,
        100% 95%,
        95% 95%,
        95% 90%,
        85% 90%,
        85% 95%,
        8% 95%,
        0 70%
      );
    }
    2%,
    8% {
      clip-path: polygon(
        0 78%,
        100% 78%,
        100% 100%,
        95% 100%,
        95% 90%,
        85% 90%,
        85% 100%,
        8% 100%,
        0 78%
      );
      transform: translate(calc(5 * -1%), 0);
    }
    6% {
      clip-path: polygon(
        0 78%,
        100% 78%,
        100% 100%,
        95% 100%,
        95% 90%,
        85% 90%,
        85% 100%,
        8% 100%,
        0 78%
      );
      transform: translate(calc(5 * 1%), 0);
    }
    9% {
      clip-path: polygon(
        0 78%,
        100% 78%,
        100% 100%,
        95% 100%,
        95% 90%,
        85% 90%,
        85% 100%,
        8% 100%,
        0 78%
      );
      transform: translate(0, 0);
    }
    10% {
      clip-path: polygon(
        0 44%,
        100% 44%,
        100% 54%,
        95% 54%,
        95% 54%,
        85% 54%,
        85% 54%,
        8% 54%,
        0 54%
      );
      transform: translate(calc(5 * 1%), 0);
    }
    13% {
      clip-path: polygon(
        0 44%,
        100% 44%,
        100% 54%,
        95% 54%,
        95% 54%,
        85% 54%,
        85% 54%,
        8% 54%,
        0 54%
      );
      transform: translate(0, 0);
    }
    14%,
    21% {
      clip-path: polygon(
        0 0,
        100% 0,
        100% 0,
        95% 0,
        95% 0,
        85% 0,
        85% 0,
        8% 0,
        0 0
      );
      transform: translate(calc(5 * 1%), 0);
    }
    25% {
      clip-path: polygon(
        0 0,
        100% 0,
        100% 0,
        95% 0,
        95% 0,
        85% 0,
        85% 0,
        8% 0,
        0 0
      );
      transform: translate(calc(5 * 1%), 0);
    }
    30% {
      clip-path: polygon(
        0 0,
        100% 0,
        100% 0,
        95% 0,
        95% 0,
        85% 0,
        85% 0,
        8% 0,
        0 0
      );
      transform: translate(calc(5 * -1%), 0);
    }
    35%,
    45% {
      clip-path: polygon(
        0 40%,
        100% 40%,
        100% 85%,
        95% 85%,
        95% 85%,
        85% 85%,
        85% 85%,
        8% 85%,
        0 70%
      );
      transform: translate(calc(5 * -1%));
    }
    40% {
      clip-path: polygon(
        0 40%,
        100% 40%,
        100% 85%,
        95% 85%,
        95% 85%,
        85% 85%,
        85% 85%,
        8% 85%,
        0 70%
      );
      transform: translate(calc(5 * 1%));
    }
    50% {
      clip-path: polygon(
        0 40%,
        100% 40%,
        100% 85%,
        95% 85%,
        95% 85%,
        85% 85%,
        85% 85%,
        8% 85%,
        0 70%
      );
      transform: translate(0, 0);
    }
    55% {
      clip-path: polygon(
        0 63%,
        100% 63%,
        100% 80%,
        95% 80%,
        95% 80%,
        85% 80%,
        85% 80%,
        8% 80%,
        0 70%
      );
      transform: translate(calc(5 * 1%), 0);
    }
    60% {
      clip-path: polygon(
        0 63%,
        100% 63%,
        100% 80%,
        95% 80%,
        95% 80%,
        85% 80%,
        85% 80%,
        8% 80%,
        0 70%
      );
      transform: translate(0, 0);
    }
    31%,
    61%,
    100% {
      clip-path: polygon(
        0 0,
        100% 0,
        100% 0,
        95% 0,
        95% 0,
        85% 0,
        85% 0,
        8% 0,
        0 0
      );
    }
  }
  //.about {
  //  //background: yellow;
  //  //margin: 10rem 0;
  //  display: flex;
  //  flex-direction: column;
  //  align-items: center;

  //.about__title {
  //  //font-size: 3rem;
  //  //font-weight: bold;
  //  @include Title;
  //  margin-bottom: 1rem;
  //}
  //
  //.about__subtitle {
  //  //font-size: 2rem;
  //  //font-weight: 100;
  //  @include Subtitle;
  //  margin-bottom: 10rem;
  //}

  //  .about__divInfo {
  //    display: flex;
  //    flex-direction: column;
  //    align-items: center;
  //
  //    .about__img {
  //      border: none;
  //      position: relative;
  //
  //      &::before {
  //        content: "";
  //        background: var(--firstColor);
  //        width: 30rem;
  //        height: 30rem;
  //        border-radius: 30% 5% 30% 5%;
  //        position: absolute;
  //        top: -2rem;
  //        right: 2rem;
  //        z-index: -1;
  //      }
  //
  //      .about__img--img {
  //        width: 30rem;
  //        margin-bottom: 3rem;
  //        border: 3px solid white;
  //        border-radius: 30% 5% 30% 5%;
  //      }
  //    }
  //
  //    .about__info {
  //      display: flex;
  //      flex-direction: column;
  //      align-items: center;
  //
  //      .about__info__description {
  //        //font-size: 1.7rem;
  //        //line-height: normal;
  //        @include Text;
  //        padding: 0 3rem 3.5rem;
  //      }
  //
  //      .about__info__btn {
  //        background: var(--firstColor);
  //        padding: 2rem;
  //        font-size: 1.5rem;
  //        font-weight: bold;
  //        color: white;
  //        border-radius: 0.8rem;
  //        display: flex;
  //        align-items: center;
  //
  //        &:hover {
  //          background: var(--firstColor)Dark;
  //        }
  //
  //        .about__info__btn__icon {
  //          width: 3rem;
  //          padding-left: 1rem;
  //        }
  //      }
  //    }
  //  }
  //}
}

@media only screen and (min-width: 768px) {
  .container {
    .about__box {
      .about__box__numbers {
        flex-direction: row;
      }
    }
    //.about {
    //  .about__divInfo {
    //    flex-direction: row;
    //
    //    .about__img {
    //      width: 40%;
    //      border-right: 2px solid #d25d5f;
    //      text-align: right;
    //      padding-right: 5rem;
    //
    //      &::before {
    //        width: 20rem;
    //        height: 20rem;
    //        right: 7rem;
    //      }
    //
    //      .about__img--img {
    //        margin-bottom: 0;
    //        width: 20rem;
    //      }
    //    }
    //
    //    .about__info {
    //      width: 60%;
    //      align-items: flex-start;
    //      padding-left: 5rem;
    //      height: 25rem;
    //      justify-content: space-around;
    //
    //      .about__info__description {
    //        padding: 0;
    //        text-align: left;
    //      }
    //    }
    //  }
    //}
  }
}

@media only screen and (min-width: 1024px) {
  .container {
    flex-direction: row;
    //height: 100vh;
    //height: 100%;
    height: 100vh;

    .about__box {
      width: 50%;
    }

    .about__infos {
      width: 50%;
    }
    //.about {
    //  .about__divInfo {
    //    .about__img {
    //      &::before {
    //        width: 30rem;
    //        height: 30rem;
    //      }
    //
    //      .about__img--img {
    //        width: 30rem;
    //      }
    //    }
    //
    //    .about__info {
    //      .about__info__description {
    //        width: 70%;
    //      }
    //    }
    //  }
    //}
  }
}
</style>
