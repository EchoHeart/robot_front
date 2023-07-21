<template>
  <div
      v-loading="loading"
      element-loading-text="数据加载中"
      element-loading-spinner="el-icon-loading"
      style="height: 95vh">
    <el-row>
      <!--07-01-->
      <el-col :span="8" v-if="loaded">
        <div class="grid-content">
          <el-card :body-style="{ padding: '0px' }" shadow="hover">
            <map1 :show-map="true" class="viewBox"></map1>
            <div style="padding: 14px;">
              <span>07-01</span>
              <div class="bottom clearfix">
                <span style="font-size: 13px; color: #999"></span>
                <el-button type="text" class="button" @click="goToPage('07-01')">查看全览</el-button>
              </div>
            </div>
          </el-card>
        </div>
      </el-col>
      <!--07-02-->
      <el-col :span="8" v-if="loaded">
        <div class="grid-content">
          <el-card :body-style="{ padding: '0px' }" shadow="hover">
            <map2 :show-map="true" class="viewBox"></map2>
            <div style="padding: 14px;">
              <span>07-02</span>
              <div class="bottom clearfix">
                <span style="font-size: 13px; color: #999"></span>
                <el-button type="text" class="button" @click="goToPage('07-02')">查看全览</el-button>
              </div>
            </div>
          </el-card>
        </div>
      </el-col>
      <!--07-03ICU-->
      <el-col :span="8" v-if="loaded">
        <div class="grid-content">
          <el-card :body-style="{ padding: '0px' }" shadow="hover">
            <map3 :show-map="true" class="viewBox"></map3>
            <div style="padding: 14px;">
              <span>07-03</span>
              <div class="bottom clearfix">
                <span style="font-size: 13px; color: #999">ICU</span>
                <el-button type="text" class="button" @click="goToPage('07-03ICU')">查看全览</el-button>
              </div>
            </div>
          </el-card>
        </div>
      </el-col>
    </el-row>
    <el-row>
      <!--07-04-->
      <el-col :span="8" v-if="loaded">
        <div class="grid-content">
          <el-card :body-style="{ padding: '0px' }" shadow="hover">
            <map4 :show-map="true" class="viewBox"></map4>
            <div style="padding: 14px;">
              <span>07-04</span>
              <div class="bottom clearfix">
                <span style="font-size: 13px; color: #999"></span>
                <el-button type="text" class="button" @click="goToPage('07-04')">查看全览</el-button>
              </div>
            </div>
          </el-card>
        </div>
      </el-col>
      <!--07-05-->
      <el-col :span="8" v-if="loaded">
        <div class="grid-content">
          <el-card :body-style="{ padding: '0px' }" shadow="hover">
            <map5 :show-map="true" class="viewBox"></map5>
            <div style="padding: 14px;">
              <span>07-05</span>
              <div class="bottom clearfix">
                <span style="font-size: 13px; color: #999"></span>
                <el-button type="text" class="button" @click="goToPage('07-05')">查看全览</el-button>
              </div>
            </div>
          </el-card>
        </div>
      </el-col>
      <!--07-06-->
      <el-col :span="8" v-if="loaded">
        <div class="grid-content">
          <el-card :body-style="{ padding: '0px' }" shadow="hover">
            <map6 :show-map="true" class="viewBox"></map6>
            <div style="padding: 14px;">
              <span>07-06</span>
              <div class="bottom clearfix">
                <span style="font-size: 13px; color: #999"></span>
                <el-button type="text" class="button" @click="goToPage('07-06')">查看全览</el-button>
              </div>
            </div>
          </el-card>
        </div>
      </el-col>
    </el-row>
    <el-row>
      <!--07-07-->
      <el-col :span="8" v-if="loaded">
        <div class="grid-content">
          <el-card :body-style="{ padding: '0px' }" shadow="hover">
            <map7 :show-map="true" class="viewBox"></map7>
            <div style="padding: 14px;">
              <span>07-07</span>
              <div class="bottom clearfix">
                <span style="font-size: 13px; color: #999"></span>
                <el-button type="text" class="button" @click="goToPage('07-07')">查看全览</el-button>
              </div>
            </div>
          </el-card>
        </div>
      </el-col>
      <!--07-08-->
      <el-col :span="8" v-if="loaded">
        <div class="grid-content">
          <el-card :body-style="{ padding: '0px' }" shadow="hover">
            <map8 :show-map="true" class="viewBox"></map8>
            <div style="padding: 14px;">
              <span>07-08</span>
              <div class="bottom clearfix">
                <span style="font-size: 13px; color: #999"></span>
                <el-button type="text" class="button" @click="goToPage('07-08')">查看全览</el-button>
              </div>
            </div>
          </el-card>
        </div>
      </el-col>
      <!--07-09-->
      <el-col :span="8" v-if="loaded">
        <div class="grid-content">
          <el-card :body-style="{ padding: '0px' }" shadow="hover">
            <map9 :show-map="true" class="viewBox"></map9>
            <div style="padding: 14px;">
              <span>07-09</span>
              <div class="bottom clearfix">
                <span style="font-size: 13px; color: #999"></span>
                <el-button type="text" class="button" @click="goToPage('07-09')">查看全览</el-button>
              </div>
            </div>
          </el-card>
        </div>
      </el-col>
    </el-row>
    <el-row>
      <!--07-10-->
      <el-col :span="8" v-if="loaded">
        <div class="grid-content">
          <el-card :body-style="{ padding: '0px' }" shadow="hover">
            <map10 :show-map="true" class="viewBox"></map10>
            <div style="padding: 14px;">
              <span>07-10</span>
              <div class="bottom clearfix">
                <span style="font-size: 13px; color: #999"></span>
                <el-button type="text" class="button" @click="goToPage('07-10')">查看全览</el-button>
              </div>
            </div>
          </el-card>
        </div>
      </el-col>
      <!--07-11-->
      <el-col :span="8" v-if="loaded">
        <div class="grid-content">
          <el-card :body-style="{ padding: '0px' }" shadow="hover">
            <map11 :show-map="true" class="viewBox"></map11>
            <div style="padding: 14px;">
              <span>07-11</span>
              <div class="bottom clearfix">
                <span style="font-size: 13px; color: #999"></span>
                <el-button type="text" class="button" @click="goToPage('07-11')">查看全览</el-button>
              </div>
            </div>
          </el-card>
        </div>
      </el-col>
      <!--B1-->
      <el-col :span="8" v-if="loaded">
        <div class="grid-content">
          <el-card :body-style="{ padding: '0px' }" shadow="hover">
            <map12 :show-map="true" class="viewBox"></map12>
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
            <map13 :elevator-i-d="'7-7'" class="viewBox" style="overflow: auto"></map13>
            <div style="padding: 14px;">
              <span>电梯 7-7</span>
              <div class="bottom clearfix">
                <span style="font-size: 13px; color: #999">
                  当前楼层：{{this.$store.state.elevator_data.find((e) => e.id === '7-7').floor}}
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
import map1 from '../components/07-01'
import map2 from '../components/07-02'
import map3 from '../components/07-03ICU'
import map4 from '../components/07-04'
import map5 from '../components/07-05'
import map6 from '../components/07-06'
import map7 from '../components/07-07'
import map8 from '../components/07-08'
import map9 from '../components/07-09'
import map10 from '../components/07-10'
import map11 from '../components/07-11'
import map12 from '../components/B1'
import map13 from '../components/elevator'

export default {
  name: "07-main",
  components: {map1, map2, map3, map4, map5, map6, map7, map8, map9, map10, map11, map12, map13},
  data() {
    return {
      loading: true,
      loaded: false,
    }
  },
  created() {
    doAsyncTask().then(() => {
      // 关闭加载效果
      this.loading = false;
      this.loaded = true
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

