<template>
  <section id="projects" class="container">
    <h2 class="projects__title">My projects</h2>
    <h3 class="projects__subtitle">Most recent work</h3>
    <div class="hover-content">
      <ul class="listProject">
        <li
          @mousemove="projectHover"
          class="project__element"
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
          <div
            class="project__subElement"
            :style="{
              'background-image':
                'url(' + require('../assets/img/' + item.img[0]) + ')',
            }"
            @click="updateModal(item)"
          ></div>
          <div class="project__element__text">
            <p class="project__element__text--name">{{ item.name }}</p>
            <img
              class="project__element__text--participants"
              :src="
                require('../assets/img/icons/' + item.participants + '.svg')
              "
              :alt="item.participants"
            />
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
      projects: [
        {
          logo: "photo.png",
          name: this.$i18n.t("projects.modal.portfolio.name"),
          description: this.$i18n.t("projects.modal.portfolio.description"),
          techUse: ["Html", "Scss", "Javascript", "Vue.js"],
          linkRepo: "https://github.com/Aubanyx/portfolio",
          linkSite: "#",
          img: [
            // "mockup.png",
            "project1.png",
            "Egypt_Historical_Museum.png",
            "Egypt_Historical_Museum.png",
            "bcbbTheWho.png",
            "Egypt_Historical_Museum.png",
            "Egypt_Historical_Museum.png",
          ],
          participants: "solo",
          state: this.$i18n.t("projects.modal.portfolio.online"),
          open: false,
        },
        {
          logo: "egypt.png",
          name: this.$i18n.t("projects.modal.museum.name"),
          description: this.$i18n.t("projects.modal.museum.description"),
          techUse: ["Html", "Css"],
          linkRepo: "https://github.com/Aubanyx/museum-project",
          linkSite: "https://aubanyx.github.io/museum-project/",
          img: [
            "project2.jpg",
            "egyptMockup.jpg",
            "Egypt_Historical_Museum.png",
            "Egypt_Historical_Museum.png",
            "bcbbTheWho.png",
            "Egypt_Historical_Museum.png",
            "Egypt_Historical_Museum.png",
          ],
          participants: "group",
          state: this.$i18n.t("projects.modal.museum.online"),
          open: false,
        },
        {
          logo: "bcbb.svg",
          name: this.$i18n.t("projects.modal.forum.name"),
          description: this.$i18n.t("projects.modal.forum.description"),
          techUse: ["Html", "Scss", "Javascript", "Php", "MySQL", "PhpMyAdmin"],
          linkRepo: "https://github.com/Aubanyx/Forum-bcbb-the-who",
          linkSite: "https://bcbb-thewho.herokuapp.com/index.php",
          img: [
            "projectM.jpg",
            "mockup.png",
            "bcbbTheWho.png",
            "Egypt_Historical_Museum.png",
            "bcbbTheWho.png",
            "Egypt_Historical_Museum.png",
            "Egypt_Historical_Museum.png",
          ],
          participants: "group",
          state: this.$i18n.t("projects.modal.forum.online"),
          open: false,
        },
        {
          logo: "burger.png",
          name: this.$i18n.t("projects.modal.chaos.name"),
          description: this.$i18n.t("projects.modal.chaos.description"),
          techUse: ["Html", "Css", "Wordpress", "Php"],
          linkRepo: "https://github.com/Aubanyx/ChaosCoffeeRestaurant",
          linkSite: "#",
          img: [
            "projectD.png",
            "mockup.png",
            "bcbbTheWho.png",
            "Egypt_Historical_Museum.png",
            "bcbbTheWho.png",
            "Egypt_Historical_Museum.png",
            "Egypt_Historical_Museum.png",
          ],
          participants: "group",
          state: this.$i18n.t("projects.modal.chaos.online"),
          open: false,
        },
        {
          logo: "leaf.png",
          name: this.$i18n.t("projects.modal.leaf.name"),
          description: this.$i18n.t("projects.modal.leaf.description"),
          techUse: [
            "Html",
            "Scss",
            "MongoDB",
            "Express.js",
            "React.js",
            "Node.js",
          ],
          linkRepo: "https://github.com/Aubanyx/mwenbwa-corses",
          linkSite: "#",
          img: [
            "mockup.png",
            "bcbbTheWho.png",
            "Egypt_Historical_Museum.png",
            "bcbbTheWho.png",
            "Egypt_Historical_Museum.png",
            "Egypt_Historical_Museum.png",
          ],
          participants: "group",
          state: this.$i18n.t("projects.modal.leaf.online"),
          open: false,
        },
        {
          logo: "pomodoro.png",
          name: this.$i18n.t("projects.modal.pomodoro.name"),
          description: this.$i18n.t("projects.modal.pomodoro.description"),
          techUse: ["Html", "Scss", "React.js"],
          linkRepo: "https://github.com/Aubanyx/react-pomodoro",
          linkSite: "https://auban-react-pomodoro.netlify.app\n",
          img: [
            "mockupPomodoro.jpg",
            "reactPomodoro.png",
            "Egypt_Historical_Museum.png",
            "bcbbTheWho.png",
            "Egypt_Historical_Museum.png",
            "Egypt_Historical_Museum.png",
          ],
          participants: "solo",
          state: this.$i18n.t("projects.modal.pomodoro.online"),
          open: false,
        },
        // {
        //   logo: "terminal.svg",
        //   name: this.$i18n.t("projects.modal.holidays.name"),
        //   description: this.$i18n.t("projects.modal.holidays.description"),
        //   techUse: ["Terminal"],
        //   linkRepo: "https://github.com/Aubanyx/holidays-CLI",
        //   linkSite: "#",
        //   img: [
        //     "mockup.png",
        //     "terminal.svg",
        //     "Egypt_Historical_Museum.png",
        //     "bcbbTheWho.png",
        //     "Egypt_Historical_Museum.png",
        //     "Egypt_Historical_Museum.png",
        //   ],
        //   state: this.$i18n.t("projects.modal.holidays.online"),
        //   open: false,
        // },
        // {
        //   logo: "terminal.svg",
        //   name: this.$i18n.t("projects.modal.card.name"),
        //   description: this.$i18n.t("projects.modal.card.description"),
        //   techUse: ["Terminal"],
        //   linkRepo: "https://github.com/Aubanyx/npx-card",
        //   linkSite: "#",
        //   img: [
        //     "mockup.png",
        //     "terminal.svg",
        //     "Egypt_Historical_Museum.png",
        //     "bcbbTheWho.png",
        //     "Egypt_Historical_Museum.png",
        //     "Egypt_Historical_Museum.png",
        //   ],
        //   state: this.$i18n.t("projects.modal.card.online"),
        //   open: false,
        // },
      ],
    };
  },
  methods: {
    hideCircle(index) {
      const circle = this.$refs[`hoverCircle-${index}`][0];
      const child = circle.children[0];

      circle.style.width = "0";
      circle.style.height = "0";
      // circle.style.left = "unset";
      // circle.style.top = "unset";
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

      const index = event.target
        .closest(".project__element")
        .getAttribute("data-index");
      const circle = this.$refs[`hoverCircle-${index}`][0];
      const parent = circle.parentElement;
      const parentRect = parent.getBoundingClientRect();
      const child = circle.children[0];

      circle.style.display = "flex";
      child.style.display = "block";
      circle.style.width = "100px";
      circle.style.height = "100px";

      let circleX = event.clientX - parentRect.left;
      let circleY = event.clientY - parentRect.top;

      const animateCircle = () => {
        circle.style.left = circleX + "px";
        circle.style.top = circleY + "px";
        requestAnimationFrame(animateCircle);
      };

      requestAnimationFrame(animateCircle);

      parent.addEventListener("mouseleave", () => {
        this.hideCircle(index);
      });
    },
    updateModal(item) {
      this.$store.state.selectedProjects = item;
      this.$store.state.openModal = true;
      document.body.style.overflowY = "hidden";
    },
  },
  mounted() {
    this.$store.state.selectedProjects = this.projects[0];
  },
};
</script>

<style lang="scss" scoped>
.container {
  background: var(--backgroundColor);
  //height: 100vh;
  //padding-top: 10rem;
  padding: 10rem 5rem;
  display: flex;
  flex-direction: column;

  .projects__title {
    @include Title;
    margin-bottom: 1rem;
  }

  .projects__subtitle {
    @include Subtitle;
    margin-bottom: 10rem;
  }

  .hover-content {
    //display: flex;
    //background: rgba(0,0,0,.5);

    .listProject {
      display: flex;
      flex-wrap: wrap;

      .project__element {
        width: 100%;
        height: 50vw;
        background: var(--firstColor);
        //overflow: hidden;
        position: relative;
        margin: 8rem 0;
        border-radius: 1rem;

        &:first-of-type {
          margin-top: 0;
        }

        &:last-of-type {
          margin-bottom: 0;
        }

        .project__element__text {
          display: flex;
          align-items: center;
          width: 100%;
          padding: 2rem 0;
          border-bottom: 1px solid #f2f2f2;
          justify-content: space-between;

          .project__element__text--name {
            font-size: 2rem;
            color: white;
          }

          .project__element__text--participants {
            height: 3rem;
            width: 3rem;
            filter: invert(1);
          }
        }

        .projectHover {
          //width: 0;
          //height: 0;
          //border-radius: 50%;
          //background-color: var(--firstColor);
          //position: absolute;
          ////left: 0;
          ////top: 0;
          //transform: translate(-50%, -50%);
          //z-index: 1;
          //cursor: pointer;
          ////display: flex;
          display: none;
          //justify-content: center;
          //align-items: center;
          //color: white;
          //box-shadow: 0 0 20px 0 #272727;
          ////transition: width 0.3s ease-in-out, height 0.3s ease-in-out;
          //transition: width 0.3s ease-in-out, height 0.3s ease-in-out,
          //  left 0.05s linear, top 0.05s linear;
          //will-change: left, top;

          //  &:hover ~ .project__subElement {
          //    transform: scale(1.2);
          //    filter: grayscale(0);
          //  }
          .projectHoverText {
            display: none;
          }
        }

        //.projectHover:hover ~ .project__subElement,
        //.project__subElement:hover {
        //  transform: scale(1.2);
        //  filter: grayscale(0);
        //}

        .project__subElement {
          width: 100%;
          height: 100%;
          display: flex;
          justify-content: center;
          align-items: center;
          position: relative;
          background-position: center;
          background-size: cover;
          background-repeat: no-repeat;
          transition: 0.2s ease-out;
          filter: grayscale(1);
          cursor: pointer;

          //&:hover {
          //  transform: scale(1.2);
          //  filter: grayscale(0);
          //}

          //&:hover .project--linkView {
          //  opacity: 1;
          //  //border: 1px solid var(--firstColor);
          //  width: 100%;
          //  height: 100%;
          //  //font-size: 1rem;
          //  font-size: 2rem;
          //  color: white;
          //}

          //&:hover::before {
          //  //background: blue;
          //  opacity: 0.1;
          //}
          //
          //&::before {
          //  content: "";
          //  position: absolute;
          //  //background: orange;
          //  width: 100%;
          //  height: 100%;
          //  display: flex;
          //  justify-content: center;
          //  align-items: center;
          //  //border-radius: 100%;
          //  //background: #aeaeae;
          //  opacity: 0.5;
          //  transition: 0.2s ease-out;
          //}

          //.projectHover {
          //  width: 100px;
          //  height: 100px;
          //  border-radius: 50%;
          //  background-color: red;
          //  position: absolute;
          //  left: 0;
          //  top: 0;
          //  transform: translate(-50%, -50%);
          //}

          .project--linkView/*, .project--linkRepo, .project--linkSite*/ {
            width: 0;
            height: 0;
            font-size: 0;
            //border-radius: 100%;
            display: flex;
            justify-content: center;
            align-items: center;
            z-index: 1;
            opacity: 0;
            transition: 0.2s ease-out;
            cursor: pointer;

            //&:hover {
            //  opacity: 1;
            //}
          }
          //.project--linkView {
          //  //position: absolute;
          //  //left: 7rem;
          //
          //  &:nth-child(even):hover {
          //    background: var(--firstColor);
          //    //background: antiquewhite;
          //    opacity: 0.9;
          //    //width: 100%;
          //  }
          //}

          .project--linkView {
            //position: absolute;
            //left: 7rem;

            //&:nth-of-type(even):hover {
            //  background: var(--firstColor);
            //  opacity: 0.9;
            //  //width: 100%;
            //}
            //
            //&:nth-of-type(odd):hover {
            //  background: antiquewhite;
            //  opacity: 0.9;
            //  //width: 100%;
            //}
          }

          //.project--linkRepo {
          //  position: absolute;
          //  top: 8rem;
          //  right: 7rem;
          //
          //  &:hover {
          //    background: green;
          //  }
          //}
          //.project--linkSite {
          //  position: absolute;
          //  bottom: 8rem;
          //  right: 7rem;
          //
          //  &:hover {
          //    background: red;
          //  }
          //}
        }
      }
    }
  }
  .projects__button {
    @include animationCircleHover;
    background: var(--color-primary);
    color: white;
    width: fit-content;
    padding: 2.4rem;
    font-size: 2rem;
    border-radius: 5rem;
    z-index: 2;
    //transition: background 0.2s ease, color 0.2s ease !important;
    align-self: center;
    margin: 10rem 0;
    //border: 1px solid var(--color-primary);

    //&:hover {
    //  background: var(--backgroundColor);
    //  color: var(--firstColor);
    //}
  }
}

@media only screen and (min-width: 768px) {
}

@media only screen and (min-width: 1024px) {
  .container {
    .hover-content {
      .listProject {
        padding: 0 15rem;

        .project__element {
          width: 100%;
          height: 50vh;
          margin: 2.5rem 0;
          overflow: hidden;

          .projectHover {
            width: 0;
            height: 0;
            border-radius: 50%;
            background-color: var(--firstColor);
            position: absolute;
            //left: 0;
            //top: 0;
            transform: translate(-50%, -50%);
            z-index: 1;
            cursor: pointer;
            //display: flex;
            display: none;
            justify-content: center;
            align-items: center;
            color: white;
            box-shadow: 0 0 20px 0 #272727;
            //transition: width 0.3s ease-in-out, height 0.3s ease-in-out;
            transition: width 0.3s ease-in-out, height 0.3s ease-in-out,
              left 0.05s linear, top 0.05s linear;
            will-change: left, top;

            &:hover ~ .project__subElement {
              transform: scale(1.2);
              filter: grayscale(0);
            }

            .projectHoverText {
              display: block;
            }
          }

          .projectHover:hover ~ .project__subElement,
          .project__subElement:hover {
            transform: scale(1.2);
            filter: grayscale(0);
          }

          .project__element__text {
            display: none;
          }

          &:nth-child(even) .project__subElement span:hover {
            font-size: 5rem;
          }

          .project__subElement {
          }
        }
      }
    }
  }
}
</style>
