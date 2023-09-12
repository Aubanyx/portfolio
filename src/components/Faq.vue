<template>
  <section id="faq">
    <h3 class="faq__title">
      {{ $t("faq.intro") }}
    </h3>
    <ul class="faq__questionsWrapper">
      <li
        class="faq__question"
        v-for="(question, index) in translatedQuestions"
        :key="index"
      >
        <div
          class="faq__question--text"
          :class="{
            'faq__question--text--active': question.open,
          }"
          @click="toggleAnswer(index)"
        >
          {{ question.question }}
        </div>
        <transition
          @before-enter="beforeEnter"
          @enter="enter"
          @before-leave="beforeLeave"
          @leave="leave"
        >
          <div v-show="question.open" class="faq__answer">
            {{ question.answer }}
          </div>
        </transition>
      </li>
    </ul>
  </section>
</template>

<script>
export default {
  name: "FaqComponent",
  data() {
    return {
      questions: [
        {
          question: this.$i18n.t("faq.question01.question"),
          answer: this.$i18n.t("faq.question01.answer"),
          open: false,
        },
        {
          question: this.$i18n.t("faq.question02.question"),
          answer: this.$i18n.t("faq.question02.answer"),
          open: false,
        },
        {
          question: this.$i18n.t("faq.question03.question"),
          answer: this.$i18n.t("faq.question03.answer"),
          open: false,
        },
        {
          question: this.$i18n.t("faq.question04.question"),
          answer: this.$i18n.t("faq.question04.answer"),
          open: false,
        },
        {
          question: this.$i18n.t("faq.question05.question"),
          answer: this.$i18n.t("faq.question05.answer"),
          open: false,
        },
      ],
    };
  },
  mounted() {
    this.$gsap.registerPlugin(this.$ScrollTrigger);
    this.animateFaqElements();
  },
  computed: {
    translatedQuestions() {
      return this.questions.map((q, index) => {
        const questionKey = `faq.question${String(index + 1).padStart(
          2,
          "0"
        )}.question`;
        const answerKey = `faq.question${String(index + 1).padStart(
          2,
          "0"
        )}.answer`;

        return {
          ...q,
          question: this.$i18n.t(questionKey),
          answer: this.$i18n.t(answerKey),
        };
      });
    },
  },
  methods: {
    toggleAnswer(index) {
      this.questions.forEach((question, i) => {
        if (i === index) {
          question.open = !question.open;
        } else {
          question.open = false;
        }
      });
    },
    beforeEnter(el) {
      el.style.height = "0";
    },
    enter(el) {
      el.style.height = 30 + el.scrollHeight + "px";
    },
    beforeLeave(el) {
      el.style.height = 30 + el.scrollHeight + "px";
    },
    leave(el) {
      el.style.height = "0";
    },
    animateFaqElements() {
      // Animation pour le titre FAQ
      this.$gsap.from(".faq__title", {
        duration: 1.5,
        y: -50,
        opacity: 0,
        delay: 0.5,
        ease: "power2.out",
        scrollTrigger: {
          trigger: ".faq__title",
          start: "top 80%",
          end: "bottom 40%",
          toggleActions: "restart none none reverse",
        },
      });

      // Animation pour les questions
      const questions = document.querySelectorAll(".faq__question");

      questions.forEach((question) => {
        this.$gsap.from(question, {
          duration: 1,
          y: 30,
          opacity: 0,
          stagger: 0.2,
          ease: "power2.out",
          scrollTrigger: {
            trigger: question,
            start: "top 85%",
            end: "bottom 40%",
            toggleActions: "restart none none reverse",
          },
        });
      });

      // Notez que pour les réponses, nous avons déjà une animation de hauteur.
      // Si vous souhaitez ajouter une autre animation pour les réponses lorsqu'elles sont visibles, vous pouvez le faire de manière similaire à ce que nous avons fait pour les questions.
    },
  },
};
</script>

<style lang="scss" scoped>
#faq {
  max-width: 1920px;
  margin: auto;
  display: flex;
  flex-direction: column;
  background: var(--color-background-quinary);
  padding: 10rem 5rem;

  .faq__title {
    font-size: 2.5rem;
    line-height: 1.2;
    text-align: left;
    margin-bottom: 5rem;
    color: var(--color-text-tertiary);
  }

  .faq__questionsWrapper {
    .faq__question {
      text-align: left;
      border-bottom: 1px solid rgba(39, 39, 39, 0.25);
      font-size: 1.6rem;

      .faq__question--text {
        display: flex;
        position: relative;
        align-items: center;
        color: #808080;
        font-weight: bold;
        padding: 3rem 0 3rem 3rem;
        cursor: pointer;
        transition: all 0.2s ease;

        &::before {
          content: url("../assets/img/plus.svg");
          position: absolute;
          left: 0;
          width: 1.6rem;
          height: 1.6rem;
          filter: invert(29%) sepia(86%) saturate(2805%) hue-rotate(226deg)
            brightness(95%) contrast(92%);
        }

        &--active {
          color: var(--color-text-tertiary);

          &::before {
            content: url("../assets/img/minus.svg");
          }
        }
      }

      .faq__answer {
        overflow: hidden;
        transition: height 0.3s ease;
        height: 5rem;
        padding-left: 3rem;
        color: var(--color-text-tertiary);
        line-height: 1.2;
      }
    }

    .faq__question:last-of-type {
      border: none;
    }
  }
}
@media only screen and (min-width: 768px) {
}
@media only screen and (min-width: 1024px) {
  #faq {
    padding: 10rem 15rem;
  }
}
</style>
