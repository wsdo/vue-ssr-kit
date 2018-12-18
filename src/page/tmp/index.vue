<template>
  <div>
    <Menu />
    <Breadcrumb>文章详情</Breadcrumb>
    <div class="container">
      hi world
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

<style>

</style>
