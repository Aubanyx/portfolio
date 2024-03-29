<template>
  <div>
    <div
      class="modal-overlay"
      @click="modalClose()"
      v-show="this.openModal"
    ></div>
    <transition name="slide">
      <div class="modal-container" v-show="this.openModal">
        <div id="modal-preview" class="modal-container__preview"></div>
        <div
          v-magnetic="{ strength: 0.5 }"
          class="modal-container__close"
          @click="modalClose()"
        >
          <img
            class="close__icon"
            src="../../assets/img/icons/close.svg"
            alt="icon close"
          />
        </div>
        <div class="modal-container__infos">
          <h3 class="infos__title">{{ modal.name }}</h3>
          <h4 class="infos__style">{{ modal.style }}</h4>
          <div class="infos__techs">
            <div
              class="infos__techs__item"
              v-for="tech in modal.techUse"
              :key="tech.id"
            >
              <img
                class="infos__techs__item--img"
                :src="require('../../assets/img/icons/techs/' + tech + '.svg')"
                :alt="tech"
              />
            </div>
          </div>
          <p class="infos__description">{{ modal.description }}</p>
          <div class="infos__links">
            <a class="links__repo" target="_blank" :href="modal.linkRepo">
              <div class="links__content">
                {{ $t("projects.modal.link.code") }}
                <img
                  class="content__icon content__icon--github"
                  src="../../assets/img/icons/github.svg"
                  alt="Link Github project"
                />
              </div>
            </a>

            <a
              class="links__website"
              v-if="modal.state === 'online'"
              target="_blank"
              :href="modal.linkSite"
            >
              <div class="links__content">
                {{ $t("projects.modal.link.website") }}
                <img
                  class="content__icon content__icon--link"
                  src="../../assets/img/icons/link.svg"
                  alt="Link Github project"
                />
              </div>
            </a>
          </div>

          <div class="infos__thumbnails">
            <div
              id="thumbnail-item"
              class="thumbnail__item"
              v-for="(thumbnail, index) in modal.thumbnail"
              :key="thumbnail.id"
              @click="changeImage(index)"
              :style="{
                'background-image':
                  'url(' +
                  require('../../assets/img/imgProjects/' +
                    modal.alias +
                    '/thumbnail/' +
                    thumbnail) +
                  ')',
              }"
            />
          </div>
          <div
            id="image-container"
            class="infos__selected--img"
            @mousemove="bertrandMove()"
            @mouseleave="zoomOut()"
          >
            <div id="zoomArea" class="selected-image__zoom"></div>
            <img
              id="main-image"
              class="selected-image__img"
              :src="
                require('../../assets/img/imgProjects/' +
                  modal.alias +
                  '/images/' +
                  this.modal.img[this.myImageIndex])
              "
              alt="image"
            />
          </div>
        </div>
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
  methods: {
    modalClose() {
      this.$store.state.openModal = false;
      document.body.style.overflowY = "";
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
        require("../../assets/img/imgProjects/" +
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
    this.picture = document.getElementById("main-image");
    this.containerMain = document.getElementById("image-container");
    this.preview = document.getElementById("modal-preview");
    this.zoomRect = document.getElementById("zoomArea");

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

.modal-overlay {
  position: fixed;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  z-index: 99;
  background: #141517;
  opacity: 0.9;
  cursor: pointer;
}

.modal-container {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: var(--color-background-primary);
  z-index: 99;
  overflow-x: hidden;

  &__close {
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

    .close__icon {
      filter: invert(1);
      width: 3rem;
      height: 3rem;
    }
  }

  &__infos {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    text-align: left;
    margin: 5rem;

    .infos__title {
      font-size: 5rem;
      font-weight: bold;
      color: var(--color-text-tertiary);
      word-break: break-word;
    }
    .infos__style {
      font-size: 1.6rem;
      color: var(--color-text-tertiary);
      margin-top: 2rem;
    }
    .infos__techs {
      display: flex;
      margin-top: 2rem;

      &__item {
        &--img {
          width: 3rem;
          height: 3rem;
          margin-right: 0.7rem;
          filter: var(--filterTechs);
        }
      }
    }
    .infos__description {
      font-size: 1.8rem;
      font-weight: 300;
      color: var(--color-text-tertiary);
      margin-top: 3rem;
      line-height: 1.2;
    }
    .infos__thumbnails {
      display: flex;
      flex-direction: row;
      flex-wrap: wrap;
      justify-content: space-between;
      margin-top: 5rem;

      .thumbnail__item {
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
    .infos__links {
      display: flex;
      flex-direction: column;
      align-items: center;
      margin-top: 4rem;

      .links__repo,
      .links__website {
        @include ButtonPrimary;
        font-size: 1.6rem;
        padding: 2rem;
        width: 100%;
        display: flex;
        justify-content: center;

        .links__content {
          display: flex;
          align-items: center;

          img {
            filter: invert(1);
            margin-left: 1rem;
            width: 3rem;
          }
        }
      }

      .links__website {
        border: 1px solid var(--color-primary);
        background: var(--color-background-primary);
        margin-top: 2rem;

        .links__content {
          color: var(--color-primary);
          transition: 0.2s ease;

          img {
            filter: var(--filter-icon);
            transition: 0.2s ease;
          }
        }
      }
    }
    .infos__selected--img {
      width: 100%;
      height: fit-content;
      position: relative;
      overflow: hidden;
      margin-top: 5rem;

      img {
        width: 100%;
        object-fit: contain;
      }
    }
  }
}
.displayNone {
  display: none;
}

@media only screen and (min-width: 768px) {
  .modal-container {
    &__infos {
      .infos__links {
        flex-direction: row;

        .links__repo,
        .links__website {
          width: fit-content;
        }

        .links__website {
          margin-top: 0;
          margin-left: 2rem;
        }
      }

      .infos__thumbnails {
        .thumbnail__item {
          width: 10rem;
          height: 10rem;
        }
      }
    }
  }
}

@media only screen and (min-width: 1024px) {
  .modal-container {
    position: fixed;
    top: 0;
    left: 0;
    width: 50rem;
    height: 100%;
    overflow: hidden;

    &__preview {
      position: fixed;
      bottom: 5rem;
      left: 62rem;
      //width: 40rem;
      //height: 40rem;
      z-index: 1;
    }

    &__close {
      @include animationCircleHover;
      position: fixed;
      left: 52rem;
    }

    &__infos {
      .infos__title {
        font-size: 6rem;
      }

      .infos__selected--img {
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

        .selected-image__zoom {
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

      .infos__links {
        position: absolute;
        bottom: 5rem;
        margin-top: 0;

        .links__repo,
        .links__website {
          @include animationCircleHover;
        }

        .links__website:hover .links__content {
          color: white;
        }

        .links__website:hover img {
          filter: invert(1);
        }
      }

      .infos__thumbnails {
        .thumbnail__item {
          width: 11rem;
          height: 11rem;
          margin-bottom: 2rem;
        }
      }
    }
  }
}
@media only screen and (min-width: 1440px) {
  .modal-container {
    &__preview {
      top: 5rem;
      left: 105rem;
    }
    &__infos {
      .infos__selected--img {
        height: auto;
        max-height: calc(100% - 10rem);
        margin-bottom: 5rem;
      }
    }
  }
}
</style>
