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
            v-for="item of tags"
            :key="item.id"
          >{{item.name}}</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "MainTags",
  data() {
    return {
      tags: []
    };
  },
  methods: {
    getTags() {
      axios
        .get("/api/tag.json")
        .then(res => {
          const data = res.data;
          console.log(data);
          if (data.ret && data.data) {
            this.tags = data.data;
          }
        })
        .catch(error => {
          console.log(error);
          this.$message.error("网络请求出错!");
        });
    },
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
  },
  mounted() {
    this.getTags();
  }
};
</script>