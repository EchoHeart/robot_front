<template>
  <div
      v-loading="loading"
      element-loading-text="数据加载中"
      element-loading-spinner="el-icon-loading"
      style="height: 95vh">
    <el-row>
      <!--04-02-->
      <el-col :span="8" v-if="loaded">
        <div class="grid-content">
          <el-card :body-style="{ padding: '0px' }" shadow="hover">
            <map1 :show-map="true" class="viewBox"></map1>
            <div style="padding: 14px;">
              <span>04-02</span>
              <div class="bottom clearfix">
                <span style="font-size: 13px; color: #999"></span>
                <el-button type="text" class="button" @click="goToPage('04-02')">查看全览</el-button>
              </div>
            </div>
          </el-card>
        </div>
      </el-col>
      <!--B04-01-menzhen-->
      <el-col :span="8" v-if="loaded">
        <div class="grid-content">
          <el-card :body-style="{ padding: '0px' }" shadow="hover">
            <map2 :show-map="true" class="viewBox"></map2>
            <div style="padding: 14px;">
              <span>B04-01-menzhen</span>
              <div class="bottom clearfix">
                <span style="font-size: 13px; color: #999"></span>
                <el-button type="text" class="button" @click="goToPage('B04-01-menzhen')">查看全览</el-button>
              </div>
            </div>
          </el-card>
        </div>
      </el-col>
      <!--B1-->
      <el-col :span="8" v-if="loaded">
        <div class="grid-content">
          <el-card :body-style="{ padding: '0px' }" shadow="hover">
            <map3 :show-map="true" class="viewBox"></map3>
            <div style="padding: 14px;">
              <span>B1</span>
              <div class="bottom clearfix">
                <span style="font-size: 13px; color: #999">地下一层</span>
                <el-button type="text" class="button" @click="goToPage('B1')">查看全览</el-button>
              </div>
            </div>
          </el-card>
        </div>
      </el-col>
    </el-row>
    <el-row>
      <!--elevator-->
      <el-col :span="8" v-if="loaded">
        <div class="grid-content">
          <el-card :body-style="{ padding: '0px' }" shadow="hover">
            <map4 :elevator-i-d="'4-2'" class="viewBox" style="overflow: auto"></map4>
            <div style="padding: 14px;">
              <span>电梯 4-2</span>
              <div class="bottom clearfix">
                <span style="font-size: 13px; color: #999">
                  当前楼层：{{this.$store.state.elevator_data.find((e) => e.id === '4-2').floor}}
                </span>
              </div>
            </div>
          </el-card>
        </div>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import map1 from '../components/04-02'
import map2 from '../components/B04-01-menzhen'
import map3 from '../components/B1'
import map4 from '../components/elevator'

export default {
  name: "04-main",
  components: {map1, map2, map3, map4},
  data() {
    return {
      loading: true,
      loaded: false
    }
  },
  created() {
    doAsyncTask().then(() => {
      // 关闭加载效果
      this.loading = false;
      this.loaded = true;
    });
  },
  methods: {
    goToPage(path) {
      this.$router.push({name: path, params: {radius: 1.5}});
    },
  }
}
function doAsyncTask() {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve();
    }, 1000);
  });
}
</script>

<style scoped>
.grid-content {
  border-radius: 4px;
  min-height: 36px;
}
.el-card {
  border: 1px solid #e4e7ed;
}
.viewBox {
  width: 100%;
  height: 250px;
}
.button {
  padding: 0;
  float: right;
}
.bottom {
  margin-top: 13px;
  line-height: 12px;
}
.clearfix:before,
.clearfix:after {
  display: table;
  content: "";
}
.clearfix:after {
  clear: both
}
</style>

