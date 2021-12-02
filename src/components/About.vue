<template>
  <section id="about" class="container">

    <div class="about__box">
      <div class="about__img"><img class="about__img--img" src="../assets/img/photo.png" alt="picture"></div>
      <div class="about__box__numbers">
        <div class="about__box__numbers__text">
          <p class="about__box__numbers__text__number">01+</p>
          <p class="about__box__numbers__text__title">Années d'expériences</p>
        </div>
        <div class="about__box__numbers__text">
          <p class="about__box__numbers__text__number">01+</p>
          <p class="about__box__numbers__text__title">Projets complétés</p>
        </div>
        <div class="about__box__numbers__text">
          <p class="about__box__numbers__text__number">01+</p>
          <p class="about__box__numbers__text__title">test</p>
        </div>
      </div>
      <p class="about__box__description">Salut ! Je m'appelle Auban Labie, jeune belge de 27 ans, développeur web junior. J'habite Vottem dans la province de Liège. Mes hobbies sont évidemment la programmation, le fitness / la musculation et les jeu-vidéos. Motivé, proactif, toujours prêt à apprendre. Calme et réfléchi, je m'efforce de m'adapter à toutes situations. J'adore donner vie à la fois aux aspects techniques et visuels sur des produits numériques. L'expérience utilisateur est extrêmement importante à mes yeux.</p>
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
      <h2 class="about__infos__title">About me</h2>
      <h3 class="about__infos__subtitle">My introduction</h3>

      <p class="about__infos__description">Passionné par le développement web, j'ai eu l'honneur d'acquérir plusieurs expériences enrichissantes au IEPSCF Namur Cadets, où j'ai pu suivre un cursus exemplaire et sein de différents établissements tels que l’une formation sans égal chez BeCode, ce qui m'a permis d'amplifier mes connaissances et mes compétences liées au métier de développeur web.</p>

      <p class="about__infos__description">Mon expérience en tant qu'indépendant m'a appris à faire des choix et de me concentrer sur les priorités du moment. Chaque tâche doit être découpée et organisée afin d'optimiser son rendement. Tout comme dans une entreprise, le goal de la semaine via le sprint backlog est une compréhension capitale au sein de l’équipe pour produire la plus haute valeur ajoutée.</p>

      <a class="about__infos__btn" href="../assets/pdf/Labie_Auban_CV.pdf" download="">Download CV<img
          class="about__infos__btn__icon" src="../assets/img/download.svg" alt="Icône de téléchargement"></a>
    </div>

  </section>
</template>

<script>
export default {
  name: "About"
}
</script>

<style lang="scss" scoped>
.container {
  //background: red;
  //height: auto;
  height: 100vh;
  //padding: 10rem 0;
  display: flex;

  .about__box {
    width: 50%;
    background: $firstColor;
    padding: 10rem 0;
    padding-top: 0;
    //z-index: 0;

    .about__box__numbers {
      display: flex;
      justify-content: space-evenly;
      margin: 10rem 0;

      .about__box__numbers__text {
        display: flex;
        flex-direction: column;
        width: min-content;

        .about__box__numbers__text__number {
          font-size: 6rem;
          font-weight: bold;
          color: antiquewhite;
        }

        .about__box__numbers__text__title {
          font-size: 2rem;
          color: white;
          margin-top: 1rem;
        }
      }
    }

    .about__box__description {
      font-size: 1.7rem;
      line-height: normal;
      color: white;
      font-weight: 200;
      text-align: justify;
      padding: 0 10rem;
    }

    .about__img {
      //border: none;
      //position: relative;

      //&::before {
      //  content: "";
      //  background: $firstColor;
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
        transition: .2s ease;
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
    width: 50%;
    padding: 10rem;
    display: flex;
    flex-direction: column;
    //justify-content: center;
    align-items: center;

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
    }

    .about__infos__description:last-of-type {
      margin: 10rem 0;
    }

    .about__infos__btn {
      background: $firstColor;
      padding: 2rem;
      font-size: 1.5rem;
      font-weight: bold;
      color: white;
      border-radius: 0.8rem;
      display: flex;
      align-items: center;

      &:hover {
        background: $firstColorDark;
      }

      .about__infos__btn__icon {
        width: 3rem;
        padding-left: 1rem;
      }
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
  //        background: $firstColor;
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
  //        background: $firstColor;
  //        padding: 2rem;
  //        font-size: 1.5rem;
  //        font-weight: bold;
  //        color: white;
  //        border-radius: 0.8rem;
  //        display: flex;
  //        align-items: center;
  //
  //        &:hover {
  //          background: $firstColorDark;
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
    .about {
      .about__divInfo {
        flex-direction: row;

        .about__img {
          width: 40%;
          border-right: 2px solid #d25d5f;
          text-align: right;
          padding-right: 5rem;

          &::before {
            width: 20rem;
            height: 20rem;
            right: 7rem;
          }

          .about__img--img {
            margin-bottom: 0;
            width: 20rem;
          }
        }

        .about__info {
          width: 60%;
          align-items: flex-start;
          padding-left: 5rem;
          height: 25rem;
          justify-content: space-around;

          .about__info__description {
            padding: 0;
            text-align: left;
          }
        }
      }
    }
  }
}

@media only screen and (min-width: 1224px) {
  .container {
    .about {
      .about__divInfo {
        .about__img {
          &::before {
            width: 30rem;
            height: 30rem;
          }

          .about__img--img {
            width: 30rem;
          }
        }

        .about__info {
          .about__info__description {
            width: 70%;
          }
        }
      }
    }
  }
}
</style>
