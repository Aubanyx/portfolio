<template>
  <transition>
    <div v-show="projects.open">
      <div class="overlay" @click="modal.open = !modal.open"></div>
      <div class="modal">
        <div class="modal__img">
          <div class="modal__img__pictures">
            <img id="pic1" class="picture" @mouseover="changeImage(projects.img1)" :src="require('../assets/img/' + projects.img1)" alt="image" >
            <img id="pic2" class="picture" @mouseover="changeImage(projects.img2)" :src="require('../assets/img/' + projects.img2)" alt="image" >
            <img id="pic3" class="picture" @mouseover="changeImage(projects.img3)" :src="require('../assets/img/' + projects.img3)" alt="image" >
            <img id="pic4" class="picture" @mouseover="changeImage(projects.img4)" :src="require('../assets/img/' + projects.img4)" alt="image" >
            <img id="pic5" class="picture" @mouseover="changeImage(projects.img5)" :src="require('../assets/img/' + projects.img5)" alt="image" >
          </div>
<!--          <img id="pic" class="img" :src="require('../assets/img/' + projects.img1)" alt="image" >-->
          <img id="pic" class="img" :src="require('../assets/img/' + this.myImage)" alt="image" >
        </div>
        <div class="modal__infos">
          <h3 class="modal__infos--title">{{ projects.name }}</h3>
          <p class="modal__infos--state" :class="{ 'modal__infos--state-off' : projects.state === 'offline' }">{{ projects.state }}</p>
          <p class="modal__infos--description">{{ projects.description }}</p>
          <div class="modal__infos__links">
            <a class="modal__infos__links--linkRepo" :href="projects.linkRepo">GitHub<img class="imgGithub" src="../assets/img/githubRed.svg" alt="Link Github project"></a>
            <a class="modal__infos__links--linkWeb" :href="projects.linkSite">Website<img class="imgWebsite" src="../assets/img/websiteRed.svg" alt="Link website project"></a>
          </div>
        </div>
      </div>
<!--      <div class="links">-->
<!--        <a class="linkRepo" :href="projects.linkRepo"><img src="../assets/img/github.svg" alt="Link Github project">-->
<!--          <p>Github</p></a>-->
<!--        <span class="separate"></span>-->
<!--        <a class="linkSite" :href="projects.linkSite"><img src="../assets/img/website.svg" alt="Link website project">-->
<!--          <p>Website</p></a>-->
<!--      </div>-->
    </div>
  </transition>
</template>

<script>
export default {
  name: "ProjectsModal",
  props: [
    'projects'
  ],
  data() {
    return {
      myImage: this.projects.img1,
    }
  },
  computed: {
    modal() {
      return this.projects;
    },
  },
  methods: {
    changeImage(newImage) {
      this.myImage = newImage;
    }
  },

  mounted() {
    // this.picture = document.querySelector("#pic");
    // let picture1 = document.querySelector("#pic1");
    // let picture2 = document.querySelector("#pic2");
    // let picture3 = document.querySelector("#pic3");
    // let picture4 = document.querySelector("#pic4");
    // let picture5 = document.querySelector("#pic5");

    // let picList = [this.picture, picture1, picture2, picture3, picture4, picture5];
    //
    // let picActive = 1;
  }
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
  display: flex;
  padding: 5rem;

  .modal__img {
    display: flex;
    width: 50%;

    .modal__img__pictures {
      .picture {
        width: 5rem;
        height: 5rem;
        border: 1px solid black;
        margin-bottom: 1rem;
        object-fit: cover;

        &:last-child {
          margin-bottom: 0;
        }
      }
    }

    .img {
      width: 70%;
    }
  }

  .modal__infos {
    display: flex;
    flex-direction: column;
    width: 100%;

    //justify-content: center;
    align-items: flex-start;
    text-align: left;
    padding-left: 5rem;

    .modal__infos--title {
      font-size: 4rem;
      margin-bottom: 2rem;
      font-weight: bold;
    }

    .modal__infos--state {
      margin-bottom: 2rem;
      color: darkseagreen;
      border: 1px solid darkseagreen;
      border-radius: 1rem;
      font-size: 1.2rem;
      padding: 0.5rem;
    }

    .modal__infos--state-off {
      margin-bottom: 2rem;
      color: $firstColor;
      border: 1px solid $firstColor;
      border-radius: 1rem;
      font-size: 1.2rem;
      padding: 0.5rem;
    }

    .modal__infos--description {
      margin-bottom: 2rem;
      font-size: 2rem;
      font-weight: 100;
    }

    .modal__infos__links {
      display: flex;

      .modal__infos__links--linkRepo {
        margin-right: 2rem;
      }

      .modal__infos__links--linkWeb, .modal__infos__links--linkRepo {
        padding: 1rem;
        color: $firstColor;
        border: 1px solid $firstColor;
        font-size: 1.5rem;
        transition: .2s ease;

        display: flex;
        justify-content: center;
        align-items: center;
        
        &:hover {
          background: $firstColor;
          color: white;
        }

        .imgGithub, .imgWebsite {
          width: 3rem;
          margin-left: 1rem;
          transition: .2s ease;
        }
      }
      .modal__infos__links--linkRepo:hover .imgGithub {
        filter: invert(100%) sepia(0%) saturate(0%) hue-rotate(318deg) brightness(250%) contrast(107%);
      }

      .modal__infos__links--linkWeb:hover .imgWebsite {
        filter: invert(100%) sepia(0%) saturate(0%) hue-rotate(318deg) brightness(250%) contrast(107%);
      }
    }
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
