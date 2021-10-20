<template>
  <section id="contact" class="container">
    <h2 class="contact__title">Contact</h2>
    <h3 class="contact__subtitle">Most information</h3>
    <div class="contact__container">
      <div class="contact__container__boxForm">
        <form class="contact__container__boxForm__form" action="https://formsubmit.co/aubanlabie@gmail.com" method="POST">
          <input type="hidden" name="_captcha" value="false">
          <input type="text" name="name" placeholder="Name" required>
          <div class="contact__container__boxForm__form__box">
            <input type="text" name="subject" placeholder="Subject" required>
            <input type="email" name="email" placeholder="Email" required>
          </div>
          <input type="hidden" name="_next" value="http://localhost:8080/#contact">
          <textarea placeholder="Message" name="message" rows="10" required></textarea>
          <button class="contact__container__boxForm__form--button" type="submit">Send</button>
        </form>
      </div>
      <div class="contact__container__boxMap">
        <div class="contact__container__boxMap__map">test</div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "Contact"
}
</script>

<style lang="scss" scoped>
.container {
  //background: brown;
  height: 100%;
  padding-top: 10rem;

  .contact__title {
    @include Title;
    margin-bottom: 1rem;  }

  .contact__subtitle {
    @include Subtitle;
    margin-bottom: 10rem;
  }

  .contact__container {
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 100vh;

    .contact__container__boxForm {
      //width: 50%;
      //background: green;
      display: flex;
      justify-content: center;
      align-items: center;

      .contact__container__boxForm__form {
        display: flex;
        flex-direction: column;
        //align-items: center;
        width: 80%;
        margin-bottom: 5rem;

        input, textarea {
          font-family: 'Sora', sans-serif;
          height: 4rem;
          width: 100%;
          border: none;
          border-left: 2px solid #d25d5f;
          border-bottom: 2px solid #d25d5f;
          margin: 1rem 0;
          padding-left: 1rem;
          background: #fcfcfc;
        }

        textarea {
          height: 15rem;
          padding-top: 1rem;
        }

        .contact__container__boxForm__form--button {
          background: white;
          padding: 1.5rem 2rem;
          font-size: 1.5rem;
          font-weight: bold;
          color: $firstColor;
          //border-left: 2px solid $firstColor;
          border: 2px solid $firstColor;
          //border-radius: 0.8rem;
          display: flex;
          align-items: center;
          align-self: flex-end;

          &:hover {
            background: $firstColorExtraLight;
          }
        }

        //.contact__container__boxForm__form__box {
        //  display: flex;
        //  justify-content: space-between;
        //  width: 100%;
        //
        //  input {
        //    width: 40%;
        //  }
        //}
      }
    }
    .contact__container__boxMap {
      //width: 50%;
      //background: orange;
      width: 100vw;
      height: 100vw;
      padding: 1rem;

      .contact__container__boxMap__map {
        background-image: url("../assets/img/map.png");
        background-size: cover;
        height: 100%;
      }
    }
  }
}

@media only screen and (min-width: 768px) {

}

@media only screen and (min-width: 1024px) {
  .container {

    .contact__container {
      flex-direction: row;

      .contact__container__boxForm {
        width: 50%;

        .contact__container__boxForm__form {
          margin-bottom: 0;

          .contact__container__boxForm__form__box {
            display: flex;
            justify-content: space-between;
            width: 100%;

            input {
              width: 40%;
            }
          }
        }
      }
      .contact__container__boxMap {
        width: 50%;
        padding: 0;

        .contact__container__boxMap__map {
          height: 100%;
        }
      }
    }
  }
}
</style>
