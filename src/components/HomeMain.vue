<template>
  <div class="layout-container">
    <div class="main">
      <div class="layout-inner">
        <div>
          <div class="card article-card">
            <h2>
              <a
                href="/about"
                class="art-header-link"
              >TODO......</a>
            </h2>
            <div class="post-date">2020-01-14 18:55</div>
            <div class="excerpt">
              <p>个人博客开发......</p>
            </div>
            <div>
              <div class="divider article-card-line"></div>
              <span tabindex="0" class="tag-wrap">
                <span class="tag-inner">PHP</span>
              </span>
              <span tabindex="0" class="tag-wrap">
                <span class="tag-inner">MySQL</span>
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
      <div class="tool-group">
        <div class="card rec-card">
          <div class="wb-tt">
            <span>
              <i class="fa fa-fire"></i>置顶推荐
            </span>
          </div>
          <div class="rec-info">
            <div class="blog-title">
              <a href="https://www.oschina.net/news/112580/linux-eoy2019" class>Linux 内核代码超 2780 万行，但去年 commit 数量锐减</a>
            </div>
          </div>
        </div>
        <div class="card github-card">
          <div class="github-header"></div>
          <a class="user-link" href="https://github.com/weichongfeng/">
            <img class="github-avatar" src="../assets/images/lucky-pig-header.png" />
          </a>
          <h1></h1>
          <ul class="github-info">
            <li>
              <a target="_blank" href="https://github.com/weichongfeng/">
                <strong>6</strong>GitHub
              </a>
            </li>
            <li>
              <a target="_blank" href="https://gitee.com/WeiChongFeng/dashboard">
                <strong>2</strong>码云
              </a>
            </li>
          </ul>
        </div>
        <div class="card yl-card">
          <div class="wb-tt">
            <span>友链</span>
          </div>
          <ul class="yl-info">
            <li>
              <a href="https://www.oschina.net/" target="_blank">COSCHINE</a>
            </li>
            <li>
              <a href="https://www.cnblogs.com/" target="_blank">博客园</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "HomeMain"
};
</script>