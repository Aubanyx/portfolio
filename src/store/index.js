import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    isNavOpen: false,
    loading: false,
    selectedProjects: {
      name: "Portfolio",
      alias: "portfolio",
      description: "blabla",
      techUse: ["html", "scss", "javascript", "vue"],
      linkRepo: "https://github.com/Aubanyx/portfolio",
      linkSite: "#",
      thumbnail: ["img01.webp"],
      img: ["img01.webp"],
      style: "Design & development",
      state: "online",
      open: false,
    },
    openModal: false,
    darkTheme: false,
  },
  mutations: {
    toggleNav(state) {
      state.isNavOpen = !state.isNavOpen;
    },
    onLoading(state) {
      state.loading = true;
    },
    offLoading(state) {
      state.loading = false;
    },
    toggleTheme(state) {
      state.darkTheme = !state.darkTheme;
    },
  },
  actions: {},
  modules: {},
});
