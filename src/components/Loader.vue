<template>
  <transition name="fade">
    <div class="loader">
      <div class="loading">
      </div>
    </div>
  </transition>
</template>

<script>
export default {
  name: "Loader"
}
</script>

<style lang="scss" scoped>
//body::-webkit-scrollbar-thumb {
//  display: none;
//}
//body::-webkit-scrollbar-track {
//  display: none;
//}

.fade-enter-active, .fade-leave-active {
  transition: opacity .5s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}

.loader {
  width: 100%;
  height: 100%;
  background: white;
  position: fixed;
  z-index: 999;
  top: 0;
  left: 0;
  display: flex;
  justify-content: center;
  align-items: center;

  .loading {
    width: 10em;
    height: 10em;
    border-top: 0.5em solid white;
    border-right: 0.5em solid white;
    border-bottom: 0.5em solid white;
    border-left: 0.5em solid $firstColor;
    border-radius: 50%;
    animation: loadingRotate 1s infinite linear;
  }
  @-webkit-keyframes loadingRotate {
    0% {
      -webkit-transform: rotate(0deg);
      transform: rotate(0deg);
    }
    100% {
      -webkit-transform: rotate(360deg);
      transform: rotate(360deg);
    }
  }
  @keyframes loadingRotate {
    0% {
      -webkit-transform: rotate(0deg);
      transform: rotate(0deg);
    }
    100% {
      -webkit-transform: rotate(360deg);
      transform: rotate(360deg);
    }
  }
}
</style>
