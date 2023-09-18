<template>
  <section id="skills" class="skills">
    <h2 class="skills__title">{{ $t("skills.title") }}</h2>
    <p class="skills__description">{{ $t("skills.intro") }}</p>
    <div class="skills__tabs">
      <div class="skills__tabs__header">
        <div class="skills__tab__wrapper">
          <span
            class="skills__tab--background"
            :style="tabBackgroundStyle"
          ></span>
          <div
            class="skills__tab"
            :class="{
              'skills__tab--active': tab.open,
            }"
            v-for="(tab, index) in translatedTabs"
            :key="index"
            @click="activateTab(index)"
          >
            <img
              class="skills__tab--image"
              :class="{
                'skills__tab--image--active': tab.open,
              }"
              :src="require('../../assets/img/icons/' + tab.img)"
              :alt="tab.title"
            />
            <p class="skills__tab--title">{{ tab.title }}</p>
          </div>
        </div>
      </div>
      <SkillContent :tab="tabs[activeTabIndex]" />
    </div>
  </section>
</template>

<script>
import SkillContent from "@/components/skills/SkillContent.vue";

export default {
  name: "SkillsComponent",
  components: {
    SkillContent,
  },
  data() {
    return {
      activeTabIndex: 0,
      tabs: [
        {
          title: this.$i18n.t("skills.tab01"),
          img: "code.svg",
          open: true,
          skills: [
            {
              title: "HTML",
              img: "html.svg",
            },
            {
              title: "CSS",
              img: "css.svg",
            },
            {
              title: "Javascript",
              img: "javascript.svg",
            },
            {
              title: "PHP",
              img: "php.svg",
            },
            {
              title: "Sass/Scss",
              img: "sass.svg",
            },
            {
              title: "MySQL",
              img: "mysql.svg",
            },
            {
              title: "Json",
              img: "json.svg",
            },
          ],
        },
        {
          title: this.$i18n.t("skills.tab02"),
          img: "tools.svg",
          open: false,
          skills: [
            {
              title: "Bootstrap",
              img: "bootstrap.svg",
            },
            {
              title: "Vue.js",
              img: "vueJs.svg",
            },
            {
              title: "React.js",
              img: "react.svg",
            },
            {
              title: "Wordpress",
              img: "wordpress.svg",
            },
            {
              title: "Node.js",
              img: "nodeJs.svg",
            },
            {
              title: "Webpack",
              img: "webpack.svg",
            },
            {
              title: "Git",
              img: "git.svg",
            },
            {
              title: "Linux",
              img: "linux.svg",
            },
            {
              title: "Figma",
              img: "figma.svg",
            },
            {
              title: "Photoshop",
              img: "photoshop.svg",
            },
            {
              title: "Illustrator",
              img: "illustrator.svg",
            },
          ],
        },
      ],
    };
  },
  mounted() {
    this.initTabAnimations();
  },
  computed: {
    translatedTabs() {
      return this.tabs.map((tab, index) => {
        let translationKey;
        if (index === 0) {
          translationKey = "skills.tab01";
        } else if (index === 1) {
          translationKey = "skills.tab02";
        }
        return {
          ...tab,
          title: this.$i18n.t(translationKey),
        };
      });
    },
    tabBackgroundStyle() {
      const translateX = this.activeTabIndex * 100;
      return {
        transform: `translateX(${translateX}%)`,
        width: `${100 / this.tabs.length}%`,
      };
    },
  },
  methods: {
    activateTab(index) {
      this.activeTabIndex = index;
      if (this.tabs[index].open) {
        return;
      }
      this.tabs.forEach((tab, tabIndex) => {
        if (tabIndex === index) {
          tab.open = !tab.open;
        } else {
          tab.open = false;
        }
      });
    },
    initTabAnimations() {
      const tl = this.$gsap.timeline({
        scrollTrigger: {
          trigger: ".skills",
          start: "top 90%",
          end: "bottom 60%",
          scrub: 1,
        },
      });
      tl.from(".skills__tab--image", { duration: 0.4, scale: 0, opacity: 0 });

      tl.from(".skills__title", { duration: 0.5, y: -30, opacity: 0 })
        .from(".skills__description", { duration: 0.5, y: -30, opacity: 0 })
        .from(".skills__tab__wrapper", {
          duration: 0.4,
          x: -50,
          opacity: 0,
          stagger: 0.1,
        })
        .from(".skills__tab--title", {
          duration: 0.4,
          y: 30,
          opacity: 0,
          stagger: 0.05,
        });
    },
  },
};
</script>

<style lang="scss" scoped>
.skills {
  max-width: 1920px;
  margin: auto;
  background: var(--color-background-primary);
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 10rem 5rem;
  overflow: hidden;
  word-break: break-word;

  &__title {
    @include Title;
    align-self: flex-start;
    z-index: 0;
  }

  &__description {
    color: var(--color-text-tertiary);
    font-size: 2rem;
    font-weight: 300;
    margin-bottom: 8rem;
    align-self: flex-start;
    text-align: left;
    line-height: 1.2;
  }

  &__tabs {
    display: flex;
    flex-direction: column;
    width: 100%;

    &__header {
      background: var(--color-background-quinary);
      height: 8rem;
      width: 100%;
      border-radius: 5rem;
      padding: 0.5rem;

      .skills__tab__wrapper {
        display: flex;
        justify-content: space-between;
        align-items: center;
        height: 100%;
        width: 100%;
        position: relative;

        .skills__tab--background {
          position: absolute;
          top: 0;
          left: 0;
          height: 100%;
          background: var(--color-primary);
          border-radius: 5rem;
          z-index: 0;
          transition: all 0.2s ease;
        }

        .skills__tab {
          display: flex;
          align-items: center;
          justify-content: center;
          height: 100%;
          width: 50%;
          font-size: 1.6rem;
          cursor: pointer;
          transition: all 0.2s ease;
          position: relative;
          color: var(--color-text-tertiary);

          &--active {
            color: white;
            position: relative;
            z-index: 0;
          }

          &--image {
            width: 3rem;
            height: 3rem;
            filter: invert(0.5);

            &--active {
              filter: invert(1);
            }
          }

          &--title {
            display: none;
          }
        }
      }
    }
  }
}

@media only screen and (min-width: 768px) {
  .skills {
    align-items: center;

    &__tabs {
      width: 60%;

      &__header {
        .skills__tab__wrapper {
          .skills__tab {
            &--image {
              display: none;
            }
            &--title {
              display: block;
            }
          }
        }
      }
    }
  }
}

@media only screen and (min-width: 1024px) {
  .skills {
    padding: 15rem;
    position: relative;

    &::before {
      content: "Skills";
      position: absolute;
      top: 5rem;
      left: 39rem;
      font-size: 20rem;
      letter-spacing: 1rem;
      -webkit-text-fill-color: transparent;
      -webkit-text-stroke: 2px var(--color-secondary);
      z-index: 0;
    }

    &__description {
      width: 60%;
    }

    &__tabs {
      width: 100%;
      align-items: center;

      &__header {
        width: 60%;
      }
    }
  }
}
</style>
