<template>
  <el-container style="height: 97vh">
    <el-aside width="250px">
      <el-menu
          class="el-menu-vertical-demo"
          background-color="#545c64"
          text-color="#fff"
          active-text-color="#ffd04b"
          style="height: 100%"
          :router="true"
      >
        <el-menu-item index="02-main">
          <i class="el-icon-office-building"></i>
          <span slot="title">2号楼</span>
        </el-menu-item>
        <el-menu-item index="04-main">
          <i class="el-icon-office-building"></i>
          <span slot="title">4号楼</span>
        </el-menu-item>
        <el-menu-item index="06-main">
          <i class="el-icon-office-building"></i>
          <span slot="title">6号楼</span>
        </el-menu-item>
        <el-menu-item index="07-main">
          <i class="el-icon-office-building"></i>
          <span slot="title">7号楼</span>
        </el-menu-item>
        <el-menu-item index="test">
          <i class="el-icon-office-building"></i>
          <span slot="title">测试</span>
        </el-menu-item>
      </el-menu>
    </el-aside>
    <el-main>
      <router-view></router-view>
    </el-main>
  </el-container>
</template>

<script>
export default {
  name: "home"
}
</script>

<style scoped>
.el-main {
  /*background-color: #E9EEF3;*/
  /*color: #333;*/
  padding: 5px;
}
</style>
