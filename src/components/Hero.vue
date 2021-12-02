<template>
  <section id="hero" class="container">
    <div class="hero">
      <h4 class="title">I love coding good shit</h4>
    </div>
    <div class="follow">
      <p class="follow--text">Follow me</p>
      <a href="https://github.com/Aubanyx"><img src="../assets/img/github.svg" alt="Logo Github"></a>
      <a href="https://www.linkedin.com/in/aubanlabie/"><img src="../assets/img/linkedin.svg" alt="Logo LinkedIn"></a>
    </div>
  </section>
</template>

<script>
export default {
  name: "Hero"
}
</script>

<style lang="scss" scoped>
.container {
  background: antiquewhite;
  height: 100vh;
  width: 100%;
  position: relative;

  .hero {
    display: flex;
    flex-direction: column;
    justify-content: center;
    height: 100%;
    width: 100%;

    .title {
      font-size: 5rem;
      color: black;
    }
  }

  .follow {
    //background: violet;
    //height: 100%;
    //width: 100%;
    position: absolute;
    bottom: 0;
    right: 0;
    margin: 3.5rem;

    .follow--text {
      font-size: 2rem;
      writing-mode: vertical-rl;
      text-orientation: mixed;

      &::after {
        background-color: #000;
        content: "";
        display: inline-block;
        height: 5rem;
        position: relative;
        width: 1px;
        margin: 1rem 0;
      }
    }
  }
}
</style>
