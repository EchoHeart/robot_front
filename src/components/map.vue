<template>
  <div class="container">
    <img ref="image" src="../assets/02-01jizhengjianyan/map.png" class="map" @load="onImageLoad">
    <svg
        class="svg-element"
        :style="{width: img_width, height: img_height}">
      <path
          v-for="path in paths"
          :key="path.id"
          :d="getPathD(path)"
          :stroke="getColor(path)"
          :stroke-width="radius === 0.5 ? 0.5 : (path.is_target ? 2 : 1)"
          :marker-end="getArrowColor(path)"
          @mouseover="showInfo('path', path)"
          @mouseout="hideInfo('path', path)">
      </path>
      <defs>
        <!--非单行线，绿色箭头-->
        <marker
            id="arrowhead_g"
            markerWidth="2"
            markerHeight="2"
            refX="2"
            refY="1"
            orient="auto-start-reverse">
          <polygon points="0 0, 2 1, 0 2" fill="green"></polygon>
        </marker>
        <!--单行线，红色箭头-->
        <marker
            id="arrowhead_r"
            markerWidth="2"
            markerHeight="2"
            refX="2"
            refY="1"
            orient="auto-start-reverse">
          <polygon points="0 0, 2 1, 0 2" fill="red"></polygon>
        </marker>
        <!--被选中，黄色箭头-->
        <marker
            id="arrowhead_y"
            markerWidth="1"
            markerHeight="2"
            refX="1"
            refY="1"
            orient="auto-start-reverse">
          <polygon points="0 0, 1 1, 0 2" fill="yellow"></polygon>
        </marker>
      </defs>
      <path
          v-for="path in target_robot['passedPath']"
          :d="getPathD(path)"
          stroke="gray"
          :stroke-width="radius === 0.5 ? 2 : 3"
          v-if="visible_passInfo">
      </path>
      <path :d="getPassedPath()" stroke="gray" :stroke-width="radius === 0.5 ? 2 : 3" v-if="visible_passInfo"></path>
      <path :d="getUnPassedPath()" stroke="black" :stroke-width="radius === 0.5 ? 2 : 3" v-if="visible_passInfo"></path>
      <path
          v-for="path in target_robot['unpassedPath']"
          :d="getPathD(path)"
          stroke="black"
          :stroke-width="radius === 0.5 ? 2 : 3"
          v-if="visible_passInfo">
      </path>
      <circle
          v-for="node in nodes"
          :key="node.id"
          :cx="`${node.x}%`"
          :cy="`${node.y}%`"
          :r="node.is_target ? 3 : radius"
          :fill="node.is_target ? 'yellow' : 'blue'"
          @mouseover="showInfo('node', node)"
          @mouseout="hideInfo('node', node)">
      </circle>
      <circle
          v-for="robot in $store.state.robot_data"
          v-if="robot.map === mapName && robot.outElevator"
          :key="robot.id"
          :cx="`${robot.x/map_width*100}%`"
          :cy="`${robot.y/map_height*100}%`"
          :r="radius === 0.5 ? 3 : 5"
          fill="black"
          @mouseover="showInfo('robot', robot)"
          @mouseout="hideInfo('robot', robot)">
      </circle>
    </svg>
    <!--节点信息的描述列表-->
    <el-descriptions
        border
        direction="vertical"
        :style="{left: target_node.x + num1 +'px', top: target_node.y - 100 + 'px'}"
        v-show="visible_nodeInfo">
      <el-descriptions-item label="节点ID">{{ target_node.id }}</el-descriptions-item>
      <el-descriptions-item label="X坐标">{{ target_node.x.toFixed(2) }}</el-descriptions-item>
      <el-descriptions-item label="Y坐标">{{ target_node.y.toFixed(2) }}</el-descriptions-item>
      <el-descriptions-item label="类型">
        <el-tag size="small">节点</el-tag>
      </el-descriptions-item>
      <el-descriptions-item label="位置信息">{{ target_node.name }}</el-descriptions-item>
    </el-descriptions>
    <!--路径信息的描述列表-->
    <el-descriptions
        border
        :column="1"
        :style="{left: target_path_midX + num2 +'px', top: target_path_midY - 100 + 'px'}"
        v-show="visible_pathInfo">
      <el-descriptions-item label="路径ID">{{ target_path.id }}</el-descriptions-item>
      <el-descriptions-item label="起点位置">{{ target_path.startAddress }}</el-descriptions-item>
      <el-descriptions-item label="终点位置">{{ target_path.endAddress }}</el-descriptions-item>
      <el-descriptions-item label="类型">
        <el-tag v-show="target_path.is_single === 0" size="small" type="success">直线</el-tag>
        <el-tag v-show="target_path.is_single === 1" size="small" type="danger">单行直线</el-tag>
      </el-descriptions-item>
    </el-descriptions>
  </div>
</template>

<script>
export default {
  name: "map",
  props: ['imgPath', 'mapName', 'num1', 'num2'],
  data() {
    return {
      radius: 0,      // 节点半径
      map_width: 0,   // 实际宽
      map_height: 0,  // 实际高
      img_width: 0,   // 自适应宽
      img_height: 0,  // 自适应高
      nodes: [],      // 节点数据
      paths: [],      // 路径数据

      visible_nodeInfo: false,  // 节点信息是否可见
      visible_pathInfo: false,  // 路径信息是否可见
      target_node: {id: '', x: 0, y: 0, name: ''},  // 选中的节点
      target_path: {id: '', startAddress: '', endAddress: '', is_single: 0},  // 选中的路径

      target_path_midX: 0,  // 选中路径的中点x坐标
      target_path_midY: 0,  // 选中路径的中点y坐标

      target_robot: {},
      visible_passInfo: false
    }
  },
  created() {
    // 路由跳转时读取radius
    this.radius = this.$route.params.radius;
    // radius未定义时初始化
    if(typeof this.radius === 'undefined')
      this.radius = 0.5;

    const map_data = this.$store.state.map_data[this.$store.state.map_name.indexOf(this.mapName)];
    this.map_width = map_data.info['width'];
    this.map_height = map_data.info['height'];
    this.nodes = map_data.info['nodeList'];
    this.paths = map_data.info['pathList'];
  },
  computed: {
    imgSrc() {
      return this.imgPath;
    }
  },
  methods: {
    // 获取图片自适应网页后的尺寸
    onImageLoad() {
      const image = this.$refs.image;
      this.img_width = image.width;
      this.img_height = image.height;
    },
    // 计算路径的d属性值
    getPathD(path) {
      const startNode = this.nodes.find((node) => node.id === path.startNodeId);
      const endNode = this.nodes.find((node) => node.id === path.endNodeId);

      // 将横、纵坐标百分比转化为数值
      const start_x = this.img_width * startNode.x / 100;
      const start_y = this.img_height * startNode.y / 100;
      const end_x = this.img_width * endNode.x / 100;
      const end_y = this.img_height * endNode.y / 100;

      return `M ${start_x} ${start_y} L ${end_x} ${end_y}`;
    },
    getPassedPath() {
      const start_x = this.img_width * this.target_robot['lastNode'].x / 100;
      const start_y = this.img_height * this.target_robot['lastNode'].y / 100;

      const end_x = this.img_width * this.target_robot.x / this.map_width;
      const end_y = this.img_width * this.target_robot.y / this.map_width;

      return `M ${start_x} ${start_y} L ${end_x} ${end_y}`;
    },
    getUnPassedPath() {
      const start_x = this.img_width * this.target_robot.x / this.map_width;
      const start_y = this.img_width * this.target_robot.y / this.map_width;

      const end_x = this.img_width * this.target_robot['nextNode'].x / 100;
      const end_y = this.img_height * this.target_robot['nextNode'].y / 100;

      return `M ${start_x} ${start_y} L ${end_x} ${end_y}`;
    },
    // 路径颜色
    getColor(path) {
      // 选中
      if(path.is_target) return 'yellow';
      // 判断是否为单行线
      return path.is_single === 1 ? 'red' : 'green';
    },
    // 箭头颜色
    getArrowColor(path) {
      // 选中
      if(path.is_target) return 'url(#arrowhead_y)';
      // 判断是否为单行线
      return path.is_single === 1 ? 'url(#arrowhead_r)' : 'url(#arrowhead_g)';
    },
    // 显示信息
    showInfo(flag, t){
      if(flag === 'node'){
        this.target_node.id = t.id;
        this.target_node.x = this.img_width * t.x / 100;
        this.target_node.y = this.img_height * t.y / 100;
        this.target_node.name = t.name;

        const n = this.nodes.find((node) => node.id === t.id)
        n.is_target = true;

        this.visible_nodeInfo = true;
      }
      else if(flag === 'path'){
        const s = this.nodes.find((node) => node.id === t.startNodeId);
        const e = this.nodes.find((node) => node.id === t.endNodeId);

        this.target_path.id = t.id;
        this.target_path.startAddress = s.name;
        this.target_path.endAddress = e.name;
        this.target_path.is_single = t.is_single;

        const p = this.paths.find((path) => path.id === t.id)
        p.is_target = true;

        // 计算路径的中点位置
        this.target_path_midX = (this.img_width*s.x/100 + this.img_width*e.x/100) / 2;
        this.target_path_midY = (this.img_height*s.y/100 + this.img_height*e.y/100) / 2;

        this.visible_pathInfo = true;
      }
      else{
        this.target_robot = this.$store.state.robot_data.find((r) => r.id === t.id);
        this.visible_passInfo = true;
      }
    },
    // 隐藏信息
    hideInfo(flag, t){
      if(flag === 'node'){
        const n = this.nodes.find((node) => node.id === t.id)
        n.is_target = false;

        this.visible_nodeInfo = false;
      }
      else if(flag === 'path'){
        const p = this.paths.find((path) => path.id === t.id)
        p.is_target = false;

        this.visible_pathInfo = false;
      }
      else
        this.visible_passInfo = false;
    }
  }
}
</script>

<style scoped>
.container {
  position: relative;
}
.map {
  max-width: 100%;
  max-height: 100%;
}
.svg-element {
  position: absolute;
  top: 0;
  left: 0;
}
circle {
  cursor: pointer;
}
path {
  cursor: pointer;
}
.el-descriptions {
  position: absolute;
  color: orangered;
  white-space: nowrap;
}
</style>

