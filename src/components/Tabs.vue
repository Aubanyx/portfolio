<template>
  <section id="tabs">
    <h2 class="tabsTitle">{{ $t("skills.title") }}</h2>
    <p class="tabsText">{{ $t("skills.intro") }}</p>
    <div class="tabs__container">
      <div class="tabs__header">
        <div class="tab__wrapper">
          <span class="tab-background" :style="tabBackgroundStyle"></span>
          <div
            class="tab"
            :class="{
              'tab--active': tab.open,
            }"
            v-for="(tab, index) in translatedTabs"
            :key="index"
            @click="activateTab(index)"
          >
            <img
              class="tab--img"
              :class="{
                'tab--img--active': tab.open,
              }"
              :src="require('../assets/img/icons/' + tab.img)"
              :alt="tab.title"
            />
            <p class="tab--title">{{ tab.title }}</p>
          </div>
        </div>
      </div>
      <TabContent :tab="tabs[activeTabIndex]" />
    </div>
  </section>
</template>

<script>
import TabContent from "@/components/TabContent.vue";

export default {
  name: "TabsComponent",
  components: {
    TabContent,
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
              title: "Sass/Scss",
              img: "sass.svg",
            },
            {
              title: "Javascript",
              img: "javascript.svg",
            },
            {
              title: "PHP",
              img: "php.svg",
            },
          ],
        },
        {
          title: this.$i18n.t("skills.tab02"),
          img: "tools.svg",
          open: false,
          skills: [
            {
              title: "Vue.js",
              img: "vueJs.svg",
            },
            {
              title: "React",
              img: "react.svg",
            },
            {
              title: "Photoshop",
              img: "photoshop.svg",
            },
            {
              title: "Illustrator",
              img: "illustrator.svg",
            },
            {
              title: "Figma",
              img: "figma.svg",
            },
            {
              title: "Git",
              img: "git.svg",
            },
            {
              title: "Wordpress",
              img: "wordpress.svg",
            },
          ],
        },
      ],
    };
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
  },
};
</script>

<style lang="scss" scoped>
#tabs {
  background: var(--color-background-primary);
  //height: 20rem;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 10rem 5rem;

  .tabsTitle {
    @include Title;
    align-self: flex-start;
    z-index: 0;
  }

  .tabsText {
    color: var(--color-text-tertiary);
    font-size: 2rem;
    font-weight: 300;
    margin-bottom: 8rem;
    align-self: flex-start;
    text-align: left;
    line-height: 1.2;
  }

  .tabs__container {
    display: flex;
    flex-direction: column;
    width: 100%;

    .tabs__header {
      //display: flex;
      //justify-content: space-between;
      //align-items: center;
      //background: #f2f2f2;
      background: var(--color-background-quinary);
      height: 8rem;
      width: 100%;
      border-radius: 5rem;
      padding: 0.5rem;
      //position: relative;

      .tab__wrapper {
        display: flex;
        justify-content: space-between;
        align-items: center;
        //background: #F3F2F1;
        height: 100%;
        width: 100%;
        //border-radius: 5rem;
        position: relative;

        .tab-background {
          position: absolute;
          top: 0;
          left: 0;
          height: 100%;
          background: var(--color-primary);
          border-radius: 5rem;
          z-index: 0;
          transition: all 0.2s ease;
        }

        .tab {
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
            //background: #261F22;
            color: white;
            //border-radius: 5rem;
            position: relative;
            z-index: 0;

            //&::before {
            //  content: "";
            //  position: absolute;
            //  top: 0;
            //  left: 0;
            //  width: 100%;
            //  height: 100%;
            //  background: #261F22;
            //  border-radius: 5rem;
            //  z-index: -1;
            //  transition: all 0.2s ease;
            //}
          }
          .tab--img {
            width: 3rem;
            height: 3rem;
            filter: invert(0.5);

            &--active {
              filter: invert(1);
            }
          }
          .tab--title {
            display: none;
          }
        }
      }
    }
  }
}
@media only screen and (min-width: 768px) {
  #tabs {
    align-items: center;

    //.tabsTitle {
    //  font-size: 10rem;
    //}
    .tabs__container {
      display: flex;
      flex-direction: column;
      width: 60%;

      .tabs__header {
        .tab__wrapper {
          .tab {
            .tab--img {
              display: none;
            }
            .tab--title {
              display: block;
            }
          }
        }
      }
    }
  }
}
@media only screen and (min-width: 1024px) {
  #tabs {
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

    .tabsText {
      width: 60%;
    }

    .tabs__container {
      width: 100%;
      align-items: center;

      .tabs__header {
        width: 60%;
      }
    }
  }
}
</style>
