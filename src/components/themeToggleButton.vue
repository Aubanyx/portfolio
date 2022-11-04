<template>
  <div id="themeToggleButton">
    <div
      class="toggleButton"
      :class="{ active: currentTheme === 'darkTheme' }"
      @click="toggle"
    >
      <img
        class="themeIcon"
        v-if="this.currentTheme === 'lightTheme'"
        src="../assets/img/moon.svg"
        alt="moon icon"
      />
      <img
        class="themeIcon"
        v-else-if="this.currentTheme === 'darkTheme'"
        src="../assets/img/sun.svg"
        alt="sun icon"
      />
    </div>
  </div>
</template>

<script>
export default {
  name: "themeToggleButton",
  data() {
    return {
      currentTheme: localStorage.getItem("themeColor"),
    };
  },
  computed: {
    isDarkThemeActive() {
      return this.$store.state.darkTheme;
    },
  },
  methods: {
    toggle() {
      this.$store.commit("toggleTheme");

      // this.$root.$refs.ThreeTest.changeParticlesColor();
      Event.$emit("changeParticlesColor");
      // this.$el.component("ThreeTest").changeParticlesColor();
      const storedTheme = localStorage.getItem("themeColor");
      if (storedTheme === "darkTheme") {
        localStorage.setItem("themeColor", "lightTheme");
        this.currentTheme = localStorage.getItem("themeColor");
      } else {
        localStorage.setItem("themeColor", "darkTheme");
        this.currentTheme = localStorage.getItem("themeColor");
      }

      // this.currentTheme =
      //   this.currentTheme === "darkTheme" ? "lightTheme" : "darkTheme"; //toggles theme value
      document.documentElement.setAttribute("data-theme", this.currentTheme); // sets the data-theme attribute
      localStorage.setItem("currentTheme", this.currentTheme); // stores theme value on local storage
    },
  },
  created() {
    if (localStorage.getItem("themeColor") === null) {
      localStorage.setItem("themeColor", "lightTheme");
      this.currentTheme = localStorage.getItem("themeColor");
    }
  },
  mounted() {
    const localTheme = localStorage.getItem("currentTheme"); //gets stored theme value if any
    document.documentElement.setAttribute("data-theme", localTheme); // updates the data-theme attribute

    // console.log(localStorage.getItem("currentTheme"), "test 1");
    // console.log(localStorage.getItem("themeColor"), "test 2");
  },
};
</script>

<style lang="scss" scoped>
#themeToggleButton {
  display: flex;
  justify-content: center;
  align-items: center;

  .toggleButton {
    width: 3rem;
    //background: red;
    cursor: pointer;

    .themeIcon {
      width: 2rem;
      filter: var(--img);
    }
  }

  .toggleButton.active {
    //background: blue;
  }
}
</style>
