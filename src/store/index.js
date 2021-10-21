import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
      isNavOpen: false,
      loading: false
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
      }
  },
  actions: {},
  modules: {},
});
