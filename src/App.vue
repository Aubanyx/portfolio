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
  },
  mounted() {
    this.$store.commit("offLoading");
  }
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
  --firstColor: #d25d5f;
  --title: #000000;
  --subTitle: #a6a6a6;
  --text: #ffffff;
}

[data-theme="darkTheme"] {
  --backgroundColor: #202023;
  --firstColor: #6a5acd;
  --title: #000000;
  --subTitle: #a6a6a6;
  --text: #ffffff;
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
