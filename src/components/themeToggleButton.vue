<template>
  <div>
    <div class="toggleButton" :class="{ active: currentTheme === 'darkTheme'}" @click="toggle">Button</div>
  </div>
</template>

<script>
export default {
  name: "themeToggleButton",
  data() {
    return {
      currentTheme: localStorage.getItem("themeColor")
    };
  },
  // computed: {
  //   isDarkThemeActive() {
  //     return this.$store.state.darkTheme;
  //   },
  // },
  methods: {
    toggle() {
      this.$store.commit("toggleTheme");

      // this.$root.$refs.ThreeTest.changeParticlesColor();
      Event.$emit("changeParticlesColor");
      // this.$el.component("ThreeTest").changeParticlesColor();
      // const storedTheme = localStorage.getItem("themeColor");
      // if (storedTheme === "darkTheme") {
      //   localStorage.setItem("themeColor", "lightTheme");
      //   this.currentTheme = localStorage.getItem("themeColor");
      // }
      // else {
      //   localStorage.setItem("themeColor", "darkTheme");
      //   this.currentTheme = localStorage.getItem("themeColor");
      // }

      this.currentTheme = this.currentTheme === "darkTheme" ? "lightTheme" : "darkTheme"; //toggles theme value
      document.documentElement.setAttribute("data-theme", this.currentTheme); // sets the data-theme attribute
      localStorage.setItem("currentTheme", this.currentTheme); // stores theme value on local storage
    },
  },
  mounted() {
    let localTheme = localStorage.getItem("currentTheme"); //gets stored theme value if any
    document.documentElement.setAttribute("data-theme", localTheme); // updates the data-theme attribute
  },
};
</script>

<style lang="scss" scoped>
.toggleButton {
  background: red;
}

.toggleButton.active {
  background: blue;
}
</style>
