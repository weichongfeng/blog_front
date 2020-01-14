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
                  <!---->
                  <a href="/zaobao/" class="nav-link">PHP</a>
                </li>
                <li class="dropdown-item">
                  <!---->
                  <a href="/recommended/" class="nav-link">Linux</a>
                </li>
                <li class="dropdown-item">
                  <!---->
                  <a href="/clouds/" class="nav-link">Python</a>
                </li>
                <li class="dropdown-item">
                  <!---->
                  <a href="/typhoon/" class="nav-link">其他</a>
                </li>
              </ul>
            </div>
          </li>
          <li class="nav-item">
            <a href="/leave_msg/" class="nav-link">GitHub</a>
          </li>
          <li class="nav-item">
            <a href="/leave_msg/" class="nav-link">关于</a>
          </li>
          <li class="nav-item">
            <a href="/leave_msg/" class="nav-link">留言</a>
          </li>
        </ul>
      </nav>
    </div>
  </header>
</template>

<script>
export default {
  name: "HomeHeader"
};
</script>

<style scoped>
/* @import url('@styles/all.css'); */
</style>