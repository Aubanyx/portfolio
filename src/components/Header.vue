<template>
  <header class="container">
    <section class="header" :class="{ 'hidden-header': !showNavbar }">
      <a class="name" href="#"
        ><img class="logo" src="../assets/img/logo.svg" alt="logo"
      /></a>
      <nav class="nav">
        <Sidebar>
          <div class="sidebar__menu">
            <p class="sidebar--title">Menu</p>
            <ul class="sidebar-panel-nav">
              <li @click="closeSidebarPanel">
                <a href="#hero">{{ $t("menu.home") }}</a>
              </li>
              <li @click="closeSidebarPanel">
                <a href="#about">{{ $t("menu.about") }}</a>
              </li>
              <li @click="closeSidebarPanel">
                <a href="#processus">{{ $t("menu.process") }}</a>
              </li>
              <li @click="closeSidebarPanel">
                <a href="#tabs">{{ $t("menu.skills") }}</a>
              </li>
              <li @click="closeSidebarPanel">
                <a href="#projects">{{ $t("menu.projects") }}</a>
              </li>
              <li @click="closeSidebarPanel">
                <a href="#faq">{{ $t("menu.faq") }}</a>
              </li>
              <li @click="closeSidebarPanel">
                <a href="#contact">{{ $t("menu.contact") }}</a>
              </li>
            </ul>
          </div>
          <div class="sidebar__boxMail">
            <p class="sidebar__boxMail--title">{{ $t("menu.question") }}</p>
            <a class="sidebar__boxMail--mail" href="mailto:aubanlabie@gmail.com"
              >aubanlabie@gmail.com</a
            >
          </div>
        </Sidebar>
        <select v-model="$i18n.locale" @change="saveLanguage" class="lang">
          <option
            class="lang__locale"
            v-for="(locale, i) in locales"
            :key="`locale${i}`"
            :value="locale"
          >
            {{ locale }}
          </option>
        </select>
        <ThemeToggleButton />
        <Burger />
      </nav>
    </section>
  </header>
</template>

<script>
import Burger from "@/components/menu/Burger.vue";
import Sidebar from "@/components/menu/Sidebar.vue";
import ThemeToggleButton from "@/components/themeToggleButton.vue";

export default {
  name: "HeaderComponent",
  components: {
    Burger,
    Sidebar,
    ThemeToggleButton,
  },
  data() {
    return {
      showNavbar: true,
      lastScrollPosition: 0,
      scrollValue: 0,
      offset: 30,
      locales: ["en", "fr", "nl"],
    };
  },
  mounted() {
    this.lastScrollPosition = window.pageYOffset;
    window.addEventListener("scroll", this.onScroll);
    // const viewportMeta = document.createElement("meta");
    // viewportMeta.name = "viewport";
    // viewportMeta.content = "width=device-width, initial-scale=1";
    // document.head.appendChild(viewportMeta);
  },

  beforeDestroy() {
    window.removeEventListener("scroll", this.onScroll);
  },
  methods: {
    saveLanguage() {
      localStorage.setItem("user-locale", this.$i18n.locale);
    },
    closeSidebarPanel() {
      this.$store.commit("toggleNav");
      document.body.style.overflowY = "";
    },
    onScroll() {
      if (window.pageYOffset < 0) {
        return;
      }
      if (
        Math.abs(window.pageYOffset - this.lastScrollPosition) < this.offset
      ) {
        return;
      }
      if (!this.isPanelOpen) {
        this.showNavbar = window.pageYOffset < this.lastScrollPosition;
        this.lastScrollPosition = window.pageYOffset;
      }
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
.container {
  max-width: 1920px;
  margin: auto;

  .header {
    max-width: 1920px;
    margin: auto;
    position: fixed;
    display: flex;
    align-items: center;
    width: 100%;
    height: 5vh;
    justify-content: space-between;
    padding: 4rem 3.5rem;
    //background: green;
    z-index: 3;
    transition: 0.2s all ease-out;
    transform: translate3d(0, 0, 0);

    .name {
      color: var(--tertiaryColor);
      font-size: 1.6rem;
      height: inherit;

      .logo {
        height: inherit;
        filter: var(--img);
      }
    }

    .nav {
      display: flex;

      .sidebar__menu {
        text-align: left;
        width: 100%;
        display: flex;
        flex-direction: column;
        height: 100%;
        justify-content: center;
        align-items: flex-start;
        padding-left: 5rem;

        .sidebar--title {
          color: var(--color-primary);
          margin-bottom: 3rem;
          font-size: 1.7rem;
        }

        ul.sidebar-panel-nav {
          list-style-type: none;
        }

        ul.sidebar-panel-nav > li > a {
          color: var(--tertiaryColor);
          text-decoration: none;
          font-size: 3rem;
          display: block;
          margin-bottom: 1.5rem;
          padding-bottom: 0.5em;
          position: relative;

          &:hover::after {
            width: 100%;
          }

          &::after {
            content: "";
            position: absolute;
            bottom: 0;
            left: 0;
            width: 0;
            height: 2px;
            background: var(--color-primary);
            transition: 0.3s ease;
          }
        }
      }

      .sidebar__boxMail {
        position: absolute;
        bottom: 5rem;
        left: 7rem;

        .sidebar__boxMail--title {
          text-align: left;
          font-size: 1.7rem;
          font-weight: 100;
          margin-bottom: 1rem;
          color: var(--tertiaryColor);
        }

        .sidebar__boxMail--mail {
          font-size: 1.7rem;
          color: var(--tertiaryColor);
          padding-bottom: 1rem;
          border-bottom: 1px solid #bcbcbc;

          &:hover::after {
            width: 100%;
            left: 0;
          }

          &::after {
            content: "";
            position: absolute;
            bottom: 0;
            left: 50%;
            width: 0;
            height: 1px;
            background: var(--tertiaryColor);
            transition: 0.3s ease;
          }
        }
      }

      .lang {
        color: var(--tertiaryColor);
        font-size: 1.3rem;
        align-self: center;
        //margin-left: 1rem;
        background: transparent;
        border: none;
        text-transform: uppercase;
        appearance: none;
        padding: 1rem;
        cursor: pointer;

        &:hover {
          background: var(--color-primary);
          color: var(--quaternaryColor);
        }

        .lang__locale {
          text-transform: uppercase;
        }
      }
    }
  }

  .hidden-header {
    transform: translate3d(0, -100%, 0);
  }
}

@media only screen and (min-width: 768px) {
}

@media only screen and (min-width: 1024px) {
  .container {
    .header {
      .nav {
        .sidebar__menu {
          padding-left: 10rem;

          .sidebar--title {
            margin-bottom: 4rem;
          }

          ul.sidebar-panel-nav > li > a {
            margin-bottom: 2.5rem;
          }
        }

        .sidebar__boxMail {
          left: 12rem;
        }
      }
    }
  }
}
</style>
