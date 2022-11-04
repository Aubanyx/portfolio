<template>
  <transition name="slide-fade">
    <div class="loader">
      <img class="logo" src="../assets/img/logo.svg" alt="logo" />
      <div class="loading">
      </div>
    </div>
  </transition>
</template>

<script>
export default {
  name: "Loader",
};
</script>

<style lang="scss" scoped>
//body::-webkit-scrollbar-thumb {
//  display: none;
//}
//body::-webkit-scrollbar-track {
//  display: none;
//}

.slide-fade-enter-active,
.slide-fade-leave-active {
  transition: all 0.5s ease-in;
}
.slide-fade-enter, .slide-fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  transform: translateX(-100%);
  opacity: 0;
}

.loader {
  width: 100%;
  height: 100%;
  background: var(--backgroundColor);
  position: fixed;
  z-index: 999;
  top: 0;
  left: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  .logo {
    //height: inherit;
    //position: absolute;
    //top: 30%;
    //left: 45%;
    //width: 10%;
    width: 10rem;
    margin-bottom: 5rem;
    filter: var(--img);
  }

  .loading {
    width: 30%;
    height: 0.2rem;
    //background: var(--firstColor);
    position: relative;
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
      background: var(--secondaryColor);
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
      background: var(--firstColor);
      animation: 1s linear 2s forwards loading;
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
}
</style>
