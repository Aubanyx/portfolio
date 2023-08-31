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
          v-for="(item, index) in projects"
          :key="'item' + index"
        >
          <div
            :ref="`hoverCircle-${index}`"
            class="projectHover"
            @click="updateModal(item)"
          >
            <span class="projectHoverText">View</span>
          </div>
          <div class="projectInfos" @click="updateModal(item)">
            <h3 class="projectTitle">{{ item.name }}</h3>
            <h4 class="projectStyle">{{ item.style }}</h4>
            <div class="projectDesignPhone">
              <img
                class="mockupPc"
                src="../assets/img/mockupPc.png"
                alt="mockup pc"
              />
              <img
                class="mockupTablet"
                src="../assets/img/mockupTablet.png"
                alt="mockup tablet"
              />
              <img
                class="mockupPhone"
                src="../assets/img/mockupPhone.png"
                alt="mockup phone"
              />
              <span class="projectBackground"></span>
            </div>
            <p class="projectDescription">{{ item.description }}</p>
            <div class="projectButton">
              <p class="projectExplore">Explore</p>
              <img
                class="projectArrow"
                src="../assets/img/icons/projectArrow.svg"
                alt="right arrow"
              />
            </div>
          </div>
          <div class="projectDesign" @click="updateModal(item)">
            <img
              class="mockupPc"
              src="../assets/img/mockupPc.png"
              alt="mockup pc"
            />
            <img
              class="mockupTablet"
              src="../assets/img/mockupTablet.png"
              alt="mockup tablet"
            />
            <img
              class="mockupPhone"
              src="../assets/img/mockupPhone.png"
              alt="mockup phone"
            />
            <span class="projectBackground"></span>
          </div>
        </li>
      </ul>
    </div>
    <a
      v-magnetic="{ strength: 0.5, maxDistance: 40 }"
      class="projects__button"
      href="#"
      ><div v-magnetic>More work on Github</div></a
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
          thumbnail: ["img01.jpg", "img02.jpg", "img03.jpg", "img04.jpg"],
          img: ["img01.png", "img02.png", "img03.png", "img04.png"],
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
          thumbnail: ["img01.jpg", "img02.jpg", "img03.jpg", "img04.jpg"],
          img: ["img01.png", "img02.png", "img03.png", "img04.png"],
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
          thumbnail: ["img01.jpg", "img02.jpg", "img03.jpg", "img04.jpg"],
          img: ["img01.png", "img02.png", "img03.png", "img04.png"],
          participants: "group",
          style: "Design & development",
          state: this.$i18n.t("projects.modal.forum.online"),
          open: false,
        },
        {
          logo: "burger.png",
          name: this.$i18n.t("projects.modal.chaos.name"),
          alias: "restaurant",
          description: this.$i18n.t("projects.modal.chaos.description"),
          techUse: ["html", "css", "wordpress", "php"],
          linkRepo: "https://github.com/Aubanyx/ChaosCoffeeRestaurant",
          thumbnail: ["img01.jpg", "img02.jpg", "img03.jpg", "img04.jpg"],
          linkSite: "#",
          img: ["img01.png", "img02.png", "img03.png", "img04.png"],
          participants: "group",
          style: "Design & development",
          state: this.$i18n.t("projects.modal.chaos.online"),
          open: false,
        },
        {
          logo: "leaf.png",
          name: this.$i18n.t("projects.modal.leaf.name"),
          alias: "mwenbwa",
          description: this.$i18n.t("projects.modal.leaf.description"),
          techUse: ["html", "scss", "mongodb", "express", "react", "node"],
          linkRepo: "https://github.com/Aubanyx/mwenbwa-corses",
          thumbnail: ["img01.jpg", "img02.jpg", "img03.jpg", "img04.jpg"],
          linkSite: "#",
          img: ["img01.png", "img02.png", "img03.png", "img04.png"],
          participants: "group",
          style: "Design & development",
          state: this.$i18n.t("projects.modal.leaf.online"),
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
          thumbnail: ["img01.jpg", "img02.jpg", "img03.jpg", "img04.jpg"],
          img: ["img01.png", "img02.png", "img03.png", "img04.png"],
          participants: "solo",
          style: "Design & development",
          state: this.$i18n.t("projects.modal.pomodoro.online"),
          open: false,
        },
      ],
    };
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
        if (event.clientX < parentRect.left || event.clientX > parentRect.right || event.clientY < parentRect.top || event.clientY > parentRect.bottom) {
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
            font-size: 5rem;
            font-weight: bold;
            color: var(--color-text-tertiary);
            margin-bottom: 1.5rem;
          }
          .projectStyle {
            font-size: 1.6rem;
            color: var(--color-text-tertiary);
            margin-bottom: 3rem;
          }

          .projectDesignPhone {
            display: flex;
            justify-content: center;
            position: relative;
            height: 33rem;
            margin-bottom: 3rem;

            .mockupPc {
              min-height: 23rem;
              max-height: 40rem;
              height: 45vw;
              position: absolute;
              bottom: 0;
              right: -6rem;
              z-index: 1;
            }
            .mockupTablet {
              min-height: 18rem;
              max-height: 34rem;
              height: 37vw;
              position: absolute;
              bottom: 0;
              left: -7rem;
              transform: rotateY(180deg);
              z-index: 1;
            }
            .mockupPhone {
              min-height: 10rem;
              max-height: 22rem;
              height: 22vw;
              position: absolute;
              bottom: 2rem;
              //left: 4.5rem;
              left: 15%;
              z-index: 1;
            }
            .projectBackground {
              position: absolute;
              height: 22rem;
              width: 85%;
              background: var(--color-secondary);
              border-radius: 2rem;
              z-index: 0;
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
    //.projects__title {
    //  font-size: 10rem;
    //}
    .hover-content {
      .listProject {
        .project {
          .projectInfos {
            .projectDesignPhone {
              height: 40rem;

              .mockupPc {
                min-height: 33rem;
                right: -4rem;
              }
              .mockupTablet {
                min-height: 28rem;
                left: -7rem;
              }
              .mockupPhone {
                min-height: 20rem;
                //left: 8.5rem;
              }
              .projectBackground {
                height: 25rem;
                width: 80%;
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
          padding-bottom: 5rem;

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
            width: 40%;

            .projectTitle {
              font-size: 7rem;
              line-height: 1.2;
            }

            .projectStyle {
              margin-bottom: 5rem;
            }

            .projectDesignPhone {
              display: none;
            }

            .projectDescription {
              margin-bottom: 0;
            }

            .projectButton {
              display: none;
            }
          }

          .projectDesign {
            display: flex;
            justify-content: center;
            position: relative;
            height: 37rem;
            width: 55%;
            margin-left: 5%;

            .mockupPc {
              height: 35rem;
              position: absolute;
              bottom: 0;
              right: -10rem;
              z-index: 1;
            }

            .mockupTablet {
              height: 30rem;
              position: absolute;
              bottom: 0;
              left: -13rem;
              transform: rotateY(180deg);
              z-index: 1;
            }

            .mockupPhone {
              height: 20rem;
              position: absolute;
              bottom: 2rem;
              left: 5rem;
              z-index: 1;
            }

            .projectBackground {
              position: absolute;
              height: 22rem;
              width: 85%;
              background: var(--color-secondary);
              border-radius: 5rem;
              z-index: 0;
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
            height: 27vw;

            .mockupPc {
              height: 25vw;
            }

            .mockupTablet {
              height: 21vw;
            }

            .mockupPhone {
              height: 12vw;
              left: 13%;
            }

            .projectBackground {
              height: 60%;
            }
          }
        }
      }
    }
  }
}
</style>
