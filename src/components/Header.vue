<template>
  <header class="container">
    <section class="header" :class="{ 'hidden-header': !showNavbar }">
      <a class="name" href="#">Auban Labie</a>
      <nav class="nav">
        <Burger/>
        <Sidebar>
          <div class="sidebar__menu">
              <p class="sidebar--title">Menu</p>
              <ul class="sidebar-panel-nav">
                <li><a href="#hero">Home</a></li>
                <li><a href="#about">About</a></li>
                <li><a href="#skills">Skills</a></li>
                <li><a href="#projects">Projects</a></li>
                <li><a href="#contact">Contact</a></li>
              </ul>
          </div>
<!--          <ul class="sidebar-panel-nav">-->
<!--            <li><a href="#hero">Home</a></li>-->
<!--            <li><a href="#about">About</a></li>-->
<!--            <li><a href="#skills">Skills</a></li>-->
<!--            <li><a href="#projects">Projects</a></li>-->
<!--            <li><a href="#contact">Contact</a></li>-->
<!--          </ul>-->
        </Sidebar>
        <p class="lang">EN</p>
      </nav>
    </section>
  </header>
</template>

<script>
import Burger from "@/components/menu/Burger.vue";
import Sidebar from "@/components/menu/Sidebar.vue";

export default {
  name: "header",
  components: {
    Burger,
    Sidebar
  },
  data() {
    return {
      showNavbar: true,
      lastScrollPosition: 0,
      scrollValue: 0,
      offset: 30,
    }
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
    onScroll() {
      if (window.pageYOffset < 0) {
        return;
      }
      if (Math.abs(window.pageYOffset - this.lastScrollPosition) < this.offset) {
        return;
      }
      this.showNavbar = window.pageYOffset < this.lastScrollPosition;
      this.lastScrollPosition = window.pageYOffset;
    },
    toHero() {
      document.querySelector('#hero').scrollIntoView({
        behavior: 'smooth'
      });
    }
    // toAbout() {
    //   document.querySelector('#about').scrollIntoView({
    //     behavior: 'smooth'
    //   });
    // },
    // toSkills() {
    //   document.querySelector('#skills').scrollIntoView({
    //     behavior: 'smooth'
    //   });
    // },
    // toProjects() {
    //   document.querySelector('#projects').scrollIntoView({
    //     behavior: 'smooth'
    //   });
    // },
    // toContact() {
    //   document.querySelector('#contact').scrollIntoView({
    //     behavior: 'smooth'
    //   });
    // }
  }
}
</script>

<style lang="scss" scoped>
.container {
  .header {
    position: fixed;
    display: flex;
    align-items: center;
    width: 100%;
    height: 5vh;
    justify-content: space-between;
    padding: 4rem 3.5rem;
    //background: green;
    z-index: 1;
    transition: 0.2s all ease-out;
    transform: translate3d(0, 0, 0);

    .name {
      color: black;
      font-size: 1.6rem;
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
          color: $firstColor;
          margin-bottom: 4rem;
          font-size: 1.7rem;
        }

        ul.sidebar-panel-nav {
          list-style-type: none;
        }

        ul.sidebar-panel-nav > li > a {
          color: black;
          text-decoration: none;
          font-size: 3rem;
          display: block;
          margin-bottom: 2.5rem;
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
            background: $firstColor;
            transition: 0.3s ease;
          }
        }
      }
      .lang {
        color: black;
        font-size: 1.3rem;
        align-self: center;
        margin-left: 1rem;
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
        }
      }
    }
  }
}
</style>
