<template>
  <div
      v-loading="loading"
      element-loading-text="数据加载中"
      element-loading-spinner="el-icon-loading"
      style="height: 95vh">
  </div>
</template>

<script>
import map_0201 from '../assets/02-01jizhengjianyan/map.json'
import node_0201 from '../assets/02-01jizhengjianyan/test.json'
import path_0201 from '../assets/02-01jizhengjianyan/edge.json'
import map_0203 from '../assets/02-03/map.json'
import node_0203 from '../assets/02-03/node.json'
import path_0203 from '../assets/02-03/edge.json'
import map_0402 from '../assets/04-02/map.json'
import node_0402 from '../assets/04-02/test.json'
import path_0402 from '../assets/04-02/edge.json'
import map_B0401 from '../assets/B04-01-menzhen/map.json'
import node_B0401 from '../assets/B04-01-menzhen/test.json'
import path_B0401 from '../assets/B04-01-menzhen/edge.json'
import map_0602 from '../assets/06-02xinshen/map.json'
import node_0602 from '../assets/06-02xinshen/test.json'
import path_0602 from '../assets/06-02xinshen/edge.json'
import map_0603 from '../assets/06-03zhongzheng/map.json'
import node_0603 from '../assets/06-03zhongzheng/test.json'
import path_0603 from '../assets/06-03zhongzheng/edge.json'
import map_0605 from '../assets/06-05puwai/map.json'
import node_0605 from '../assets/06-05puwai/test.json'
import path_0605 from '../assets/06-05puwai/edge.json'
import map_0606 from '../assets/06-06xiongwaiminiao/map.json'
import node_0606 from '../assets/06-06xiongwaiminiao/test.json'
import path_0606 from '../assets/06-06xiongwaiminiao/edge.json'
import map_0607 from '../assets/06-07zongheneike/map.json'
import node_0607 from '../assets/06-07zongheneike/node.json'
import path_0607 from '../assets/06-07zongheneike/edge.json'
import map_B0604 from '../assets/B06-04-shennei/map.json'
import node_B0604 from '../assets/B06-04-shennei/test.json'
import path_B0604 from '../assets/B06-04-shennei/edge.json'
import map_0701 from '../assets/07-01/map.json'
import node_0701 from '../assets/07-01/test.json'
import path_0701 from '../assets/07-01/edge.json'
import map_0702 from '../assets/07-02/map.json'
import node_0702 from '../assets/07-02/test.json'
import path_0702 from '../assets/07-02/edge.json'
import map_0703 from '../assets/07-03ICU/map.json'
import node_0703 from '../assets/07-03ICU/test.json'
import path_0703 from '../assets/07-03ICU/edge.json'
import map_0704 from '../assets/07-04/map.json'
import node_0704 from '../assets/07-04/test.json'
import path_0704 from '../assets/07-04/edge.json'
import map_0705 from '../assets/07-05/map.json'
import node_0705 from '../assets/07-05/test.json'
import path_0705 from '../assets/07-05/edge.json'
import map_0706 from '../assets/07-06/map.json'
import node_0706 from '../assets/07-06/node.json'
import path_0706 from '../assets/07-06/edge.json'
import map_0707 from '../assets/07-07/map.json'
import node_0707 from '../assets/07-07/test.json'
import path_0707 from '../assets/07-07/edge.json'
import map_0708 from '../assets/07-08/map.json'
import node_0708 from '../assets/07-08/test.json'
import path_0708 from '../assets/07-08/edge.json'
import map_0709 from '../assets/07-09/map.json'
import node_0709 from '../assets/07-09/node.json'
import path_0709 from '../assets/07-09/edge.json'
import map_0710 from '../assets/07-10/map.json'
import node_0710 from '../assets/07-10/node.json'
import path_0710 from '../assets/07-10/edge.json'
import map_0711 from '../assets/07-11/map.json'
import node_0711 from '../assets/07-11/test.json'
import path_0711 from '../assets/07-11/edge.json'
import map_B1 from '../assets/B1/map.json'
import node_B1 from '../assets/B1/test.json'
import path_B1 from '../assets/B1/edge.json'

export default {
  name: "main",
  data() {
    return {
      loading: true,
      maps: [
        map_0201,
        map_0203,
        map_0402,
        map_B0401,
        map_0602,
        map_0603,
        map_0605,
        map_0606,
        map_0607,
        map_B0604,
        map_0701,
        map_0702,
        map_0703,
        map_0704,
        map_0705,
        map_0706,
        map_0707,
        map_0708,
        map_0709,
        map_0710,
        map_0711,
        map_B1
      ],
      nodes: [
        node_0201,
        node_0203,
        node_0402,
        node_B0401,
        node_0602,
        node_0603,
        node_0605,
        node_0606,
        node_0607,
        node_B0604,
        node_0701,
        node_0702,
        node_0703,
        node_0704,
        node_0705,
        node_0706,
        node_0707,
        node_0708,
        node_0709,
        node_0710,
        node_0711,
        node_B1
      ],
      paths: [
        path_0201,
        path_0203,
        path_0402,
        path_B0401,
        path_0602,
        path_0603,
        path_0605,
        path_0606,
        path_0607,
        path_B0604,
        path_0701,
        path_0702,
        path_0703,
        path_0704,
        path_0705,
        path_0706,
        path_0707,
        path_0708,
        path_0709,
        path_0710,
        path_0711,
        path_B1
      ]
    }
  },
  created() {
    // 初始化地图数据
    for(let i=0; i<this.maps.length; i++){
      const map_info = this.maps[i];
      const node_info = this.nodes[i];
      const path_info = this.paths[i];

      const info = {};
      info['width'] = map_info.width;
      info['height'] = map_info.height;

      const nodes = [];
      // 加载节点信息
      for(const code of Object.keys(node_info)){
        const node = {};
        node['id'] = code;
        // 计算横、纵坐标百分比
        node['x'] = (node_info[code][0] / map_info.width) * 100;
        node['y'] = (node_info[code][1] / map_info.height) * 100;
        node['absolute_x'] = node_info[code][0];
        node['absolute_y'] = node_info[code][1];
        node['name'] = node_info[code][2];
        node['is_target'] = false;
        nodes.push(node);
      }
      info['nodeList'] = nodes;

      const paths = [];
      // 加载路径信息
      for(const code of Object.keys(path_info)){
        const startNode = nodes.find((node) => node.id === path_info[code][0]);
        const endNode = nodes.find((node) => node.id === path_info[code][1]);
        if(!startNode || !endNode)
          continue;

        const path = {};
        path['id'] = code;
        path['startNodeId'] = path_info[code][0];
        path['endNodeId'] = path_info[code][1];
        path['is_single'] = path_info[code][2];
        path['is_target'] = false;
        paths.push(path);
      }
      info['pathList'] = paths;

      this.$store.commit('initialMaps', {map: this.$store.state.map_name[i], info: info});
    }

    // 获取机器人数据
    const robots = [
      {
        id: 'JQR-100006',

        // 位置信息
        x: 483,
        y: 310,
        startList: [[483, 310], [3534, 1628], [612, 322], [632, 302]],
        mapList: ['B04-01', 'B1', '06-03', '06-05'],
        map_idx: 0,

        // 订单信息
        order: [
          {
            passed: ['0401$SITE-00493'],
            unpassed: [
              '0401$SITE-00304', '0401$SITE-00278', '0401$SITE-00281', '0401$SITE-00306',
              '0401$SITE-00561', '0401$SITE-00562', '0401$SITE-00565', '0401$SITE-00566',
              '0401$SITE-00279', '0401$SITE-00280'
            ],
            type: 'receive'
          },
          {
            passed: ['0401$SITE-00280'],
            unpassed: [
              '0401$SITE-00279', '0401$SITE-00566', '0401$SITE-00565', '0401$SITE-00562',
              '0401$SITE-00561', '0401$SITE-00306', '0401$SITE-00281', '0401$SITE-00278',
              '0401$SITE-00304', '0401$SITE-00277', '0401$SITE-00229', '0401$SITE-00227',
              '0401$SITE-00068'
            ],
            type: 'lift'
          },
          {
            passed: ['0251$SITE-00133'],
            unpassed: [
              '0251$SITE-00134', '0251$SITE-00135', '0251$SITE-00621', '0251$SITE-01101',
              '0251$SITE-01088', '0251$SITE-01089', '0251$SITE-01091', '0251$SITE-01093',
              '0251$SITE-01095', '0251$SITE-01102', '0251$SITE-01103', '0251$SITE-01104',
              '0251$SITE-01096', '0251$SITE-01098', '0251$SITE-01099', '0251$SITE-00610',
              '0251$SITE-00611', '0251$SITE-00127', '0251$SITE-00137', '0251$SITE-00138',
              '0251$SITE-00126', '0251$SITE-00125'
            ],
            type: 'lift'
          },
          {
            passed: ['042$SITE-00185'],
            unpassed: ['042$SITE-00187', '042$SITE-00189'],
            type: 'send'
          },
          {
            passed: ['042$SITE-00189'],
            unpassed: ['042$SITE-00187', '042$SITE-00185'],
            type: 'lift'
          },
          {
            passed: ['044$SITE-00193'],
            unpassed: ['044$SITE-00194', '044$SITE-00219', '044$SITE-00286'],
            type: 'dock'
          }
        ],
        mission_idx: 0,

        // 电梯事件信息
        now: 1,
        outElevator: true,
        waitElevator: false,
        elevatorList: ['4-2', '6-7', '6-7'],
        elevator_idx: -1,
        targetList: [0, 3, 5],
        target_idx: -1,

        timer: null,
        complete: false
      },
      {
        id: 'JQR-000001',

        // 位置信息
        x: 332,
        y: 1834,
        startList: [[332, 1834], [734, 214], [947, 464]],
        mapList: ['B1', '07-01', '07-06'],
        map_idx: 0,

        // 订单信息
        order: [
          {
            passed: ['0251$SITE-01087'],
            unpassed: [
              '0251$SITE-00330', '0251$SITE-00331', '0251$SITE-00332', '0251$SITE-00333'
            ],
            type: 'lift'
          },
          {
            passed: ['049$SITE-00368'],
            unpassed: [
              '049$SITE-00838', '049$SITE-00839', '049$SITE-00369', '049$SITE-00370',
              '049$SITE-00371', '049$SITE-00372', '049$SITE-00639', '049$SITE-00373',
              '049$SITE-00518', '049$SITE-00519', '049$SITE-00521', '049$SITE-00520'
            ],
            type: 'receive'
          },
          {
            passed: ['049$SITE-00520'],
            unpassed: [
              '049$SITE-00519', '049$SITE-00518', '049$SITE-00373', '049$SITE-00640',
              '049$SITE-00696', '049$SITE-00372', '049$SITE-00371', '049$SITE-00370',
              '049$SITE-00369', '049$SITE-00840', '049$SITE-00368'
            ],
            type: 'lift'
          },
          {
            passed: ['050$SITE-00340'],
            unpassed: [
              '050$SITE-00341', '050$SITE-00344', '050$SITE-00345', '050$SITE-00817',
              '050$SITE-00818', '050$SITE-00819', '050$SITE-00820', '050$SITE-00821',
              '050$SITE-00822', '050$SITE-00823', '050$SITE-00824', '050$SITE-00825',
              '050$SITE-00826', '050$SITE-00827', '050$SITE-00837', '050$SITE-00829',
              '050$SITE-00830'
            ],
            type: 'send'
          }
        ],
        mission_idx: 0,

        // 电梯事件信息
        now: 0,
        outElevator: true,
        waitElevator: false,
        elevatorList: ['7-7', '7-7'],
        elevator_idx: -1,
        targetList: [0, 1, 6],
        target_idx: 0,

        timer: null,
        complete: false
      }
    ];
    for(let i=0; i<robots.length; i++){
      robots[i] = this.initial(robots[i]);
    }
    this.$store.commit('initialRobots', robots);

    doAsyncTask().then(() => {
      // 关闭加载效果
      this.loading = false;
      this.$router.push('/test');
    });
  },
  mounted() {
    this.$store.state.robot_data.forEach((robot) => {
      robot.timer = setInterval(() => {
        if(!robot.complete && robot.outElevator && !robot.waitElevator)
          this.update(robot);
      }, 500);
    });
    this.$store.state.elevator_data.forEach((elevator) => {
      elevator.timer = setInterval(() => {
        if(!elevator.waitRobot){
          if(elevator.mission === 'receive')
            this.receive(elevator);
          if(elevator.mission === 'send')
            this.send(elevator);
        }
      }, 3000)
    });
  },
  methods: {
    // 更新
    update(robot) {
      const next = robot['nextNode'];
      // 当机器人到达下一个节点时
      if(Math.round(robot.x) === next['absolute_x'] && Math.round(robot.y) === next['absolute_y']){
        robot.passed.push(robot.unpassed.shift());
        // 修正误差
        robot.x = next['absolute_x'];
        robot.y = next['absolute_y'];

        // 当机器人完成当前任务时
        if(robot.unpassed.length === 0){
          // 判断当前任务是否为电梯任务
          if(robot.order[robot.mission_idx].type === 'lift'){
            robot.elevator_idx++;
            robot.waitElevator = true;
            this.callElevator(robot, robot.elevatorList[robot.elevator_idx]);
          }
          else{
            robot.mission_idx += 1;
            if(robot.mission_idx < robot.order.length){
              robot = this.initial(robot);
              robot.complete = true;
              setTimeout(() => {
                robot.complete = false;
              }, 5000);
            }
            else
              robot.complete = true;
          }
        }
        else{
          const path = {startNodeId: robot['lastNode'].id, endNodeId: next.id};
          robot['passedPath'].push(path);
          robot['unpassedPath'].shift();

          const nodes = this.$store.state.map_data.find((d) => d['map'] === robot.map).info['nodeList'];
          robot['lastNode'] = next;
          robot['nextNode'] = nodes.find((node) => node.id === robot.unpassed[0]);

          // 更新机器人的移动方向
          robot = this.getDirection(robot);
        }
      }
      if(robot.unpassed.length !== 0 && !robot.complete && robot.outElevator && !robot.waitElevator){
        robot = this.go(robot);
      }
      this.$store.commit('updateRobots', robot);
    },
    // 初始化机器人
    initial(robot){
      // 加载任务
      robot['passed'] = robot.order[robot.mission_idx].passed;
      robot['unpassed'] = robot.order[robot.mission_idx].unpassed;

      // 定义上一个节点和下一个节点
      robot['map'] = robot.mapList[robot.map_idx];
      const nodes = this.$store.state.map_data[this.$store.state.map_name.indexOf(robot.map)].info['nodeList'];
      const lastId = robot.passed[robot.passed.length-1];
      const nextId = robot.unpassed[0];
      robot['lastNode'] = nodes.find((node) => node.id === lastId);
      robot['nextNode'] = nodes.find((node) => node.id === nextId);

      // 定义方向
      robot = this.getDirection(robot);

      // 定义走过的路径
      const passedPath = [];
      for(let j=0; j<robot.passed.length-1; j++){
        const path = {startNodeId: robot.passed[j], endNodeId: robot.passed[j+1]};
        passedPath.push(path);
      }
      robot['passedPath'] = passedPath;

      // 定义未走过的路径
      const unpassedPath = [];
      for(let j=0; j<robot.unpassed.length-1; j++){
        const path = {startNodeId: robot.unpassed[j], endNodeId: robot.unpassed[j+1]};
        unpassedPath.push(path);
      }
      robot['unpassedPath'] = unpassedPath;

      return robot;
    },
    // 确定机器人的移动方向
    getDirection(robot) {
      const s = robot['lastNode'];
      const e = robot['nextNode'];
      if(s['absolute_x'] !== e['absolute_x'])
        robot['k'] = (e['absolute_y'] - s['absolute_y']) / (e['absolute_x'] - s['absolute_x']);

      return robot;
    },
    // 控制机器人移动
    go(robot) {
      const s = robot['lastNode'];
      const e = robot['nextNode'];
      const dx = (e['absolute_x'] - s['absolute_x']) / 10;
      const dy = (e['absolute_y'] - s['absolute_y']) / 10;
      if(s['absolute_x'] === e['absolute_x']) robot.y += dy;
      else{
        robot.x+=dx;
        robot.y+=robot.k * dx;
      }

      return robot;
    },

    // 呼叫电梯
    callElevator(robot, id){
      const elevator = this.$store.state.elevator_data.find(e => e.id === id);
      elevator.mission = 'receive';
      elevator.robot = robot.id;
    },
    // 电梯前往机器人所在楼层
    receive(elevator){
      const robot = this.$store.state.robot_data.find(r => r.id === elevator.robot);
      if(elevator.floor === robot.now){
        robot.target_idx++;
        elevator.waitRobot = true;

        // 模拟机器人进电梯的场景
        setTimeout(() => {
          robot.outElevator = false;

          elevator.mission = 'send';
          elevator.waitRobot = false;
        }, 3000)
      }
      else if(elevator.floor < robot.now)
        this.$store.commit('up', elevator.id);
      else
        this.$store.commit('down', elevator.id);

      this.$store.commit('updateElevators', elevator);
    },
    // 电梯承载机器人去往目标楼层
    send(elevator){
      let robot = this.$store.state.robot_data.find(r => r.id === elevator.robot);
      const target = robot.targetList[robot.target_idx];
      if(elevator.floor === target){
        robot.now = target;
        robot.map_idx += 1;
        robot.map = robot.mapList[robot.map_idx];
        robot.x = robot.startList[robot.map_idx][0];
        robot.y = robot.startList[robot.map_idx][1];
        robot.mission_idx += 1;
        robot = this.initial(robot);

        elevator.waitRobot = true;

        // 模拟机器人出电梯的场景
        setTimeout(() => {
          robot.outElevator = true;
          robot.waitElevator = false;

          elevator.robot = '';
          elevator.mission = '';
          elevator.waitRobot = false;
        }, 3000)
      }
      else if(elevator.floor < target)
        this.$store.commit('up', elevator.id);
      else
        this.$store.commit('down', elevator.id);

      this.$store.commit('updateElevators', elevator);
    },
  }
}
function doAsyncTask() {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve();
    }, 2000);
  });
}
</script>

<style scoped>

</style>
