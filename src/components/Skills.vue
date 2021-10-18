<template>
  <section id="skills" class="container">
    <h2 class="skills__title">Skills</h2>
    <h3 class="skills__subtitle">My technical level</h3>
    <div class="skills__container">
      <div class="skills__section" v-for="(item, index) in skills" :key="'item'+index">
        <div class="skills__box" @click="item.open = !item.open">
          <img class="skills__img" :src="require('../assets/img/'+ item.img +'.svg')" :alt="item.img">
          <div class="skills__content">
            <p class="skills__content--title">{{ item.title }}</p>
            <p class="skills__content--subtitle">{{ item.subtitle }}</p>
            <SkillsList :skills="item"/>
          </div>
          <img :class="{'open':item.open}" class="skills__arrow" src="../assets/img/arrow.svg" alt="Arrow">
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import SkillsList from "@/components/SkillsList.vue"

export default {
  name: "Skills",
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
            "Html", "Css", "Scss", "Javascript"
          ]
        },
        {
          img: "gears",
          title: "Back-End Developer",
          subtitle: "More than 4 years",
          open: false,
          subSkills: [
            "Html", "Css", "Javascript"
          ]
        },
        {
          img: "layout",
          title: "Designer",
          subtitle: "More than 4 years",
          open: false,
          subSkills: [
            "Html", "Css", "Javascript"
          ]
        },
        {
          img: "layout",
          title: "Soft Skills",
          subtitle: "More than 4 years",
          open: false,
          subSkills: [
            "Html", "Css", "Javascript"
          ]
        },
        {
          img: "others",
          title: "Others",
          subtitle: "More than 4 years",
          open: false,
          subSkills: [
            "Html", "Css", "Javascript"
          ]
        },
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
.container {
  background: violet;
  //height: 100vh;
  padding: 10rem 0;

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
          width: 3rem;
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
          }
        }
        .skills__arrow {
          width: 3rem;
          transition: .4s;
          margin-left: auto;

          &.open {
            transform: rotateZ(-180deg);
            transition: .4s;

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
