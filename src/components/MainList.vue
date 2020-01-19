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
          <el-pagination
            background
            layout="prev, pager, next"
            :total="total"
            :current-page="current_page"
            >
          </el-pagination>
        </div>
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
      list: [],
      total: 0,
      current_page: 0
    };
  },
  computed: {
    showList() {
      return this.list.length;
    }
  },
  methods: {
    getBlogList() {
      console.log(12)
      axios
        .get("/api/blog.json",{
          params: {
            category: 1
          }  
        })
        .then(res => {
          const data = res.data;
          if (data.ret && data.data) {
            this.list = data.data.data;
            this.total = data.data.total;
            this.current_page = data.data.current_page;
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
  },
  watch: {
    '$route' () {
      // console.log(to)
      // console.log(from)
      this.getBlogList()
    }
  }
};
</script>