<template>
  <section id="faq">
    <h3 class="faq__title">
      Before sending me a message, here are some things you should know:
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
          title: "Question 1",
          answer: "Réponse 1",
          open: false,
        },
        {
          title: "Question 2",
          answer: "Réponse 2",
          open: false,
        },
        {
          title: "Question 3",
          answer: "Réponse 3",
          open: false,
        },
        {
          title: "Question 4",
          answer: "Réponse 4",
          open: false,
        },
        {
          title: "Question 5",
          answer: "Réponse 5",
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
  display: flex;
  flex-direction: column;
  background: #f3f2f1;
  //height: 100vh;
  padding: 10rem 5rem;

  .faq__title {
    font-size: 2.5rem;
    line-height: 1.2;
    text-align: left;
    margin-bottom: 5rem;
  }

  .faq__questionsWrapper {
    .faq__question {
      //margin: 5rem 0;
      text-align: left;
      border-bottom: 1px solid #27272740;
      font-size: 2rem;
      //transition: all 0.2s ease;

      .faq__question--text {
        display: flex;
        position: relative;
        justify-content: space-between;
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
          width: 2rem;
          height: 2rem;
          filter: invert(61%) sepia(39%) saturate(520%) hue-rotate(91deg) brightness(94%) contrast(91%);
        }

        &--active {
          color: black;

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
      }
    }

    .faq__question:last-of-type {
      border: none;
    }
  }
}
</style>
