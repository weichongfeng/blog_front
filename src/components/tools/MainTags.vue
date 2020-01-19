<template>
  <div class="card rec-card">
    <div class="wb-tt">
      <span>
        <i class="fa fa-fire"></i>热门标签
      </span>
    </div>
    <div class="rec-info">
      <div class="tag" data-v-0a93a2c4>
        <div class="items" data-v-0a93a2c4>
          <span
            class="tag"
            :style="getRbg()"
            data-v-0a93a2c4
            v-for="item of list"
            :key="item.id"
          >{{item.name}}</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "MainTags",
  props: {
    list: Array
  },
  methods: {
    getRbg() {
      return {
        'background-color':
          "rgb(" +
          Math.floor(Math.random() * 256) +
          ", " +
          Math.floor(Math.random() * 256) +
          ", " +
          Math.floor(Math.random() * 256) +
          ")"
      };
    }
  }
};
</script>