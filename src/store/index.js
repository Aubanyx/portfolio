import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    isNavOpen: false,
    loading: false,
    selectedProjects: {
      logo: "photo.png",
      name: "Portfolio",
      alias: "portfolio",
      description: "blabla",
      techUse: ["html", "scss", "javascript", "vue"],
      linkRepo: "https://github.com/Aubanyx/portfolio",
      linkSite: "#",
      thumbnail: ["img01.jpg", "img02.jpg", "img03.jpg", "img04.jpg"],
      img: ["img01.png", "img02.png", "img03.png", "img04.png"],
      participants: "solo",
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
