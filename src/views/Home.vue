<template>
  <div class="home">
    <HeaderComponent />
    <ThreeJs />
    <Hero />
    <About />
    <Process />
    <Skills />
    <Projects />
    <Faq />
    <Contact />
    <ScrollToUp />
  </div>
</template>

<script>
import HeaderComponent from "@/components/Header.vue";
import Hero from "@/components/Hero.vue";
import About from "@/components/About.vue";
import Process from "@/components/Process.vue";
import Skills from "@/components/skills/Skills.vue";
import Projects from "@/components/projects/Projects.vue";
import Faq from "@/components/Faq.vue";
import Contact from "@/components/Contact.vue";
import ScrollToUp from "@/components/ScrollToUp.vue";
import ThreeJs from "@/components/ThreeJs.vue";

export default {
  name: "HomeView",
  components: {
    HeaderComponent,
    Hero,
    About,
    Process,
    Skills,
    Projects,
    Faq,
    Contact,
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
