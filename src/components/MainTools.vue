<template>
    <div class="tool-group">
    <main-search></main-search>
    <main-recommend></main-recommend>
    <main-tags></main-tags>
    <friend-link></friend-link>
    </div>
</template>

<script>
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
  }
};
</script>