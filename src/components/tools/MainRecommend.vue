<template>
  <div class="card rec-card">
    <div class="wb-tt">
      <span>
        <i class="fa fa-fire"></i>置顶推荐
      </span>
    </div>
    <div class="rec-info">
      <div class="blog-title" v-for="item of list" :key="item.id">
        <a
          :href="item.linkUrl"
          class
        >{{item.title}}</a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "MainRecommend",
  props: {
    list: Array
  }
};
</script>