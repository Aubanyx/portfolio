<template>
  <section id="processus" class="process">
    <h2 class="processTitle">{{ $t("process.title") }}</h2>
    <p class="processText">{{ $t("process.intro") }}</p>
    <ul class="processWrapper">
      <svg width="4rem" height="2rem" class="arrow">
        <path d="M0 0 L40 0 L20 20 Z" fill="var(--color-secondary)" />
      </svg>
      <li
        class="processStep"
        v-for="(step, index) in translatedProcess"
        :key="index"
      >
        <svg
          class="processStep--lineY"
          :width="windowWidth < 768 ? '1rem' : '1rem'"
          :height="
            windowWidth < 768 && index === 3
              ? 'calc(100% + 4rem)'
              : windowWidth < 1280 && index === 3
              ? 'calc(100% + 4rem)'
              : windowWidth >= 1280
              ? '6rem'
              : '100%'
          "
        >
          <line
            x1="0"
            :y1="
              windowWidth < 768 && index === 0
                ? '1.5rem'
                : windowWidth >= 768 &&
                  (index === 0 || index === 1) &&
                  windowWidth < 1280
                ? '1.5rem'
                : '0'
            "
            x2="0"
            y2="100%"
            :style="
              windowWidth >= 768 &&
              (index === 0 || index === 2) &&
              windowWidth < 1280
                ? 'display: none'
                : 'stroke: var(--color-secondary); stroke-width: 2rem'
            "
          />
        </svg>
        <svg
          class="processStep--lineX"
          :width="
            windowWidth < 768
              ? '100%'
              : windowWidth >= 768 &&
                (index === 0 || index === 2) &&
                windowWidth < 1280
              ? '160%'
              : windowWidth >= 1280 && index !== 3
              ? '150%'
              : '100%'
          "
          :height="windowWidth < 768 ? '1rem' : '1rem'"
        >
          <line
            :x1="windowWidth < 768 ? '0' : '3rem'"
            y1="0"
            :x2="windowWidth < 768 ? '4rem' : '100%'"
            y2="0"
            style="stroke: var(--color-secondary); stroke-width: 2rem"
          />
        </svg>
        <div class="processStep__step">
          <p class="processStep__step--number">{{ step.number }}</p>
        </div>
        <p class="processStep--title">{{ step.title }}</p>
        <p class="processStep--description">{{ step.description }}</p>
      </li>
    </ul>
  </section>
</template>

<script>
export default {
  name: "ProcessComponent",
  data() {
    return {
      windowWidth: window.innerWidth,
      process: [
        {
          number: "01",
          title: this.$i18n.t("process.step01.title"),
          description: this.$i18n.t("process.step01.description"),
          step: "step01",
        },
        {
          number: "02",
          title: this.$i18n.t("process.step02.title"),
          description: this.$i18n.t("process.step02.description"),
          step: "step02",
        },
        {
          number: "03",
          title: this.$i18n.t("process.step03.title"),
          description: this.$i18n.t("process.step03.description"),
          step: "step03",
        },
        {
          number: "04",
          title: this.$i18n.t("process.step04.title"),
          description: this.$i18n.t("process.step04.description"),
          step: "step04",
        },
      ],
    };
  },
  mounted() {
    window.addEventListener("resize", this.onResize);
    this.onResize();
  },
  beforeDestroy() {
    window.removeEventListener("resize", this.onResize);
  },
  computed: {
    translatedProcess() {
      return this.process.map((process) => ({
        ...process,
        title: this.$i18n.t(`process.${process.step}.title`),
        description: this.$i18n.t(`process.${process.step}.description`),
      }));
    },
  },
  methods: {
    onResize() {
      requestAnimationFrame(() => {
        this.windowWidth = window.innerWidth;
      });
    },
  },
};
</script>

<style lang="scss" scoped>
.process {
  max-width: 1920px;
  margin: auto;
  display: flex;
  flex-direction: column;
  background: #f3f2f1;
  background: var(--color-background-primary);
  padding: 10rem 5rem;
  overflow: hidden;

  .processTitle {
    @include Title;
    align-self: flex-start;
  }

  .processText {
    font-size: 2rem;
    font-weight: 300;
    margin-bottom: 8rem;
    align-self: flex-start;
    text-align: left;
    line-height: 1.2;
    color: var(--color-text-tertiary);
  }

  .processWrapper {
    display: flex;
    flex-direction: column;
    width: 100%;
    position: relative;

    .arrow {
      position: absolute;
      bottom: -6rem;
      left: -1.5rem;
    }

    .processStep {
      text-align: left;
      padding-bottom: 8rem;
      width: 100%;
      position: relative;
      padding-left: 3rem;

      &:last-of-type {
        padding-bottom: 0;
      }

      .processStep--lineY {
        position: absolute;
        top: 0;
        left: 0;
        z-index: 0;
      }

      .processStep--lineX {
        position: absolute;
        top: 1.5rem;
        left: 0;
        z-index: 0;
      }

      .processStep__step {
        display: flex;
        align-items: center;

        .processStep__step--number {
          font-size: 4rem;
          font-weight: bold;
          color: var(--color-text-tertiary);
          position: relative;
          width: 4rem;
          height: 4rem;
          background: var(--color-secondary);
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
        }
      }

      .processStep--title {
        margin-bottom: 2rem;
        margin-top: 3rem;
        font-size: 2.4rem;
        font-weight: bold;
        color: var(--color-text-tertiary);
      }

      .processStep--description {
        font-size: 1.6rem;
        //font-weight: 200;
        line-height: 1.6;
        color: #808080;
      }
    }
  }
}

@media only screen and (min-width: 768px) {
  .process {
    .processWrapper {
      flex-direction: row;
      flex-wrap: wrap;
      justify-content: space-between;

      .arrow {
        left: initial;
        right: -1.5rem;
      }

      .processStep {
        width: 40%;
        padding-left: 0;
        padding-right: 3rem;

        .processStep--lineY {
          left: initial;
          right: 0;
        }
      }
    }
  }
}
@media only screen and (min-width: 1024px) {
  .process {
    padding: 15rem;
    position: relative;

    &::before {
      content: "Process";
      position: absolute;
      top: 0rem;
      right: -2rem;
      font-size: 20rem;
      letter-spacing: 1rem;
      -webkit-text-fill-color: transparent;
      -webkit-text-stroke: 2px var(--color-secondary);
      writing-mode: vertical-lr;
    }
  }
}
@media only screen and (min-width: 1280px) {
  .process {
    .processText {
      width: 60%;
    }

    .processWrapper {
      .arrow {
        top: 1rem;
        transform: rotateZ(270deg);
      }
      .processStep {
        width: 20%;
        padding-right: 0;
        padding-bottom: 0;

        .processStep--lineY {
          left: 1.5rem;
          right: initial;
        }

        .processStep__step {
          .processStep__step--number {
            font-size: 6rem;
          }
        }
      }
    }
  }
}
</style>
