<template>
  <section id="process">
    <h2 class="processTitle">Process</h2>
    <p class="processText">Chaque projet est unique, et mon approche s'adapte en conséquence. Cependant, je suis convaincu qu'un processus structuré est essentiel pour garantir la réussite de chaque projet. Voici les étapes clés que je suis généralement lors du développement d'un projet, de l'idée initiale à la mise en production. Ces étapes me permettent de m'assurer que chaque aspect est pris en compte et que le résultat final répond aux attentes et aux besoins du client.</p>
    <ul class="processWrapper">
      <li class="processStep" v-for="(step, index) in process" :key="index">
        <p class="processStep--number">{{ step.number }}</p>
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
      process: [
        {
          number: "1.",
          title: "Planification",
          description:
            "Analyse des objectifs et des exigences du projet en se basant sur le cahier des charges fourni ou les informations disponibles. Élaboration d'un plan de projet détaillé, comprenant un calendrier, une estimation des ressources nécessaires et la définition des responsabilités pour chaque membre de l'équipe.",
        },
        {
          number: "2.",
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
          number: "3.",
          title: "Développement",
          description:
            "Transformation des maquettes en code fonctionnel en utilisant des technologies telles que HTML, CSS, JavaScript, et des frameworks tels que Vue.js ou React. Développement de l'architecture back-end et intégration avec des bases de données et des API, si nécessaire.",
        },
        {
          number: "4.",
          title: "Déploiement",
          description:
            "Mise en ligne du site sur un serveur de production, en utilisant des outils et des services d'hébergement tels que Git, Netlify ou Heroku. Optimisation des performances du site pour assurer une expérience utilisateur fluide. Suivi et résolution des problèmes techniques pouvant survenir après le lancement du site.",
        },
      ],
    };
  },
};
</script>

<style lang="scss" scoped>
#process {
  display: flex;
  flex-direction: column;
  background: #F3F2F1;
  padding: 10rem 5rem;

  .processTitle {
    font-size: 7rem;
    align-self: flex-start;
    margin-bottom: 5rem;
    text-transform: uppercase;
  }

  .processText {
    font-size: 2rem;
    font-weight: 300;
    margin-bottom: 8rem;
    align-self: flex-start;
    text-align: left;
    line-height: 1.2;
  }

  .processWrapper {
    display: flex;
    flex-direction: column;
    width: 100%;

    .processStep {
      text-align: left;
      margin-bottom: 8rem;
      width: 100%;

      &:last-of-type {
        margin-bottom: 0;
      }

      .processStep--number {
        font-size: 1.6rem;
        padding-bottom: 2rem;
        border-bottom: 1px solid rgba(39, 39, 39, 0.25);
        margin-bottom: 3rem;
      }
      .processStep--title {
        margin-bottom: 2rem;
        font-size: 2.4rem;
        font-weight: bold;
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
    .processTitle {
      font-size: 10rem;
    }

    .processWrapper {
      flex-direction: row;
      flex-wrap: wrap;
      justify-content: space-between;

      .processStep {
        width: 40%;
      }
    }
  }
}
@media only screen and (min-width: 1024px) {
  #process {
    padding: 10rem 15rem;


  }
}
@media only screen and (min-width: 1280px) {
  #process {
    .processText {
      width: 60%;
    }

    .processWrapper {
      .processStep {
        width: 20%;
      }
    }
  }
}
</style>
