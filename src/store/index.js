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
      description: "lorem ipsum dolor sit amet, consectetur",
      techUse: ["Html", "Css", "Scss", "Javascript"],
      linkRepo: "https://github.com/Aubanyx/portfolio",
      linkSite: "#",
      img: [
        "Egypt_Historical_Museum.png",
        "Egypt_Historical_Museum.png",
        "bcbbTheWho.png",
        "Egypt_Historical_Museum.png",
        "Egypt_Historical_Museum.png",
      ],
      backColor: "green",
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
    }
  },
  actions: {},
  modules: {},
});
