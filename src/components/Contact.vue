<template>
  <section id="contact" class="container">
    <!--    <h2 class="contact__title">Contact</h2>-->
    <!--    <h3 class="contact__subtitle">Contact me</h3>-->
    <div class="contact__container">
      <div class="contact__container__boxForm">
        <h2 class="contact__title">Contact</h2>
        <h3 class="contact__subtitle">Contact me</h3>
        <form
          class="contact__container__boxForm__form"
          action="https://formsubmit.co/aubanlabie@gmail.com"
          method="POST"
        >
          <input type="hidden" name="_captcha" value="false" />
          <input
            class="inputText"
            type="text"
            name="name"
            placeholder="Name"
            required
          />
          <span class="inputSpan" />
          <div class="contact__container__boxForm__form__box">
            <input type="text" name="subject" placeholder="Subject" required />
            <input type="email" name="email" placeholder="Email" required />
          </div>
          <input
            type="hidden"
            name="_next"
            value="http://localhost:8080/#contact"
          />
          <textarea
            placeholder="Message"
            name="message"
            rows="10"
            required
          ></textarea>
          <button
            class="contact__container__boxForm__form--button"
            type="submit"
          >
            Send message
          </button>
        </form>
        <FooterComponent class="footer" />
      </div>
      <div class="contact__container__boxMap">
        <div class="contact__container__boxMap__map">
          <p class="contact__container__boxMap__map--infos">
            LABIE Auban<br />
            Rue de Liège<br />
            4041 Vottem<br />
            <br />
            <span>
              <span class="prefix">@</span>
              : aubanlabie@gmail.com
            </span>
            <br />
            <br />
            <span class="prefix">☎</span>
            <span> : 0474/54.84.14</span>
          </p>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import FooterComponent from "@/components/Footer.vue";

export default {
  name: "ContactComponent",
  components: {
    // HelloWorld,
    FooterComponent,
  },
};
</script>

<style lang="scss" scoped>
.container {
  background: var(--backgroundColor);
  height: 100%;
  padding-top: 10rem;

  .contact__container {
    display: flex;
    flex-direction: column;
    width: 100%;
    //height: 100vh;
    padding: 0 4rem;

    .contact__container__boxForm {
      //width: 50%;
      //background: green;
      display: flex;
      flex-direction: column;
      justify-content: flex-end;
      align-items: center;
      overflow-y: hidden;

      .contact__title {
        @include Title;
        margin-bottom: 1rem;
      }

      .contact__subtitle {
        @include Subtitle;
        margin-bottom: 10rem;
      }

      .contact__container__boxForm__form {
        display: flex;
        flex-direction: column;
        //align-items: center;
        width: 100%;
        margin-bottom: 5rem;

        input,
        textarea {
          font-family: "Sora", sans-serif;
          height: 4rem;
          width: 100%;
          border: none;
          border-left: 0.2rem solid var(--firstColor);
          border-bottom: 0.2rem solid var(--firstColor);
          margin: 1rem 0;
          padding-left: 1rem;
          background: var(--backgroundInput);
          outline: none;
          position: relative;

          //&:focus {
          //  background: red;
          //}

          //&:focus::after {
          //  width: 100%;
          //}
          //
          //&::after {
          //  content: "";
          //  position: absolute;
          //  top: 0;
          //  left: 0;
          //  width: 0;
          //  height: 2px;
          //  background: var(--firstColor);
          //  transition: 0.3s ease;
          //}
        }

        //.inputText {
        //
        //}

        .inputSpan {
          position: relative;
        }

        .inputText + .inputSpan::before {
          content: "";
          position: absolute;
          bottom: 1rem;
          right: 0;
          width: 0.2rem;
          height: 0;
          background: var(--firstColor);
          transition: 0.3s ease;
        }

        .inputText + .inputSpan::after {
          content: "";
          position: absolute;
          bottom: 5rem;
          left: 0;
          width: 0;
          height: 0.2rem;
          background: var(--firstColor);
          transition: 0.3s ease;
        }

        .inputText:focus + .inputSpan::after {
          width: 100%;
        }

        .inputText:focus + .inputSpan::before {
          height: 4rem;
        }

        textarea {
          height: 15rem;
          padding-top: 1rem;
        }

        .contact__container__boxForm__form--button {
          background: var(--backgroundColor);
          padding: 1.5rem 2rem;
          font-size: 1.5rem;
          font-weight: bold;
          color: var(--firstColor);
          //border-left: 2px solid var(--firstColor);
          border: 2px solid var(--firstColor);
          //border-radius: 0.8rem;
          display: flex;
          align-items: center;
          align-self: flex-end;
          cursor: pointer;
          transition: 0.2s ease;

          &:hover {
            background: var(--firstColor);
            color: var(--quaternaryColor);
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
      width: 100%;
      height: 100vw;
      //padding: 1rem;

      .contact__container__boxMap__map {
        position: relative;
        background-image: url("../assets/img/map.png");
        background-size: cover;
        height: 100%;

        .contact__container__boxMap__map--infos {
          position: absolute;
          background: #081217;
          color: white;
          width: fit-content;
          padding: 2rem;
          text-align: left;
          font-size: 1.5rem;
          bottom: 2rem;
          left: 2rem;
          line-height: 1.5rem;
          border: 2px solid var(--firstColor);

          .prefix {
            color: var(--firstColor);
          }
        }
      }
    }
  }
}

@media only screen and (min-width: 768px) {
  .container {
    .contact__container {
      .contact__container__boxForm {
        .contact__container__boxForm__form {
          .contact__container__boxForm__form__box {
            display: flex;
            justify-content: space-between;
            width: 100%;

            input {
              width: 49%;
            }
          }
        }
      }

      .contact__container__boxMap {
        height: 60vw;

        .contact__container__boxMap__map {
        }
      }
    }
  }
}

@media only screen and (min-width: 1024px) {
  .container {
    padding-top: 0;

    .contact__container {
      flex-direction: row;
      height: 100vh;
      padding: 0;

      .contact__container__boxForm {
        //flex-direction: column;
        width: 50%;

        .contact__container__boxForm__form {
          padding: 0 4rem;
          margin-bottom: 0;

          .contact__container__boxForm__form__box {
            //display: flex;
            //justify-content: space-between;
            //width: 100%;

            input {
              //width: 40%;
            }
          }
        }
      }

      .contact__container__boxMap {
        width: 50%;
        height: 100%;
        padding: 0;

        .contact__container__boxMap__map {
          height: 100%;

          .contact__container__boxMap__map--infos {
            top: 2rem;
            bottom: unset;
          }
        }
      }
    }
  }
}
</style>
