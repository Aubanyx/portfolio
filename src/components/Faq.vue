<template>
  <section id="faq">
    <h3 class="faq__title">
      {{ $t("faq.intro") }}
    </h3>
    <ul class="faq__questionsWrapper">
      <li
        class="faq__question"
        v-for="(question, index) in questions"
        :key="index"
      >
        <div
          class="faq__question--text"
          :class="{
            'faq__question--text--active': question.open,
          }"
          @click="toggleAnswer(index)"
        >
          {{ question.title }}
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
          title: "Suis-je ouvert à de nouvelles possibilitées professionnelle ?",
          answer: "Oui, je suis à l'écoute à de nouvelles possibilitées",
          open: false,
        },
        {
          title: "Quels sont vos outils de développement web préférés ? Pourquoi les utilisez-vous ?",
          answer: "Réponse 2",
          open: false,
        },
        {
          title: "Comment abordez-vous la résolution de problèmes lors de la construction d'un site web ou d'une application ?",
          answer: "Réponse 3",
          open: false,
        },
        {
          title: "Comment collaborez-vous avec d'autres développeurs et membres de l'équipe pour garantir le succès d'un projet de développement web ?",
          answer: "Réponse 4",
          open: false,
        },
        {
          title: "Combien de cafés est-ce que je bois ?",
          answer: "Erreur.",
          open: false,
        },
      ],
    };
  },
  methods: {
    toggleAnswer(index) {
      // this.questions[index].open = !this.questions[index].open;

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
      // el.addEventListener("transitionend", done);
    },
    beforeLeave(el) {
      el.style.height = 30 + el.scrollHeight + "px";
    },
    leave(el) {
      el.style.height = "0";
      // el.addEventListener("transitionend", done);
    },
  },
};
</script>

<style lang="scss" scoped>
//.slide-enter-active,
//.slide-leave-active {
//  transition: all 0.3s ease;
//}
//
//.slide-enter,
//.slide-leave-to {
//  opacity: 0;
//  transform: translateY(-2rem);
//}

#faq {
  max-width: 1920px;
  margin: auto;
  display: flex;
  flex-direction: column;
  //background: #f3f2f1;
  background: var(--color-background-quinary);
  //height: 100vh;
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
      //margin: 5rem 0;
      text-align: left;
      border-bottom: 1px solid rgba(39, 39, 39, 0.25);
      font-size: 1.6rem;
      //transition: all 0.2s ease;

      .faq__question--text {
        display: flex;
        position: relative;
        //justify-content: space-between;
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
          filter: invert(29%) sepia(86%) saturate(2805%) hue-rotate(226deg) brightness(95%) contrast(92%);
        }

        &--active {
          color: var(--color-text-tertiary);

          &::before {
            content: url("../assets/img/minus.svg");
          }
        }
      }

      .faq__answer {
        //padding-bottom: 3rem;
        //margin-top: -1rem;
        overflow: hidden;
        transition: height 0.3s ease;
        height: 5rem;
        padding-left: 3rem;
        color: var(--color-text-tertiary);
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
