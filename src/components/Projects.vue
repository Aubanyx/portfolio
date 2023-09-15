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
          img: ["img01.jpg", "img02.jpg", "img03.jpg", "img04.jpg"],
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
          thumbnail: ["img01.jpg"],
          img: ["img01.jpg"],
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
          thumbnail: ["img01.jpg", "img02.jpg", "img03.jpg", "img04.jpg", "img05.jpg"],
          linkSite: "#",
          presentation: "restaurant1280.png",
          img: [
            "img01.jpg",
            "img02.jpg",
            "img03.jpg",
            "img04.jpg",
            "img05.jpg",
          ],
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
          thumbnail: ["img01.jpg"],
          linkSite: "#",
          presentation: "mwenbwa1280.png",
          img: ["img01.jpg"],
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
          thumbnail: ["img01.jpg"],
          img: ["img01.jpg"],
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
    animateElements() {
      // Animation pour le titre des projets
      this.$gsap.from(".projects__title", {
        duration: 1.5,
        y: -50,
        opacity: 0,
        delay: 0.5,
        ease: "power2.out",
        scrollTrigger: {
          trigger: ".projects__title",
          start: "top 80%",
          toggleActions: "restart none none reverse",
        },
      });

      // Pour les images des projets
      document.querySelectorAll(".projectPresentation--img").forEach((img) => {
        this.$gsap.from(img, {
          duration: 1,
          y: 50,
          opacity: 0,
          ease: "power2.out",
          scrollTrigger: {
            trigger: img,
            start: "top 80%",
            toggleActions: "restart none none reverse",
          },
        });
      });

      // Pour la description du projet
      document.querySelectorAll(".projectDescription").forEach((desc) => {
        this.$gsap.from(desc, {
          duration: 1.2,
          y: 50,
          opacity: 0,
          stagger: 0.2,
          ease: "power2.out",
          scrollTrigger: {
            trigger: desc,
            start: "top 95%",
            toggleActions: "restart none none reverse",
          },
        });
      });

      // Pour les boutons d'exploration
      document.querySelectorAll(".projectExplore").forEach((btn) => {
        this.$gsap.from(btn, {
          duration: 1,
          y: 30,
          opacity: 0,
          stagger: 0.3,
          ease: "power2.out",
          scrollTrigger: {
            trigger: btn,
            start: "top 95%",
            toggleActions: "restart none none reverse",
          },
        });
      });

      // Pour les titres individuels des projets
      document.querySelectorAll(".projectTitle").forEach((title) => {
        this.$gsap.from(title, {
          duration: 1.2,
          y: -30,
          opacity: 0,
          stagger: 0.2,
          ease: "power2.out",
          scrollTrigger: {
            trigger: title,
            start: "top 85%",
            toggleActions: "restart none none reverse",
          },
        });
      });

      // Pour les détails techniques des projets
      document.querySelectorAll(".projectTechs .tech").forEach((tech) => {
        this.$gsap.from(tech, {
          duration: 1,
          x: -30,
          opacity: 0,
          stagger: 0.1,
          ease: "power2.out",
          scrollTrigger: {
            trigger: tech,
            start: "top 85%",
            toggleActions: "restart none none reverse",
          },
        });
      });

      // Pour les boutons des projets
      this.$gsap.from(".projects__button", {
        duration: 0.5,
        y: 40,
        opacity: 0,
        delay: 0.5, // Réduire le délai pour rendre l'animation plus rapide.
        ease: "power2.out",
        scrollTrigger: {
          trigger: ".projects__button",
          start: "top 90%",
          toggleActions: "restart none none reverse",
        },
      });
    },
  },
  created() {
    this.startAnimation();
    window.addEventListener("mousemove", this.mouseMove);
  },
  mounted() {
    this.$store.state.selectedProjects = this.projects[0];
    this.animateElements();
  },
  beforeDestroy() {
    window.removeEventListener("mousemove", this.mouseMove);
  },
};
</script>

<style lang="scss" scoped>
.container {
  max-width: 1920px;
  margin: auto;
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
            height: clamp(33rem, 50vw, 40rem);

            .projectBackground {
              position: absolute;
              //height: 22rem;
              height: clamp(22rem, 40vw, 30rem);
              width: 85%;
              background: var(--color-background-quinary);
              border-radius: 2rem;
              z-index: 0;
              box-shadow: var(--color-box-shadow-back);

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
          box-shadow: var(--color-box-shadow-project);
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
              box-shadow: var(--color-box-shadow-back);

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
