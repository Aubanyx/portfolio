<template>
  <section id="projects" class="container">
    <h2 class="projects__title">My projects</h2>
    <h3 class="projects__subtitle">Most recent work</h3>
    <div class="hover-content">
      <ul class="listProject">
        <li class="project__element" v-for="(item, index) in projects" :key="'item'+index">
          <div class="project__subElement" :style="{'background-image': 'url(' + require('../assets/img/'+ item.img +'.svg') +')'}">
            <a class="project--link" href="#">{{ item.state }}</a>
          </div>
<!--          <a class="project&#45;&#45;link" href="#">View<br />project</a>-->
        </li>
<!--        <div class="overlay" v-for="(item, index) in projects" :key="'item'+index">-->
<!--          <div class="text">View<br />project</div>-->
<!--        </div>-->
      </ul>
    </div>
  </section>
</template>

<script>
export default {
  name: "Projects",
  data() {
    return {
      projects: [
        {
          img: "design",
          state: "View project",

        },
        {
          img: "design",
          state: "View project",
        },
        {
          img: "design",
          state: "View project",
        },
        {
          img: "design",
          state: "View project",
        },
        {
          img: "design",
          state: "View project",
        },
        {
          img: "design",
          state: "View project",
        },
        {
          img: "design",
          state: "View project",
        },
        {
          img: "design",
          state: "Coming soon",
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
  padding: 10rem 0;

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
          background-repeat: no-repeat;
          transition: .2s ease-out;

          &:hover {
            transform: scale(1.2);
          }

          &:hover::before {
            background: blue;
            //opacity: 0.3;
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

          &:hover::after {
            background: orange;
            width: 40%;
            height: 40%;
          }

          &::after {
            content: "";
            position: absolute;
            width: 0;
            height: 0;
            display: flex;
            justify-content: center;
            align-items: center;
            //background: red;
            border-radius: 100%;
            transition: .2s ease-out;
          }

          .project--link {
            width: 100%;
            height: 100%;
            //border-radius: 100%;
            display: flex;
            justify-content: center;
            align-items: center;
            z-index: 1;
            opacity: 0;
            transition: .2s ease-out;

            &:hover {
              opacity: 1;
            }
          }
        }
      }
    }
  }
}

@media only screen and (min-width: 768px) {

}

@media only screen and (min-width: 1024px) {
  .container {
    .hover-content{
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
