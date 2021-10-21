<template>
  <transition>
    <div v-show="projects.open">
      <div class="overlay" @click="projects.open = !projects.open"></div>
      <div class="modal">
        <img class="img" :src="require('../assets/img/' + projects.img)" alt="image">
      </div>
      <div class="links">
        <a class="linkRepo" :href="projects.linkRepo"><img src="../assets/img/github.svg" alt="Link Github project">
          <p>Github</p></a>
        <span class="separate"></span>
        <a class="linkSite" :href="projects.linkSite"><img src="../assets/img/website.svg" alt="Link website project">
          <p>Website</p></a>
      </div>
    </div>
  </transition>
</template>

<script>
export default {
  name: "ProjectsModal",
  props: [
    'projects'
  ],
}
</script>

<style lang="scss" scoped>
.overlay {
  position: fixed;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  z-index: 99;
  background: url("../assets/img/overlay.png") repeat 0 0;
  opacity: 0.9;
  cursor: pointer;
}

.modal {
  position: absolute;
  top: 280rem;
  left: 15%;
  width: 70%;
  //height: 70%;
  background: white;
  border: 1rem solid black;
  border-radius: 1rem;
  z-index: 99;

  .img {
    width: 100%;
  }
}

.links {
  position: fixed;
  bottom: 0;
  left: 0;
  background: white;
  width: 100%;
  padding: 2rem;
  z-index: 99;
  font-size: 1.6rem;
  display: flex;
  justify-content: space-around;
  align-items: center;

  .linkRepo {
    width: 20%;

    img {
      width: 30%;
    }
  }

  .linkSite {
    width: 20%;

    img {
      width: 30%;
    }
  }

  .separate {
    display: inline-block;
    width: 1px;
    height: 5rem;
    background: $firstColor;
  }
}

//.fade-enter-active,
//.fade-leave-active {
//  transition: opacity 0.5s ease;
//}
//
//
//.fade-enter,
//.fade-leave-to {
//  opacity: 0;
//}
</style>
