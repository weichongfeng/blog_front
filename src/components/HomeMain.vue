<template>
  <div class="layout-container">
    <div class="main">
      <router-view></router-view>
      <!-- <main-content></main-content> -->
      <main-tools></main-tools>
    </div>
  </div>
</template>

<script>
import MainTools from "@components/MainTools.vue";
export default {
  name: "HomeMain",
  components: {
    MainTools
  }
};
</script>