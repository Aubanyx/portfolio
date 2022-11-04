<template>
  <transition>
    <div v-show="this.openModal">
      <div class="overlay" @click="modalClose()"></div>
      <div class="modal">
        <!--        <ThreeTest class="threeTest" />-->
        <div class="modal__img">
          <div class="modal__img__pictures">
<!--            <img-->
<!--              id="pic1"-->
<!--              class="picture"-->
<!--              v-for="(image, index) in modal.img"-->
<!--              :key="image.id"-->
<!--              @mouseover="changeImage(index)"-->
<!--              :src="require('../assets/img/' + image)"-->
<!--              alt="image"-->
<!--            />-->
            <div
              id="pic1"
              class="picture"
              v-for="(image, index) in modal.img"
              :key="image.id"
              @mouseover="changeImage(index)"
              :style="{
                'background-image':
                  'url(' + require('../assets/img/' + image) + ')',
              }"
            />
          </div>
          <div
            id="containerMainPic"
            class="modal__img__main"
            @mousemove="bertrandMove()"
            @mouseleave="zoomOut()"
          >
            <div id="zoomRect" class="modal__img__main__zoom"></div>
            <img
              id="pic"
              class="img"
              :src="
                require('../assets/img/' + this.modal.img[this.myImageIndex])
              "
              alt="image"
            />
          </div>
        </div>
        <div class="modal__infos">
          <div id="preview" class="preview"></div>
          <h3 class="modal__infos--title">{{ modal.name }}</h3>
          <p
            class="modal__infos--state"
            :class="{ 'modal__infos--state-off': modal.state === 'offline' }"
          >
            {{ modal.state }}
          </p>
          <p class="modal__infos--description">{{ modal.description }}</p>
          <p class="modal__infos--techs">
            Technologies used :
            <span
              class="modal__infos--techs--tech"
              v-for="tech in modal.techUse"
              :key="tech.id"
              >{{ tech }}</span
            >
          </p>
          <div class="modal__infos__links">
            <a class="modal__infos__links--linkRepo" :href="modal.linkRepo"
              >GitHub<img
                class="imgGithub"
                src="../assets/img/githubRed.svg"
                alt="Link Github project"
            /></a>
            <a
              class="modal__infos__links--linkWeb"
              v-if="modal.state === 'online'"
              :href="modal.linkSite"
              >Website<img
                class="imgWebsite"
                src="../assets/img/websiteRed.svg"
                alt="Link website project"
            /></a>
          </div>
        </div>
      </div>
    </div>
  </transition>
</template>

<script>
// import ThreeTest from "@/components/ThreeJs.vue";

export default {
  name: "ProjectsModal",
  // components: {
  //   ThreeTest,
  // },
  // props: [
  //   'projects'
  // ],
  data() {
    return {
      myImageIndex: 0,
      picture: "",
      beforePicture: "",
      containerMain: "",
      zoomRect: "",
      w1: "",
      h1: "",
      clientRect: "",
      xCursor: "",
      yCursor: "",
      preview: "",
      c: "",
      xMove: "",
      yMove: "",
      position: "",
      zoom: 6,
    };
  },
  computed: {
    modal() {
      return this.$store.state.selectedProjects;
    },
    openModal() {
      return this.$store.state.openModal;
    },
  },
  methods: {
    modalClose() {
      this.$store.state.openModal = false;
    },
    changeImage(newImageIndex) {
      this.myImageIndex = newImageIndex;
    },
    zoomOut() {
      this.preview.style.display = "none";
      this.zoomRect.style.display = "none";
    },
    cursorPos() {
      const event = window.event;

      this.c = this.picture.getBoundingClientRect();
      this.xCursor = event.clientX - this.c.left;
      this.yCursor = event.clientY - this.c.top;

      return { x: this.xCursor, y: this.yCursor };
    },
    bertrandMove() {
      if (screen.width < 1024) {
        return;
      }

      this.preview.style.display = "block";
      this.zoomRect.style.display = "block";

      this.preview.style.backgroundImage =
        "url(" +
        require("../assets/img/" + this.modal.img[this.myImageIndex]) +
        ")";
      this.preview.style.backgroundSize =
        this.picture.width * this.zoom +
        "px " +
        this.picture.height * this.zoom +
        "px";

      this.position = this.cursorPos();

      if (screen.width >= 1024 && screen.width < 1280) {
        this.zoomRect.style.width = "6rem";
        this.zoomRect.style.height = "6rem";

        this.preview.style.width = "36rem";
        this.preview.style.height = "36rem";
      }

      if (screen.width >= 1280 && screen.width < 1440) {
        this.zoomRect.style.width = "7rem";
        this.zoomRect.style.height = "7rem";

        this.preview.style.width = "42rem";
        this.preview.style.height = "42rem";
      }

      if (screen.width >= 1440) {
        this.zoomRect.style.width = "9rem";
        this.zoomRect.style.height = "9rem";

        this.preview.style.width = "58rem";
        this.preview.style.height = "58rem";
      }
      // this.zoomRect.style.width = "7rem";
      // this.zoomRect.style.height = "7rem";
      //
      // this.preview.style.width = "42rem";
      // this.preview.style.height = "42rem";

      this.xMove = this.position.x - parseInt(this.zoomRect.style.width) * 5;
      this.yMove = this.position.y - parseInt(this.zoomRect.style.height) * 5;

      this.xPreview =
        this.position.x * this.zoom - parseInt(this.zoomRect.offsetWidth) * 3;
      this.yPreview =
        this.position.y * this.zoom - parseInt(this.zoomRect.offsetHeight) * 3;

      this.zoomRect.style.left = this.xMove + "px";
      this.zoomRect.style.top = this.yMove + "px";

      this.preview.style.backgroundPosition =
        "-" + this.xPreview + "px -" + this.yPreview + "px";
    },
  },

  mounted() {
    this.picture = document.getElementById("pic");
    this.containerMain = document.getElementById("containerMainPic");
    this.preview = document.getElementById("preview");
    this.zoomRect = document.getElementById("zoomRect");

    this.preview.style.display = "none";
    this.zoomRect.style.display = "none";

    // this.preview.style.backgroundImage = 'url(' + require('../assets/img/' + this.modal.img[this.myImageIndex]) +')';
    // this.preview.style.backgroundImage = 'url(../assets/img/' + this.modal.img[this.myImageIndex] + ')';

    // this.w1 = this.picture.offsetWidth;
    // this.h1 = this.picture.offsetHeight;

    // this.clientRect = this.containerMain.getBoundingClientRect();

    // console.log(this.h1, this.w1);

    // this.picture = document.querySelector("#pic");
    // let picture1 = document.querySelector("#pic1");
    // let picture2 = document.querySelector("#pic2");
    // let picture3 = document.querySelector("#pic3");
    // let picture4 = document.querySelector("#pic4");
    // let picture5 = document.querySelector("#pic5");

    // let picList = [this.picture, picture1, picture2, picture3, picture4, picture5];
    //
    // let picActive = 1;
  },
};
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
  //position: fixed;
  //top: 2%;
  position: absolute;
  top: 280rem;
  left: 10%;
  width: 80%;
  //left: 15%;
  //width: 70%;
  //height: 96%;
  //height: 70%;
  background: white;
  border: 1rem solid black;
  border-radius: 1rem;
  z-index: 99;
  display: flex;
  flex-direction: column;
  padding: 2rem;

  &::before {
    content: "";
    background-image: url("../assets/img/topography.svg");
    filter: invert(82%) sepia(4%) saturate(2230%) hue-rotate(325deg)
      brightness(120%) contrast(96%);
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: -1;
  }

  .modal__img {
    display: flex;
    flex-direction: column;
    width: 100%;

    .modal__img__pictures {
      display: flex;
      //flex-direction: column;
      //margin-right: 2rem;
      flex-direction: row;
      flex-wrap: wrap;
      margin-bottom: 2rem;

      .picture {
        width: 5rem;
        height: 5rem;
        border: 1px solid black;
        margin-bottom: 1rem;
        margin-right: 2rem;
        object-fit: cover;
        transition: 0.2s ease;
        cursor: pointer;
        position: relative;
        background-size: cover;
        background-position: top;

        &::before {
          content: "";
          position: absolute;
          top: 50%;
          left: -2rem;
          width: 0.2rem;
          height: 0;
          background: var(--firstColor);
          transition: 0.3s ease;
        }

        &:hover::before {
          top: 25%;
          height: 5rem;
        }

        &:hover {
          border-color: var(--firstColor);
        }

        &:last-child {
          margin-bottom: 0;
        }
      }
    }

    .modal__img__main {
      //position: relative;
      //border: 1px solid black;
      width: 100%;
      height: fit-content;
      position: relative;
      overflow: hidden;

      .modal__img__main__zoom {
        position: absolute;
        background-color: var(--firstColor);
        opacity: 0.8;
        width: 6rem;
        height: 6rem;
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
    //padding-left: 5rem;
    position: relative;

    .preview {
      position: absolute;
      top: 0;
      left: 0;
      width: 40rem;
      height: 40rem;
      margin-left: 5rem;
      //background: aqua;
      z-index: 1;
    }

    .modal__infos--title {
      font-size: 4rem;
      margin-top: 5rem;
      margin-bottom: 2rem;
      text-transform: uppercase;
      position: relative;
      //font-weight: bold;

      &::before {
        content: "";
        position: absolute;
        bottom: -1rem;
        left: 0;
        width: 10rem;
        height: 0.1rem;
        background: black;
      }
    }

    .modal__infos--state {
      margin-bottom: 2rem;
      color: darkseagreen;
      border: 1px solid darkseagreen;
      border-radius: 1rem;
      font-size: 1.2rem;
      padding: 0.5rem;
      transition: 0.2s ease;

      &:hover {
        background: darkseagreen;
        color: white;
      }
    }

    .modal__infos--state-off {
      margin-bottom: 2rem;
      color: var(--firstColor);
      border: 1px solid var(--firstColor);
      border-radius: 1rem;
      font-size: 1.2rem;
      padding: 0.5rem;

      &:hover {
        background: var(--firstColor);
        color: white;
      }
    }

    .modal__infos--description {
      margin: 2rem 0;
      font-size: 2rem;
      font-weight: 100;
    }

    .modal__infos--techs {
      font-size: 1.2rem;
      margin-bottom: 5rem;

      display: flex;
      flex-direction: column;
      justify-content: flex-start;
      align-items: normal;
      width: 100%;

      .modal__infos--techs--tech {
        //margin-right: 1rem;
        border: 1px solid dodgerblue;
        border-radius: 2rem;
        padding: 0.5rem;
        color: dodgerblue;
        margin-top: 1rem;
        transition: 0.2s ease;

        &:hover {
          background: dodgerblue;
          color: white;
        }
      }
    }

    .modal__infos__links {
      display: flex;
      flex-direction: column;
      width: 100%;
      align-items: center;

      .modal__infos__links--linkRepo {
        margin-bottom: 2rem;
        //margin-right: 2rem;
      }

      .modal__infos__links--linkWeb,
      .modal__infos__links--linkRepo {
        padding: 1rem;
        color: var(--firstColor);
        border: 1px solid var(--firstColor);
        font-size: 1.5rem;
        display: flex;
        justify-content: center;
        align-items: center;
        width: 100%;
        transition: 0.2s ease;

        &:hover {
          background: var(--firstColor);
          color: white;
        }

        .imgGithub,
        .imgWebsite {
          width: 3rem;
          margin-left: 1rem;
          transition: 0.2s ease;
        }
      }
      .modal__infos__links--linkRepo:hover .imgGithub {
        filter: invert(100%) sepia(0%) saturate(0%) hue-rotate(318deg)
          brightness(250%) contrast(107%);
      }

      .modal__infos__links--linkWeb:hover .imgWebsite {
        filter: invert(100%) sepia(0%) saturate(0%) hue-rotate(318deg)
          brightness(250%) contrast(107%);
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
}
.displayNone {
  display: none;
}

@media only screen and (min-width: 768px) {
}

@media only screen and (min-width: 1024px) {
  .modal {
    flex-direction: row;
    padding: 5rem;

    .modal__img {
      flex-direction: row;
      width: 70%;

      .modal__img__pictures {
        flex-direction: column;
        flex-wrap: nowrap;
        margin-right: 2rem;

        .picture {
          margin-right: 0;
          width: 10rem;
          height: 10rem;
        }
      }
    }

    .modal__infos {
      padding-left: 5rem;

      .modal__infos--state,
      .modal__infos--state-off {
        position: absolute;
        top: 0;
        right: 0;
        margin-bottom: 0;
      }

      .modal__infos--title {
        margin-top: 0;
        font-size: 6rem;
      }

      .modal__infos--techs {
        display: flex;
        flex-direction: row;
        //justify-content: flex-start;
        align-items: center;
        width: 100%;

        .modal__infos--techs--tech {
          margin-left: 1rem;
          margin-top: 0;
        }
      }

      .modal__infos__links {
        flex-direction: row;

        .modal__infos__links--linkRepo {
          margin-bottom: 0;
          margin-right: 2rem;
        }
        .modal__infos__links--linkWeb,
        .modal__infos__links--linkRepo {
          width: fit-content;
        }
      }
    }
  }
}
</style>
