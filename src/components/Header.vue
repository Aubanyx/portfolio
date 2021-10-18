<template>
  <header class="container">
    <section class="header">
      <a class="name" href="#">Auban Labie</a>
      <nav class="nav">
        <Burger />
        <Sidebar>
          <ul class="sidebar-panel-nav">
            <li><a href="#home">Home</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
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

    .name {
      color: black;
      font-size: 1.6rem;
    }

    .nav {
     display: flex;

      ul.sidebar-panel-nav {
        list-style-type: none;
      }

      ul.sidebar-panel-nav > li > a {
        color: #fff;
        text-decoration: none;
        font-size: 1.5rem;
        display: block;
        padding-bottom: 0.5em;
      }

      .lang {
        color: black;
        font-size: 1.3rem;
        align-self: center;
        margin-left: 1rem;
      }
    }
  }
}
</style>
