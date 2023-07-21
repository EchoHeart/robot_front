<template>
  <div id="robotPie" :style="{height: chartHeight}"></div>
</template>

<script>
export default {
  name: "robotPie",
  props: ['chartHeight'],
  data() {
    return {
      myChart: null
    }
  },
  methods: {
    myEcharts(){
      this.myChart = this.$echarts.init(document.getElementById('robotPie'));
      //配置图表
      const option = {
        tooltip: {
          trigger: 'item'
        },
        title: {
          text: '机器人状态统计图',
          left: 'center',
          textStyle: {
            fontSize: 15
          }
        },
        legend: {
          top: '10%',
          left: 'center',
          textStyle: {
            fontSize: 8
          }
        },
        series: [
          {
            name: '机器人状态统计图',
            type: 'pie',
            radius: ['40%', '70%'],
            avoidLabelOverlap: false,
            top: '12%',
            itemStyle: {
              borderRadius: 5,
              borderColor: '#fff',
              borderWidth: 2
            },
            label: {
              show: false,
              position: 'center'
            },
            labelLine: {
              show: false
            },
            data: [
              { value: 22, name: '工作' },
              { value: 8, name: '空闲' },
              { value: 2, name: '故障' }
            ]
          }
        ]
      };
      this.myChart.setOption(option);
    }
  },
  mounted(){
    this.myEcharts();

    window.addEventListener('resize', () => {
      this.myChart.resize();
    });
  },
  beforeDestroy() {
    window.removeEventListener('resize',() => {
      this.myChart.resize();
      this.myChart = null;
    })
  }
}
</script>

<style scoped>
#robotPie {
  width: 90%;
}
</style>
