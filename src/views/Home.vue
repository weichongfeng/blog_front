<template>
  <div class="theme">
    <home-header></home-header>
    <home-mask></home-mask>
    <home-main></home-main>
    <home-footer></home-footer>
  </div>
</template>

<script>
import HomeHeader from "@components/HomeHeader.vue";
import HomeMask from "@components/HomeMask.vue";
import HomeMain from "@components/HomeMain.vue";
import HomeFooter from "@components/HomeFooter.vue";
export default {
  name: "home",
  components: {
    HomeHeader,
    HomeMain,
    HomeFooter,
    HomeMask
  }
};
</script>

<style scoped>
@import url("//unpkg.com/element-ui@2.13.0/lib/theme-chalk/index.css");
</style>
