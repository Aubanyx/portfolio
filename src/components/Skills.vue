<template>
  <section id="skills" class="container">
    <h2 class="skills__title">Skills</h2>
    <h3 class="skills__subtitle">My technical level</h3>
    <div class="skills__container">
      <div
        class="skills__section"
        v-for="(item, index) in skills"
        :key="'item' + index"
      >
        <div class="skills__box" @click="item.open = !item.open">
          <img
            class="skills__img"
            :src="require('../assets/img/' + item.img + '.svg')"
            :alt="item.img"
          />
          <div class="skills__content">
            <p class="skills__content--title">{{ item.title }}</p>
            <p class="skills__content--subtitle">{{ item.subtitle }}</p>
            <SkillsList :skills="item" />
          </div>
          <img
            :class="{ open: item.open }"
            class="skills__arrow"
            src="../assets/img/arrow.svg"
            alt="Arrow"
          />
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import SkillsList from "@/components/SkillsList.vue";

export default {
  name: "SkillsComponent",
  components: { SkillsList },
  data() {
    return {
      skills: [
        {
          img: "brackets",
          title: "Front-End Developer",
          subtitle: "More than 4 years",
          open: false,
          subSkills: [
            "Html",
            "Css",
            "Sass / Scss",
            "Javascript",
            "Vue.js",
            "Vuetify",
            "React",
            "Bootstrap",
          ],
        },
        {
          img: "gears",
          title: "Back-End Developer",
          subtitle: "More than 4 years",
          open: false,
          subSkills: ["Php", "MySQL", "MongoDB", "Node.js", "Symfony"],
        },
        {
          img: "layout",
          title: "Designer",
          subtitle: "More than 4 years",
          open: false,
          subSkills: ["Photoshop", "Illustrator", "Figma"],
        },
        {
          img: "skills",
          title: "Soft Skills",
          subtitle: "More than 4 years",
          open: false,
          subSkills: [
            "Team Player",
            "Reliable",
            "Solution Oriented",
            "Change Enthusiast",
            "Continuous Learner",
          ],
        },
        {
          img: "tools",
          title: "Tools",
          subtitle: "More than 4 years",
          open: false,
          subSkills: ["Npm", "Webpack", "Terminal", "Git"],
        },
        {
          img: "others",
          title: "Others",
          subtitle: "More than 4 years",
          open: false,
          subSkills: ["Wordpress", "Windows", "Linux"],
        },
      ],
    };
  },
};
</script>

<style lang="scss" scoped>
.container {
  //background: violet;
  //height: 100vh;
  padding: 10rem 0;
  background: var(--backgroundColor);

  .skills__title {
    @include Title;
    margin-bottom: 1rem;
  }

  .skills__subtitle {
    @include Subtitle;
    margin-bottom: 10rem;
  }

  .skills__container {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;

    .skills__section {
      width: 100%;

      .skills__box {
        display: flex;
        justify-content: space-between;
        align-items: flex-start;
        margin: 0 3rem 5rem;
        cursor: pointer;

        .skills__img {
          width: 4rem;
          margin-top: 0.3rem;
          filter: var(--imgfilter);
        }
        .skills__content {
          text-align: left;
          padding-left: 1rem;
          padding-right: 3rem;

          .skills__content--title {
            @include SkillsTitle;
          }

          .skills__content--subtitle {
            @include SkillsSubtitle;
            padding-top: 0.5rem;
          }
        }
        .skills__arrow {
          width: 4rem;
          transition: 0.4s;
          margin-left: auto;
          filter: var(--imgfilter);

          &.open {
            transform: rotateZ(-180deg);
            transition: 0.4s;
          }
        }
      }
    }
  }
}

@media only screen and (min-width: 768px) {
  .container {
    .skills__container {
      margin: 0 18%;

      .skills__section {
        width: 45%;

        .skills__box {
          margin: 0 0 5rem;
        }
      }
    }
  }
}

@media only screen and (min-width: 1224px) {
  .container {
    .skills__container {
      justify-content: space-around;
      margin: 0 18%;

      .skills__section {
        width: 40%;
      }
    }
  }
}
</style>
