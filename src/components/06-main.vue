<template>
  <div
      v-loading="loading"
      element-loading-text="数据加载中"
      element-loading-spinner="el-icon-loading"
      style="height: 95vh">
    <el-row>
      <!--06-02xinshen-->
      <el-col :span="8" v-if="loaded">
        <div class="grid-content">
          <el-card :body-style="{ padding: '0px' }" shadow="hover">
            <map1 :show-map="true" class="viewBox"></map1>
            <div style="padding: 14px;">
              <span>06-02</span>
              <div class="bottom clearfix">
                <span style="font-size: 13px; color: #999"></span>
                <el-button type="text" class="button" @click="goToPage('06-02xinshen')">查看全览</el-button>
              </div>
            </div>
          </el-card>
        </div>
      </el-col>
      <!--06-03zhongzheng-->
      <el-col :span="8" v-if="loaded">
        <div class="grid-content">
          <el-card :body-style="{ padding: '0px' }" shadow="hover">
            <map2 :show-map="true" class="viewBox"></map2>
            <div style="padding: 14px;">
              <span>06-03</span>
              <div class="bottom clearfix">
                <span style="font-size: 13px; color: #999"></span>
                <el-button type="text" class="button" @click="goToPage('06-03zhongzheng')">查看全览</el-button>
              </div>
            </div>
          </el-card>
        </div>
      </el-col>
      <!--06-05puwai-->
      <el-col :span="8" v-if="loaded">
        <div class="grid-content">
          <el-card :body-style="{ padding: '0px' }" shadow="hover">
            <map3 :show-map="true" class="viewBox"></map3>
            <div style="padding: 14px;">
              <span>06-05</span>
              <div class="bottom clearfix">
                <span style="font-size: 13px; color: #999"></span>
                <el-button type="text" class="button" @click="goToPage('06-05puwai')">查看全览</el-button>
              </div>
            </div>
          </el-card>
        </div>
      </el-col>
    </el-row>
    <el-row>
      <!--06-06xiongwaiminiao-->
      <el-col :span="8" v-if="loaded">
        <div class="grid-content">
          <el-card :body-style="{ padding: '0px' }" shadow="hover">
            <map4 :show-map="true" class="viewBox"></map4>
            <div style="padding: 14px;">
              <span>06-06</span>
              <div class="bottom clearfix">
                <span style="font-size: 13px; color: #999"></span>
                <el-button type="text" class="button" @click="goToPage('06-06xiongwaiminiao')">查看全览</el-button>
              </div>
            </div>
          </el-card>
        </div>
      </el-col>
      <!--06-07zongheneike-->
      <el-col :span="8" v-if="loaded">
        <div class="grid-content">
          <el-card :body-style="{ padding: '0px' }" shadow="hover">
            <map5 :show-map="true" class="viewBox"></map5>
            <div style="padding: 14px;">
              <span>06-07</span>
              <div class="bottom clearfix">
                <span style="font-size: 13px; color: #999"></span>
                <el-button type="text" class="button" @click="goToPage('06-07zongheneike')">查看全览</el-button>
              </div>
            </div>
          </el-card>
        </div>
      </el-col>
      <!--B06-04-shennei-->
      <el-col :span="8" v-if="loaded">
        <div class="grid-content">
          <el-card :body-style="{ padding: '0px' }" shadow="hover">
            <map6 :show-map="true" class="viewBox"></map6>
            <div style="padding: 14px;">
              <span>B06-04-shennei</span>
              <div class="bottom clearfix">
                <span style="font-size: 13px; color: #999"></span>
                <el-button type="text" class="button" @click="goToPage('B06-04-shennei')">查看全览</el-button>
              </div>
            </div>
          </el-card>
        </div>
      </el-col>
    </el-row>
    <el-row>
      <!--B1-->
      <el-col :span="8" v-if="loaded">
        <div class="grid-content">
          <el-card :body-style="{ padding: '0px' }" shadow="hover">
            <map7 :show-map="true" class="viewBox"></map7>
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
      <!--elevator-->
      <el-col :span="8" v-if="loaded">
        <div class="grid-content">
          <el-card :body-style="{ padding: '0px' }" shadow="hover">
            <map8 :elevator-i-d="'6-7'"></map8>
            <div style="padding: 14px;">
              <span>电梯 6-7</span>
              <div class="bottom clearfix">
                <span style="font-size: 13px; color: #999">
                  当前楼层：{{this.$store.state.elevator_data.find((e) => e.id === '6-7').floor}}
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
import map1 from '../components/06-02xinshen'
import map2 from '../components/06-03zhongzheng'
import map3 from '../components/06-05puwai'
import map4 from '../components/06-06xiongwaiminiao'
import map5 from '../components/06-07zongheneike'
import map6 from '../components/B06-04-shennei'
import map7 from '../components/B1'
import map8 from '../components/elevator'

export default {
  name: "06-main",
  components: {map1, map2, map3, map4, map5, map6, map7, map8},
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

