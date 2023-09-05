<template>
  <div>
    <div class="overlay" @click="modalClose()" v-show="this.openModal"></div>
    <transition name="slide">
      <div class="modal" v-show="this.openModal">
        <div id="preview" class="preview"></div>
        <div
          v-magnetic="{ strength: 0.5 }"
          class="closeModal"
          @click="modalClose()"
        >
          <img
            class="iconClose"
            src="../assets/img/icons/close.svg"
            alt="icon close"
          />
        </div>
        <div class="modal__infos">
          <h3 class="modal__infos__title">{{ modal.name }}</h3>
          <h4 class="modal__infos__style">{{ modal.style }}</h4>
          <div class="modal__infos__techs">
            <div
              class="modal__infos__techs--div"
              v-for="tech in modal.techUse"
              :key="tech.id"
            >
              <img
                class="tech"
                :src="require('../assets/img/icons/techs/' + tech + '.svg')"
                :alt="tech"
              />
            </div>
          </div>
          <p class="modal__infos__description">{{ modal.description }}</p>
          <div class="modal__infos__links">
            <a class="modal__infos__links--linkRepo" :href="modal.linkRepo"
              ><div class="modal__infos__links--link">
                Voir le code
                <img
                  class="imgGithub"
                  src="../assets/img/icons/github.svg"
                  alt="Link Github project"
                /></div
            ></a>

            <a
              class="modal__infos__links--linkWeb"
              v-if="modal.state === 'online'"
              :href="modal.linkSite"
              ><div class="modal__infos__links--link">
                Voir le site
                <img
                  class="imgWebsite"
                  src="../assets/img/icons/link.svg"
                  alt="Link Github project"
                /></div
            ></a>

            <!--            <a-->
            <!--              class="modal__infos__links&#45;&#45;linkWeb"-->
            <!--              v-if="modal.state === 'online'"-->
            <!--              :href="modal.linkSite"-->
            <!--              >Voir le site<img-->
            <!--                class="imgWebsite"-->
            <!--                src="../assets/img/icons/link.svg"-->
            <!--                alt="Link website project"-->
            <!--            /></a>-->
          </div>

          <div class="modal__infos__pictures">
            <div
              id="pic1"
              class="picture"
              v-for="(thumbnail, index) in modal.thumbnail"
              :key="thumbnail.id"
              @click="changeImage(index)"
              :style="{
                'background-image':
                  'url(' +
                  require('../assets/img/imgProjects/' +
                    modal.alias +
                    '/thumbnail/' +
                    thumbnail) +
                  ')',
              }"
            />
          </div>
          <div
            id="containerMainPic"
            class="modal__infos__imgSelected"
            @mousemove="bertrandMove()"
            @mouseleave="zoomOut()"
          >
            <div id="zoomRect" class="modal__infos__imgSelected__zoom"></div>
            <img
              id="pic"
              class="img"
              :src="
                require('../assets/img/imgProjects/' +
                  modal.alias +
                  '/images/' +
                  this.modal.img[this.myImageIndex])
              "
              alt="image"
            />
          </div>
        </div>
        <!--        <ThreeTest class="threeTest" />-->
        <!--                <div class="modal__img">-->
        <!--                  <div class="modal__img__pictures">-->
        <!--                    <div-->
        <!--                      id="pic1"-->
        <!--                      class="picture"-->
        <!--                      v-for="(image, index) in modal.img"-->
        <!--                      :key="image.id"-->
        <!--                      @click="changeImage(index)"-->
        <!--                      :style="{-->
        <!--                        'background-image':-->
        <!--                          'url(' + require('../assets/img/' + image) + ')',-->
        <!--                      }"-->
        <!--                    />-->
        <!--                  </div>-->
        <!--          <div-->
        <!--            id="containerMainPic"-->
        <!--            class="modal__img__main"-->
        <!--            @mousemove="bertrandMove()"-->
        <!--            @mouseleave="zoomOut()"-->
        <!--          >-->
        <!--            <div id="zoomRect" class="modal__img__main__zoom"></div>-->
        <!--            <img-->
        <!--              id="pic"-->
        <!--              class="img"-->
        <!--              :src="-->
        <!--                require('../assets/img/' + this.modal.img[this.myImageIndex])-->
        <!--              "-->
        <!--              alt="image"-->
        <!--            />-->
        <!--          </div>-->
        <!--        </div>-->
        <!--        <div class="modal__infos">-->
        <!--          <span class="closeModal" @click="modalClose()"-->
        <!--            ><img-->
        <!--              class="iconClose"-->
        <!--              src="../assets/img/icons/close.svg"-->
        <!--              alt="icon close"-->
        <!--          /></span>-->
        <!--          <h3 class="modal__infos&#45;&#45;title">{{ modal.name }}</h3>-->
        <!--          <p-->
        <!--            class="modal__infos&#45;&#45;state"-->
        <!--            :class="{ 'modal__infos&#45;&#45;state-off': modal.state === 'offline' }"-->
        <!--          >-->
        <!--            {{ modal.state }}-->
        <!--          </p>-->
        <!--          <p class="modal__infos&#45;&#45;description">{{ modal.description }}</p>-->
        <!--          <p class="modal__infos&#45;&#45;techs">-->
        <!--            <span-->
        <!--              class="modal__infos&#45;&#45;techs&#45;&#45;tech"-->
        <!--              v-for="tech in modal.techUse"-->
        <!--              :key="tech.id"-->
        <!--              >{{ tech }}</span-->
        <!--            >-->
        <!--          </p>-->
        <!--          <div class="modal__infos__links">-->
        <!--            <a class="modal__infos__links&#45;&#45;linkRepo" :href="modal.linkRepo"-->
        <!--              >Voir le code<img-->
        <!--                class="imgGithub"-->
        <!--                src="../assets/img/githubRed.svg"-->
        <!--                alt="Link Github project"-->
        <!--            /></a>-->
        <!--            <a-->
        <!--              class="modal__infos__links&#45;&#45;linkWeb"-->
        <!--              v-if="modal.state === 'online'"-->
        <!--              :href="modal.linkSite"-->
        <!--              >Voir le site<img-->
        <!--                class="imgWebsite"-->
        <!--                src="../assets/img/icons/link.svg"-->
        <!--                alt="Link website project"-->
        <!--            /></a>-->
        <!--          </div>-->
        <!--        </div>-->
      </div>
    </transition>
  </div>
</template>

<script>
export default {
  name: "ProjectsModal",
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
  // watch: {
  //   openModal(newVal) {
  //     if (newVal) {
  //       this.picture = document.getElementById("pic");
  //       this.containerMain = document.getElementById("containerMainPic");
  //       this.preview = document.getElementById("preview");
  //       this.zoomRect = document.getElementById("zoomRect");
  //
  //       this.preview.style.display = "none";
  //       this.zoomRect.style.display = "none";
  //     }
  //   },
  // },
  methods: {
    modalClose() {
      this.$store.state.openModal = false;
      document.body.style.overflowY = "";
      // window.scrollTo({
      //   top: 0,
      // });
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
      let screenWidth = window.innerWidth;

      if (screenWidth < 1024) {
        return;
      }

      this.preview.style.display = "block";
      this.zoomRect.style.display = "block";

      this.preview.style.backgroundImage =
        "url(" +
        require("../assets/img/imgProjects/" +
          this.modal.alias +
          "/images/" +
          this.modal.img[this.myImageIndex]) +
        ")";
      this.preview.style.backgroundSize =
        this.picture.width * this.zoom +
        "px " +
        this.picture.height * this.zoom +
        "px";

      this.position = this.cursorPos();

      function calculateSize(minSize, maxSize, minScreen, maxScreen) {
        if (screenWidth <= minScreen) return minSize;
        if (screenWidth >= maxScreen) return maxSize;

        return (
          minSize +
          ((maxSize - minSize) * (screenWidth - minScreen)) /
            (maxScreen - minScreen)
        );
      }

      let zoomRectSize, previewSize;

      if (screenWidth < 1440) {
        zoomRectSize = calculateSize(5, 6.5, 1024, 1439);
        previewSize = calculateSize(30, 39, 1024, 1439);
      } else {
        zoomRectSize = calculateSize(6, 9, 1440, 1920);
        previewSize = calculateSize(36, 58, 1440, 1920);
      }

      this.zoomRect.style.width = `${zoomRectSize}rem`;
      this.zoomRect.style.height = `${zoomRectSize}rem`;

      this.preview.style.width = `${previewSize}rem`;
      this.preview.style.height = `${previewSize}rem`;

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
  },
};
</script>

<style lang="scss" scoped>
.slide-enter-active,
.slide-leave-active {
  transition: transform 0.2s ease;
}

.slide-enter,
.slide-leave-to {
  transform: translateX(-100%);
  transition: all 150ms ease-in 0s;
}

.overlay {
  position: fixed;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  z-index: 99;
  //background: url("../assets/img/overlay.png") repeat 0 0;
  background: #141517;
  opacity: 0.9;
  cursor: pointer;
}

.modal {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: var(--color-background-primary);
  z-index: 99;
  //display: flex;
  //flex-direction: column;
  overflow-x: hidden;
  //overflow-x: hidden;
  //overflow-y: scroll;

  //.preview {
  //  position: fixed;
  //  bottom: 5rem;
  //  left: 62rem;
  //  width: 40rem;
  //  height: 40rem;
  //  z-index: 1;
  //}

  .closeModal {
    background: var(--color-primary);
    width: 5rem;
    height: 5rem;
    position: fixed;
    top: 2rem;
    right: 2rem;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 50%;
    z-index: 999;
    cursor: pointer;

    .iconClose {
      filter: invert(1);
      width: 3rem;
      height: 3rem;
    }
  }

  .modal__infos {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    text-align: left;
    margin: 5rem;

    .modal__infos__title {
      font-size: 5rem;
      font-weight: bold;
      color: var(--color-text-tertiary);
      word-break: break-word;
    }
    .modal__infos__style {
      font-size: 1.6rem;
      color: var(--color-text-tertiary);
      margin-top: 2rem;
    }
    .modal__infos__techs {
      display: flex;
      margin-top: 2rem;

      .modal__infos__techs--div {
        .tech {
          width: 3rem;
          height: 3rem;
          margin-right: 0.7rem;
          filter: var(--filterTechs);
        }
      }
    }
    .modal__infos__description {
      font-size: 1.8rem;
      font-weight: 300;
      color: var(--color-text-tertiary);
      margin-top: 3rem;
      line-height: 1.2;
    }
    .modal__infos__pictures {
      display: flex;
      flex-direction: row;
      flex-wrap: wrap;
      justify-content: space-between;
      margin-top: 5rem;

      .picture {
        width: 6rem;
        height: 6rem;
        border: 1px solid #141517;
        margin-bottom: 1rem;
        object-fit: cover;
        transition: 0.2s ease;
        cursor: pointer;
        position: relative;
        background-size: cover;
        background-position: top;

        &:hover {
          border-color: var(--color-primary);
        }

        &:focus {
          border-color: var(--color-primary);
        }
      }
    }
    .modal__infos__links {
      display: flex;
      flex-direction: column;
      align-items: center;
      margin-top: 4rem;

      .modal__infos__links--linkRepo,
      .modal__infos__links--linkWeb {
        @include ButtonPrimary;
        width: 100%;
        display: flex;
        justify-content: center;

        .modal__infos__links--link {
          display: flex;
          align-items: center;

          img {
            filter: invert(1);
            margin-left: 1rem;
            width: 3rem;
          }
        }
      }

      .modal__infos__links--linkWeb {
        border: 1px solid var(--color-primary);
        background: var(--color-background-primary);
        margin-top: 2rem;

        .modal__infos__links--link {
          color: var(--color-primary);
          transition: 0.2s ease;

          img {
            filter: var(--imgfilter);
            transition: 0.2s ease;
          }
        }
      }
    }
    .modal__infos__imgSelected {
      width: 100%;
      height: fit-content;
      position: relative;
      overflow: hidden;
      margin-top: 5rem;

      //.modal__infos__imgSelected__zoom {
      //  position: absolute;
      //  background-color: var(--color-primary);
      //  opacity: 0.8;
      //  width: 6rem;
      //  height: 6rem;
      //}
      img {
        width: 100%;
        object-fit: contain;
      }
    }
  }

  //&::before {
  //  content: "";
  //  background-image: url("../assets/img/topography.svg");
  //  filter: invert(82%) sepia(4%) saturate(2230%) hue-rotate(325deg)
  //    brightness(120%) contrast(96%);
  //  position: absolute;
  //  top: 0;
  //  left: 0;
  //  width: 100%;
  //  height: 100%;
  //  z-index: -1;
  //}

  //.modal__img {
  //  display: flex;
  //  flex-direction: column;
  //  width: 100%;
  //  padding: 5rem;
  //  background: var(--color-background-primary);
  //
  //  .modal__img__pictures {
  //    display: flex;
  //    //flex-direction: column;
  //    //margin-right: 2rem;
  //    flex-direction: row;
  //    flex-wrap: wrap;
  //    margin-bottom: 2rem;
  //    justify-content: space-between;
  //
  //    .picture {
  //      width: 6rem;
  //      height: 6rem;
  //      border: 1px solid black;
  //      margin-bottom: 1rem;
  //      //margin-right: 2rem;
  //      object-fit: cover;
  //      transition: 0.2s ease;
  //      cursor: pointer;
  //      position: relative;
  //      background-size: cover;
  //      background-position: top;
  //
  //      &::before {
  //        content: "";
  //        position: absolute;
  //        left: 50%;
  //        top: -2rem;
  //        height: 0.2rem;
  //        width: 0;
  //        background: var(--color-primary);
  //        transition: 0.3s ease;
  //      }
  //
  //      &:hover::before {
  //        left: 25%;
  //        width: 5rem;
  //      }
  //
  //      &:hover {
  //        border-color: var(--color-primary);
  //      }
  //
  //      &:last-child {
  //        margin-bottom: 0;
  //      }
  //    }
  //  }
  //
  //  .modal__img__main {
  //    width: 100%;
  //    height: fit-content;
  //    position: relative;
  //    overflow: hidden;
  //
  //    .modal__img__main__zoom {
  //      position: absolute;
  //      background-color: var(--color-primary);
  //      opacity: 0.8;
  //      width: 6rem;
  //      height: 6rem;
  //    }
  //
  //    .img {
  //      width: 100%;
  //      object-fit: contain;
  //    }
  //  }
  //}
  //
  //.modal__infos {
  //  display: flex;
  //  flex-direction: column;
  //  width: 100%;
  //  align-items: flex-start;
  //  text-align: left;
  //  position: relative;
  //  padding: 5rem;
  //  background: var(--color-background-tertiary);
  //  border-radius: 0 0 5rem 5rem;
  //
  //  .closeModal {
  //    background: var(--color-primary);
  //    width: 8rem;
  //    height: 8rem;
  //    position: absolute;
  //    top: 0;
  //    right: 0;
  //    display: flex;
  //    justify-content: center;
  //    align-items: center;
  //    //border-radius: 50rem;
  //    border-radius: 0 0 0 10rem;
  //    color: white;
  //    //box-shadow: 0 0 5px 0 var(--color-background-primary);
  //    //transition: all 0.2s ease;
  //
  //    //&:hover {
  //    //  background: var(--color-primary-dark);
  //    //}
  //
  //    .iconClose {
  //      filter: invert(1);
  //      width: 5rem;
  //      height: 5rem;
  //      position: relative;
  //      top: -0.75rem;
  //      right: -0.75rem;
  //    }
  //  }
  //
  //  .modal__infos--title {
  //    font-size: 4rem;
  //    margin-bottom: 2rem;
  //    text-transform: uppercase;
  //    position: relative;
  //    //font-weight: bold;
  //
  //    &::before {
  //      content: "";
  //      position: absolute;
  //      bottom: -1rem;
  //      left: 0;
  //      width: 10rem;
  //      height: 0.1rem;
  //      background: var(--color-text-secondary);
  //    }
  //  }
  //
  //  .modal__infos--state {
  //    //margin-bottom: 2rem;
  //    color: var(--color-text-secondary);
  //    border: 1px solid var(--color-text-secondary);
  //    border-radius: 1rem;
  //    font-size: 1.2rem;
  //    padding: 0.5rem;
  //    transition: 0.2s ease;
  //
  //    &:hover {
  //      background: var(--color-text-secondary);
  //      color: white;
  //    }
  //  }
  //
  //  .modal__infos--state-off {
  //    margin-bottom: 2rem;
  //    color: var(--color-primary);
  //    border: 1px solid var(--color-primary);
  //    border-radius: 1rem;
  //    font-size: 1.2rem;
  //    padding: 0.5rem;
  //
  //    &:hover {
  //      background: var(--color-primary);
  //      color: white;
  //    }
  //  }
  //
  //  .modal__infos--description {
  //    margin: 2rem 0;
  //    font-size: 2rem;
  //    //font-weight: 100;
  //    color: var(--color-text-secondary);
  //  }
  //
  //  .modal__infos--techs {
  //    font-size: 1.2rem;
  //    margin-bottom: 5rem;
  //
  //    display: flex;
  //    //flex-direction: column;
  //    justify-content: flex-start;
  //    align-items: center;
  //    width: 100%;
  //
  //    .modal__infos--techs--tech {
  //      //margin-right: 1rem;
  //      border: 1px solid var(--color-text-secondary);
  //      border-radius: 2rem;
  //      padding: 0.5rem;
  //      color: var(--color-text-secondary);
  //      margin-right: 1rem;
  //      width: fit-content;
  //      transition: 0.2s ease;
  //
  //      &:last-of-type {
  //        margin-right: 0;
  //      }
  //
  //      &:hover {
  //        background: var(--color-text-secondary);
  //        color: white;
  //      }
  //    }
  //  }
  //
  //  .modal__infos__links {
  //    display: flex;
  //    flex-direction: column;
  //    width: 100%;
  //    align-items: center;
  //
  //    .modal__infos__links--linkWeb,
  //    .modal__infos__links--linkRepo {
  //      padding: 1rem;
  //      color: var(--color-primary);
  //      border: 1px solid var(--color-primary);
  //      font-size: 1.6rem;
  //      display: flex;
  //      justify-content: center;
  //      align-items: center;
  //      width: 100%;
  //      border-radius: 5rem;
  //      transition: 0.2s ease;
  //
  //      &:hover {
  //        background: var(--color-primary);
  //        color: white;
  //      }
  //
  //      .imgGithub,
  //      .imgWebsite {
  //        width: 3rem;
  //        margin-left: 1rem;
  //        filter: var(--imgfilter);
  //        transition: 0.2s ease;
  //      }
  //    }
  //
  //    .modal__infos__links--linkRepo {
  //      margin-bottom: 2rem;
  //      background: var(--color-primary);
  //      color: white;
  //
  //      .imgGithub {
  //        filter: invert(100%) sepia(0%) saturate(0%) hue-rotate(318deg)
  //          brightness(250%) contrast(107%);
  //      }
  //    }
  //
  //    //.modal__infos__links--linkRepo:hover .imgGithub {
  //    //  filter: invert(100%) sepia(0%) saturate(0%) hue-rotate(318deg)
  //    //    brightness(250%) contrast(107%);
  //    //}
  //
  //    .modal__infos__links--linkWeb:hover .imgWebsite {
  //      filter: invert(100%) sepia(0%) saturate(0%) hue-rotate(318deg)
  //        brightness(250%) contrast(107%);
  //    }
  //  }
  //}
}

//.links {
//  position: fixed;
//  bottom: 0;
//  left: 0;
//  background: white;
//  width: 100%;
//  padding: 2rem;
//  z-index: 99;
//  font-size: 1.6rem;
//  display: flex;
//  justify-content: space-around;
//  align-items: center;
//
//  .linkRepo {
//    width: 20%;
//
//    img {
//      width: 30%;
//    }
//  }
//
//  .linkSite {
//    width: 20%;
//
//    img {
//      width: 30%;
//    }
//  }
//}
.displayNone {
  display: none;
}

@media only screen and (min-width: 768px) {
  .modal {
    .modal__infos {
      .modal__infos__links {
        flex-direction: row;

        .modal__infos__links--linkRepo,
        .modal__infos__links--linkWeb {
          width: fit-content;
        }

        .modal__infos__links--linkWeb {
          margin-top: 0;
          margin-left: 2rem;
        }
      }

      .modal__infos__pictures {
        .picture {
          width: 10rem;
          height: 10rem;
        }
      }
    }
  }
}

@media only screen and (min-width: 1024px) {
  .modal {
    position: fixed;
    top: 0;
    left: 0;
    width: 50rem;
    height: 100%;
    overflow: hidden;

    .preview {
      position: fixed;
      bottom: 5rem;
      left: 62rem;
      //width: 40rem;
      //height: 40rem;
      z-index: 1;
    }

    .closeModal {
      @include animationCircleHover;
      position: fixed;
      left: 52rem;
    }

    .modal__infos {
      .modal__infos__title {
        font-size: 6rem;
      }

      .modal__infos__imgSelected {
        //width: 30rem;
        width: clamp(
          30rem,
          calc(30rem + (100 * (100vw - 1024px) / 256)),
          40rem
        );
        height: auto;
        max-height: 40rem;
        overflow-x: hidden;
        overflow-y: scroll;
        position: fixed;
        top: 5rem;
        left: 62rem;
        margin-top: 0;

        .modal__infos__imgSelected__zoom {
          position: absolute;
          background-color: var(--color-primary);
          opacity: 0.8;
          width: 6rem;
          height: 6rem;
        }

        img {
          width: 100%;
          object-fit: contain;
        }

        &::-webkit-scrollbar {
          width: 0.5rem;
        }

        &::-webkit-scrollbar-thumb {
          background-color: var(--color-primary);
        }

        &::-webkit-scrollbar-track {
          background-color: #484848;
        }
      }

      .modal__infos__links {
        position: absolute;
        bottom: 5rem;
        margin-top: 0;

        .modal__infos__links--linkRepo,
        .modal__infos__links--linkWeb {
          @include animationCircleHover;
        }

        .modal__infos__links--linkWeb:hover .modal__infos__links--link {
          color: white;
        }

        .modal__infos__links--linkWeb:hover img {
          filter: invert(1);
        }
      }

      .modal__infos__pictures {
        .picture {
          width: 11rem;
          height: 11rem;
          margin-bottom: 2rem;
        }
      }
    }
    //overflow-x: hidden;
    //overflow-y: auto;

    //&::-webkit-scrollbar {
    //  width: 0.5rem;
    //}
    //
    //&::-webkit-scrollbar-thumb {
    //  background-color: var(--color-primary);
    //  //border-radius: 2rem;
    //}
    //
    //&::-webkit-scrollbar-track {
    //  //border-radius: 0.5rem;
    //  //box-shadow: inset 0 0 1rem rgba(0, 0, 0, 0.25);
    //  background-color: #484848;
    //}

    //.modal__img {
    //  //flex-direction: row;
    //  //width: 70%;
    //  //padding: 5rem;
    //  //background: var(--backgroundColor);
    //
    //  .modal__img__pictures {
    //    .picture {
    //      width: 10rem;
    //      height: 10rem;
    //    }
    //  }
    //}
    //
    //.modal__infos {
    //  //margin-bottom: 5rem;
    //  //padding-left: 5rem;
    //  //padding: 5rem;
    //  //background: #3d5343ff;
    //
    //  .modal__infos--state,
    //  .modal__infos--state-off {
    //    position: absolute;
    //    top: 0;
    //    right: 0;
    //    margin-bottom: 0;
    //  }
    //
    //  .modal__infos--title {
    //    font-size: 6rem;
    //  }
    //
    //  .modal__infos--techs {
    //    display: flex;
    //    flex-direction: row;
    //    //justify-content: flex-start;
    //    align-items: center;
    //    width: 100%;
    //
    //    .modal__infos--techs--tech {
    //      margin-left: 1rem;
    //      margin-top: 0;
    //    }
    //  }
    //
    //  .modal__infos__links {
    //    flex-direction: row;
    //
    //    .modal__infos__links--linkRepo {
    //      margin-bottom: 0;
    //      margin-right: 2rem;
    //    }
    //    .modal__infos__links--linkWeb,
    //    .modal__infos__links--linkRepo {
    //      width: fit-content;
    //      padding: 1.6rem 2.4rem;
    //    }
    //  }
    //}
  }
}
@media only screen and (min-width: 1440px) {
  .modal {
    .preview {
      top: 5rem;
      left: 105rem;
    }
    .modal__infos {
      .modal__infos__imgSelected {
        height: auto;
        max-height: calc(100% - 10rem);
        margin-bottom: 5rem;
      }
    }
  }
}
</style>
