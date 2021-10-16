<template>
  <section id="projects" class="container">
    <h2 class="projects__title">My projects</h2>
    <h3 class="projects__subtitle">Most recent work</h3>
    <div class="hover-content">
      <ul class="listProject">
        <li class="project" :style="{'background-image': 'url(' + require('../assets/img/'+ item.img +'.svg') +')'}" v-for="(item, index) in projects" :key="'item'+index">Project 01</li>
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
          test: "01",
        },
        {
          img: "design",
          test: "02",
        },
        {
          img: "design",
          test: "03",
        },
        {
          img: "design",
          test: "04",
        },
        {
          img: "design",
          test: "05",
        },
        {
          img: "design",
          test: "06",
        },
        {
          img: "design",
          test: "07",
        },
        {
          img: "design",
          test: "08",
        }
      ]
    }
  },
}
</script>

<style lang="scss" scoped>
.container {
  //background: orange;
  height: 100vh;
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


      .project {
        //background: yellow;
        width: 50%;
        height: 50vw;
        display: flex;
        justify-content: center;
        align-items: center;
      }
    }
  }
}

@media only screen and (min-width: 768px) {

}

@media only screen and (min-width: 1024px) {
  .container {
    .listProject {
      .project {
        width: 25%;
        height: 25vw;
      }
    }
  }
}
</style>
