<template>
  <transition>
    <div v-show="this.openModal">
      <div class="overlay" @click="modalClose()"></div>
      <div class="modal">
        <div class="modal__img">
          <div class="modal__img__pictures">
            <img id="pic1" class="picture" v-for="(image, index) in modal.img" :key="image.id" @mouseover="changeImage(index)" :src="require('../assets/img/' + image)" alt="image" >
          </div>
          <div id="containerMainPic" class="modal__img__main" @mousemove="zoomIn(); move(event)" @mouseleave="zoomOut()">
            <div class="modal__img__main__zoom"></div>
            <img id="pic" class="img" :src="require('../assets/img/' + this.modal.img[this.myImageIndex])" alt="image">
          </div>
        </div>
        <div class="modal__infos">
          <h3 class="modal__infos--title">{{ modal.name }}</h3>
          <p class="modal__infos--state" :class="{ 'modal__infos--state-off' : modal.state === 'offline' }">{{ modal.state }}</p>
          <p class="modal__infos--description">{{ modal.description }}</p>
          <p class="modal__infos--techs">Technologies used : <span class="modal__infos--techs--tech" v-for="tech in modal.techUse" :key="tech.id">{{ tech }}</span></p>
          <div class="modal__infos__links">
            <a class="modal__infos__links--linkRepo" :href="modal.linkRepo">GitHub<img class="imgGithub" src="../assets/img/githubRed.svg" alt="Link Github project"></a>
            <a class="modal__infos__links--linkWeb" v-if="modal.state === 'online'" :href="modal.linkSite">Website<img class="imgWebsite" src="../assets/img/websiteRed.svg" alt="Link website project"></a>
          </div>
        </div>
      </div>
    </div>
  </transition>
</template>

<script>
export default {
  name: "ProjectsModal",
  // props: [
  //   'projects'
  // ],
  data() {
    return {
      myImageIndex: 0,
      picture: "",
      containerMain: "",
      w1: "",
      h1: "",
      clientRect: "",
      x: "",
      y: "",
    }
  },
  computed: {
    modal() {
      return this.$store.state.selectedProjects;
    },
    openModal() {
      return this.$store.state.openModal;
    }
  },
  methods: {
    modalClose() {
      this.$store.state.openModal = false ;
    },
    changeImage(newImageIndex) {
      this.myImageIndex = newImageIndex;
    },
    zoomIn() {
      this.w1 = this.containerMain.offsetWidth;
      this.h1 = this.containerMain.offsetHeight;
      this.clientRect = this.containerMain.getBoundingClientRect();

      console.log(this.h1, this.w1);
      console.log(this.clientRect);
      // this.picture.style.transform = "scale(2)";
    },
    zoomOut() {
      // this.picture.style.transform = "scale(1)";
    },
    move(event) {
      this.x = event.offsetX;
      this.y = event.offsetY;
      console.log(this.x, this.y);
    }
  },

  mounted() {
    this.picture = document.getElementById("pic");
    this.containerMain = document.getElementById("containerMainPic");

    // this.w1 = this.picture.offsetWidth;
    // this.h1 = this.picture.offsetHeight;

    // this.clientRect = this.containerMain.getBoundingClientRect();

    console.log(this.h1, this.w1);

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
      display: flex;
      flex-direction: column;
      margin-right: 2rem;

      .picture {
        width: 5rem;
        height: 5rem;
        border: 1px solid black;
        margin-bottom: 1rem;
        object-fit: cover;
        transition: .2s ease;

        &:hover {
          border-color: $firstColor;
        }

        &:last-child {
          margin-bottom: 0;
        }
      }
    }

    .modal__img__main {
      //position: relative;
      border: 1px solid black;
      width: 100%;


      .modal__img__main__zoom {
        position: absolute;
        background-color: $firstColor;
        opacity: 0.8;
        width: 4rem;
        height: 4rem;
      }

      .img {
        width: 100%;
        object-fit: contain;
      }
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
      transition: .2s ease;

      &:hover {
        background: darkseagreen;
        color: white;
      }
    }

    .modal__infos--state-off {
      margin-bottom: 2rem;
      color: $firstColor;
      border: 1px solid $firstColor;
      border-radius: 1rem;
      font-size: 1.2rem;
      padding: 0.5rem;

      &:hover {
        background: $firstColor;
        color: white;
      }
    }

    .modal__infos--description {
      margin-bottom: 2rem;
      font-size: 2rem;
      font-weight: 100;
    }

    .modal__infos--techs {
      font-size: 1.2rem;
      margin-bottom: 5rem;

      .modal__infos--techs--tech {
        margin-right: 1rem;
        border: 1px solid dodgerblue;
        border-radius: 2rem;
        padding: 0.5rem;
        color: dodgerblue;
        transition: .2s ease;

        &:hover {
          background: dodgerblue;
          color: white;
        }
      }
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

  //.separate {
  //  display: inline-block;
  //  width: 1px;
  //  height: 5rem;
  //  background: $firstColor;
  //}
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
