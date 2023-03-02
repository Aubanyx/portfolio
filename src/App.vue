<template>
  <main id="app">
    <Loader v-if="$store.state.loading" />
    <!--    <div id="nav">-->
    <!--      <router-link to="/">Home</router-link> |-->
    <!--      <router-link to="/about">About</router-link>-->
    <!--    </div>-->
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
  font-family: Sora, Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  //color: #2c3e50;
  //color: $primaryColor;
  //color: #3D4280;
  color: black;
}

:root {
  --backgroundColor: #ffffff;
  --firstColor: #d25d5f;
  --secondaryColor: #faebd7;
  --tertiaryColor: #000000;
  --quaternaryColor: #ffffff;
  --title: #000000;
  --subTitle: #a6a6a6;
  --text: #000000;
  --img: invert(0);
  --imgfilter: invert(0);
  --skillTitle: #000000;
  --skillSubTitle: #000000;
  --backgroundInput: #fcfcfc;
}

[data-theme="darkTheme"] {
  --backgroundColor: #202023;
  --firstColor: #6a5acd;
  --secondaryColor: #2f4f4f;
  --tertiaryColor: #ffffff;
  --quaternaryColor: #ffffff;
  --title: #6a5acd;
  --subTitle: #a6a6a6;
  --text: #ffffff;
  --img: invert(1);
  --imgfilter: invert(35%) sepia(100%) saturate(571%) hue-rotate(213deg)
    brightness(89%) contrast(88%);
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
