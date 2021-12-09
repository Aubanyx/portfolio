<template>
  <section id="hero" class="container">
    <div class="hero">
      <h4 class="title">I love coding good shit</h4>
    </div>
    <div class="follow">
      <p class="follow--text">Follow me</p>
      <a class="hero__github" href="https://github.com/Aubanyx"><img src="../assets/img/github.svg" alt="Logo Github"></a>
      <a class="hero__linkedin" href="https://www.linkedin.com/in/aubanlabie/"><img src="../assets/img/linkedin.svg" alt="Logo LinkedIn"></a>
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
  //z-index: -1;

  .hero {
    display: flex;
    flex-direction: column;
    justify-content: center;
    height: 100%;
    width: 100%;
    z-index: 2;

    .title {
      font-size: 5rem;
      color: black;
      z-index: 2;
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
    z-index: 2;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-end;

    .follow--text {
      font-size: 2rem;
      writing-mode: vertical-rl;
      text-orientation: mixed;

      width: 3rem;
      display: flex;
      align-items: center;

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

    .hero__github {
      display: flex;
      align-items: center;
      justify-content: flex-end;
      //overflow: hidden;

      &::before {
        content: "GitHub";
        font-size: 1.6rem;
        color: black;
        //background: chartreuse;
        width: 0;
        left: 0;
        overflow: hidden;
        margin-right: 1rem;
        transition: .2s ease;
      }

      &:hover::before {
        width: 100%;
      }

      img {
        width: 3rem;
      }
    }

    .hero__linkedin {
      display: flex;
      align-items: center;
      justify-content: flex-end;

      &::before {
        content: "LinkedIn";
        font-size: 1.6rem;
        color: black;
        //background: chartreuse;
        width: 0;
        left: 0;
        overflow: hidden;
        margin-right: 1rem;
        transition: .2s ease;
      }

      &:hover::before {
        width: 100%;
      }

      img {
        width: 3rem;
      }
    }
  }
}
</style>
