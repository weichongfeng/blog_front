<template>
  <div class="layout-inner">
    <div class="card">
      <div class="content-header">
        <h1 class="page-title">{{blog.title}}</h1>
        <span class="page-timestamp">{{blog.created_at}}</span>
      </div>
      <div id="main-content">
        <div class="content__default">
         {{blog.content}}
        </div>
      </div>
      <div class="article-link">
        本文链接:
        <a
          target="_blank"
          class="art-add"
          href="http://tiaocaoer.com/blog/mini_pro.html"
        >http://tiaocaoer.com/blog/mini_pro.html</a>
      </div>
      <div class="content page-nav">
        <p class="inner">
          <span class="prev">
            ←
            <a href="/blog/internetmind.html" class="prev">互联网九大思维</a>
          </span>
          <span class="next">
            <a href="/blog/bm2.html" class>商业模式</a>→
          </span>
        </p>
      </div>
      <div class="page">
        <section class="page-edit">
          <div>
            <span
              data-flag-title="Your Article Title"
              class="leancloud-visitors"
              id="http://tiaocaoer.com/blog/mini_pro.html"
            >
              <em class="post-meta-item-text">阅读量：</em>
              <i class="leancloud-visitors-count">18</i>
            </span>
          </div>
        </section>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "MainContent",
  data () {
    return {
      blog_id: 0,
      blog: {}
    }
  },
  methods: {
    getBlogInfo () {
      axios
        .get("/api/blog/" + this.blog_id + '.json')
        .then(res => {
          const data = res.data;
          if (data.ret && data.data) {
            this.blog = data.data;
          }
        })
        .catch(error => {
          console.log(error);
          this.$message.error("网络请求出错!");
        });
    }
  },
  mounted () {
    this.blog_id = this.$route.params.id
    this.getBlogInfo()
  }
};
</script>