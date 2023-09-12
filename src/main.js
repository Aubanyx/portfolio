import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import VueI18n from "vue-i18n";
import i18n from "./i18n";
import "@/assets/scss/reset.scss";
import "@/assets/scss/custom.scss";
import "@/assets/scss/fonts.scss";
import magnetic from "./directives/magnetic";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
Vue.prototype.$gsap = gsap;
Vue.prototype.$ScrollTrigger = ScrollTrigger;

gsap.registerPlugin(ScrollTrigger);

window.Event = new Vue();

Vue.config.productionTip = false;

Vue.directive("magnetic", magnetic);

Vue.use(VueI18n);

new Vue({
  router,
  store,
  i18n,
  render: (h) => h(App),
}).$mount("#app");
