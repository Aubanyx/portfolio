<template>
  <transition name="slide-out">
    <div class="loader">
      <img class="logo" src="../assets/img/logo.svg" alt="logo" />
      <div class="loading"></div>
    </div>
  </transition>
</template>

<script>
export default {
  name: "LoaderComponent",
};
</script>

<style lang="scss" scoped>
//body::-webkit-scrollbar-thumb {
//  display: none;
//}
//body::-webkit-scrollbar-track {
//  display: none;
//}

.slide-out-enter-active,
.slide-out-leave-active {
  transition: transform 0.7s ease-in-out;
}
.slide-out-enter,
.slide-out-leave-to {
  transform: translateY(-100%);
  animation: 0.7s ease-in-out roundTransition;
}

.loader {
  width: 150%;
  height: 120%;
  background: var(--color-background-primary);
  position: fixed;
  z-index: 999;
  top: 0;
  left: -25%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  //border-radius: 0 0 50% 50%;
  //animation: 0.8s ease-in-out 2.5s roundTransition;

  .logo {
    //height: inherit;
    //position: absolute;
    //top: 30%;
    //left: 45%;
    //width: 10%;
    width: 10rem;
    margin-bottom: 5rem;
    filter: var(--filter-img);
    position: relative;
    bottom: 10vh;
  }

  .loading {
    width: 30%;
    height: 0.2rem;
    //background: var(--firstColor);
    position: relative;
    bottom: 10vh;
    //border-top: 0.5em solid white;
    //border-right: 0.5em solid white;
    //border-bottom: 0.5em solid white;
    //border-left: 0.5em solid var(--firstColor);
    //border-radius: 50%;
    //animation: loadingRotate 1s infinite linear;

    &::before {
      content: "";
      position: absolute;
      top: 0;
      left: 0;
      height: 0.2rem;
      background: var(--color-text-secondary);
      animation: 1s linear 1s forwards loading;
      //animation-delay: 1s;
      z-index: 0;
    }

    &::after {
      content: "";
      position: absolute;
      top: 0;
      left: 0;
      height: 0.2rem;
      background: var(--color-primary);
      animation: 0.5s linear 2s forwards loading;
      z-index: 1;
    }
  }
  //@-webkit-keyframes loadingRotate {
  //  0% {
  //    -webkit-transform: rotate(0deg);
  //    transform: rotate(0deg);
  //  }
  //  100% {
  //    -webkit-transform: rotate(360deg);
  //    transform: rotate(360deg);
  //  }
  //}
  //@keyframes loadingRotate {
  //  0% {
  //    -webkit-transform: rotate(0deg);
  //    transform: rotate(0deg);
  //  }
  //  100% {
  //    -webkit-transform: rotate(360deg);
  //    transform: rotate(360deg);
  //  }
  //}

  @keyframes loading {
    0% {
      width: 0;
    }
    100% {
      width: 100%;
    }
  }

  @keyframes roundTransition {
    0% {
      border-radius: 0 0 50% 50%;
    }
    60% {
      border-radius: 0 0 50% 50%;
    }
    100% {
      border-radius: 0;
    }
  }
}
</style>
