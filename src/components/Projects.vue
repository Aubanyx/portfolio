<template>
  <section id="projects" class="container">
    <h2 class="projects__title">My projects</h2>
    <h3 class="projects__subtitle">Most recent work</h3>
    <div class="hover-content">
      <ul class="listProject">
        <li
          class="project__element"
          v-for="(item, index) in projects"
          :key="'item' + index"
          :style="{ 'background-color': item.backColor }"
        >
          <div
            class="project__subElement"
            :style="{
              'background-image':
                'url(' + require('../assets/img/' + item.img[0]) + ')',
            }"
          >
            <span class="project--linkView" @click="updateModal(item)">{{
              item.name
            }}</span>
          </div>
        </li>
      </ul>
    </div>
    <ProjectsModal />
  </section>
</template>

<script>
import ProjectsModal from "@/components/ProjectsModal.vue";

export default {
  name: "Projects",
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
            "mockup.png",
            "Egypt_Historical_Museum.png",
            "Egypt_Historical_Museum.png",
            "bcbbTheWho.png",
            "Egypt_Historical_Museum.png",
            "Egypt_Historical_Museum.png",
          ],
          backColor: "green",
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
            "egyptMockup.jpg",
            "Egypt_Historical_Museum.png",
            "Egypt_Historical_Museum.png",
            "bcbbTheWho.png",
            "Egypt_Historical_Museum.png",
            "Egypt_Historical_Museum.png",
          ],
          backColor: "blue",
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
            "mockup.png",
            "bcbbTheWho.png",
            "Egypt_Historical_Museum.png",
            "bcbbTheWho.png",
            "Egypt_Historical_Museum.png",
            "Egypt_Historical_Museum.png",
          ],
          backColor: "violet",
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
            "mockup.png",
            "bcbbTheWho.png",
            "Egypt_Historical_Museum.png",
            "bcbbTheWho.png",
            "Egypt_Historical_Museum.png",
            "Egypt_Historical_Museum.png",
          ],
          backColor: "beige",
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
          backColor: "cyan",
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
          backColor: "red",
          state: this.$i18n.t("projects.modal.pomodoro.online"),
          open: false,
        },
        {
          logo: "terminal.svg",
          name: this.$i18n.t("projects.modal.holidays.name"),
          description: this.$i18n.t("projects.modal.holidays.description"),
          techUse: ["Terminal"],
          linkRepo: "https://github.com/Aubanyx/holidays-CLI",
          linkSite: "#",
          img: [
            "mockup.png",
            "terminal.svg",
            "Egypt_Historical_Museum.png",
            "bcbbTheWho.png",
            "Egypt_Historical_Museum.png",
            "Egypt_Historical_Museum.png",
          ],
          backColor: "purple",
          state: this.$i18n.t("projects.modal.holidays.online"),
          open: false,
        },
        {
          logo: "terminal.svg",
          name: this.$i18n.t("projects.modal.card.name"),
          description: this.$i18n.t("projects.modal.card.description"),
          techUse: ["Terminal"],
          linkRepo: "https://github.com/Aubanyx/npx-card",
          linkSite: "#",
          img: [
            "mockup.png",
            "terminal.svg",
            "Egypt_Historical_Museum.png",
            "bcbbTheWho.png",
            "Egypt_Historical_Museum.png",
            "Egypt_Historical_Museum.png",
          ],
          backColor: "yellow",
          state: this.$i18n.t("projects.modal.card.online"),
          open: false,
        },
      ],
    };
  },
  methods: {
    updateModal(item) {
      this.$store.state.selectedProjects = item;
      this.$store.state.openModal = true;
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
  padding-top: 10rem;

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
      //background-image: url('../assets/img/design.svg');

      .project__element {
        width: 100%;
        height: 50vw;
        overflow: hidden;

        &:nth-child(even) .project__subElement span:hover {
          background: var(--firstColor);
          opacity: 0.9;
          color: var(--quaternaryColor);
          /* height: fit-content; */
          /* padding: 1rem 0; */
          text-decoration: underline overline 0.3rem;
          font-size: 2rem;
          //width: 100%;
        }

        &:nth-child(odd) .project__subElement span:hover {
          background: antiquewhite;
          opacity: 0.9;
          color: rgba(0, 0, 0, 0.98);
          //width: 100%;
        }

        .project__subElement {
          //background: yellow;
          width: 100%;
          height: 100%;
          display: flex;
          justify-content: center;
          align-items: center;
          position: relative;
          background-position: center;
          background-size: cover;
          //background-size: 8rem;
          background-repeat: no-repeat;
          transition: 0.2s ease-out;
          filter: grayscale(1);

          &:hover {
            transform: scale(1.2);
            filter: grayscale(0);
          }

          &:hover .project--linkView {
            opacity: 1;
            //border: 1px solid var(--firstColor);
            width: 100%;
            height: 100%;
            //font-size: 1rem;
            font-size: 2rem;
            color: white;
          }

          //&:hover .project--linkRepo, &:hover .project--linkSite {
          //  opacity: 1;
          //  width: 20%;
          //  height: 20%;
          //  font-size: 1rem;
          //}

          //&:hover .project--linkRepo {
          //  border: 1px solid green;
          //}
          //
          //&:hover .project--linkSite {
          //  border: 1px solid red;
          //}

          &:hover::before {
            //background: blue;
            opacity: 0.1;
          }

          &::before {
            content: "";
            position: absolute;
            //background: orange;
            width: 100%;
            height: 100%;
            display: flex;
            justify-content: center;
            align-items: center;
            //border-radius: 100%;
            background: #aeaeae;
            opacity: 0.5;
            transition: 0.2s ease-out;
          }

          //&:hover::after {
          //  background: orange;
          //  width: 40%;
          //  height: 40%;
          //}

          //&::after {
          //  content: "";
          //  position: absolute;
          //  width: 0;
          //  height: 0;
          //  display: flex;
          //  justify-content: center;
          //  align-items: center;
          //  //background: red;
          //  border-radius: 100%;
          //  transition: .2s ease-out;
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
}

@media only screen and (min-width: 768px) {
}

@media only screen and (min-width: 1024px) {
  .container {
    .hover-content {
      .listProject {
        .project__element {
          width: 50%;
          height: 25vw;

          &:nth-child(even) .project__subElement span:hover {
            font-size: 5rem;
            //width: 100%;
          }

          .project__subElement {
            //width: 25%;
            //height: 25vw;
          }
        }
      }
    }
  }
}
</style>
