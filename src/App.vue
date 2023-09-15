<template>
  <main id="app">
    <Loader v-if="$store.state.loading" />
    <router-view />
  </main>
</template>

<script>
import Loader from "@/components/Loader";

export default {
  components: { Loader },
  beforeCreate() {
    this.$store.commit("onLoading");
    // document.body.style.overflow = "hidden";
  },
  mounted() {
    // window.scrollTo(0, 0);
    setTimeout(() => {
      this.$store.commit("offLoading");
      // document.body.style.overflow = "overlay";
      // window.scrollTo(0, 0);
    }, 3000);
  },
};
</script>

<style lang="scss">
#app {
  font-family: Inter, Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;

  color: #1c1d20;
}

:root {
  --color-primary: #455ce9;
  --color-primary-dark: #334bd3;
  --color-secondary: #e8c246;
  --color-background-primary: #ffffff;
  --color-background-secondary: #f2f2f2;
  --color-background-tertiary: #2f3137;
  --color-background-quaternary: #1c1d20;
  --color-background-quinary: #f2f2f2;
  --color-text-primary: #ffffff;
  --color-text-secondary: #808080;
  --color-text-tertiary: #1c1d20;
  --color-border: #27272740;
  --filterTechs: initial;
  --color-box-shadow-back: rgb(0 0 0 / 15%) 15px 15px 20px -5px,
    rgb(255 255 255 / 90%) -15px -15px 20px 5px;
  --color-box-shadow-project: rgb(0 0 0 / 15%) 0 15px 20px -5px,
    rgb(255 255 255 / 90%) 0 -15px 20px 5px;
  --color-box-shadow-toggle: 0px 0px 15px #2f3137,
    0px 0px 35px hsl(0deg 0% 100% / 45%);
  --filter-img: invert(0);
  --filter-icon: invert(38%) sepia(40%) saturate(1461%) hue-rotate(202deg);
}

[data-theme="darkTheme"] {
  --color-primary: #455ce9;
  --color-primary-dark: #334bd3;
  --color-secondary: #e8c246;
  --color-background-primary: #1c1d20;
  --color-background-secondary: #141517;
  --color-background-tertiary: #f2f2f2;
  --color-background-quaternary: #ffffff;
  --color-background-quinary: #2f3137;
  --color-text-primary: #1c1d20;
  --color-text-secondary: #808080;
  --color-text-tertiary: #ffffff;
  --color-border: #27272740;
  --filterTechs: brightness(11);
  --color-box-shadow-back: rgb(14 15 16 / 50%) 15px 15px 20px -5px,
    rgb(43 44 49 / 25%) -15px -15px 20px 5px;
  --color-box-shadow-project: rgb(14 15 16 / 75%) 0 15px 20px -5px,
    rgb(28 29 32 / 90%) 0 -15px 20px 5px;
  --color-box-shadow-toggle: 0px 0px 15px #f2f2f2,
    0px 0px 35px hsl(0deg 0% 100% / 45%);
  --filter-img: invert(1);
  --filter-icon: invert(38%) sepia(40%) saturate(1461%) hue-rotate(202deg);
}

//* {
//  margin: 0;
//  padding: 0;
//  box-sizing: border-box;
//}

//#nav {
//  padding: 30px;
//
//  a {
//    font-weight: bold;
//    color: #2c3e50;
//
//    &.router-link-exact-active {
//      color: #42b983;
//    }
//  }
//}
</style>
