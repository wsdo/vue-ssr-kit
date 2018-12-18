<template>
  <div class="sd-header">
    <div class="container">
      <ul class="sd-nav nav">
        <li v-for="(item, key) in menus" :key="key" :class="styleClass(item)" @click="toPath(item)">
          <a href="javascript:;">{{item.text}}</a>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: "menus",
  data() {
    return {
      menus: [
        {
          text: "博客",
          path: "/blog"
        },
        {
          text: "项目",
          path: "/product"
        },
        {
          text: "关于我",
          path: "/about"
        },
      ]
    };
  },
  methods: {
    styleClass(item) {
      return {
        active: item.path === this.$route.path
      };
    },
    toPath(path) {
      this.$router.replace(path);
    }
  }
};
</script>
<style>
.sd-header {
  position: relative;
  z-index: 3;
  border-top: 3px solid #5CC9F5;
  box-shadow: 0px 2px 10px 0px rgba(0, 0, 0, 0.1), 0 1px rgba(0, 0, 0, 0.1);
  background: #fafafa;
}
.sd-nav li{
  height: 64px;
  line-height: 64px;
  width: 60px;
}
.sd-nav li a{
  text-align: center;
  font-size: 18px;
  padding: 0;
}
</style>
