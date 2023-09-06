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
  //font-family: Sora, Avenir, Helvetica, Arial, sans-serif;
  font-family: Inter, Sora, Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  //color: #2c3e50;
  //color: $primaryColor;
  //color: #3D4280;
  color: black;
}

:root {
  //#455CE9 Blue
  //#334BD3 Dark blue
  //#1C1D20 Dark
  //#141517 Dark dark
  //#2f3137 Dark light
  //#f2f2f2 Gray light
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
  --filter-img: invert(1);

  --backgroundColor: #ffffff;
  //--firstColor: #d25d5f;
  --firstColor: #4fb477;
  --secondaryColor: #faebd7;
  --tertiaryColor: #000000;
  --quaternaryColor: #ffffff;
  --title: #000000;
  --subTitle: #a6a6a6;
  --text: #000000;
  --img: invert(0);
  //--imgfilter: invert(0);
  --imgfilter: invert(38%) sepia(40%) saturate(1461%) hue-rotate(202deg)
    brightness(93%) contrast(114%);
  --skillTitle: #000000;
  --skillSubTitle: #000000;
  --backgroundInput: #fcfcfc;
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
  --filter-img: invert(0);

  //--backgroundColor: #202023;
  --backgroundColor: #272727;
  //--firstColor: #6a5acd;
  --firstColor: #4fb477;
  --secondaryColor: #2f4f4f;
  --tertiaryColor: #ffffff;
  --quaternaryColor: #ffffff;
  //--title: #6a5acd;
  --title: #4fb477;
  --subTitle: #a6a6a6;
  --text: #ffffff;
  --img: invert(1);
  //--imgfilter: invert(35%) sepia(100%) saturate(571%) hue-rotate(213deg)
  //  brightness(89%) contrast(88%);
  //--imgfilter: filter: invert(67%) sepia(26%) saturate(807%) hue-rotate(91deg) brightness(88%) contrast(83%);
  --imgfilter: invert(38%) sepia(40%) saturate(1461%) hue-rotate(202deg)
    brightness(93%) contrast(114%);

  --skillTitle: #ffffff;
  --skillSubTitle: #ffffff;
  --backgroundInput: #202023;
}
// #6FEFE1
// #E732AF
// #fcee0c

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
