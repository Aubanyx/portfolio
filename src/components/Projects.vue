<template>
  <section id="projects" class="container">
    <ul class="listProject">
      <li class="project">Project 01</li>
      <li class="project">Project 02</li>
      <li class="project">Project 03</li>
      <li class="project">Project 04</li>
      <li class="project">Project 05</li>
      <li class="project">Project 06</li>
      <li class="project">Project 07</li>
      <li class="project">Project 08</li>
    </ul>
  </section>
</template>

<script>
export default {
  name: "Projects"
}
</script>

<style lang="scss" scoped>
.container {
  background: orange;
  height: 100vh;

  .listProject {
    display: flex;
    flex-wrap: wrap;

    .project {
      background: yellow;
      width: 50%;
      height: 50vw;
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
