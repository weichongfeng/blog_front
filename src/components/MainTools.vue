<template>
  <div class="tool-group">
    <main-search></main-search>
    <main-recommend :list="recommends"></main-recommend>
    <main-tags :list="tags"></main-tags>
    <friend-link :list="friendLinks"></friend-link>
  </div>
</template>

<script>
import axios from "axios";
import MainSearch from "@components/tools/MainSearch.vue";
import MainRecommend from "@components/tools/MainRecommend.vue";
import FriendLink from "@components/tools/FriendLink.vue";
import MainTags from "@components/tools/MainTags.vue";
export default {
  name: "MainTools",
  components: {
    MainSearch,
    MainRecommend,
    FriendLink,
    MainTags
  },
  data () {
    return {
      recommends: [],
      tags: [],
      friendLinks: []
    }
  },
  methods: {
    getToolsInfo() {
      axios
        .get("/api/toolsInfo.json")
        .then(res => {
          const data = res.data;
          if (data.ret && data.data) {
            this.recommends = data.data.recommends;
            this.tags = data.data.tags;
            this.friendLinks = data.data.friendLinks;
          }
        })
        .catch(error => {
          console.log(error);
          this.$message.error("网络请求出错!");
        });
    }
  },
  mounted() {
    this.getToolsInfo()
  }
};
</script>