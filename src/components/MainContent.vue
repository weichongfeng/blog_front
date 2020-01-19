<template>
  <div class="layout-inner">
    <div class="card">
      <div class="content-header">
        <h1 class="page-title">{{blog.title}}</h1>
        <span class="page-timestamp">{{blog.created_at}}</span>
      </div>
      <div id="main-content">
        <div class="content__default">{{blog.content}}</div>
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
              id="http://tiaocaoer.com/blog/vant_cloud_dev.html"
            >
              <em class="post-meta-item-text">阅读量：</em>
              <i class="leancloud-visitors-count">5</i>
            </span>
          </div>
          <h3>
            <a href="javascript:;"></a>
            评 论：
          </h3>
          <div class="comments">
            <div class="vwrap">
              <div class="vheader item3">
                <input name="nick" placeholder="昵称" class="vnick vinput" type="text" />
                <input name="mail" placeholder="邮箱" class="vmail vinput" type="email" />
              </div>
              <div class="vedit">
                <textarea id="veditor" class="veditor vinput" placeholder></textarea>
                <div class="vinput vpreview" style="display:none;"></div>
              </div>
              <div class="vcontrol">
                <div class="col col-80 text-right">
                  <button type="button" title="Cmd|Ctrl+Enter" class="vsubmit vbtn">回复</button>
                </div>
              </div>
              <div style="display:none;" class="vmark"></div>
            </div>
            <div class="vlist">
              <div class="vcard" id="5e22c6a721460d006acfd3aa">
                <img
                  class="vimg"
                  src="https://gravatar.loli.net/avatar/d41d8cd98f00b204e9800998ecf8427e?d=mp&amp;v=1.3.10"
                />
                <div class="vh" rootid="5e22c6a721460d006acfd3aa">
                  <div class="vhead">
                    <span class="vnick">Anonymous</span>
                    <!-- <span class="vsys">Firefox 67.0</span> -->
                    <!-- <span class="vsys">Windows 10.0</span> -->
                  </div>
                  <div class="vmeta">
                    <span class="vtime">22 小时前</span>
                    <span class="vat">回复</span>
                  </div>
                  <div class="vcontent">
                    <p>
                      第三方
                      <a href="mailto:df@163.com" target="_blank" rel="nofollow">df@163.com</a> <a>http://fanyi.youdao.com/</a> 阿迪斯发士大夫安德森发顺丰啊但是发射点
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div class="vpage txt-center">
              <button type="button" class="vmore vbtn">查看更多...</button>
            </div>
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
  data() {
    return {
      blog_id: 0,
      blog: {}
    };
  },
  methods: {
    getBlogInfo() {
      axios
        .get("/api/blog/" + this.blog_id + ".json")
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
  mounted() {
    this.blog_id = this.$route.params.id;
    this.getBlogInfo();
  }
};
</script>

<style scoped>
.comments {
  font-size: 16px;
  text-align: left;
}
.comments * {
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
  line-height: 2;
  color: #555;
  -webkit-transition: all 0.3s ease;
  transition: all 0.3s ease;
}
.comments hr {
  margin: 0.825em 0;
  border-color: #f6f6f6;
  border-style: dashed;
}
.comments.hide-avatar .vimg {
  display: none;
}
.comments a {
  position: relative;
  cursor: pointer;
  color: #1abc9c;
  display: inline-block;
}
.comments a:before {
  content: "";
  position: absolute;
  width: 0;
  right: 0;
  bottom: 0;
  height: 1px;
  background: #1abc9c;
  -webkit-transition: width 0.3s ease;
  transition: width 0.3s ease;
}
.comments a:hover {
  color: #d7191a;
}
.comments a:hover:before {
  width: 100%;
  left: 0;
  right: auto;
}
.comments code,
.comments pre {
  background-color: #f6f6f6;
  color: #555;
  padding: 0.2em 0.4em;
  border-radius: 3px;
  font-size: 85%;
  margin: 0;
  font-family: Source Code Pro, courier new, Input Mono, PT Mono, SFMono-Regular,
    Consolas, Monaco, Menlo, PingFang SC, Liberation Mono, Microsoft YaHei,
    Courier，monospace;
}
.comments pre {
  padding: 10px;
  overflow: auto;
  line-height: 1.45;
}
.comments pre code {
  padding: 0;
  background: transparent;
  white-space: pre-wrap;
  word-break: keep-all;
}
.comments blockquote {
  color: #666;
  margin: 0.5em 0;
  padding: 0 0 0 1em;
  border-left: 8px solid hsla(0, 0%, 93%, 0.5);
}
.comments .vinput {
  border: none;
  resize: none;
  outline: none;
  padding: 10px 5px;
  max-width: 100%;
  font-size: 0.775em;
}
.comments input[type="checkbox"],
.comments input[type="radio"] {
  display: inline-block;
  vertical-align: middle;
  margin-top: -2px;
}
.comments .vwrap {
  border: 1px solid #f0f0f0;
  border-radius: 4px;
  margin-bottom: 10px;
  overflow: hidden;
  position: relative;
  padding: 10px;
}
.comments .vwrap input {
  background: transparent;
}
.comments .vwrap .vedit {
  position: relative;
  padding-top: 10px;
}
.comments .vwrap .vedit .vctrl {
  text-align: right;
  font-size: 12px;
}
.comments .vwrap .vedit .vctrl span {
  padding: 10px;
  display: inline-block;
  vertical-align: middle;
  cursor: pointer;
}
.comments .vwrap .vedit .vemojis {
  display: none;
  font-size: 18px;
  text-align: justify;
  max-height: 145px;
  overflow: auto;
  margin-bottom: 10px;
  -webkit-box-shadow: 0 0 1px #f0f0f0;
  box-shadow: 0 0 1px #f0f0f0;
}
.comments .vwrap .vedit .vemojis i {
  font-style: normal;
  padding: 7px 0;
  width: 38px;
  cursor: pointer;
  text-align: center;
  display: inline-block;
  vertical-align: middle;
}
.comments .vwrap .vedit .vpreview {
  padding: 7px;
  -webkit-box-shadow: 0 0 1px #f0f0f0;
  box-shadow: 0 0 1px #f0f0f0;
}
.comments .vwrap .vedit .vpreview frame,
.comments .vwrap .vedit .vpreview iframe,
.comments .vwrap .vedit .vpreview img {
  max-width: 100%;
  border: none;
}
.comments .vwrap .vheader .vinput {
  width: 50%;
  border-bottom: 1px dashed #dedede;
}
.comments .vwrap .vheader.item2 .vinput {
  width: 50%;
}
.comments .vwrap .vheader.item1 .vinput {
  width: 100%;
}
.comments .vwrap .vheader .vinput:focus {
  border-bottom-color: #eb5055;
}
@media screen and (max-width: 520px) {
  .comments .vwrap .vheader.item2 .vinput,
  .comments .vwrap .vheader .vinput {
    width: 100%;
  }
}
.comments .vwrap .vcontrol {
  font-size: 0;
  padding-top: 15px;
}
.comments .vwrap .vcontrol .col {
  display: inline-block;
  font-size: 16px;
  vertical-align: middle;
  color: #ccc;
}
.comments .vwrap .vcontrol .col.text-right {
  text-align: right;
}
.comments .vwrap .vcontrol .col svg {
  margin-right: 2px;
  overflow: hidden;
  fill: currentColor;
  vertical-align: middle;
}
.comments .vwrap .vcontrol .col.col-20 {
  width: 20%;
}
.comments .vwrap .vcontrol .col.col-40 {
  width: 40%;
}
.comments .vwrap .vcontrol .col.col-60 {
  width: 60%;
}
.comments .vwrap .vcontrol .col.col-80 {
  width: 100%;
}
.comments .vwrap .vcontrol .col.split {
  width: 50%;
}
.comments .vwrap .vmark {
  position: absolute;
  background: rgba(0, 0, 0, 0.65);
  width: 100%;
  height: 100%;
  left: 0;
  top: 0;
}
.comments .vwrap .vmark .valert {
  padding-top: 3em;
}
.comments .vwrap .vmark .valert .vtext {
  color: #fff;
  padding: 1em 0;
}
.comments .vwrap .vmark .valert .vcode {
  width: 4.6875em;
  border-radius: 0.3125em;
  padding: 0.5em;
  background: #dedede;
}
.comments .vwrap .vmark .valert .vcode:focus {
  border-color: #3090e4;
  background-color: #fff;
}
@media screen and (max-width: 720px) {
  .comments .vwrap .vmark .valert {
    padding-top: 5.5em;
  }
  .comments .vwrap .vmark .valert .vtext {
    color: #fff;
    padding: 1em 0;
  }
}
.comments .power {
  color: #999;
  padding: 0.5em 0;
}
.comments .power,
.comments .power a {
  font-size: 0.75em;
}
.comments .vinfo {
  font-size: 0;
  padding: 5px;
}
.comments .vinfo .col {
  font-size: 16px;
  display: inline-block;
  width: 50%;
  vertical-align: middle;
}
.comments .vinfo .vcount .vnum {
  font-weight: 600;
  font-size: 1.25em;
}
.comments a {
  text-decoration: none;
  color: #555;
}
.comments a:hover {
  color: #222;
}
.comments ol,
.comments ul {
  padding: 0;
  margin-left: 1.25em;
}
.comments .txt-center {
  text-align: center;
}
.comments .txt-right {
  text-align: right;
}
.comments .pd5 {
  padding: 5px;
}
.comments .pd10 {
  padding: 10px;
}
.comments .veditor {
  width: 100%;
  min-height: 8.75em;
  font-size: 0.875em;
  background: transparent;
  resize: vertical;
  -webkit-transition: all 0.25s ease;
  transition: all 0.25s ease;
}
.comments .vbtn {
  -webkit-transition-duration: 0.4s;
  transition-duration: 0.4s;
  text-align: center;
  color: #313131;
  border: 1px solid #ededed;
  border-radius: 0.3em;
  display: inline-block;
  background: #ededed;
  margin-bottom: 0;
  font-weight: 400;
  vertical-align: middle;
  -ms-touch-action: manipulation;
  touch-action: manipulation;
  cursor: pointer;
  white-space: nowrap;
  padding: 0.5em 1.25em;
  font-size: 0.875em;
  line-height: 1.42857143;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
  outline: none;
}
.comments .vbtn + .vbtn {
  margin-left: 1.25em;
}
.comments .vbtn:active,
.comments .vbtn:hover {
  color: #3090e4;
  border-color: #3090e4;
  background-color: #fff;
}
.comments .vempty {
  padding: 1.25em;
  text-align: center;
  color: #999;
}
.comments .vlist {
  width: 100%;
}
.comments .vlist .vcard {
  padding-top: 1.5em;
  position: relative;
  display: block;
}
.comments .vlist .vcard:after {
  content: "";
  clear: both;
  display: block;
}
.comments .vlist .vcard .vimg {
  width: 3.125em;
  height: 3.125em;
  float: left;
  border-radius: 50%;
  margin-right: 0.7525em;
  border: 1px solid #f5f5f5;
  padding: 0.125em;
}
@media screen and (max-width: 720px) {
  .comments .vlist .vcard .vimg {
    width: 2.5em;
    height: 2.5em;
  }
}
.comments .vlist .vcard .vhead {
  line-height: 1.5;
  margin-top: 0;
}
.comments .vlist .vcard .vhead .vnick {
  position: relative;
  font-size: 0.875em;
  font-weight: 500;
  margin-right: 0.875em;
  cursor: pointer;
  color: #1abc9c;
  text-decoration: none;
  display: inline-block;
}
.comments .vlist .vcard .vhead .vnick:before {
  content: "";
  position: absolute;
  width: 0;
  right: 0;
  bottom: 0;
  height: 1px;
  background: #1abc9c;
  -webkit-transition: width 0.3s ease;
  transition: width 0.3s ease;
}
.comments .vlist .vcard .vhead .vnick:hover {
  color: #d7191a;
}
.comments .vlist .vcard .vhead .vnick:hover:before {
  width: 100%;
  left: 0;
  right: auto;
}
.comments .vlist .vcard .vhead .vsys {
  display: inline-block;
  padding: 0.2em 0.5em;
  background: #ededed;
  color: #b3b1b1;
  font-size: 0.75em;
  border-radius: 0.2em;
  margin-right: 0.3em;
}
@media screen and (max-width: 520px) {
  .comments .vlist .vcard .vhead .vsys {
    display: none;
  }
}
.comments .vlist .vcard .vh {
  overflow: hidden;
  padding-bottom: 0.5em;
  border-bottom: 1px dashed #f5f5f5;
}
.comments .vlist .vcard .vh .vtime {
  color: #b3b3b3;
  font-size: 0.75em;
  margin-right: 0.875em;
}
.comments .vlist .vcard .vh .vmeta {
  line-height: 1;
  position: relative;
}
.comments .vlist .vcard .vh .vmeta .vat {
  font-size: 0.8125em;
  color: #ef2f11;
  cursor: pointer;
  float: right;
}
.comments .vlist .vcard:last-child .vh {
  border-bottom: none;
}
.comments .vlist .vcard .vcontent {
  word-wrap: break-word;
  word-break: break-all;
  text-align: justify;
  color: #4a4a4a;
  font-size: 0.875em;
  line-height: 2;
  position: relative;
  margin-bottom: 0.75em;
  padding-top: 0.625em;
}
.comments .vlist .vcard .vcontent frame,
.comments .vlist .vcard .vcontent iframe,
.comments .vlist .vcard .vcontent img {
  max-width: 100%;
  border: none;
}
.comments .vlist .vcard .vcontent.expand {
  cursor: pointer;
  max-height: 11.25em;
  overflow: hidden;
}
.comments .vlist .vcard .vcontent.expand:before {
  display: block;
  content: "";
  position: absolute;
  width: 100%;
  left: 0;
  top: 0;
  bottom: 3.15em;
  pointer-events: none;
  background: -webkit-gradient(
    linear,
    left top,
    left bottom,
    from(hsla(0, 0%, 100%, 0)),
    to(hsla(0, 0%, 100%, 0.9))
  );
  background: linear-gradient(
    180deg,
    hsla(0, 0%, 100%, 0),
    hsla(0, 0%, 100%, 0.9)
  );
}
.comments .vlist .vcard .vcontent.expand:after {
  display: block;
  content: "Click on expand";
  text-align: center;
  color: #828586;
  position: absolute;
  width: 100%;
  height: 3.15em;
  line-height: 3.15em;
  left: 0;
  bottom: 0;
  pointer-events: none;
  background: hsla(0, 0%, 100%, 0.9);
}
.comments .vlist .vcard .vquote {
  color: #666;
  margin-top: 1em;
  padding-left: 1em;
  border-left: 1px dashed hsla(0, 0%, 93%, 0.5);
}
.comments .vlist .vcard .vquote .vimg {
  width: 2.225em;
  height: 2.225em;
}
.comments .vpage .vmore {
  margin: 1em 0;
}
.comments .clear {
  content: "";
  display: block;
  clear: both;
}
@-webkit-keyframes spin {
  0% {
    -webkit-transform: rotate(0deg);
    transform: rotate(0deg);
  }
  to {
    -webkit-transform: rotate(1turn);
    transform: rotate(1turn);
  }
}
@keyframes spin {
  0% {
    -webkit-transform: rotate(0deg);
    transform: rotate(0deg);
  }
  to {
    -webkit-transform: rotate(1turn);
    transform: rotate(1turn);
  }
}
@-webkit-keyframes pulse {
  50% {
    background: #dcdcdc;
  }
}
@keyframes pulse {
  50% {
    background: #dcdcdc;
  }
}
.comments .vloading {
  position: relative;
  padding: 20px;
  display: block;
  height: 80px;
}
.comments .vloading:before {
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
  content: "";
  position: absolute;
  display: inline-block;
  top: 20px;
  left: 50%;
  margin-left: -20px;
  width: 40px;
  height: 40px;
  border: 6px double #a0a0a0;
  border-top-color: transparent;
  border-bottom-color: transparent;
  border-radius: 50%;
  -webkit-animation: spin 1s infinite linear;
  animation: spin 1s infinite linear;
}
</style>