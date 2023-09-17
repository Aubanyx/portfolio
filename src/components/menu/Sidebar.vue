<template>
  <div class="sidebar">
    <div
      class="sidebar-backdrop"
      @click="closeSidebarPanel"
      v-if="isPanelOpen"
    ></div>
    <transition name="slide">
      <div v-if="isPanelOpen" class="sidebar-panel">
        <slot></slot>
      </div>
    </transition>
  </div>
</template>

<script>
export default {
  name: "SidebarComponent",
  methods: {
    closeSidebarPanel() {
      this.$store.commit("toggleNav");
      document.body.style.overflowY = "";
    },
  },
  computed: {
    isPanelOpen() {
      return this.$store.state.isNavOpen;
    },
  },
};
</script>

<style lang="scss" scoped>
.slide-enter-active,
.slide-leave-active {
  transition: transform 0.2s ease;
}

.slide-enter,
.slide-leave-to {
  transform: translateX(100%);
  transition: all 150ms ease-in 0s;
}

.sidebar-backdrop {
  background-color: rgba(0, 0, 0, 0.5);
  width: 100vw;
  height: 100vh;
  position: fixed;
  top: 0;
  right: 0;
  cursor: pointer;
}

.sidebar-panel {
  overflow-y: auto;
  background: var(--color-background-primary);
  position: fixed;
  right: 0;
  top: 0;
  height: 100vh;
  z-index: 998;
  padding: 3rem 20px 2rem 20px;
  width: 100%;
}

@media only screen and (min-width: 768px) {
}

@media only screen and (min-width: 1024px) {
  .sidebar-panel {
    width: 60rem;
  }
}
</style>
