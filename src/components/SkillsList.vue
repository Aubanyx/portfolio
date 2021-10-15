<template>
  <transition
      name="expand"
      @enter="enter"
      @after-enter="afterEnter"
      @leave="leave">
    <ul v-show="skills.open" class="skills-item">
      <li class="sub-items"
          v-for="(item, index) in skills.subSkills" :key="index">
        {{ item }}
      </li>
    </ul>
  </transition>
</template>

<script>

export default {
  name: "SkillsList",
  props: [
    'skills'
  ],
  methods: {
    enter(el) {
      el.style.height = 'auto';
      const height = getComputedStyle(el).height;
      el.style.height = 0;
      getComputedStyle(el);
      setTimeout(() => {
        el.style.height = height;
      });
    },

    afterEnter(el) {
      el.style.height = 'auto';
    },

    leave(el) {
      el.style.height = getComputedStyle(el).height;
      getComputedStyle(el);
      setTimeout(() => {
        el.style.height = 0;
      });
    }
  }
}
</script>

<style lang="scss" scoped>

.skills-item {
  //margin-top: 2rem;
  color: black;
  text-transform: uppercase;
  font-size: 1.5rem;
  
  .sub-items {
    margin-bottom: 1rem;
    display: flex;
    align-items: center;
    //justify-content: space-between;

    //padding: 10px;
    //text-indent: 20px;
    //color: #fefefe;
    //background-color: #333;
    //border-top: 1px solid #222;

    &:first-child {
      margin-top: 2rem;
    }
    &:hover {
      //color: #333;
      //background-color: #38B087;
    }

    &::before {
      content: url("../assets/img/check.svg");
      //display: inline-block;
      height: 2rem;
      width: 2rem;
      //border-radius: 100%;
      //background: $firstColor;
      margin-right: 1rem;
    }
  }
}

.expand-enter-active, .expand-leave-active {
  transition: height .5s ease-in-out;
  overflow: hidden;
}
</style>
