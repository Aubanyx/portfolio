<template>
  <section id="projects" class="container">
    <h2 class="projects__title">Projects</h2>
    <div class="hover-content">
      <ul class="listProject">
        <li
          @mouseover="projectHover"
          @mouseleave="hideCircle(index)"
          class="project"
          :data-index="index"
          v-for="(item, index) in translatedProjects"
          :key="'item' + index"
        >
          <div
            :ref="`hoverCircle-${index}`"
            class="projectHover"
            @click="updateModal(item)"
          >
            <span class="projectHoverText">{{ $t("projects.view") }}</span>
          </div>
          <div class="projectInfos" @click="updateModal(item)">
            <h3 class="projectTitle">{{ item.name }}</h3>
            <div class="projectInfosStyle">
              <h4 class="projectStyle">{{ item.style }}</h4>
              <div class="projectInfosTechs">
                <div
                  class="projectTechs"
                  v-for="tech in item.techUse"
                  :key="tech.id"
                >
                  <img
                    class="tech"
                    :src="require('../assets/img/icons/techs/' + tech + '.svg')"
                    :alt="tech"
                  />
                </div>
              </div>
            </div>
            <div class="projectDesignPhone">
              <div class="projectBackground">
                <div class="projectPresentation">
                  <img
                    class="projectPresentation--img"
                    :src="
                      require('../assets/img/imgProjects/' +
                        item.alias +
                        '/presentation/' +
                        item.presentation)
                    "
                    :alt="'presentation' + item.name"
                  />
                  <span class="projectNumbers">{{ item.number }}</span>
                </div>
              </div>
            </div>
            <p class="projectDescription">{{ item.description }}</p>
            <div class="projectButton">
              <p class="projectExplore">{{ $t("projects.explore") }}</p>
              <img
                class="projectArrow"
                src="../assets/img/icons/projectArrow.svg"
                alt="right arrow"
              />
            </div>
          </div>
          <div class="projectDesign" @click="updateModal(item)">
            <div class="projectBackground">
              <div class="projectPresentation">
                <img
                  class="projectPresentation--img"
                  :src="
                    require('../assets/img/imgProjects/' +
                      item.alias +
                      '/presentation/' +
                      item.presentation)
                  "
                  :alt="'presentation' + item.name"
                />
                <span class="projectNumbers">{{ item.number }}</span>
              </div>
            </div>
          </div>
        </li>
      </ul>
    </div>
    <a
      v-magnetic="{ strength: 0.5, maxDistance: 40 }"
      class="projects__button"
      href="#"
      ><div v-magnetic>{{ $t("projects.more") }}</div></a
    >
    <ProjectsModal />
  </section>
</template>

<script>
import ProjectsModal from "@/components/ProjectsModal.vue";

export default {
  name: "ProjectsComponent",
  components: { ProjectsModal },
  data() {
    return {
      circleX: null,
      circleY: null,
      currentCircle: null,
      currentIndex: null,
      projects: [
        {
          logo: "photo.png",
          name: this.$i18n.t("projects.modal.portfolio.name"),
          alias: "portfolio",
          description: this.$i18n.t("projects.modal.portfolio.description"),
          techUse: ["html", "scss", "javascript", "vue"],
          linkRepo: "https://github.com/Aubanyx/portfolio",
          linkSite: "#",
          presentation: "portfolio1280.png",
          thumbnail: ["img01.jpg", "img02.jpg", "img03.jpg", "img04.jpg"],
          img: ["img01.png", "img02.png", "img03.png", "img04.png"],
          number: "01",
          participants: "solo",
          style: "Design & development",
          state: this.$i18n.t("projects.modal.portfolio.online"),
          open: false,
        },
        {
          logo: "egypt.png",
          name: this.$i18n.t("projects.modal.museum.name"),
          alias: "museum",
          description: this.$i18n.t("projects.modal.museum.description"),
          techUse: ["html", "css"],
          linkRepo: "https://github.com/Aubanyx/museum-project",
          linkSite: "https://aubanyx.github.io/museum-project/",
          presentation: "museum1280.png",
          thumbnail: ["img01.jpg", "img02.jpg", "img03.jpg", "img04.jpg"],
          img: ["img01.png", "img02.png", "img03.png", "img04.png"],
          number: "02",
          participants: "group",
          style: "Development",
          state: this.$i18n.t("projects.modal.museum.online"),
          open: false,
        },
        {
          logo: "bcbb.svg",
          name: this.$i18n.t("projects.modal.forum.name"),
          alias: "forum",
          description: this.$i18n.t("projects.modal.forum.description"),
          techUse: ["html", "scss", "javascript", "php", "mysql"],
          linkRepo: "https://github.com/Aubanyx/Forum-bcbb-the-who",
          linkSite: "https://bcbb-thewho.herokuapp.com/index.php",
          presentation: "forum1280.png",
          thumbnail: ["img01.jpg", "img02.jpg", "img03.jpg", "img04.jpg"],
          img: ["img01.png", "img02.png", "img03.png", "img04.png"],
          number: "03",
          participants: "group",
          style: "Design & development",
          state: this.$i18n.t("projects.modal.forum.online"),
          open: false,
        },
        {
          logo: "burger.png",
          name: this.$i18n.t("projects.modal.restaurant.name"),
          alias: "restaurant",
          description: this.$i18n.t("projects.modal.restaurant.description"),
          techUse: ["html", "css", "wordpress", "php"],
          linkRepo: "https://github.com/Aubanyx/ChaosCoffeeRestaurant",
          thumbnail: ["img01.jpg", "img02.jpg", "img03.jpg", "img04.jpg"],
          linkSite: "#",
          presentation: "restaurant1280.png",
          img: ["img01.png", "img02.png", "img03.png", "img04.png"],
          number: "04",
          participants: "group",
          style: "Design & development",
          state: this.$i18n.t("projects.modal.restaurant.online"),
          open: false,
        },
        {
          logo: "leaf.png",
          name: this.$i18n.t("projects.modal.mwenbwa.name"),
          alias: "mwenbwa",
          description: this.$i18n.t("projects.modal.mwenbwa.description"),
          techUse: ["html", "scss", "mongodb", "express", "react", "node"],
          linkRepo: "https://github.com/Aubanyx/mwenbwa-corses",
          thumbnail: ["img01.jpg", "img02.jpg", "img03.jpg", "img04.jpg"],
          linkSite: "#",
          presentation: "mwenbwa1280.png",
          img: ["img01.png", "img02.png", "img03.png", "img04.png"],
          number: "05",
          participants: "group",
          style: "Design & development",
          state: this.$i18n.t("projects.modal.mwenbwa.online"),
          open: false,
        },
        {
          logo: "pomodoro.png",
          name: this.$i18n.t("projects.modal.pomodoro.name"),
          alias: "pomodoro",
          description: this.$i18n.t("projects.modal.pomodoro.description"),
          techUse: ["html", "scss", "react"],
          linkRepo: "https://github.com/Aubanyx/react-pomodoro",
          linkSite: "https://auban-react-pomodoro.netlify.app\n",
          presentation: "pomodoro1280.png",
          thumbnail: ["img01.jpg", "img02.jpg", "img03.jpg", "img04.jpg"],
          img: ["img01.png", "img02.png", "img03.png", "img04.png"],
          number: "06",
          participants: "solo",
          style: "Design & development",
          state: this.$i18n.t("projects.modal.pomodoro.online"),
          open: false,
        },
      ],
    };
  },
  computed: {
    translatedProjects() {
      return this.projects.map((project) => ({
        ...project,
        name: this.$i18n.t(`projects.modal.${project.alias}.name`),
        description: this.$i18n.t(
          `projects.modal.${project.alias}.description`
        ),
        style: this.$i18n.t(`projects.modal.${project.alias}.style`),
        state: this.$i18n.t(`projects.modal.${project.alias}.online`),
      }));
    },
  },
  methods: {
    startAnimation() {
      if (
        this.currentCircle &&
        this.circleX !== null &&
        this.circleY !== null
      ) {
        this.currentCircle.style.left = this.circleX + "px";
        this.currentCircle.style.top = this.circleY + "px";
      }
      requestAnimationFrame(this.startAnimation);
    },
    hideCircle(index) {
      this.currentIndex = null;
      this.currentCircle = null;

      const circle = this.$refs[`hoverCircle-${index}`][0];
      const child = circle.children[0];

      circle.style.width = "0";
      circle.style.height = "0";

      setTimeout(() => {
        child.style.display = "none";
      }, 150);

      setTimeout(() => {
        circle.style.display = "none";
      }, 300);
    },
    projectHover(event) {
      // const index = event.target.closest('.project__element').getAttribute('data-index');
      // const circle = this.$refs[`hoverCircle-${index}`][0];
      // const parent = circle.parentElement;
      // const parentRect = parent.getBoundingClientRect();
      // const child = circle.children[0];
      //
      // circle.style.width = "100px";
      // circle.style.height = "100px";
      // circle.style.display = "flex";
      // child.style.display = "block";
      //
      // // setTimeout(() => {
      // //   circle.style.left = event.clientX - parentRect.left + "px";
      // //   circle.style.top = event.clientY - parentRect.top + "px";
      // // }, 50);
      //
      // circle.style.left = event.clientX - parentRect.left + "px";
      // circle.style.top = event.clientY - parentRect.top + "px";
      //
      //
      //
      // parent.addEventListener("mouseleave", () => {
      //   this.hideCircle(index);
      // });

      if (screen.width < 1024) {
        return;
      }

      const index = event.target.closest(".project").getAttribute("data-index");
      const circle = this.$refs[`hoverCircle-${index}`][0];
      const parent = circle.parentElement;
      const parentRect = parent.getBoundingClientRect();
      const child = circle.children[0];

      circle.style.display = "flex";
      child.style.display = "block";
      circle.style.width = "100px";
      circle.style.height = "100px";

      this.circleX = event.clientX - parentRect.left;
      this.circleY = event.clientY - parentRect.top;

      this.currentIndex = index;
      this.currentCircle = circle;
    },
    mouseMove(event) {
      if (this.currentCircle) {
        const parent = this.currentCircle.parentElement;
        const parentRect = parent.getBoundingClientRect();
        this.circleX = event.clientX - parentRect.left;
        this.circleY = event.clientY - parentRect.top;
        // Vérifier si la souris est encore dans le li
        if (
          event.clientX < parentRect.left ||
          event.clientX > parentRect.right ||
          event.clientY < parentRect.top ||
          event.clientY > parentRect.bottom
        ) {
          this.hideCircle(this.currentIndex);
        }
      }
    },
    updateModal(item) {
      this.$store.state.selectedProjects = item;
      this.$store.state.openModal = true;
      document.body.style.overflowY = "hidden";
    },
  },
  created() {
    this.startAnimation();
    window.addEventListener("mousemove", this.mouseMove);
  },
  mounted() {
    this.$store.state.selectedProjects = this.projects[0];
  },
  beforeDestroy() {
    window.removeEventListener("mousemove", this.mouseMove);
  },
};
</script>

<style lang="scss" scoped>
.container {
  background: var(--color-background-primary);
  padding: 10rem 5rem;
  display: flex;
  flex-direction: column;
  overflow: hidden;

  .projects__title {
    @include Title;
    align-self: flex-start;
  }

  .hover-content {
    .listProject {
      display: flex;
      flex-wrap: wrap;
      justify-content: center;

      .project {
        display: flex;
        flex-direction: column;
        width: 100%;
        border-bottom: 1px solid var(--color-border);
        padding-bottom: 10rem;
        margin-bottom: 10rem;
        position: relative;

        &:last-of-type {
          //border-bottom: none;
          //padding-bottom: 0;
          margin-bottom: 0;
        }

        .projectHover {
          .projectHoverText {
            display: none;
          }
        }

        .projectInfos {
          text-align: left;

          .projectTitle {
            //font-size: 5rem;
            font-size: clamp(4rem, -0.2953rem + 13.4228vw, 7rem);
            font-weight: bold;
            color: var(--color-text-tertiary);
            margin-bottom: 1.5rem;
          }

          .projectInfosStyle {
            display: flex;
            flex-direction: column;

            .projectStyle {
              font-size: 1.6rem;
              color: var(--color-text-tertiary);
              margin-bottom: 2rem;
            }

            .projectInfosTechs {
              display: flex;
              margin-bottom: 5rem;

              .projectTechs {
                .tech {
                  width: 3rem;
                  height: 3rem;
                  margin-right: 0.7rem;
                  filter: var(--filterTechs);
                }
              }
            }
          }

          .projectDesignPhone {
            display: flex;
            justify-content: center;
            position: relative;
            //height: 33rem;
            height: clamp(33rem, 50vw, 40rem);
            //margin-bottom: 3rem;

            //.mockupPc {
            //  min-height: 23rem;
            //  max-height: 40rem;
            //  height: 45vw;
            //  position: absolute;
            //  bottom: 0;
            //  right: -6rem;
            //  z-index: 1;
            //}
            //.mockupTablet {
            //  min-height: 18rem;
            //  max-height: 34rem;
            //  height: 37vw;
            //  position: absolute;
            //  bottom: 0;
            //  left: -7rem;
            //  transform: rotateY(180deg);
            //  z-index: 1;
            //}
            //.mockupPhone {
            //  min-height: 10rem;
            //  max-height: 22rem;
            //  height: 22vw;
            //  position: absolute;
            //  bottom: 2rem;
            //  //left: 4.5rem;
            //  left: 15%;
            //  z-index: 1;
            //}
            .projectBackground {
              position: absolute;
              //height: 22rem;
              height: clamp(22rem, 40vw, 30rem);
              width: 85%;
              background: var(--color-background-quinary);
              border-radius: 2rem;
              z-index: 0;
              box-shadow: var(--color-box-shadow);

              .projectPresentation {
                .projectPresentation--img {
                  width: clamp(30rem, 100%, 35rem);
                  position: absolute;
                  left: -12rem;
                  bottom: -6rem;
                  z-index: 1;
                  filter: drop-shadow(15px 15px 20px rgb(0%, 0%, 0%, 25%));
                }

                .projectNumbers {
                  font-size: clamp(7rem, -0.2953rem + 13.4228vw, 13rem);
                  font-weight: bold;
                  color: var(--color-text-tertiary);
                  position: absolute;
                  top: 0;
                  right: -3rem;
                  z-index: 1;
                }
              }
            }
          }

          .projectDescription {
            font-size: 1.8rem;
            font-weight: 300;
            line-height: 1.2;
            color: var(--color-text-tertiary);
            margin-bottom: 5rem;
          }
          .projectButton {
            display: flex;

            .projectExplore {
              font-size: 2rem;
              font-weight: bold;
              color: var(--color-primary);
              margin-right: 2rem;
            }
            .projectArrow {
            }
          }
        }
        .projectDesign {
          display: none;
        }
      }
    }
  }
  .projects__button {
    @include animationCircleHover;
    @include ButtonPrimary;
    align-self: center;
    margin-top: 10rem;
  }
}

@media only screen and (min-width: 768px) {
  .container {
    .hover-content {
      .listProject {
        .project {
          .projectInfos {
            .projectInfosStyle {
              flex-direction: row;
              align-items: center;
              margin-bottom: 5rem;

              .projectStyle {
                margin-bottom: 0;
                margin-right: 1rem;
              }

              .projectInfosTechs {
                margin-bottom: 0;
              }
            }
            .projectDesignPhone {
              //height: 40rem;

              .projectBackground {
                //height: 30rem;

                .projectPresentation {
                  .projectPresentation--img {
                  }

                  .projectNumbers {
                  }
                }
              }
            }
          }
        }
      }
    }
  }
}

@media only screen and (min-width: 1024px) {
  .container {
    position: relative;

    &::before {
      content: "Projects";
      position: absolute;
      top: 3rem;
      left: 0;
      font-size: 20rem;
      letter-spacing: 1rem;
      -webkit-text-fill-color: transparent;
      -webkit-text-stroke: 2px var(--color-secondary);
      z-index: 0;
      width: 100%;
      display: flex;
      justify-content: center;
    }

    .projects__title {
      align-self: center;
      margin-bottom: 10rem;
      z-index: 0;
    }

    .hover-content {
      .listProject {
        .project {
          flex-direction: row;
          justify-content: space-between;
          //padding-bottom: 5rem;
          border-bottom: none;
          width: 100%;
          box-shadow: rgb(0 0 0 / 15%) 0 15px 20px -5px,
            rgb(255 255 255 / 90%) 0 -15px 20px 5px;
          padding: 5rem;
          border-radius: 5rem;

          .projectHover {
            width: 0;
            height: 0;
            border-radius: 50%;
            background-color: var(--color-primary);
            position: absolute;
            transform: translate(-50%, -50%);
            z-index: 9;
            cursor: pointer;
            display: none;
            justify-content: center;
            align-items: center;
            color: white;
            transition: width 0.3s ease-in-out, height 0.3s ease-in-out,
              left 0.05s linear, top 0.05s linear;
            will-change: left, top;

            .projectHoverText {
              display: block;
              font-size: 1.6rem;
            }

            &::before {
              content: "";
              position: absolute;
              border: 2px solid transparent;
              border-left-color: var(--color-primary);
              border-right-color: var(--color-primary);
              width: 100%;
              height: 100%;
              border-radius: 50%;
              padding: 1rem;

              animation: 3s linear infinite rotate;
            }
            @keyframes rotate {
              0% {
                transform: rotateZ(0);
              }
              100% {
                transform: rotateZ(360deg);
              }
            }
          }

          .projectInfos {
            display: flex;
            flex-direction: column;
            width: 50%;

            .projectTitle {
              font-size: 7rem;
              line-height: 1.2;
            }

            .projectDescription {
              width: 75%;
            }

            .projectStyle {
              margin-bottom: 5rem;
            }

            .projectDesignPhone {
              display: none;
            }

            .projectDescription {
              //margin-bottom: 0;
            }

            .projectButton {
              //display: none;
            }
          }

          .projectDesign {
            display: flex;
            justify-content: center;
            position: relative;
            height: 50rem;
            width: 30%;

            .projectBackground {
              position: absolute;
              height: 40rem;
              width: 85%;
              background: var(--color-background-quinary);
              border-radius: 2rem;
              z-index: 0;
              box-shadow: var(--color-box-shadow);

              .projectPresentation {
                .projectPresentation--img {
                  position: absolute;
                  //width: 50rem;
                  width: clamp(50rem, 200%, 65rem);
                  left: -25rem;
                  bottom: -10rem;
                  z-index: 1;
                  filter: drop-shadow(15px 15px 20px rgb(0%, 0%, 0%, 25%));
                }

                .projectNumbers {
                  font-size: clamp(7rem, -0.2953rem + 13.4228vw, 13rem);
                  font-weight: bold;
                  color: var(--color-text-tertiary);
                  position: absolute;
                  top: 0;
                  right: -3rem;
                  z-index: 1;
                }
              }
            }

            //.mockupPc {
            //  height: 35rem;
            //  position: absolute;
            //  bottom: 0;
            //  right: -10rem;
            //  z-index: 1;
            //}
            //
            //.mockupTablet {
            //  height: 30rem;
            //  position: absolute;
            //  bottom: 0;
            //  left: -13rem;
            //  transform: rotateY(180deg);
            //  z-index: 1;
            //}
            //
            //.mockupPhone {
            //  height: 20rem;
            //  position: absolute;
            //  bottom: 2rem;
            //  left: 5rem;
            //  z-index: 1;
            //}
            //
            //.projectBackground {
            //  position: absolute;
            //  height: 22rem;
            //  width: 85%;
            //  background: var(--color-secondary);
            //  border-radius: 5rem;
            //  z-index: 0;
            //}
          }
        }
      }
    }
  }
}
@media only screen and (min-width: 1280px) {
  .container {
    padding: 15rem;
  }
}

@media only screen and (min-width: 1440px) {
  .container {
    .hover-content {
      .listProject {
        .project {
          .projectDesign {
            .projectBackground {
              .projectPresentation {
                .projectPresentation--img {
                  left: -30rem;
                  bottom: -13rem;
                }
              }
            }
          }
        }
      }
    }
  }
}
</style>
