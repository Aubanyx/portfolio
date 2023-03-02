<template>
  <div class="home">
    <!--    <img alt="Vue logo" src="../assets/logo.png" />-->
    <!--    <HelloWorld msg="Welcome to Your Vue.js App" />-->
    <HeaderComponent class="header" />
    <ThreeJs class="ThreeJs" />
    <Hero class="hero" />
    <About class="about" />
    <Skills class="skills" />
    <Projects class="projects" />
    <Contact class="contact" />
    <!--    <Footer class="footer" />-->
    <ScrollToUp class="scrollToUp" />
  </div>
</template>

<script>
// @ is an alias to /src
import HeaderComponent from "@/components/Header.vue";
import Hero from "@/components/Hero.vue";
import About from "@/components/About.vue";
import Skills from "@/components/Skills.vue";
import Projects from "@/components/Projects.vue";
import Contact from "@/components/Contact.vue";
// import Footer from "@/components/Footer.vue";
import ScrollToUp from "@/components/ScrollToUp.vue";
import ThreeJs from "@/components/ThreeJs.vue";

export default {
  name: "HomeView",
  components: {
    HeaderComponent,
    Hero,
    About,
    Skills,
    Projects,
    Contact,
    // Footer,
    ScrollToUp,
    ThreeJs,
  },
};
</script>

<style lang="scss" scoped>
.home {
  height: 100%;
}
</style>
