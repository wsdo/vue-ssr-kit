<template>
    <!-- <div> -->
    <!-- sidebar start -->
    <!-- ================ -->
    <aside class="col-lg-4 col-xl-3 ml-xl-auto">
        <div class="sidebar">


            <div class="block clearfix">
                <h3 class="title">Sidebar menu</h3>
                <div class="separator-2"></div>
                <nav>
                    <ul class="nav flex-column">
                        <li class="nav-item"><a class="nav-link" href="index.html">Home</a></li>
                        <li class="nav-item"><a class="nav-link active" href="blog-large-image-right-sidebar.html">Blog</a></li>
                        <li class="nav-item"><a class="nav-link" href="portfolio-grid-2-3-col.html">Portfolio</a></li>
                        <li class="nav-item"><a class="nav-link" href="page-about.html">About</a></li>
                        <li class="nav-item"><a class="nav-link" href="page-contact.html">Contact</a></li>
                    </ul>
                </nav>
            </div>
    
            <div class="block clearfix">
                <h3 class="title">Popular Tags</h3>
                <div class="separator-2"></div>
                <!-- <div class="tags-cloud" v-for="(item,index) in tagList" :key="index">
                    <div class="tag">
                        <a href="#">{{item.name}}</a>
                    </div>
                </div> -->
            </div>
        </div>
    
    </aside>
    <!-- sidebar end -->
    <!-- </div> -->
</template>

<script>
    export default {
        data() {
            return {
                tagList: ''
            }
        },
        methods: {
            getTagList() {
                // this.articleList = {"name":'stark','age':'18'};
                var params = {
                    id: this.id
                };
                // qs.stringify(params)
                this.$http.get('/tags/list', {
                    params
                }).then((res) => {
                    this.tagList = res.data;
                })
            },
        },
        created() {
            // this.getTagList();
        }
    }
</script>
