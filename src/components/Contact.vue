<template>
  <section id="contact" class="container">
    <div class="contact__container">
      <div class="contact__container__boxForm">
        <h2 class="contact__title">{{ $t("contact.title") }}</h2>
        <div class="wrapper">
          <div class="contact__infos">
            <p class="contact__text">
              {{ $t("contact.intro") }}
            </p>
            <div class="contact__infos__box">
              <h5 class="contact__infos--h5">{{ $t("contact.details") }}</h5>
              <a
                v-magnetic="{ strength: 0.5, distance: 20 }"
                class="contact__infos--link"
                href="mailto:aubanlabie@gmail.com"
                >aubanlabie@gmail.com</a
              >
              <a
                v-magnetic="{ strength: 0.5, distance: 20 }"
                class="contact__infos--link"
                href="tel:+32474548414"
                >+32 4 74 54 84 14</a
              >
            </div>
            <div class="contact__infos__box">
              <h5 class="contact__infos--h5">{{ $t("contact.socials") }}</h5>
              <a
                v-magnetic="{ strength: 0.5, distance: 20 }"
                class="contact__infos--link"
                href="https://github.com/Aubanyx"
                >Github</a
              >
              <a
                v-magnetic="{ strength: 0.5, distance: 20 }"
                class="contact__infos--link"
                href="https://www.linkedin.com/in/aubanlabie/"
                >LinkedIn</a
              >
            </div>
          </div>
          <form
            class="contact__container__boxForm__form"
            action="https://formsubmit.co/aubanlabie@gmail.com"
            method="POST"
          >
            <input type="hidden" name="_captcha" value="false" />
            <label class="labelInputName" for="name">{{ $t("contact.name.question") }}</label>
            <input
              class="inputText"
              type="text"
              name="name"
              placeholder="John Doe *"
              required
            />
            <span class="inputSpan" />
            <label for="subject">{{ $t("contact.about.question") }}</label>
            <input
              type="text"
              name="subject"
              :placeholder="$t('contact.about.answer')"
              required
            />
            <label for="email">{{ $t("contact.email.question") }}</label>
            <input
              type="email"
              name="email"
              placeholder="John@doe.com *"
              required
            />
            <input
              type="hidden"
              name="_next"
              value="http://localhost:8080/#contact"
            />
            <label class="labelTextarea" for="message">{{ $t("contact.message.question") }}</label>
            <textarea
              :placeholder="$t('contact.message.answer')"
              name="message"
              rows="10"
              required
            ></textarea>
            <button
              v-magnetic="{ strength: 0.5, maxDistance: 40 }"
              class="contact__container__boxForm__form--button"
              type="submit"
            >
              <div class="buttonSend" v-magnetic>
                {{ $t("contact.send") }}
                <img
                  class="button--send"
                  src="../assets/img/icons/send.svg"
                  alt="icon send"
                />
              </div>
            </button>
          </form>
        </div>
      </div>
      <div class="contact__container__boxMap">
        <div class="contact__container__boxMap__map"></div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "ContactComponent",
  components: {},
};
</script>

<style lang="scss" scoped>
.container {
  max-width: 1920px;
  margin: auto;
  background: var(--color-background-primary);
  height: 100%;

  .contact__container {
    max-height: 1200px;
    display: flex;
    flex-direction: column;
    width: 100%;
    //height: 100vh;
    //padding: 0 4rem;

    .contact__container__boxForm {
      display: flex;
      flex-direction: column;
      justify-content: flex-start;
      align-items: center;
      overflow-y: hidden;
      padding: 10rem 5rem;

      .contact__title {
        @include Title;
      }

      .wrapper {
        display: flex;
        flex-direction: column;

        .contact__infos {
          margin-bottom: 5rem;
          text-align: left;

          .contact__text {
            font-size: 1.6rem;
            font-weight: 300;
            color: var(--color-text-tertiary);
            line-height: 1.2;
            margin-bottom: 5rem;
          }

          .contact__infos__box {
            margin-top: 3rem;

            &:first-of-type {
              margin-top: 0;
            }

            .contact__infos--h5 {
              font-size: 1rem;
              color: var(--color-text-secondary);
              text-transform: uppercase;
              //margin: 3rem 0 2rem;
            }

            .contact__infos--link {
              font-size: 1.6rem;
              color: var(--color-text-tertiary);
              margin-top: 2rem;
              margin-bottom: 1rem;
              padding-bottom: 1rem;
              width: fit-content;
              cursor: pointer;
              position: relative;

              &:last-of-type {
                margin-top: 0;
                margin-bottom: 0;
              }

              &::before {
                content: "";
                position: absolute;
                bottom: 0;
                left: 50%;
                width: 0;
                height: 1px;
                background: var(--tertiaryColor);
                transition: 0.3s ease;
              }

              &:hover::before {
                width: 100%;
                left: 0;
              }
            }
          }
        }

        .contact__container__boxForm__form {
          display: flex;
          flex-direction: column;
          width: 100%;
          margin-bottom: 5rem;

          .contact__container__boxForm__form__box {
            .contact__container__boxForm__form__box--subject {
              display: flex;
              flex-direction: column;
            }
            .contact__container__boxForm__form__box--email {
              display: flex;
              flex-direction: column;
            }
          }

          label {
            align-self: flex-start;
            color: var(--color-text-tertiary);
            font-size: 1.6rem;
            //padding-left: 3rem;
            margin-top: 3rem;
            margin-bottom: 2rem;

            &:first-of-type {
              margin-top: 0;
            }
          }

          input,
          textarea {
            font-family: "Inter", sans-serif;
            font-size: 1.6rem;
            width: 100%;
            border: none;
            background: var(--color-background-primary);
            //border-bottom: 2px solid var(--color-primary);
            border-bottom: 2px solid var(--color-background-tertiary);
            //padding-left: 3rem;
            padding-bottom: 2rem;
            outline: none;
            position: relative;
            transition: border 0.2s ease;

            &:focus {
              border-bottom: 2px solid var(--color-primary);
            }
          }

          //.inputSpan {
          //  position: relative;
          //}
          //
          //.inputText + .inputSpan::before {
          //  content: "";
          //  position: absolute;
          //  bottom: 1rem;
          //  right: 0;
          //  width: 0.2rem;
          //  height: 0;
          //  background: var(--firstColor);
          //  transition: 0.3s ease;
          //}
          //
          //.inputText + .inputSpan::after {
          //  content: "";
          //  position: absolute;
          //  bottom: 5rem;
          //  left: 0;
          //  width: 0;
          //  height: 0.2rem;
          //  background: var(--firstColor);
          //  transition: 0.3s ease;
          //}
          //
          //.inputText:focus + .inputSpan::after {
          //  width: 100%;
          //}
          //
          //.inputText:focus + .inputSpan::before {
          //  height: 4rem;
          //}

          textarea {
            height: 10rem;
            padding-top: 1rem;
            margin-bottom: 0;
          }

          .contact__container__boxForm__form--button {
            @include animationCircleHover;
            @include ButtonPrimary;
            cursor: pointer;
            align-self: flex-end;
            margin-top: 7rem;

            .buttonSend {
              display: flex;
              align-items: center;

              .button--send {
                filter: invert(1);
                margin-left: 1rem;
              }
            }
          }
        }
      }
    }

    .contact__container__boxMap {
      width: 100%;
      height: 100vw;

      .contact__container__boxMap__map {
        position: relative;
        background-image: url("../assets/img/map.jpg");
        background-size: cover;
        height: 100%;

        //.contact__container__boxMap__map--infos {
        //  position: absolute;
        //  background: #081217;
        //  color: white;
        //  width: fit-content;
        //  padding: 2rem;
        //  text-align: left;
        //  font-size: 1.5rem;
        //  bottom: 2rem;
        //  left: 2rem;
        //  line-height: 1.5rem;
        //  border: 2px solid var(--firstColor);
        //
        //  .prefix {
        //    color: var(--firstColor);
        //  }
        //}
      }
    }
  }
}

@media only screen and (min-width: 768px) {
  .container {
    .contact__container {
      .contact__container__boxForm {
        padding: 7rem;

        .wrapper {
          .contact__infos {
          }
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
    .contact__container {
      flex-direction: row;
      height: 100vh;
      //padding: 0;

      .contact__container__boxForm {
        //flex-direction: column;
        width: 70%;

        //.contact__title {
        //  @include Title;
        //}

        .wrapper {
          width: 100%;
          //display: flex;
          flex-direction: row-reverse;

          .contact__infos {
            width: 40%;
            padding-left: 7rem;
            margin-bottom: 0;

            .contact__text {
            }
          }

          .contact__container__boxForm__form {
            width: 60%;
            margin-bottom: 0;

            input,
            textarea,
            label {
              padding-left: 3rem;
            }
          }
        }
      }

      .contact__container__boxMap {
        width: 50%;
        height: 100%;
        //padding: 0;

        .contact__container__boxMap__map {
          height: 100%;

          //.contact__container__boxMap__map--infos {
          //  top: 2rem;
          //  bottom: unset;
          //}
        }
      }
    }
  }
}
</style>
