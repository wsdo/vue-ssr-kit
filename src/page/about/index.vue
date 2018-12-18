<template>
    <div>
        <Menu/>
        <!-- <nav-header/> -->
        <Breadcrumb>about</Breadcrumb>
        <div class="container about">
            <div class="about-title">
                ABOUT ME
                <div class="rectangle"></div>
            </div>
    
            <div class="row">
                <div class="col-md-5">
                    <div class="about-photo">
                        <img src="http://img.shudong.wang/WechatIMG81.jpeg" alt="">
                    </div>
                </div>
                <div class="col-md-7">
                    <div class="ab-name">
                        王树东 Stark Wang
                    </div>
                    <div class="ab-introduce">
                        <ul>
                            <li>从事web开发多年，前端、后端、服务架构都有涉猎，经历过 大公司、创业公司，擅长前端及公司技术选型。
                            </li>
                            <li>熟悉 angular 、react 、vue、 前端工程化工具webpack、gulp、grunt、fis等新兴前端技术</li>
                            <li>对服务架构方面，负载均衡，mysql主从复制，docker有颇深研究，熟练使用后端php框架 yii2、 laravel、 thinkphp等框架。</li>
                        </ul>
                    </div>
                    <div class="ab-conenct row">
                        <div class="col-md-5 ab-qrcode">
                            <img src="./img/wechat.png" alt="">
                        </div>
                        <div class="col-md-7 ab-info">
    
                            <div class="ab-info-list">
                                <span class="ab-info-img">
                                    <img src="./img/wx.png" alt="">
                                </span>
                                <span class="ab-info-text">
                                    左边二维码
                                </span>
                            </div>
                            <div class="ab-info-list">
                                <span class="ab-info-img">
                                    <img src="./img/email.png" alt="">
                                </span>
                                <span class="ab-info-text">
                                    wsd312@163.com
                                </span>
                            </div>
                            <div class="ab-info-list">
                                <span class="ab-info-img">
                                    <img src="./img/github.png" alt="">
                                </span>
                                <span class="ab-info-text">
                                   <a href="https://github/wsdo">https://github/wsdo</a> 
                                </span>
                            </div>
                            <div class="ab-info-list">
                                <span class="ab-info-img">
                                    <img src="./img/sf.png" alt="">
                                </span>
                                <span class="ab-info-text">
                                    <a href="https://segmentfault.com/u/fecx">https://segmentfault.com/u/fecx</a>
                                    
                                </span>
                            </div>
                        </div>
    
                    </div>
                </div>
            </div>
            <div class="about-title">
                TECKNOLOGY STACK
                <div class="rectangle"></div>
            </div>

            <div class="ts-main">
                <div class="row tecknology-stack">
                    <div class="ts col-md-3">
                        <div class="ts-list">
                            <img src="./img/docker.png" alt="">
                            <div class="ts-text">
                                Docker
                            </div>
                        </div>
                    </div>
                    
                    <div class="ts col-md-3">
                        <div class="ts-list">
                            <img src="./img/laravel.png" alt="">
                            <div class="ts-text">
                                laravel
                            </div>
                        </div>
                    </div>
                    
                    <div class="ts col-md-3">
                        <div class="ts-list">
                            <img src="./img/node.png" alt="">
                            <div class="ts-text">
                                Node
                            </div>
                        </div>
                    </div>
                    
                    <div class="ts col-md-3">
                        <div class="ts-list">
                            <img src="./img/git.png" alt="">
                            <div class="ts-text">
                                Git
                            </div>
                        </div>
                    </div>
                    
                </div>

                <div class="row tecknology-stack">
                    <div class="ts col-md-3">
                        <div class="ts-list">
                            <img src="./img/babel.png" alt="">
                            <div class="ts-text">
                                Babel
                            </div>
                        </div>
                    </div>
                    
                    <div class="ts col-md-3">
                        <div class="ts-list">
                            <img src="./img/js.png" alt="">
                            <div class="ts-text">
                                js
                            </div>
                        </div>
                    </div>
                    
                    <div class="ts col-md-3">
                        <div class="ts-list">
                            <img src="./img/nginx.png" alt="">
                            <div class="ts-text">
                                Nginx
                            </div>
                        </div>
                    </div>
                    
                    <div class="ts col-md-3">
                        <div class="ts-list">
                            <img src="./img/centos.png" alt="">
                            <div class="ts-text">
                                Centos
                            </div>
                        </div>
                    </div>
                    
                </div>
            </div>
        </div>
    
        <!-- main-container end -->
        <NavFooter/>
    </div>
</template>

<script>
    import {
        mapGetters
    } from "vuex";
    import NavHeader from "../../components/NavHeader";
    import Sidebar from "../../components/Sidebar";
    import NavFooter from "../../components/Footer";
    import Breadcrumb from "../../components/Breadcrumb";
    import qs from "qs";
    import Menu from "components/NavMenu/NavMenu.vue";
    import {
        postTime,
        formatDate
    } from '../../util/util'
    
    export default {
        components: {
            NavHeader,
            Sidebar,
            NavFooter,
            Menu,
            Breadcrumb
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
        mounted() {
            
        },
        computed: {
            ...mapGetters({
                article: "getArticleDesc"
            })
        },
        methods: {
    
        }
    };
</script>

<style lang="stylus">
    .ts-main
        margin 50px 0
    .ab-name
        font-weight 700
    .ab-conenct
        margin-top 10px
    .tecknology-stack
        margin-top 40px
    .ts-list
        text-align center 
    .ts-text
        font-size: 20px;
        margin-top: 20px;
    .ts
        img
            width: 160px;
    .ab-info
        padding 0 10px

    .ab-info-list
        margin-top: 20px;
        height 30px
    .ab-qrcode
        img
            width 100%
    .ab-info-img
        img
            width 30px
    .ab-info-text
        font-size: 15px;
        margin-left: 10px;
        text-align: center;
        vertical-align: sub;
    .about-title
        font-size 40px
        margin: 50px;
        text-align: center;
    .about-photo
        box-shadow 0px 10px 30px 1px
        img
            width 100%
    .ab-name
        font-size 40px
    .ab-introduce
        margin-top: 20px;
        ul
            li
                margin-top: 30px;
                font-size 18px
    .rectangle {
        width: 100px;
        height: 6px;
        background-color: #5cc9f5;
        margin: 20px auto;
    }
</style>
