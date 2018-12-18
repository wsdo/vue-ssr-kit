<template>
  <div>
    <!-- <nav-header/> -->
    <Menu/>
    <Breadcrumb>文章列表</Breadcrumb>
    <div id="page-start"></div>
    <!-- main-container start -->
    <!-- ================ -->
    <section class="main-container">

      <div class="container">
        <div class="row">

          <!-- main start -->
          <!-- ================ -->
          <div class="main col-lg-8">

            <!-- page-title start -->
            <!-- ================ -->
            <h1 class="page-title">stark.wang' Blog</h1>
            <div class="separator-2"></div>
            <p class="lead">成功没有奇迹只有积累</p>
            <!-- page-title end -->


            <!-- blogpost start -->
            <div class="article-list blogpost" v-for="(item,index) in themes" :key="index">
              <div id="carousel-blog-post" class="carousel slide" data-ride="carousel">
                <!-- Indicators -->
                <ol class="carousel-indicators bottom margin-clear">
                  <li data-target="#carousel-blog-post" data-slide-to="0" class="active"></li>
                  <li data-target="#carousel-blog-post" data-slide-to="1"></li>
                  <li data-target="#carousel-blog-post" data-slide-to="2"></li>
                </ol>

                <!-- Wrapper for slides -->
                <div class="carousel-inner" role="listbox">
                  <div class="carousel-item active">
                    <div class="overlay-container">
                      <img src="" alt="">
                      <a class="overlay-link" href="blog-post.html"><i class="fa fa-link"></i></a>
                    </div>
                  </div>
                  <div class="carousel-item">
                    <div class="overlay-container">
                      <img src="" alt="">
                      <a class="overlay-link" href="blog-post.html"><i class="fa fa-link"></i></a>
                    </div>
                  </div>
                  <div class="carousel-item">
                    <div class="overlay-container">
                      <img src="" alt="">
                      <a class="overlay-link" href="blog-post.html"><i class="fa fa-link"></i></a>
                    </div>
                  </div>
                </div>
              </div>
              <!-- <header> -->
                <div class="article-title">
                  <router-link tag="a"  :to="'/article/'+item.id">{{item.title}}</router-link>
                </div>
                <div class="post-info">
                  <span>{{ item.create_time | formatDate}}</span>
                  <span>{{ item.create_time | postTime}}</span>
                  <span class="post-date">
                        <i class="icon-calendar"></i>
                        <span class="day">12</span>
                  <span class="month"></span>
                  </span>
                  <span class="submitted"><i class="icon-user-1"></i> by <a href="#">{{item.username}}</a></span>
                  <span class="comments"><i class="icon-chat"></i> <a href="#">22 comments</a></span>
                </div>
              <!-- </header> -->


              <div class="list-content" v-html="item.excerpt"></div>

              <div class="clearfix list-footer">
                <div class="tags pull-left"><i class="icon-tags"></i>
                  <span>文章浏览量:{{item.pv}}</span> 
                </div>
                <!-- <div class="link pull-right"><i class="icon-link"></i><a href="#">Read More</a></div> -->
                <router-link class="link pull-right" :to="'/article/'+item.id">Read More</router-link>
              </div>
            </div>
            <!-- blogpost end -->
            <div id="page-start"></div>









    <!-- <nav>
        <el-pagination class="pagination  justify-content-center" aria-label="Page navigation"  background layout="prev, pager, next" :total="totalCount" :page-size="perPage" :current-page="page" @current-change="handleCurrentChange">
        </el-pagination>
    </nav> -->









            <!-- pagination start -->
            <!-- <nav aria-label="Page navigation">
                  <ul class="pagination justify-content-center">
                    <li class="page-item">
                      <a class="page-link" href="#" aria-label="Previous">
                        <i aria-hidden="true" class="fa fa-angle-left"></i>
                        <span class="sr-only">Previous</span>
                      </a>
                    </li>

                    <li class="page-item active"><a class="page-link" href="#">1</a></li>
                    <li class="page-item"><a class="page-link" href="#">2</a></li>
                    <li class="page-item"><a class="page-link" href="#">3</a></li>
                    <li class="page-item"><a class="page-link" href="#">4</a></li>
                    <li class="page-item"><a class="page-link" href="#">5</a></li>
                    <li class="page-item">
                      <a class="page-link" href="#" aria-label="Next">
                        <i aria-hidden="true" class="fa fa-angle-right"></i>
                        <span class="sr-only">Next</span>
                      </a>
                    </li>
                  </ul>
                </nav> -->
            <!-- pagination end -->


          </div>
          <!-- main end -->
          <!-- <Sidebar/> -->

        </div>
      </div>
    </section>
    <NavFooter/>
    <!-- main-container end -->
  </div>
</template>

<script>
  import Menu from 'components/NavMenu/NavMenu.vue'
  import Breadcrumb from 'components/Breadcrumb'
  import { mapGetters } from 'vuex'
  import NavHeader from '../../components/NavHeader'
  import Sidebar from '../../components/Sidebar'
  import NavFooter from '../../components/Footer'
  import { postTime, formatDate } from '../../util/util'
  import qs from 'qs'
  export default {
    components: {
      NavHeader,
      Sidebar,
      NavFooter,
      Menu,
      Breadcrumb
    },
    title() {
      return {
        title: '博客列表',
        keywords: '王树东博客列表, shudong',
        description: '王树东博客列表',
      }
    },
    asyncData({ store }) {
      return store.dispatch('getThemes')
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
    computed: {
      ...mapGetters({
        themes: 'getThemes'
      })
    },
    data() {
      return {
        articleList: Object,
        page: 1,
        totalCount: 0,
        perPage: 3,
        postTime:''

      }
    },
    methods: {
      getArticleList() {
        var params = {
          perPage: this.perPage,
          page: this.page
        };
        // qs.stringify(params)
        this.$http.get('/articles/list', {
          params
        }).then((res) => {
          this.articleList = res.data.article;
          this.totalCount = parseInt(res.data.totalCount);
        })
      },
      handleCurrentChange(val) {
        this.page = val;
        this.getArticleList();
        this.$router.replace({
          path: `/blog/${val}`
        })
      }
    },
    created() {
      this.page = parseInt(this.$route.params.page) || this.page;

    }
  }
</script>
<style>
  .article-list{
    position: relative;
    display: -ms-flexbox;
    display: flex;
    -ms-flex-direction: column;
    flex-direction: column;
    min-width: 0;
    background-color: #fff;
    background-clip: border-box;
    border: 1px solid rgba(0,0,0,.125);
    border-radius: .25rem;
    padding: 0 1rem;
    margin-top: 30px;
    font-size: 14px;
    
  }
  .list-footer{
    border-top:1px solid #eee;
    padding:1rem;
    margin-top: 15px;
  }
  .list-content{
    font-size: 14px;
    margin-top: 1rem;
    overflow: hidden;
    line-height: 26px;
    text-overflow: ellipsis;
    -o-text-overflow: ellipsis;
    overflow: hidden;
  }
  .article-title{
    font-size: 20px;
    margin-bottom: 10px;
  }
</style>
