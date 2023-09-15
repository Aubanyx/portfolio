<template>
  <div id="themeToggleButton">
    <div class="toggleContainer" @click="toggle">
      <div class="toggleBall" :class="{ active: isDarkThemeActive }">
        <img
          class="toggleIcon"
          :src="
            this.currentTheme === 'lightTheme'
              ? require('../assets/img/icons/moon.svg')
              : require('../assets/img/icons/sun.svg')
          "
          :alt="this.currentTheme === 'lightTheme' ? 'moon icon' : 'sun icon'"
        />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "themeToggleButton",
  data() {
    return {
      currentTheme: localStorage.getItem("themeColor") || "lightTheme",
    };
  },
  computed: {
    isDarkThemeActive() {
      return this.currentTheme === "darkTheme";
    },
  },
  methods: {
    toggle() {
      // Toggle the theme and store the result
      this.currentTheme = this.currentTheme === "darkTheme" ? "lightTheme" : "darkTheme";

      // Save the new theme value to localStorage
      localStorage.setItem("themeColor", this.currentTheme);
      localStorage.setItem("currentTheme", this.currentTheme);

      // Commit the new theme to the store and emit an event
      this.$store.commit("toggleTheme");
      Event.$emit("changeParticlesColor");

      // Update the data-theme attribute
      document.documentElement.setAttribute("data-theme", this.currentTheme);
    },
  },
  mounted() {
    // Set the initial data-theme attribute
    document.documentElement.setAttribute("data-theme", this.currentTheme);
  },
};
</script>

<style lang="scss" scoped>
#themeToggleButton {
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0 2rem;

  .toggleContainer {
    width: 6rem;
    height: 3rem;
    background: var(--color-primary);
    border-radius: 1.5rem;
    position: relative;
    cursor: pointer;

    .toggleBall {
      position: absolute;
      top: 0.3rem;
      left: 0.3rem;
      width: 2.4rem;
      height: 2.4rem;
      background: var(--color-background-quaternary);
      border-radius: 50%;
      transition: left 0.3s ease;
      box-shadow: var(--color-box-shadow-toggle);

      &.active {
        left: 3.3rem;
      }

      .toggleIcon {
        padding: 0.3rem;
        width: 100%;
        height: 100%;
        border-radius: 50%;
        filter: var(--filter-img);
      }
    }
  }
}
</style>
