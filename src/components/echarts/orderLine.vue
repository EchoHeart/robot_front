<template>
  <div id="orderLine" :style="{height: chartHeight}"></div>
</template>

<script>
export default {
  name: "orderLine",
  props: ['chartHeight'],
  data() {
    return {
      myChart: null
    }
  },
  methods: {
    myEcharts(){
      this.myChart = this.$echarts.init(document.getElementById('orderLine'));
      //配置图表
      const option = {
        title: {
          text: '过去一天内订单数',
          left: 'center',
          top: 5,
          textStyle: {
            fontSize: 15
          }
        },
        tooltip: {
          trigger: 'axis',
          axisPointer: {
            type: 'cross'
          }
        },
        xAxis: {
          type: 'category',
          boundaryGap: false,
          // prettier-ignore
          data: ['00:00', '01:15', '02:30', '03:45', '05:00', '06:15', '07:30', '08:45', '10:00', '11:15', '12:30', '13:45', '15:00', '16:15', '17:30', '18:45', '20:00', '21:15', '22:30', '23:45']
        },
        yAxis: {
          type: 'value',
          axisLabel: {
            formatter: '{value}'
          },
          axisPointer: {
            snap: true
          }
        },
        visualMap: {
          show: false,
          dimension: 0,
          pieces: [
            {
              lte: 6,
              color: 'green'
            },
            {
              gt: 6,
              lte: 8,
              color: 'red'
            },
            {
              gt: 8,
              lte: 14,
              color: 'green'
            },
            {
              gt: 14,
              lte: 17,
              color: 'red'
            },
            {
              gt: 17,
              color: 'green'
            }
          ]
        },
        series: [
          {
            name: '订单',
            type: 'line',
            smooth: true,
            // prettier-ignore
            data: [30, 28, 22, 26, 27, 30, 55, 50, 40, 39, 38, 39, 40, 50, 60, 75, 80, 70, 60, 40],
            markArea: {
              itemStyle: {
                color: 'rgba(255, 173, 177, 0.4)'
              },
              data: [
                [
                  {
                    name: 'Morning Peak',
                    xAxis: '07:30'
                  },
                  {
                    xAxis: '10:00'
                  }
                ],
                [
                  {
                    name: 'Evening Peak',
                    xAxis: '17:30'
                  },
                  {
                    xAxis: '21:15'
                  }
                ]
              ]
            }
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
#orderLine {
  width: 90%;
}
</style>
