<template>
  <div class="skillContent" ref="skillContentRef">
    <ul class="skillContent__list">
      <li
        v-for="(skill, index) in tab.skills"
        :key="index"
        class="skillContent__list__item"
      >
        <img
          class="skillContent__list__item--icon"
          :src="require('../../assets/img/icons/' + skill.img)"
          :alt="skill.title"
        />
        <p class="skillContent__list__item--title">{{ skill.title }}</p>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "SkillContent",
  props: ["tab"],
  mounted() {
    this.initTabContentAnimation();
  },
  methods: {
    initTabContentAnimation() {
      const skillContentRef = this.$refs.skillContentRef;

      this.$gsap.from(
        skillContentRef.querySelectorAll(".skillContent__list__item"),
        {
          scrollTrigger: {
            trigger: skillContentRef,
            start: "top 100%",
            end: "bottom 80%",
            scrub: 1,
          },
          y: 30,
          opacity: 0,
          duration: 0.5,
          stagger: 0.2,
        }
      );
    },
  },
};
</script>

<style lang="scss" scoped>
.skillContent {
  margin-top: 5rem;

  &__list {
    &__item {
      background: var(--color-background-quinary);
      border-radius: 1rem;
      height: 6rem;
      display: flex;
      font-size: 1.6rem;
      justify-content: flex-start;
      align-items: center;
      color: var(--color-text-tertiary);
      font-weight: bold;
      margin-bottom: 2rem;
      padding: 1rem 2rem;
      transition: background 0.2s ease;

      &:last-of-type {
        margin-bottom: 0;
      }

      &:hover {
        filter: brightness(0.8);
      }

      &--icon {
        width: fit-content;
        height: 100%;
      }

      &--title {
        padding-left: 2rem;
      }
    }
  }
}

@media only screen and (min-width: 768px) {
  .skillContent {
    &__list {
      display: flex;
      flex-wrap: wrap;
      justify-content: center;

      &__item {
        margin-right: 2rem;

        &:last-of-type {
          margin-right: 0;
        }
      }
    }
  }
}

@media only screen and (min-width: 1024px) {
  .skillContent {
    width: 100%;

    &__list {
      justify-content: space-around;

      &__item {
        flex-direction: column;
        margin: 0 0 3rem 0;
        width: 20rem;
        height: 100%;
        justify-content: center;
        padding: 2rem;

        &--icon {
          width: 5rem;
        }

        &--title {
          padding: 0;
          margin-top: 2rem;
        }
      }
    }
  }
}
</style>
