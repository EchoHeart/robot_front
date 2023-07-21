<template>
  <div
      v-loading="loading"
      element-loading-text="数据加载中"
      element-loading-spinner="el-icon-loading"
      style="height: 95vh">
    <el-row>
      <!--02-01jizhengjianyan-->
      <el-col :span="8" v-if="loaded">
        <div class="grid-content">
          <el-card :body-style="{ padding: '0px' }" shadow="hover">
            <map1 :show-map="true" class="viewBox"></map1>
<!--            <map-->
<!--                :map-name="'02-01'"-->
<!--                :num1="-280"-->
<!--                :num2="-250"-->
<!--                class="viewBox"-->
<!--                style="left: -10%; top: 10px">-->
<!--            </map>-->
            <div style="padding: 14px;">
              <span>02-01</span>
              <div class="bottom clearfix">
                <span style="font-size: 13px; color: #999">急诊检验</span>
                <el-button type="text" class="button" @click="goToPage('02-01jizhengjianyan')">查看全览</el-button>
              </div>
            </div>
          </el-card>
        </div>
      </el-col>
      <!--02-03-->
      <el-col :span="8" v-if="loaded">
        <div class="grid-content">
          <el-card :body-style="{ padding: '0px' }" shadow="hover">
            <map2 :show-map="true" class="viewBox"></map2>
            <div style="padding: 14px;">
              <span>02-03</span>
              <div class="bottom clearfix">
                <span style="font-size: 13px; color: #999"></span>
                <el-button type="text" class="button" @click="goToPage('02-03')">查看全览</el-button>
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
  </div>
</template>

<script>
import map1 from '../components/02-01jizhengjianyan'
import map2 from '../components/02-03'
import map3 from '../components/B1'
import map from '../components/map'

export default {
  name: "02-main",
  components: {map1, map2, map3},
  // components: {map, map2, map3},
  data() {
    return {
      loading: true,
      loaded: false
    }
  },
  created() {
    doAsyncTask().then(() => {
      // 关闭加载效果
      this.loaded = true;
      this.loading = false;
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

