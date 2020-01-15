<template>
  <div id="app">
   <div class="theme">
    <home-header></home-header>
    <home-mask></home-mask>
    <home-main></home-main>
    <home-footer></home-footer>
  </div>
  </div>
</template>

<script>
import HomeHeader from "@components/HomeHeader.vue";
import HomeMask from "@components/HomeMask.vue";
import HomeMain from "@components/HomeMain.vue";
import HomeFooter from "@components/HomeFooter.vue";

export default {
  name: 'app',
  components:{
    HomeHeader,
    HomeMain,
    HomeFooter,
    HomeMask
  }
}
</script>

<style>
</style>
