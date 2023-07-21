<template>
  <div>
    <el-row>
      <el-col :span="7" style="height: 40px">
        <el-col :span="6" style="height: 40px; display: flex; align-items: center">
          <el-badge :value="'机器人: ' + $store.state.robot_data.filter(r => r.map === $store.state.map_name[index]).length" type="danger">
            <i class="iconfont icon-jiqiren" style="font-size: 30px"></i>
          </el-badge>
        </el-col>
        <el-col :span="6" style="height: 40px; display: flex; align-items: center">
          <el-badge :value="'订单: ' + 22" type="info">
            <i class="iconfont icon-dingdan" style="font-size: 30px"></i>
          </el-badge>
        </el-col>
        <el-col :span="6" style="height: 40px; display: flex; align-items: center">
          <el-badge :value="'节点: ' + $store.state.map_data[index].info['nodeList'].length" type="primary">
            <i class="iconfont icon-CDNjiedian" style="font-size: 30px"></i>
          </el-badge>
        </el-col>
        <el-col :span="6" style="height: 40px; display: flex; align-items: center">
          <el-badge :value="'路径: ' + $store.state.map_data[index].info['pathList'].length" type="warning">
            <i class="iconfont icon-orbit-full" style="font-size: 30px"></i>
          </el-badge>
        </el-col>
      </el-col>
      <el-col :span="13">
        <!--选择框-->
        <el-col :span="12">
          <el-select v-model="value" placeholder="building">
            <el-option
                v-for="item in options"
                :key="item.value"
                :label="item.label"
                :value="item.value">
            </el-option>
          </el-select>
          <el-button icon="el-icon-search" @click="search"></el-button>
        </el-col>
        <!--缩放按钮-->
        <el-col :span="12" style="text-align: right">
          <el-button-group>
            <el-button class="iconfont icon-fangda" @click="zoomIn"></el-button>
            <el-button class="iconfont icon-suoxiao" @click="zoomOut"></el-button>
            <el-button icon="el-icon-refresh" @click="zoomReset"></el-button>
          </el-button-group>
        </el-col>
      </el-col>
      <!--地图隐藏按钮-->
      <el-col :span="4" style="height: 40px; display: flex; align-items: center; justify-content: end">
        <el-switch
            v-model="state"
            active-color="#409DFE"
            inactive-color="#869299"
            active-text="显示地图"
            inactive-text="隐藏地图">
        </el-switch>
      </el-col>
    </el-row>
    <el-row>
      <el-col :span="7">
        <div class="grid-content" style="height: 84vh; overflow: auto">
          <el-row>
            <div
                style="display: flex; align-items: center; justify-content: center"
                :style="{ height: 'calc(84vh / 3)' }">
              <chart1 :chart-height="'calc(84vh / 3)'"></chart1>
            </div>
          </el-row>
          <el-row>
            <div>
              <el-col :span="12">
                <div
                    style="display: flex; align-items: center; justify-content: center"
                    :style="{ height: 'calc(84vh / 3)' }">
                  <el-table
                      border
                      :data="tableData"
                      height="200"
                      style="width: 100%; table-layout: fixed">
                    <el-table-column
                        prop="id"
                        label="ID"
                        style="width: 50%">
                      <template slot-scope="{ row }">
                        <i class="iconfont icon-jiqiren" style="font-size: 30px"></i>
                        <span>-{{ row.id.substring(4) }}</span>
                      </template>
                    </el-table-column>
                    <el-table-column
                        prop="battery"
                        label="电量"
                        style="width: 50%">
                      <template slot-scope="{ row }">
                        <i v-if="row.battery >= 90" class="iconfont icon-icon_dianchi_4" style="font-size: 30px; color: green"></i>
                        <i v-if="row.battery >= 50 && row.battery < 90" class="iconfont icon-icon_dianchi_3" style="font-size: 30px; color: #11e261"></i>
                        <i v-if="row.battery > 10 && row.battery < 50" class="iconfont icon-icon_dianchi_2" style="font-size: 30px; color: orange"></i>
                        <i v-if="row.battery <= 10" class="iconfont icon-icon_dianchi_1" style="font-size: 30px; color: red"></i>
                      </template>
                    </el-table-column>
                  </el-table>
                </div>
              </el-col>
              <el-col :span="12">
                <div
                    style="display: flex; align-items: center; justify-content: center"
                    :style="{ height: 'calc(84vh / 3)' }">
                  <chart2 :chart-height="'calc(84vh / 3)'"></chart2>
                </div>
              </el-col>
            </div>
          </el-row>
          <el-row>
            <div
                style="display: flex; align-items: center; justify-content: center"
                :style="{ height: 'calc(84vh / 12)' }">
              <span>电梯运行情况一览</span>
            </div>
          </el-row>
          <el-row>
            <el-col :span="8">
              <div
                  style="display: flex; align-items: center; justify-content: center"
                  :style="{ height: 'calc(84vh / 4)' }">
                <elevator :elevator-i-d="'4-2'"></elevator>
              </div>
            </el-col>
            <el-col :span="8">
              <div
                  style="display: flex; align-items: center; justify-content: center"
                  :style="{ height: 'calc(84vh / 4)' }">
                <elevator :elevator-i-d="'6-7'"></elevator>
              </div>
            </el-col>
            <el-col :span="8">
              <div
                  style="display: flex; align-items: center; justify-content: center"
                  :style="{ height: 'calc(84vh / 4)' }">
                <elevator :elevator-i-d="'7-7'"></elevator>
              </div>
            </el-col>
          </el-row>
        </div>
      </el-col>
      <el-col :span="13">
        <div class="grid-content" style="height: 84vh; position: relative; overflow: hidden">
          <div
              style="width: 100%; position: relative; overflow: hidden; display: inline-block"
              :style="{ transform: 'scale(' + scale + ')'}">
            <!--02-01jizhengjianyan-->
            <map0
                v-if="index === 0"
                :show-map="state"
                :full-screen="true"
                style="width: 100%; height: 84vh">
            </map0>
            <!--02-03-->
            <map1
                v-if="index === 1"
                :show-map="state"
                :full-screen="true"
                style="width: 100%; height: 84vh">
            </map1>
            <!--B04-01-menzhen-->
            <map3
                v-if="index === 3"
                :show-map="state"
                :full-screen="true"
                style="width: 100%; height: 84vh">
            </map3>
            <!--04-02-->
            <map2
                v-if="index === 2"
                :show-map="state"
                :full-screen="true"
                style="width: 100%; height: 84vh">
            </map2>
            <!--06-02xinshen-->
            <map4
                v-if="index === 4"
                :show-map="state"
                :full-screen="true"
                style="width: 100%; height: 84vh">
            </map4>
            <!--06-03zhongzheng-->
            <map5
                v-if="index === 5"
                :show-map="state"
                :full-screen="true"
                style="width: 100%; height: 84vh">
            </map5>
            <!--06-05puwai-->
            <map6
                v-if="index === 6"
                :show-map="state"
                :full-screen="true"
                style="width: 100%; height: 84vh">
            </map6>
            <!--06-06xiongwaiminiao-->
            <map7
                v-if="index === 7"
                :show-map="state"
                :full-screen="true"
                style="width: 100%; height: 84vh">
            </map7>
            <!--06-07zongheneike-->
            <map8
                v-if="index === 8"
                :show-map="state"
                :full-screen="true"
                style="width: 100%; height: 84vh">
            </map8>
            <!--B06-04-shennei-->
            <map9
                v-if="index === 9"
                :show-map="state"
                :full-screen="true"
                style="width: 100%; height: 84vh">
            </map9>
            <!--07-01-->
            <map10
                v-if="index === 10"
                :show-map="state"
                :full-screen="true"
                style="width: 100%; height: 84vh">
            </map10>
            <!--07-02-->
            <map11
                v-if="index === 11"
                :show-map="state"
                :full-screen="true"
                style="width: 100%; height: 84vh">
            </map11>
            <!--07-03-->
            <map12
                v-if="index === 12"
                :show-map="state"
                :full-screen="true"
                style="width: 100%; height: 84vh">
            </map12>
            <!--07-04-->
            <map13
                v-if="index === 13"
                :show-map="state"
                :full-screen="true"
                style="width: 100%; height: 84vh">
            </map13>
            <!--07-05-->
            <map14
                v-if="index === 14"
                :show-map="state"
                :full-screen="true"
                style="width: 100%; height: 84vh">
            </map14>
            <!--07-06-->
            <map15
                v-if="index === 15"
                :show-map="state"
                :full-screen="true"
                style="width: 100%; height: 84vh">
            </map15>
            <!--07-07-->
            <map16
                v-if="index === 16"
                :show-map="state"
                :full-screen="true"
                style="width: 100%; height: 84vh">
            </map16>
            <!--07-08-->
            <map17
                v-if="index === 17"
                :show-map="state"
                :full-screen="true"
                style="width: 100%; height: 84vh">
            </map17>
            <!--07-09-->
            <map18
                v-if="index === 18"
                :show-map="state"
                :full-screen="true"
                style="width: 100%; height: 84vh">
            </map18>
            <!--07-10-->
            <map19
                v-if="index === 19"
                :show-map="state"
                :full-screen="true"
                style="width: 100%; height: 84vh">
            </map19>
            <!--07-11-->
            <map20
                v-if="index === 20"
                :show-map="state"
                :full-screen="true"
                style="width: 100%; height: 84vh">
            </map20>
            <!--B1-->
            <map21
                v-if="index === 21"
                :show-map="state"
                :full-screen="true"
                style="width: 100%; height: 84vh">
            </map21>
          </div>
        </div>
      </el-col>
      <el-col :span="4">
        <div class="grid-content">
          <div style="height: 84vh; overflow: auto">
            <!--B1-->
            <el-row>
              <div class="grid-content" @click="view(21)">
                <el-card :body-style="{ padding: '0px' }" shadow="hover">
                  <map21 :show-map="state" :full-screen="false" class="viewBox"></map21>
                  <div style="padding: 5px; float: right">
                    <span style="font-size: smaller">B1</span>
                  </div>
                </el-card>
              </div>
            </el-row>
            <!--02-01jizhengjianyan-->
            <el-row v-if="visibleList.includes(0)">
              <div class="grid-content" @click="view(0)">
                <el-card :body-style="{ padding: '0px' }" shadow="hover">
                  <map0 :show-map="state" :full-screen="false" class="viewBox"></map0>
                  <div style="padding: 5px; float: right">
                    <span style="font-size: smaller">02-01jizhengjianyan</span>
                  </div>
                </el-card>
              </div>
            </el-row>
            <!--02-03-->
            <el-row v-if="visibleList.includes(1)">
              <div class="grid-content" @click="view(1)">
                <el-card :body-style="{ padding: '0px' }" shadow="hover">
                  <map1 :show-map="state" :full-screen="false" class="viewBox"></map1>
                  <div style="padding: 5px; float: right">
                    <span style="font-size: smaller">02-03</span>
                  </div>
                </el-card>
              </div>
            </el-row>
            <!--B04-01-menzhen-->
            <el-row v-if="visibleList.includes(2)">
              <div class="grid-content" @click="view(3)">
                <el-card :body-style="{ padding: '0px' }" shadow="hover">
                  <map3 :show-map="state" :full-screen="false" class="viewBox"></map3>
                  <div style="padding: 5px; float: right">
                    <span style="font-size: smaller">B04-01-menzhen</span>
                  </div>
                </el-card>
              </div>
            </el-row>
            <!--04-02-->
            <el-row v-if="visibleList.includes(3)">
              <div class="grid-content"  @click="view(2)">
                <el-card :body-style="{ padding: '0px' }" shadow="hover">
                  <map2 :show-map="state" :full-screen="false" class="viewBox"></map2>
                  <div style="padding: 5px; float: right">
                    <span style="font-size: smaller">04-02</span>
                  </div>
                </el-card>
              </div>
            </el-row>
            <!--06-02xinshen-->
            <el-row v-if="visibleList.includes(4)">
              <div class="grid-content"  @click="view(4)">
                <el-card :body-style="{ padding: '0px' }" shadow="hover">
                  <map4 :show-map="state" :full-screen="false" class="viewBox"></map4>
                  <div style="padding: 5px; float: right">
                    <span style="font-size: smaller">06-02xinshen</span>
                  </div>
                </el-card>
              </div>
            </el-row>
            <!--06-03zhongzheng-->
            <el-row v-if="visibleList.includes(5)">
              <div class="grid-content"  @click="view(5)">
                <el-card :body-style="{ padding: '0px' }" shadow="hover">
                  <map5 :show-map="state" :full-screen="false" class="viewBox"></map5>
                  <div style="padding: 5px; float: right">
                    <span style="font-size: smaller">06-03zhongzheng</span>
                  </div>
                </el-card>
              </div>
            </el-row>
            <!--06-05puwai-->
            <el-row v-if="visibleList.includes(6)">
              <div class="grid-content"  @click="view(6)">
                <el-card :body-style="{ padding: '0px' }" shadow="hover">
                  <map6 :show-map="state" :full-screen="false" class="viewBox"></map6>
                  <div style="padding: 5px; float: right">
                    <span style="font-size: smaller">06-05puwai</span>
                  </div>
                </el-card>
              </div>
            </el-row>
            <!--06-06xiongwaiminiao-->
            <el-row v-if="visibleList.includes(7)">
              <div class="grid-content"  @click="view(7)">
                <el-card :body-style="{ padding: '0px' }" shadow="hover">
                  <map7 :show-map="state" :full-screen="false" class="viewBox"></map7>
                  <div style="padding: 5px; float: right">
                    <span style="font-size: smaller">06-06xiongwaiminiao</span>
                  </div>
                </el-card>
              </div>
            </el-row>
            <!--06-07zongheneike-->
            <el-row v-if="visibleList.includes(8)">
              <div class="grid-content"  @click="view(8)">
                <el-card :body-style="{ padding: '0px' }" shadow="hover">
                  <map8 :show-map="state" :full-screen="false" class="viewBox"></map8>
                  <div style="padding: 5px; float: right">
                    <span style="font-size: smaller">06-07zongheneike</span>
                  </div>
                </el-card>
              </div>
            </el-row>
            <!--B06-04-shennei-->
            <el-row v-if="visibleList.includes(9)">
              <div class="grid-content"  @click="view(9)">
                <el-card :body-style="{ padding: '0px' }" shadow="hover">
                  <map9 :show-map="state" :full-screen="false" class="viewBox"></map9>
                  <div style="padding: 5px; float: right">
                    <span style="font-size: smaller">B06-04-shennei</span>
                  </div>
                </el-card>
              </div>
            </el-row>
            <!--07-01-->
            <el-row v-if="visibleList.includes(10)">
              <div class="grid-content"  @click="view(10)">
                <el-card :body-style="{ padding: '0px' }" shadow="hover">
                  <map10 :show-map="state" :full-screen="false" class="viewBox"></map10>
                  <div style="padding: 5px; float: right">
                    <span style="font-size: smaller">07-01</span>
                  </div>
                </el-card>
              </div>
            </el-row>
            <!--07-02-->
            <el-row v-if="visibleList.includes(11)">
              <div class="grid-content"  @click="view(11)">
                <el-card :body-style="{ padding: '0px' }" shadow="hover">
                  <map11 :show-map="state" :full-screen="false" class="viewBox"></map11>
                  <div style="padding: 5px; float: right">
                    <span style="font-size: smaller">07-02</span>
                  </div>
                </el-card>
              </div>
            </el-row>
            <!--07-03-->
            <el-row v-if="visibleList.includes(12)">
              <div class="grid-content"  @click="view(12)">
                <el-card :body-style="{ padding: '0px' }" shadow="hover">
                  <map12 :show-map="state" :full-screen="false" class="viewBox"></map12>
                  <div style="padding: 5px; float: right">
                    <span style="font-size: smaller">07-03</span>
                  </div>
                </el-card>
              </div>
            </el-row>
            <!--07-04-->
            <el-row v-if="visibleList.includes(13)">
              <div class="grid-content"  @click="view(13)">
                <el-card :body-style="{ padding: '0px' }" shadow="hover">
                  <map13 :show-map="state" :full-screen="false" class="viewBox"></map13>
                  <div style="padding: 5px; float: right">
                    <span style="font-size: smaller">07-04</span>
                  </div>
                </el-card>
              </div>
            </el-row>
            <!--07-05-->
            <el-row v-if="visibleList.includes(14)">
              <div class="grid-content"  @click="view(14)">
                <el-card :body-style="{ padding: '0px' }" shadow="hover">
                  <map14 :show-map="state" :full-screen="false" class="viewBox"></map14>
                  <div style="padding: 5px; float: right">
                    <span style="font-size: smaller">07-05</span>
                  </div>
                </el-card>
              </div>
            </el-row>
            <!--07-06-->
            <el-row v-if="visibleList.includes(15)">
              <div class="grid-content"  @click="view(15)">
                <el-card :body-style="{ padding: '0px' }" shadow="hover">
                  <map15 :show-map="state" :full-screen="false" class="viewBox"></map15>
                  <div style="padding: 5px; float: right">
                    <span style="font-size: smaller">07-06</span>
                  </div>
                </el-card>
              </div>
            </el-row>
            <!--07-07-->
            <el-row v-if="visibleList.includes(16)">
              <div class="grid-content"  @click="view(16)">
                <el-card :body-style="{ padding: '0px' }" shadow="hover">
                  <map16 :show-map="state" :full-screen="false" class="viewBox"></map16>
                  <div style="padding: 5px; float: right">
                    <span style="font-size: smaller">07-07</span>
                  </div>
                </el-card>
              </div>
            </el-row>
            <!--07-08-->
            <el-row v-if="visibleList.includes(17)">
              <div class="grid-content"  @click="view(17)">
                <el-card :body-style="{ padding: '0px' }" shadow="hover">
                  <map17 :show-map="state" :full-screen="false" class="viewBox"></map17>
                  <div style="padding: 5px; float: right">
                    <span style="font-size: smaller">07-08</span>
                  </div>
                </el-card>
              </div>
            </el-row>
            <!--07-09-->
            <el-row v-if="visibleList.includes(18)">
              <div class="grid-content"  @click="view(18)">
                <el-card :body-style="{ padding: '0px' }" shadow="hover">
                  <map18 :show-map="state" :full-screen="false" class="viewBox"></map18>
                  <div style="padding: 5px; float: right">
                    <span style="font-size: smaller">07-09</span>
                  </div>
                </el-card>
              </div>
            </el-row>
            <!--07-10-->
            <el-row v-if="visibleList.includes(19)">
              <div class="grid-content"  @click="view(19)">
                <el-card :body-style="{ padding: '0px' }" shadow="hover">
                  <map19 :show-map="state" :full-screen="false" class="viewBox"></map19>
                  <div style="padding: 5px; float: right">
                    <span style="font-size: smaller">07-10</span>
                  </div>
                </el-card>
              </div>
            </el-row>
            <!--07-11-->
            <el-row v-if="visibleList.includes(20)">
              <div class="grid-content"  @click="view(20)">
                <el-card :body-style="{ padding: '0px' }" shadow="hover">
                  <map20 :show-map="state" :full-screen="false" class="viewBox"></map20>
                  <div style="padding: 5px; float: right">
                    <span style="font-size: smaller">07-11</span>
                  </div>
                </el-card>
              </div>
            </el-row>
          </div>
        </div>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import map0 from '../components/02-01jizhengjianyan'
import map1 from '../components/02-03'
import map2 from '../components/04-02'
import map3 from '../components/B04-01-menzhen'
import map4 from '../components/06-02xinshen'
import map5 from '../components/06-03zhongzheng'
import map6 from '../components/06-05puwai'
import map7 from '../components/06-06xiongwaiminiao'
import map8 from '../components/06-07zongheneike'
import map9 from '../components/B06-04-shennei'
import map10 from '../components/07-01'
import map11 from '../components/07-02'
import map12 from '../components/07-03ICU'
import map13 from '../components/07-04'
import map14 from '../components/07-05'
import map15 from '../components/07-06'
import map16 from '../components/07-07'
import map17 from '../components/07-08'
import map18 from '../components/07-09'
import map19 from '../components/07-10'
import map20 from '../components/07-11'
import map21 from '../components/B1'
import elevator from '../components/elevator'

import chart1 from '../components/echarts/orderLine'
import chart2 from '../components/echarts/robotPie'
import Elevator from "@/components/elevator";

export default {
  name: "test",
  components: {
    Elevator,
    map0, map1, map2, map3, map4, map5, map6, map7, map8, map9, map10,
    map11, map12, map13, map14, map15, map16, map17, map18, map19, map20, map21,
    chart1, chart2},
  methods: {
    view(idx) {
      this.index = idx;
    },
    zoomIn() {
      this.scale += 0.2;
    },
    zoomOut() {
      this.scale -= 0.2;
    },
    zoomReset() {
      this.scale = 1;
    },
    search() {
      this.visibleList = this.mapGroup[this.value];
      this.index = 21;
    }
  },
  data() {
    return {
      scale: 1,
      index: 21,
      mapGroup: [
          [0, 1], [3, 2], [4, 5, 6, 7, 8, 9], [10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20]
      ],
      visibleList: [0, 1],
      tableData: [{
        id: 'JQR-000001',
        battery: 95
      }, {
        id: 'JQR-000002',
        battery: 70
      }, {
        id: 'JQR-000003',
        battery: 42
      }, {
        id: 'JQR-000004',
        battery: 10
      }],

      options: [{
        value: '0',
        label: '2号楼'
      }, {
        value: '1',
        label: '4号楼'
      }, {
        value: '2',
        label: '6号楼'
      }, {
        value: '3',
        label: '7号楼'
      }],
      value: '0',

      state: true
    }
  }
}
</script>

<style scoped>
.grid-content {
  border-radius: 4px;
  min-height: 36px;
  border: 1px solid #e4e7ed;
}
.el-card {
  border: 0 solid #e4e7ed;
  box-shadow: 0 0 5px rgba(0, 0, 0, 0.2);
}
.viewBox {
  width: 100%;
  height: 200px;
}
.el-dropdown-link {
  cursor: pointer;
}
</style>
