<template>
  <header class="navbar">
    <div class="nav-header">
      <div class="sidebar-button">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          aria-hidden="true"
          role="img"
          viewBox="0 0 448 512"
          class="icon"
        >
          <path
            fill="currentColor"
            d="M436 124H12c-6.627 0-12-5.373-12-12V80c0-6.627 5.373-12 12-12h424c6.627 0 12 5.373 12 12v32c0 6.627-5.373 12-12 12zm0 160H12c-6.627 0-12-5.373-12-12v-32c0-6.627 5.373-12 12-12h424c6.627 0 12 5.373 12 12v32c0 6.627-5.373 12-12 12zm0 160H12c-6.627 0-12-5.373-12-12v-32c0-6.627 5.373-12 12-12h424c6.627 0 12 5.373 12 12v32c0 6.627-5.373 12-12 12z"
          />
        </svg>
      </div>
      <a href="/" class="home-link router-link-exact-active router-link-active">
        <img src="../assets/images/lucky-pig-header.png" class="logo" />
        <span class="site-name can-hide">ForBY 博客</span>
      </a>
      <nav class="nav-links can-hide">
        <ul class="nav-ul">
          <li class="nav-item">
            <a href="/" class="nav-link router-link-exact-active router-link-active">首页</a>
          </li>
          <li class="nav-item">
            <div class="dropdown-wrapper">
              <a class="dropdown-title">
                <span class="title">
                  <i class="iconfont undefined"></i>
                  分类
                </span>
                <span class="arrow right"></span>
              </a>
              <ul class="nav-dropdown" style="display:none;">
                <li class="dropdown-item">
                  <router-link :to="{name:'category',params:{id:1}}">
                    PHP
                  </router-link>
                </li>
                <li class="dropdown-item">
                  <router-link :to="{name:'category',params:{id:2}}">
                    Linux
                  </router-link>
                </li>
                <li class="dropdown-item">
                   <router-link class="nav-link" :to="{name:'category',params:{id:3}}">
                     Python
                   </router-link>
                </li>
                <li class="dropdown-item">
                  <router-link :to="{name:'category',params:{id:4}}">
                    其他
                  </router-link>
                </li>
              </ul>
            </div>
          </li>
          <li class="nav-item">
            <a href="https://github.com/weichongfeng/" target="_blank" class="nav-link">GitHub</a>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" :to="{name:'about'}">
              关于
            </router-link>
          </li>
        </ul>
      </nav>
    </div>
  </header>
</template>

<script>
export default {
  name: "HomeHeader",
  methods: {
    handleBtnClick: function () {
      console.log(this.$router)
    }
  }
};
</script>

<style scoped>
/* @import url('@styles/all.css'); */
</style>