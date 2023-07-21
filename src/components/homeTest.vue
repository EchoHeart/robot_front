<template>
  <div>
    <el-tabs v-model="activeName">
      <el-tab-pane name="first">
        <span slot="label"><i class="el-icon-view"></i> 实时监控</span>
      </el-tab-pane>
    </el-tabs>
    <page1></page1>
  </div>
</template>

<script>
import page1 from '../components/test'

export default {
  name: "homeTest",
  components: {page1},
  data() {
    return {
      activeName: 'first'
    };
  }
}
</script>

<style scoped>

</style>
