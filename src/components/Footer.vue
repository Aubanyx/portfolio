<template>
  <footer id="footer">
    <div class="footer__container">
      <ul class="footer__social">
        <li>Social</li>
        <li><a href="#">Github</a></li>
        <li><a href="#">LinkedIn</a></li>
      </ul>

      <ul class="footer__menu">
        <li>Menu</li>
        <li><a href="#hero">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#skills">Skills</a></li>
        <li><a href="#projects">Projects</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>

      <ul class="footer__infos">

      </ul>
    </div>

    <p class="footer__copyright">© 2021 LABIE Auban</p>
  </footer>
</template>

<script>
export default {
  name: "Footer"
}
</script>

<style lang="scss" scoped>
#footer {
  display: flex;
  flex-direction: column;
  background: aqua;
  width: 100%;
  height: 100%;
  justify-content: center;
  //align-items: center;

  .footer__container {
    display: flex;
    width: 100%;
    justify-content: space-around;


    .footer__social {
      @include Text;

      li:first-child {
        color: $firstColor;
        font-size: 2rem;
        font-weight: 100;
      }
    }

    .footer__menu {
      @include Text;

      li:first-child {
        color: $firstColor;
        font-size: 2rem;
        font-weight: 100;
      }
    }

    .footer__infos {

    }
  }
}
</style>
