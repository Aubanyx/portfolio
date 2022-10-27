<template>
  <footer id="footer">
    <div class="footer__container">
      <ul class="footer__copyright">
        <li>Labie Auban</li>
        <li>portfolio © 2021</li>
      </ul>

      <ul class="footer__social">
        <li>Social</li>
        <li>
          <a href="https://github.com/Aubanyx"
            ><img src="../assets/img/github.svg" alt="Logo Github" /> Github</a
          >
        </li>
        <li>
          <a href="https://www.linkedin.com/in/aubanlabie/"
            ><img src="../assets/img/linkedin.svg" alt="Logo LinkedIn" />
            LinkedIn</a
          >
        </li>
      </ul>

      <ul class="footer__menu">
        <li>Menu</li>
        <li><a href="#hero">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#skills">Skills</a></li>
        <li><a href="#projects">Projects</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>
    </div>

    <!--    <p class="footer__copyright">© 2021 LABIE Auban</p>-->
  </footer>
</template>

<script>
export default {
  name: "Footer",
};
</script>

<style lang="scss" scoped>
#footer {
  display: flex;
  flex-direction: column;
  background: var(--firstColor);
  width: 100%;
  justify-content: center;
  margin-top: 10rem;

  .footer__container {
    display: flex;
    width: 100%;
    justify-content: space-around;
    padding: 6rem 0;

    .footer__copyright {
      @include Text;
      line-height: 1.5;

      li:first-child {
        color: var(--tertiaryColor);
        font-size: 2rem;
      }

      li:last-child {
        font-size: 1.4rem;
        font-weight: 100;
      }
    }

    .footer__social {
      @include Text;
      line-height: 1.5;

      li:first-child {
        color: var(--tertiaryColor);
        font-size: 2rem;
      }

      li > a {
        display: flex;
        align-items: center;
        justify-content: center;
        color: var(--tertiaryColor);
        font-size: 1.4rem;
        font-weight: 100;
        transition: 0.2s ease;

        &:hover {
          color: var(--quaternaryColor);
        }

        img {
          width: 1.5rem;
          filter: var(--img);
        }
      }
    }

    .footer__menu {
      @include Text;
      line-height: 1.5;

      li:first-child {
        color: var(--tertiaryColor);
        font-size: 2rem;
      }

      li > a {
        color: var(--tertiaryColor);
        font-size: 1.4rem;
        font-weight: 100;
        transition: 0.2s ease;

        &:hover {
          color: var(--quaternaryColor);
        }
      }
    }
  }
}
</style>
