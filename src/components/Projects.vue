<template>
  <section id="projects" class="container">
    <h2 class="projects__title">My projects</h2>
    <h3 class="projects__subtitle">Most recent work</h3>
    <div class="hover-content">
      <ul class="listProject">
        <li class="project__element" v-for="(item, index) in projects" :key="'item'+index" :style="{'background-color': item.backColor}">
          <div class="project__subElement"
               :style="{'background-image': 'url(' + require('../assets/img/'+ item.logo) +')'}">
            <span class="project--linkView" @click="item.open = !item.open">{{ item.state }}</span>
<!--            <a class="project&#45;&#45;linkRepo" href="#">REPO</a>-->
<!--            <a class="project&#45;&#45;linkSite" href="#">SITE</a>-->
          </div>
          <ProjectsModal :projects="item"/>
        </li>
      </ul>
    </div>
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
          state: "View project",
          linkRepo: "https://github.com/Aubanyx/portfolio",
          linkSite: "",
          img: "#",
          backColor: "green",
          open: false
        },
        {
          logo: "egypt.png",
          state: "View project",
          linkRepo: "https://github.com/Aubanyx/museum-project",
          linkSite: "https://aubanyx.github.io/museum-project/",
          img: "Egypt_Historical_Museum.png",
          backColor: "blue",
          open: false

        },
        {
          logo: "bcbb.svg",
          state: "View project",
          linkRepo: "https://github.com/Aubanyx/Forum-bcbb-the-who",
          linkSite: "https://bcbb-thewho.herokuapp.com/index.php",
          img: "bcbbTheWho.png",
          backColor: "violet",
          open: false
        },
        {
          logo: "burger.png",
          state: "View project",
          linkRepo: "https://github.com/Aubanyx/ChaosCoffeeRestaurant",
          linkSite: "#",
          img: "#",
          backColor: "beige",
          open: false
        },
        {
          logo: "leaf.png",
          state: "View project",
          linkRepo: "https://github.com/Aubanyx/mwenbwa-corses",
          linkSite: "",
          img: "#",
          backColor: "cyan",
          open: false
        },
        {
          logo: "pomodoro.png",
          state: "View project",
          linkRepo: "https://github.com/Aubanyx/react-pomodoro",
          linkSite: "https://auban-react-pomodoro.netlify.app\n",
          img: "reactPomodoro.png",
          backColor: "red",
          open: false
        },
        {
          logo: "terminal.svg",
          state: "View project",
          linkRepo: "https://github.com/Aubanyx/holidays-CLI",
          linkSite: "",
          img: "#",
          backColor: "purple",
          open: false
        },
        {
          logo: "terminal.svg",
          state: "View project",
          linkRepo: "https://github.com/Aubanyx/npx-card",
          linkSite: "",
          img: "#",
          backColor: "yellow",
          open: false
        }
      ]
    }
  },
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
          //background-size: cover;
          background-size: 8rem;
          background-repeat: no-repeat;
          transition: .2s ease-out;

          &:hover {
            transform: scale(1.2);
          }

          &:hover .project--linkView {
            opacity: 1;
            border: 1px solid $firstColor;
            width: 30%;
            height: 30%;
            font-size: 1rem;
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
            border-radius: 100%;
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
