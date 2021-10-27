<template>
  <section id="projects" class="container">
    <h2 class="projects__title">My projects</h2>
    <h3 class="projects__subtitle">Most recent work</h3>
    <div class="hover-content">
      <ul class="listProject">
        <li class="project__element" v-for="(item, index) in projects" :key="'item'+index" :style="{'background-color': item.backColor}">
          <div class="project__subElement"
               :style="{'background-image': 'url(' + require('../assets/img/'+ item.img[0]) +')'}">
            <span class="project--linkView" @click="updateModal(item)">{{ item.name }}</span>
<!--            <a class="project&#45;&#45;linkRepo" href="#">REPO</a>-->
<!--            <a class="project&#45;&#45;linkSite" href="#">SITE</a>-->
          </div>
<!--          <ProjectsModal :projects="item"/>-->
        </li>
      </ul>
    </div>
    <ProjectsModal />
  </section>
</template>

<script>
import ProjectsModal from "@/components/ProjectsModal.vue"

export default {
  name: "Projects",
  components: { ProjectsModal },
  data() {
    return {
      projects: [
        {
          logo: "photo.png",
          name: "Portfolio",
          description: "lorem ipsum dolor sit amet, consectetur",
          techUse: ["Html", "Css", "Scss", "Javascript"],
          linkRepo: "https://github.com/Aubanyx/portfolio",
          linkSite: "#",
          img: ["Egypt_Historical_Museum.png", "Egypt_Historical_Museum.png", "bcbbTheWho.png", "Egypt_Historical_Museum.png", "Egypt_Historical_Museum.png"],
          backColor: "green",
          state: "online",
          open: false,
        },
        {
          logo: "egypt.png",
          name: "Museum Project",
          description: "lorem ipsum dolor sit amet, consectetur lorem ipsum dolor sit amet, consectetur lorem ipsum dolor sit amet, consectetur lorem ipsum dolor sit amet, consectetur lorem ipsum dolor sit amet, consectetur lorem ipsum dolor sit amet, consectetur",
          techUse: ["Html", "Css", "Scss", "Javascript"],
          linkRepo: "https://github.com/Aubanyx/museum-project",
          linkSite: "https://aubanyx.github.io/museum-project/",
          img: ["Egypt_Historical_Museum.png", "Egypt_Historical_Museum.png", "bcbbTheWho.png", "Egypt_Historical_Museum.png", "Egypt_Historical_Museum.png"],
          backColor: "blue",
          state: "online",
          open: false,

        },
        {
          logo: "bcbb.svg",
          name: "Forum bcbb the who",
          description: "lorem ipsum dolor sit amet, consectetur",
          techUse: ["Html", "Css", "Scss", "Javascript"],
          linkRepo: "https://github.com/Aubanyx/Forum-bcbb-the-who",
          linkSite: "https://bcbb-thewho.herokuapp.com/index.php",
          img: ["bcbbTheWho.png", "Egypt_Historical_Museum.png", "bcbbTheWho.png", "Egypt_Historical_Museum.png", "Egypt_Historical_Museum.png"],
          backColor: "violet",
          state: "online",
          open: false,
        },
        {
          logo: "burger.png",
          name: "Chaos Coffee Restaurant",
          description: "lorem ipsum dolor sit amet, consectetur",
          techUse: ["Html", "Css", "Scss", "Javascript"],
          linkRepo: "https://github.com/Aubanyx/ChaosCoffeeRestaurant",
          linkSite: "#",
          img: ["bcbbTheWho.png", "Egypt_Historical_Museum.png", "bcbbTheWho.png", "Egypt_Historical_Museum.png", "Egypt_Historical_Museum.png"],
          backColor: "beige",
          state: "offline",
          open: false,
        },
        {
          logo: "leaf.png",
          name: "Mwenbwa Corses",
          description: "lorem ipsum dolor sit amet, consectetur",
          techUse: ["Html", "Css", "Scss", "Javascript"],
          linkRepo: "https://github.com/Aubanyx/mwenbwa-corses",
          linkSite: "#",
          img: ["bcbbTheWho.png", "Egypt_Historical_Museum.png", "bcbbTheWho.png", "Egypt_Historical_Museum.png", "Egypt_Historical_Museum.png"],
          backColor: "cyan",
          state: "offline",
          open: false,
        },
        {
          logo: "pomodoro.png",
          name: "React Pomodoro",
          description: "lorem ipsum dolor sit amet, consectetur",
          techUse: ["Html", "Css", "Scss", "Javascript"],
          linkRepo: "https://github.com/Aubanyx/react-pomodoro",
          linkSite: "https://auban-react-pomodoro.netlify.app\n",
          img: ["reactPomodoro.png", "Egypt_Historical_Museum.png", "bcbbTheWho.png", "Egypt_Historical_Museum.png", "Egypt_Historical_Museum.png"],
          backColor: "red",
          state: "online",
          open: false,
        },
        {
          logo: "terminal.svg",
          name: "Holidays CLI",
          description: "lorem ipsum dolor sit amet, consectetur",
          techUse: ["Html", "Css", "Scss", "Javascript"],
          linkRepo: "https://github.com/Aubanyx/holidays-CLI",
          linkSite: "#",
          img: ["Egypt_Historical_Museum.png", "Egypt_Historical_Museum.png", "bcbbTheWho.png", "Egypt_Historical_Museum.png", "Egypt_Historical_Museum.png"],
          backColor: "purple",
          state: "offline",
          open: false,
        },
        {
          logo: "terminal.svg",
          name: "Npx Card",
          description: "lorem ipsum dolor sit amet, consectetur",
          techUse: ["Html", "Css", "Scss", "Javascript"],
          linkRepo: "https://github.com/Aubanyx/npx-card",
          linkSite: "#",
          img: ["Egypt_Historical_Museum.png", "Egypt_Historical_Museum.png", "bcbbTheWho.png", "Egypt_Historical_Museum.png", "Egypt_Historical_Museum.png"],
          backColor: "yellow",
          state: "offline",
          open: false,
        }
      ]
    }
  },
  methods: {
    updateModal(item) {
      this.$store.state.selectedProjects = item;
      console.log("openModal", this.$store.state.openModal);

      this.$store.state.openModal = true;

      console.log("selectedProjects", this.$store.state.selectedProjects);
      console.log("openModal", this.$store.state.openModal);
    }
  },
  mounted() {
    this.$store.state.selectedProjects = this.projects[0];
  }
}
</script>

<style lang="scss" scoped>
.container {
  //background: orange;
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
        width: 50%;
        height: 50vw;
        overflow: hidden;

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
          transition: .2s ease-out;

          &:hover {
            transform: scale(1.2);
          }

          &:hover .project--linkView {
            opacity: 1;
            //border: 1px solid $firstColor;
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
            transition: .2s ease-out;
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
            transition: .2s ease-out;
            cursor: pointer;

            //&:hover {
            //  opacity: 1;
            //}
          }
          .project--linkView {
            //position: absolute;
            //left: 7rem;

            &:hover {
              background: $firstColor;
              opacity: 0.9;
              //width: 100%;
            }
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
          width: 25%;
          height: 25vw;

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
