<template>
  <div class="home">
<!--    <img alt="Vue logo" src="../assets/logo.png" />-->
<!--    <HelloWorld msg="Welcome to Your Vue.js App" />-->
    <Header class="header" />
    <Hero class="hero" />
    <About class="about" />
    <Skills class="skills" />
    <Projects class="projects" />
    <Contact class="contact" />
  </div>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from "@/components/HelloWorld.vue";
import Header from "@/components/Header.vue";
import Hero from "@/components/Hero.vue";
import About from "@/components/About.vue";
import Skills from "@/components/Skills.vue";
import Projects from "@/components/Projects.vue";
import Contact from "@/components/Contact.vue";

export default {
  name: "Home",
  components: {
    // HelloWorld,
    Header,
    Hero,
    About,
    Skills,
    Projects,
    Contact,
  },
};
</script>

<style lang="scss" scoped>
.home {
  height: 100%;
}

</style>
