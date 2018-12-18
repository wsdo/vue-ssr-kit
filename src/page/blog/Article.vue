<template>
  <div>
    <Menu/>
    <!-- <nav-header/> -->
    <Breadcrumb>文章详情</Breadcrumb>
  
    <!-- main-container start -->
    <transition name="slide-fade">
      <!-- ================ -->
      <section class="main-container">
  
        <div class="container">
          <div class="row">
  
            <!-- main start -->
            <!-- ================ -->
            <div class="main col-lg-8">
  
              <!-- page-title start -->
              <!-- ================ -->
              <div class="page-title">{{article.title}}</div>
              <!-- page-title end -->
  
              <!-- blogpost start -->
              <!-- ================ -->
              <article class="blogpost full">
                <div>
                  <div class="post-info mb-4">
                    <span class="post-view-num">{{article.pv}} 次浏览</span> 
                    <span class="post-date">
                    <i class="icon-calendar"></i>
                    <span>{{ article.create_time | formatDate}}</span>
                    <span class="submitted"><i class="icon-user-1"></i> <a href="#">{{article.username}}</a></span>
                    <span>{{ article.create_time | postTime}}</span>
                    </span>
                  </div>
                </div>
                <div class="blogpost-content">
                  <div id="carousel-blog-post" class="carousel slide mb-3" data-ride="carousel">
                    <!-- Indicators -->
                    <ol class="carousel-indicators">
                      <li data-target="#carousel-blog-post" data-slide-to="0" class="active"></li>
                      <li data-target="#carousel-blog-post" data-slide-to="1"></li>
                      <li data-target="#carousel-blog-post" data-slide-to="2"></li>
                    </ol>
                  </div>
                  <div class="content" ref="content" v-html="article.content">
                  </div>
                </div>
                <!-- <footer class="clearfix">
                  <div class="tags pull-left"><i class="icon-tags"></i> <a href="#">tag 1</a>, <a href="#">tag 2</a>, <a href="#">long tag 3</a></div>
                  <div class="link pull-right">
                    <ul class="social-links circle small colored clearfix margin-clear text-right animated-effect-1">
                      <li class="twitter"><a target="_blank" href="http://www.twitter.com"><i class="fa fa-twitter"></i></a></li>
                      <li class="googleplus"><a target="_blank" href="http://plus.google.com"><i class="fa fa-google-plus"></i></a></li>
                      <li class="facebook"><a target="_blank" href="http://www.facebook.com"><i class="fa fa-facebook"></i></a></li>
                    </ul>
                  </div>
                </footer> -->
              </article>
              <!-- blogpost end -->
              <!-- <vue-disqus shortname="shudongwang" :identifier="page_id" url="https://shudong.wang"></vue-disqus> -->
              <!-- comments start -->
              <!-- ================ -->
  
              <!-- comments end -->
  
              <!-- comments form start -->
              <!-- ================ -->
              <!-- <div class="comments-form">
                    <h2 class="title">Add your comment</h2>
                    <form id="comment-form">
                      <div class="form-group has-feedback">
                        <label for="name4">Name</label>
                        <input type="text" class="form-control" id="name4" placeholder="" name="name4" required>
                        <i class="fa fa-user form-control-feedback"></i>
                      </div>
                      <div class="form-group has-feedback">
                        <label for="subject4">Subject</label>
                        <input type="text" class="form-control" id="subject4" placeholder="" name="subject4" required>
                        <i class="fa fa-pencil form-control-feedback"></i>
                      </div>
                      <div class="form-group has-feedback">
                        <label for="message4">Message</label>
                        <textarea class="form-control" rows="8" id="message4" placeholder="" name="message4" required></textarea>
                        <i class="fa fa-envelope-o form-control-feedback"></i>
                      </div>
                      <input type="submit" value="Submit" class="btn btn-default">
                    </form>
                  </div> -->
              <!-- comments form end -->
  
            </div>
            <!-- main end -->
            <!-- <sidebar/> -->
            <div class="article-sidebar">
              <div class="sidebar-menu">
                <div class="sidebar-menu-text">
                  目录
                </div>
                <div v-html="sectionContainer" class="panel-body">
                </div>
              </div>
            </div>
            <!-- <sidebar/> -->
          </div>
        </div>
      </section>
    </transition>
    <!-- main-container end -->
    <NavFooter/>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import NavHeader from "../../components/NavHeader";
import Sidebar from "../../components/Sidebar";
import NavFooter from "../../components/Footer";
import Breadcrumb from "../../components/Breadcrumb";
import qs from "qs";
import Menu from "components/NavMenu/NavMenu.vue";
// import VueDisqus from 'vue-disqus/VueDisqus.vue'
import { postTime, formatDate } from '../../util/util'

export default {
  components: {
    NavHeader,
    Sidebar,
    NavFooter,
    Menu,
    Breadcrumb
    // VueDisqus
  },
  data() {
    return {
      // article:Object,
      id: 1,
      totalCount: 0,
      perPage: 3,
      sectionContainer: ""
    };
  },
  asyncData({ store, route }) {
    return store.dispatch("getArticleDesc", route.params.id);
  },
  mounted() {
    this.sectionContainer = this.getContent();
    console.log("====================================");
    console.log(this.sectionContainer);
    console.log("====================================");
  },
  computed: {
    ...mapGetters({
      article: "getArticleDesc"
    })
  },
  filters: {
        formatDate(time) {
           var nowtime = time * 1000;
            var date = new Date(nowtime);
            return formatDate(date , "yyyy-MM-dd hh:mm");
        },
        postTime(time){
            var nowtime = time * 1000;
            var date = new Date(nowtime);
            return postTime(date);
        }
  },
  methods: {
    getArticleList() {
      var params = {
        id: this.id
      };
      this.$http
        .get("/articles/desc", {
          params
        })
        .then(res => {
          this.article = res.data;
        });
    },
    handleCurrentChange(val) {
      this.page = val;
      this.getArticleList();
      this.$router.replace({
        path: `/blog/${val}`
      });
    },
    makeLink(h) {
      var link = document.createElement("li");
      window.arst = h;
      var text = [].slice
        .call(h.childNodes)
        .map(function(node) {
          if (node.nodeType === Node.TEXT_NODE) {
            return node.nodeValue;
          } else if (["CODE", "SPAN"].indexOf(node.tagName) !== -1) {
            return node.textContent;
          } else {
            return "";
          }
        })
        .join("")
        .replace(/\(.*\)$/, "");
      link.innerHTML =
        '<a class="section-link" data-scroll href="#' +
        h.id +
        '">' +
        this.htmlEscape(text) +
        "</a>";
      return link;
    },
    htmlEscape(text) {
      return text
        .replace(/&/g, "&amp;")
        .replace(/"/g, "&quot;")
        .replace(/'/g, "&#39;")
        .replace(/</g, "&lt;")
        .replace(/>/g, "&gt;");
    },
    collectH3s(h) {
      var h3s = [];
      var next = h.nextSibling;
      while (next && next.tagName !== "H2") {
        if (next.tagName === "H3") {
          h3s.push(next);
        }
        next = next.nextSibling;
      }
      return h3s;
    },
    makeSubLinks (h3s, small) {
      let self = this
      var container = document.createElement('ul')
      if (small) {
        container.className = 'menu-sub'
      }
      h3s.forEach(function (h) {
        container.appendChild(self.makeLink(h))
      })
      return container
    },
    getContent() {
      var self = this;
      var sectionContainer;
      var each = [].forEach;
      var content = this.$refs.content;
      var headers = content.querySelectorAll("h2");
      var allHeaders = []
      sectionContainer = document.createElement("ul");

      if (headers.length) {
        each.call(headers, function (h) {
          sectionContainer.appendChild(self.makeLink(h))
          var h3s = self.collectH3s(h)
          allHeaders.push(h)
          allHeaders.push.apply(allHeaders, h3s)
          if (h3s.length) {
            sectionContainer.appendChild(self.makeSubLinks(h3s, true))
          }
        })
      } else {
        headers = content.querySelectorAll('h3')
        each.call(headers, function (h) {
          console.log(h)
          sectionContainer.appendChild(self.makeLink(h))
          allHeaders.push(h)
        })
      }
      // each.call(headers, function(h) {
      //   sectionContainer.appendChild(self.makeLink(h));
      //   // var h3s = collectH3s(h)
      //   // allHeaders.push(h)
      //   // allHeaders.push.apply(allHeaders, h3s)
      //   // if (h3s.length) {
      //   //   sectionContainer.appendChild(makeSubLinks(h3s, isAPIOrStyleGuide))
      //   // }
      // });
      return sectionContainer.innerHTML;
    }
  }
};
</script>

<style>
.post-view-num{
  color: lightcoral
}
.page-title{
  font-size: 20px;
  margin: 10px 0;
}
.article-sidebar{
  margin-left: 2rem;
}
.sidebar-menu-text{
  font-size: 20px;
}
.sidebar-menu {
  position: relative;
  top: 0;
  max-width: 250px;
  border: none;
  -moz-box-shadow: 0 0px 0px #fff;
  -webkit-box-shadow: 0 0px 0px #fff;
  box-shadow: 0 0px 0px #fff;
  border-left: 1px solid #cdcdcd;
  padding: 0.5rem 2rem;
}
.panel-body {
  position: relative;
  z-index: 2;
  overflow: hidden;
  max-height: inherit;
  padding: 0 0 10px;
  -moz-transition: all 0.2s ease;
  -o-transition: all 0.2s ease;
  -webkit-transition: all 0.2s ease;
  transition: all 0.2s ease;
  font-size: 16px;
}

.content img {
  width: 100%;
}

.content h2,
h1 {
  border-bottom: 1px solid #eee;
  padding-bottom: 10px;
}
.content h1,
.content h2,
.content h3 {
  margin: 1.5rem 0 0;
}
.content h3 {
  font-size: 1.5rem;
}
.content pre {
  margin-top: 1.5em !important;
  padding: 1rem;
  border: none;
  overflow: auto;
  line-height: 1.45;
  max-height: 35em;
  position: relative;
  background: url(./img/blueprint.png) #F6F6F6;
  -moz-background-size: 30px, 30px;
  -o-background-size: 30px, 30px;
  -webkit-background-size: 30px, 30px;
  background-size: 30px, 30px;
}

.content blockquote {
  margin: 1.5rem 0;
  border-left: 2px solid #17a2b8;
  background: #f6f6f6;
  color: #555;
  font-size: 1rem;
  padding: 10px 20px;
}

.tag{
    display: inline-block;
    padding: 0 6px;
    color: #017E66;
    background-color: rgba(1,126,102,0.08);
    height: 22px;
    line-height: 22px;
    font-weight: normal;
    font-size: 13px;
    text-align: center;
}
</style>
