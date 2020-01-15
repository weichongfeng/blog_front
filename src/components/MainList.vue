<template>
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
</template>

<script>
export default {
  name: "MainList"
};
</script>