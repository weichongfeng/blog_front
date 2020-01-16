<template>
  <div class="layout-inner">
    <div v-if="showList">
      <div>
        <div class="card article-card" v-for="item of list" :key="item.id">
          <h2>
            <router-link :to="{name:'blog',params:{id:item.id,blog:item}}">
              <a href class="art-header-link">{{item.title}}</a>
            </router-link>
          </h2>
          <div class="post-date">{{item.created_at}}</div>
          <div class="excerpt">
            <p>{{item.content | ellipsis}}</p>
          </div>
          <div>
            <div class="divider article-card-line"></div>
            <span tabindex="0" class="tag-wrap" v-for="(tag,index) of item.tags" :key="index">
              <span class="tag-inner">{{tag}}</span>
            </span>
          </div>
        </div>
      </div>
      <nav class="pagination-nav">
        <div class="pagination-docker">
          <a
            href="/"
            class="pagination-num router-link-exact-active router-link-active pagination-current"
          >1</a>
          <a href="/page/2/" class="pagination-num">2</a>
          <a href="/page/3/" class="pagination-num">3</a>
          <a href="/page/4/" class="pagination-num">4</a>
          <a href="/page/5/" class="pagination-num">5</a>
          <a href="/page/6/" class="pagination-num">6</a>
          <a href="/page/7/" class="pagination-num">7</a>
          <a href="/page/8/" class="pagination-num">8</a>
          <a href="/page/9/" class="pagination-num">9</a>
        </div>
        <a href="/page/2/" class="pagination-action pagination-next">→</a>
      </nav>
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "MainList",
  data() {
    return {
      list: []
    };
  },
  computed: {
    showList() {
      return this.list.length;
    }
  },
  methods: {
    getBlogList() {
      axios
        .get("/api/blog.json")
        .then(res => {
          const data = res.data;
          if (data.ret && data.data) {
            this.list = data.data.data;
          }
        })
        .catch(error => {
          console.log(error);
          this.$message.error("网络请求出错!");
        });
    }
  },
  filters: {
    ellipsis(value) {
      if (value.length > 100) {
        return value.slice(0, 100) + "...";
      }
      return value;
    }
  },
  mounted() {
    this.getBlogList();
  }
};
</script>