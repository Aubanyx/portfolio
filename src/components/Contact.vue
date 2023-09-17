<template>
  <section id="contact" class="contact">
    <div class="contact__content">
      <div class="contact__form-box">
        <h2 class="form-box__title">{{ $t("contact.title") }}</h2>
        <div class="form-box__wrapper">
          <div class="form-box__info">
            <p class="info__text">
              {{ $t("contact.intro") }}
            </p>
            <div class="info__details-box">
              <h5 class="details-box__heading">{{ $t("contact.details") }}</h5>
              <a
                v-magnetic="{ strength: 0.5, distance: 20 }"
                class="details-box__link"
                href="mailto:aubanlabie@gmail.com"
                >aubanlabie@gmail.com</a
              >
              <a
                v-magnetic="{ strength: 0.5, distance: 20 }"
                class="details-box__link"
                href="tel:+32474548414"
                >+32 4 74 54 84 14</a
              >
            </div>
            <div class="info__socials-box">
              <h5 class="socials-box__heading">{{ $t("contact.socials") }}</h5>
              <a
                v-magnetic="{ strength: 0.5, distance: 20 }"
                class="socials-box__link"
                href="https://github.com/Aubanyx"
                >Github</a
              >
              <a
                v-magnetic="{ strength: 0.5, distance: 20 }"
                class="socials-box__link"
                href="https://www.linkedin.com/in/aubanlabie/"
                >LinkedIn</a
              >
            </div>
          </div>
          <form
            class="form-box__form"
            action="https://formsubmit.co/aubanlabie@gmail.com"
            method="POST"
          >
            <input type="hidden" name="_captcha" value="false" />
            <label class="form__label-name" for="name">{{
              $t("contact.name.question")
            }}</label>
            <input
              class="form__input-text"
              type="text"
              name="name"
              placeholder="John Doe *"
              required
            />
            <span class="form__input-span" />
            <label for="subject">{{ $t("contact.about.question") }}</label>
            <input
              class="form__input-text"
              type="text"
              name="subject"
              :placeholder="$t('contact.about.answer')"
              required
            />
            <label for="email">{{ $t("contact.email.question") }}</label>
            <input
              class="form__input-email"
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
            <label class="form__label-textarea" for="message">{{
              $t("contact.message.question")
            }}</label>
            <textarea
              class="form__textarea"
              :placeholder="$t('contact.message.answer')"
              name="message"
              rows="10"
              required
            ></textarea>
            <button
              v-magnetic="{ strength: 0.5, maxDistance: 40 }"
              class="form__button"
              type="submit"
            >
              <div class="button__send" v-magnetic>
                {{ $t("contact.send") }}
                <img
                  class="send__icon"
                  src="../assets/img/icons/send.svg"
                  alt="icon send"
                />
              </div>
            </button>
          </form>
        </div>
      </div>
      <div class="contact__map-box">
        <div class="map-box__map"></div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "ContactComponent",
  components: {},
  mounted() {
    this.initScrollAnimations();

    const formElements = this.$el.querySelectorAll("input, textarea");
    formElements.forEach((el) => {
      el.addEventListener("focus", this.onFocus);
      el.addEventListener("blur", this.onBlur);
    });
  },
  beforeDestroy() {
    const formElements = this.$el.querySelectorAll("input, textarea");
    formElements.forEach((el) => {
      el.removeEventListener("focus", this.onFocus);
      el.removeEventListener("blur", this.onBlur);
    });
  },
  methods: {
    initScrollAnimations() {
      this.$gsap.registerPlugin(this.$ScrollTrigger);

      // Animation pour le titre
      this.$gsap.from(".form-box__title", {
        opacity: 0,
        y: 50,
        scrollTrigger: {
          trigger: ".form-box__title",
          start: "top 80%",
          end: "bottom 20%",
          toggleActions: "play none none reverse",
        },
      });

      // Animation pour le texte
      this.$gsap.from(".info__text", {
        opacity: 0,
        y: 50,
        stagger: 0.3,
        scrollTrigger: {
          trigger: ".info__text",
          start: "top 80%",
          end: "bottom 20%",
          toggleActions: "play none none reverse",
        },
      });

      // Animation pour les liens
      this.$gsap.from(".details-box__link", {
        opacity: 0,
        y: 50,
        stagger: 0.3,
        scrollTrigger: {
          trigger: ".details-box__link",
          start: "top 80%",
          end: "bottom 20%",
          toggleActions: "play none none reverse",
        },
      });

      this.$gsap.from(".socials-box__link", {
        opacity: 0,
        y: 50,
        stagger: 0.3,
        scrollTrigger: {
          trigger: ".socials-box__link",
          start: "top 80%",
          end: "bottom 20%",
          toggleActions: "play none none reverse",
        },
      });

      // Animation pour le label
      this.$gsap.from(".form__label-name", {
        opacity: 0,
        y: 50,
        scrollTrigger: {
          trigger: ".form__label-name",
          start: "top 80%",
          end: "bottom 20%",
          toggleActions: "play none none reverse",
        },
      });

      // Animation pour le bouton
      this.$gsap.from(".form__button", {
        opacity: 0,
        y: 50,
        scrollTrigger: {
          trigger: ".form__button",
          start: "top 100%",
          end: "bottom 20%",
          toggleActions: "play none none reverse",
        },
      });
    },
    onFocus(e) {
      this.$gsap.to(e.target, {
        scale: 1.05,
        borderColor: "var(--color-primary)",
        duration: 0.3,
      });
    },
    onBlur(e) {
      this.$gsap.to(e.target, {
        scale: 1,
        borderColor: "var(--color-background-tertiary)",
        duration: 0.3,
      });
    },
  },
};
</script>

<style lang="scss" scoped>
.contact {
  max-width: 1920px;
  margin: auto;
  background: var(--color-background-primary);
  height: 100%;

  &__content {
    max-height: fit-content;
    display: flex;
    flex-direction: column;
    width: 100%;

    .contact__form-box {
      display: flex;
      flex-direction: column;
      justify-content: flex-start;
      align-items: center;
      overflow: hidden;
      padding: 10rem 5rem;

      .form-box__title {
        @include Title;
      }

      .form-box__wrapper {
        display: flex;
        flex-direction: column;

        .form-box__info {
          margin-bottom: 5rem;
          text-align: left;

          .info__text {
            font-size: 1.6rem;
            font-weight: 300;
            color: var(--color-text-tertiary);
            line-height: 1.2;
            margin-bottom: 5rem;
          }

          .info__details-box,
          .info__socials-box {
            margin-top: 3rem;

            &:first-of-type {
              margin-top: 0;
            }

            .details-box__heading,
            .socials-box__heading {
              font-size: 1rem;
              color: var(--color-text-secondary);
              text-transform: uppercase;
            }

            .details-box__link,
            .socials-box__link {
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
                background: var(--color-background-quaternary);
                transition: 0.3s ease;
              }

              &:hover::before {
                width: 100%;
                left: 0;
              }
            }
          }
        }

        .form-box__form {
          display: flex;
          flex-direction: column;
          width: 100%;
          margin-bottom: 5rem;

          label {
            align-self: flex-start;
            color: var(--color-text-tertiary);
            font-size: 1.6rem;
            margin-top: 3rem;
            margin-bottom: 2rem;
            text-align: left;

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
            border-bottom: 2px solid var(--color-background-tertiary);
            padding-bottom: 2rem;
            outline: none;
            position: relative;
            transition: border 0.2s ease;

            &:focus {
              border-bottom: 2px solid var(--color-primary);
            }
          }

          textarea {
            height: 10rem;
            padding-top: 1rem;
            margin-bottom: 0;
          }

          .form__button {
            @include animationCircleHover;
            @include ButtonPrimary;
            cursor: pointer;
            align-self: flex-end;
            margin-top: 7rem;

            .button__send {
              display: flex;
              align-items: center;

              .send__icon {
                filter: invert(1);
                margin-left: 1rem;
              }
            }
          }
        }
      }
    }

    .contact__map-box {
      width: 100%;
      height: 100vw;

      .map-box__map {
        position: relative;
        background-image: url("../assets/img/map.webp");
        background-size: cover;
        height: 100%;
      }
    }
  }
}

@media only screen and (min-width: 768px) {
  .contact {
    &__content {
      .contact__form-box {
        padding: 7rem;
      }

      .contact__map-box {
        height: 60vw;
      }
    }
  }
}

@media only screen and (min-width: 1024px) {
  .contact {
    &__content {
      max-height: 1200px;
      flex-direction: row;
      height: 100vh;

      .contact__form-box {
        width: 90%;

        .form-box__wrapper {
          width: 100%;
          flex-direction: row-reverse;

          .form-box__info {
            width: 40%;
            padding-left: 7rem;
            margin-bottom: 0;
          }

          .form-box__form {
            width: 60%;
            margin-bottom: 0;

            input,
            textarea,
            label {
              padding-left: 3rem;
            }

            label {
              margin-top: 2rem;
              margin-bottom: 1rem;

              &:first-of-type {
                margin-top: 0;
              }
            }
          }
        }
      }

      .contact__map-box {
        width: 50%;
        height: 100%;

        .map-box__map {
          height: 100%;
        }
      }
    }
  }
}
@media only screen and (min-width: 1280px) {
  .contact {
    &__content {
      .contact__form-box {
        width: 70%;

        .form-box__wrapper {
          .form-box__form {

            label {
              margin-top: 3rem;
              margin-bottom: 2rem;

              &:first-of-type {
                margin-top: 0;
              }
            }
          }
        }
      }
    }
  }
}
</style>
