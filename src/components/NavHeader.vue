<template>
    <div class="hello">
      <el-menu :default-active="activeIndex" class="el-menu-demo" mode="horizontal" @select="handleSelect">
        <el-row :gutter="20">
            <el-col :span="6"><div class="grid-content bg-purple">
              <img style="margin-left: 40%;width:60px;" src="../assets/logo.png" alt="">
              </div></el-col>
            <el-col :span="6"><div class="grid-content bg-purple">
                      <el-menu-item index="1"><router-link to="/" tag="li">首页</router-link></el-menu-item>
              <el-menu-item index="3"><router-link to="/blog" tag="li">博客</router-link></el-menu-item>
      
              </div></el-col>
        </el-row>
</el-menu>
      <div class="line"></div>
    </div>
</template>
<script>
export default {
  data() {
    return {
      activeIndex: "1",
      activeIndex2: "1"
    };
  },
  methods: {
    handleSelect(key, keyPath) {
      console.log(key, keyPath);
    }
  }
};
</script>