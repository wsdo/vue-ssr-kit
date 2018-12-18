<template>
  <div>
    <Menu />
    <Breadcrumb>项目列表</Breadcrumb>
    <div class="container">
      <div class="row">

        <div class="col-md-6 col-lg-3 isotope-item app-development">
          <div class="image-box style-2 mb-20 shadow-2 bordered light-gray-bg text-center">
            <div class="isotope-img">
              <img src="http://a.hiphotos.baidu.com/image/pic/item/d043ad4bd11373f0924d8948af0f4bfbfaed04f2.jpg" alt="">
            </div>
            <div class="isotope-body"> 
              <div class="isotope-title">Project Title</div>
              <div class="separator"></div>
              <div class="isotope-text">
                <!-- Place this tag where you want the button to render. -->
                <a class="github-button" href="https://github.com/wsdo/markdown-img-qiniu" data-size="large" data-show-count="true" aria-label="Star wsdo/markdown-img-qiniu on GitHub">Star</a>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam atque ipsam nihil, adipisci rem minus? Voluptatem distinctio laborum porro aspernatur.
              </div>
            </div>
            <a href="portfolio-item.html" class="btn btn-default btn-hvr hvr-shutter-out-horizontal margin-clear">Read More<i class="fa fa-arrow-right pl-10"></i></a>
          </div>
        </div>
        

        <div class="col-md-6 col-lg-3 isotope-item app-development">
          <div class="image-box style-2 mb-20 shadow-2 bordered light-gray-bg text-center">
            <div class="isotope-img">
              <img src="http://a.hiphotos.baidu.com/image/pic/item/d043ad4bd11373f0924d8948af0f4bfbfaed04f2.jpg" alt="">
            </div>
            <div class="isotope-body"> 
              <div class="isotope-title">Project Title</div>
              <div class="separator"></div>
              <div class="isotope-text">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam atque ipsam nihil, adipisci rem minus? Voluptatem distinctio laborum porro aspernatur.
              </div>
            </div>
            <a href="portfolio-item.html" class="btn btn-default btn-hvr hvr-shutter-out-horizontal margin-clear">Read More<i class="fa fa-arrow-right pl-10"></i></a>
          </div>
        </div>

        <div class="col-md-6 col-lg-3 isotope-item app-development">
          <div class="image-box style-2 mb-20 shadow-2 bordered light-gray-bg text-center">
            <div class="isotope-img">
              <img src="http://a.hiphotos.baidu.com/image/pic/item/d043ad4bd11373f0924d8948af0f4bfbfaed04f2.jpg" alt="">
            </div>
            <div class="isotope-body"> 
              <div class="isotope-title">Project Title</div>
              <div class="separator"></div>
              <div class="isotope-text">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam atque ipsam nihil, adipisci rem minus? Voluptatem distinctio laborum porro aspernatur.
              </div>
            </div>
            <a href="portfolio-item.html" class="btn btn-default btn-hvr hvr-shutter-out-horizontal margin-clear">Read More<i class="fa fa-arrow-right pl-10"></i></a>
          </div>
        </div>

        <div class="col-md-6 col-lg-3 isotope-item app-development">
          <div class="image-box style-2 mb-20 shadow-2 bordered light-gray-bg text-center">
            <div class="isotope-img">
              <img src="http://a.hiphotos.baidu.com/image/pic/item/d043ad4bd11373f0924d8948af0f4bfbfaed04f2.jpg" alt="">
            </div>
            <div class="isotope-body"> 
              <div class="isotope-title">Project Title</div>
              <div class="separator"></div>
              <div class="isotope-text">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam atque ipsam nihil, adipisci rem minus? Voluptatem distinctio laborum porro aspernatur.
              </div>
            </div>
            <a href="portfolio-item.html" class="btn btn-default btn-hvr hvr-shutter-out-horizontal margin-clear">Read More<i class="fa fa-arrow-right pl-10"></i></a>
          </div>
        </div>

      </div>
    </div>
    <NavFooter />
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import NavHeader from "../../components/NavHeader";
import NavFooter from "../../components/Footer";
import Breadcrumb from "../../components/Breadcrumb";
import Menu from "components/NavMenu/NavMenu.vue";
import { postTime, formatDate } from "../../util/util";

export default {
  components: {
    NavHeader,
    NavFooter,
    Menu,
    Breadcrumb
  },
  data() {
    return {
      id: 1,
      totalCount: 0,
      perPage: 3,
      sectionContainer: ""
    };
  },
  asyncData({ store, route }) {

  },
  mounted() {},
  computed: {
    ...mapGetters({
      article: "getArticleDesc"
    })
  },
  filters: {
    formatDate(time) {
      var nowtime = time * 1000;
      var date = new Date(nowtime);
      return formatDate(date, "yyyy-MM-dd hh:mm");
    },
    postTime(time) {
      var nowtime = time * 1000;
      var date = new Date(nowtime);
      return postTime(date);
    }
  },
  methods: {}
};
</script>

<style lang="stylus"> 
.isotope-item
  // background-color: #5CC9F5;
  padding: 10px;
.isotope-body
  padding 15px
.isotope-text
  background-color: #fafafa;
.btn-default:hover, .btn-default:focus, .btn-default.focus, .btn-default:active, .btn-default.active, .show > .dropdown-toggle.btn-default {
    background-color: #0c9ec7;
    border-color: #0c9ec7;
}
.separator
  margin: 20px 0;
  height: 1px;
  background: #e8e8e8;
  background: -moz-linear-gradient(left, transparent 0%, rgba(0, 0, 0, 0.09) 35%, rgba(0, 0, 0, 0.09) 70%, transparent 100%);
  background: -webkit-gradient(linear, left top, right top, color-stop(0%, transparent), color-stop(35%, rgba(0, 0, 0, 0.09)), color-stop(70%, rgba(0, 0, 0, 0.09)), color-stop(100%, transparent));
  background: -webkit-linear-gradient(left, transparent 0%, rgba(0, 0, 0, 0.09) 35%, rgba(0, 0, 0, 0.09) 70%, transparent 100%);
  background: -o-linear-gradient(left, transparent 0%, rgba(0, 0, 0, 0.09) 35%, rgba(0, 0, 0, 0.09) 70%, transparent 100%);
  background: -ms-linear-gradient(left, transparent 0%, rgba(0, 0, 0, 0.09) 35%, rgba(0, 0, 0, 0.09) 70%, transparent 100%);
  background: linear-gradient(to right, transparent 0%, rgba(0, 0, 0, 0.09) 35%, rgba(0, 0, 0, 0.09) 70%, transparent 100%);
  bottom: -1px;
  content: "";
  width: 100%;

.shadow-2 
  box-shadow 0 10px 6px -6px #999
  transition all 0.25s ease-in-out

.image-box
  height 100%

.
.shadow-2 {
    -webkit-box-shadow: 0 10px 6px -6px #999;
    box-shadow: 0 10px 6px -6px #999;
    -webkit-transition: all 0.25s ease-in-out;
    -o-transition: all 0.25s ease-in-out;
    transition: all 0.25s ease-in-out;
}
.bordered {
    border: 1px solid #f1f1f1;
    -webkit-border-radius: 3px;
    -moz-border-radius: 3px;
    border-radius: 3px;
}
.mb-20 {
    margin-bottom: 20px;
}
.light-gray-bg {
    background-color: #fafafa;
    border-top: 1px solid #f3f3f3;
    border-bottom: 1px solid #f3f3f3;
}
.isotope-img img
  width 100%

.btn-default {
    background-color: #09afdf;
    border-color: #0c9ec7;
}
.btn {
    padding: 7px 20px;
    font-size: 14px;
    line-height: 1.4666666667;
    border-radius: 3px;
    margin: 10px 0;
}
.btn-default {
    color: #ffffff;
}
.isotope-title
  font-size 30px
  position relative
</style>
