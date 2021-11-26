<template>
  <section id="about" class="container">

    <div class="about__box">
      <div class="about__img"><img class="about__img--img" src="../assets/img/photo.png" alt="picture"></div>
      <p class="about__box__description">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus amet aperiam architecto beatae commodi consequuntur cupiditate dicta dignissimos dolorem earum eius eligendi eveniet ex excepturi explicabo, fuga illo ipsa ipsum minus modi numquam obcaecati odio omnis pariatur perspiciatis placeat quae quas quidem recusandae repellat suscipit totam velit vero voluptates voluptatibus!</p>

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

      <p class="about__infos__description">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus amet aperiam architecto beatae commodi consequuntur cupiditate dicta dignissimos dolorem earum eius eligendi eveniet ex excepturi explicabo, fuga illo ipsa ipsum minus modi numquam obcaecati odio omnis pariatur perspiciatis placeat quae quas quidem recusandae repellat suscipit totam velit vero voluptates voluptatibus!</p>

      <p class="about__infos__description">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus amet aperiam architecto beatae commodi consequuntur cupiditate dicta dignissimos dolorem earum eius eligendi eveniet ex excepturi explicabo, fuga illo ipsa ipsum minus modi numquam obcaecati odio omnis pariatur perspiciatis placeat quae quas quidem recusandae repellat suscipit totam velit vero voluptates voluptatibus!</p>

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
    //z-index: 0;

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

      .about__img--img {
        width: 30rem;
        margin-bottom: 3rem;
        border: 3px solid white;
        border-radius: 30% 5% 30% 5%;
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
