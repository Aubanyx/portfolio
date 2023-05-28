<template>
  <section id="process">
    <h2 class="processTitle">Process</h2>
    <p class="processText">Chaque projet est unique, et mon approche s'adapte en conséquence. Cependant, je suis convaincu qu'un processus structuré est essentiel pour garantir la réussite de chaque projet.</p>
<!--    <p> Voici les étapes clés que je suis généralement lors du développement d'un projet, de l'idée initiale à la mise en production. Ces étapes me permettent de m'assurer que chaque aspect est pris en compte et que le résultat final répond aux attentes et aux besoins du client.</p>-->
    <ul class="processWrapper">
      <svg width="4rem" height="2rem" class="arrow">
        <path d="M0 0 L40 0 L20 20 Z" fill="var(--color-secondary)" />
      </svg>
      <li class="processStep" v-for="(step, index) in process" :key="index">
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
          title: "Planification",
          description:
            "Analyse des objectifs et des exigences du projet en se basant sur le cahier des charges fourni ou les informations disponibles. Élaboration d'un plan de projet détaillé, comprenant un calendrier, une estimation des ressources nécessaires et la définition des responsabilités pour chaque membre de l'équipe.",
        },
        {
          number: "02",
          title: "Design",
          description:
            "Exploration des tendances actuelles en matière de design et de fonctionnalités pour s'inspirer et concevoir une solution innovante et adaptée aux besoins du projet. Consultation de sources d'inspiration telles que Dribbble, Behance ou Awwwards pour identifier des idées et des approches pertinentes. Création de maquettes et de prototypes pour l'interface utilisateur et l'expérience utilisateur, en utilisant des outils tels que Figma ou Adobe XD. Présentation des concepts au client et intégration des retours d'informations pour affiner la conception.",
        },
        // {
        //   number: "3.",
        //   title: "Conception",
        //   description:
        //     "Création de maquettes et de prototypes pour l'interface utilisateur et l'expérience utilisateur, en utilisant des outils tels que Figma ou Adobe XD. Présentation des concepts au client et intégration des retours d'informations pour affiner la conception. Collaboration avec les membres de l'équipe pour s'assurer que les aspects visuels et fonctionnels s'alignent sur les objectifs du projet.",
        // },
        {
          number: "03",
          title: "Développement",
          description:
            "Transformation des maquettes en code fonctionnel en utilisant des technologies telles que HTML, CSS, JavaScript, et des frameworks tels que Vue.js ou React. Développement de l'architecture back-end et intégration avec des bases de données et des API, si nécessaire.",
        },
        {
          number: "04",
          title: "Déploiement",
          description:
            "Mise en ligne du site sur un serveur de production, en utilisant des outils et des services d'hébergement tels que Git, Netlify ou Heroku. Optimisation des performances du site pour assurer une expérience utilisateur fluide. Suivi et résolution des problèmes techniques pouvant survenir après le lancement du site.",
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
#process {
  display: flex;
  flex-direction: column;
  background: #F3F2F1;
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
  #process {
    //.processTitle {
    //  font-size: 10rem;
    //}

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
  #process {
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
  #process {
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
