<template>
<!--  <div style="width: 100%; justify-content: center; display: flex">-->
<!--    <el-table-->
<!--        :data="tableData"-->
<!--        :cell-class-name="tableCellClassName">-->
<!--      <el-table-column-->
<!--          prop="floor"-->
<!--          label="楼层"-->
<!--          width="50"-->
<!--          align="right">-->
<!--      </el-table-column>-->
<!--      <el-table-column-->
<!--          label="当前电梯位置"-->
<!--          align="center">-->
<!--      </el-table-column>-->
<!--    </el-table>-->
  <div class="container" ref="container">
    <img class="image" ref="image" src="../assets/elevator.png" @load="onImageLoad">
    <img
        src="../assets/lift.png"
        style="position: absolute"
        :style="{width: 102 * img_width / 323 + 'px',
                 height: 34 * img_height / 426 + 'px',
                 left: gap_width + 218 * img_width / 323 + 'px',
                 top: gap_height + (377-34*this.$store.state.elevator_data.find((e) => e.id === this.elevatorID).floor) * img_height / 426 + 'px'
                }">
  </div>
</template>

<style>
.el-table .warning-row {
  background: orangered;
}
.el-table::before {
  height: 0;
}
.container {
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
}
.image {
  max-width: 100%;
  max-height: 100%;
}
</style>

<script>
export default {
  name: "elevator",
  props: ['elevatorID'],
  mounted() {
    window.addEventListener('resize', () => {
      this.onImageLoad();
    });
  },
  beforeDestroy() {
    window.removeEventListener('resize',() => {
      this.onImageLoad();
    })
  },
  methods: {
    tableCellClassName({row, column, rowIndex, columnIndex}) {
      if (rowIndex === 11 - this.$store.state.elevator_data.find((e) => e.id === this.elevatorID).floor && columnIndex === 1)
        return 'warning-row';

      return '';
    },
    // 获取图片自适应网页后的尺寸
    onImageLoad() {
      if(this.$refs.image){
        this.img_width = this.$refs.image.width;
        this.img_height = this.$refs.image.height;

        if(this.$refs.container)
          this.gap_width = (this.$refs.container.clientWidth-this.img_width)/2
        this.gap_height = (this.$refs.container.clientHeight-this.img_height)/2
      }
    },
  },
  data() {
    return {
      img_width: 0,
      img_height: 0,
      gap_width: 0,
      gap_height: 0,

      tableData: [{
        floor: 'F11',
      }, {
        floor: 'F10',
      }, {
        floor: 'F9',
      }, {
        floor: 'F8',
      }, {
        floor: 'F7',
      }, {
        floor: 'F6',
      }, {
        floor: 'F5',
      }, {
        floor: 'F4',
      }, {
        floor: 'F3',
      }, {
        floor: 'F2',
      }, {
        floor: 'F1',
      }, {
        floor: 'B1',
      }]
    }
  }
}
</script>
