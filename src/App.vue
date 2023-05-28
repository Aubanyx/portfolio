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
  --color-primary: #455ce9;
  --color-primary-dark: #334BD3;
  --color-secondary: #e8c246;
  --color-background-primary: #FFFFFF;
  --color-background-secondary: #F2F2F2;
  --color-background-tertiary: #141517;
  --color-background-quaternary: #1C1D20;
  --color-text-primary: #FFFFFF;
  --color-text-secondary: #808080;
  --color-text-tertiary: #1C1D20;
  --color-border: #27272740;

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
  --imgfilter: invert(38%) sepia(40%) saturate(1461%) hue-rotate(202deg) brightness(93%) contrast(114%);
  --skillTitle: #000000;
  --skillSubTitle: #000000;
  --backgroundInput: #fcfcfc;
}

[data-theme="darkTheme"] {
  --color-primary: #455CE9;
  --color-primary-dark: #334BD3;
  --color-secondary: #e8c246;
  --color-background-primary: #1C1D20;
  --color-background-secondary: #141517;
  --color-background-tertiary: #F2F2F2;
  --color-background-quaternary: #FFFFFF;
  --color-text-primary: #1C1D20;
  --color-text-secondary: #808080;
  --color-text-tertiary: #FFFFFF;
  --color-border: #27272740;
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
  --imgfilter: invert(38%) sepia(40%) saturate(1461%) hue-rotate(202deg) brightness(93%) contrast(114%);


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
