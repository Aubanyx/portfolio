<template>
  <div class="tabContent">
    <ul class="tabList">
      <li
        v-for="(skill, index) in tab.skills"
        :key="index"
        class="tabListContent"
      >
        <img
          class="tabListContent--icon"
          :src="require('../assets/img/icons/' + skill.img)"
          :alt="skill.title"
        />
        <p class="tabListContent--title">{{ skill.title }}</p>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "TabContent",
  props: ["tab"],
};
</script>

<style lang="scss" scoped>
.tabContent {
  margin-top: 5rem;
  .tabList {
    .tabListContent {
      background: #f2f2f2;
      border-radius: 1rem;
      height: 6rem;
      display: flex;
      font-size: 1.6rem;
      justify-content: flex-start;
      align-items: center;
      color: black;
      font-weight: bold;
      margin-bottom: 2rem;
      padding: 1rem 2rem;
      transition: background 0.2s ease;

      &:last-of-type {
        margin-bottom: 0;
      }

      &:hover {
        background: #e6e6e6;
      }

      .tabListContent--icon {
        width: fit-content;
        height: 100%;
        //background-repeat: no-repeat;
        //background-position: left;
        //background-size: contain;
      }
      .tabListContent--title {
        padding-left: 2rem;
      }
    }
  }
}
@media only screen and (min-width: 768px) {
  .tabContent {
    .tabList {
      display: flex;
      flex-wrap: wrap;
      justify-content: center;
      .tabListContent {
        margin-right: 2rem;

        &:last-of-type {
          margin-right: 0;
        }
      }
    }
  }
}
@media only screen and (min-width: 1024px) {
  .tabContent {
    width: 100%;

    .tabList {
      //flex-wrap: nowrap;
      justify-content: space-around;

      .tabListContent {
        flex-direction: column;
        margin: 0 0 3rem 0;
        width: 20rem;
        height: 100%;
        justify-content: center;
        padding: 2rem;

        .tabListContent--icon {
          width: 5rem;
        }
        .tabListContent--title {
          padding: 0;
          margin-top: 2rem;
        }
      }
    }
  }
}
</style>
