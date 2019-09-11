<template>
  <div ref="all" @mouseenter="stopMove" @mouseleave="startMove" class="autoTimeLine">
    <!-- 列表自动向下滚动  @mouseenter="stopMove" @mouseleave="startMove" -->
    <el-timeline ref="outContainer">
      <el-timeline-item
        v-for="item in jsonInfo"
        :key="item.index"
        :timestamp="item.year">
        <div class="yearUnit" v-for="subItem in item.data" :key="subItem.time">
          <span>{{subItem.time}}</span>
          <span>{{subItem.title}}</span>
          <span>{{subItem.content}}</span>
        </div>
      </el-timeline-item>
    </el-timeline>
    <!-- <div ref="outContainer" class="animationWrap">
      <div class="historyUnit" v-for="item in jsonInfo" :key="item.index">
        <span>{{item.year}}</span>
        <div class="yearUnit" v-for="subItem in item.data" :key="subItem.time">
          <span>{{subItem.time}}</span>
          <span>{{subItem.title}}</span>
          <span>{{subItem.content}}</span>
        </div>
      </div>
    </div> -->
  </div>
</template>

<script>
import jsonInfo from '../../static/jsons/historyList.json';
export default {
  data() {
    this.jsonInfo = jsonInfo;
    this.frame = null;
    return {
      timeStart: '',
      timeEnd: ''
    }
  },
  mounted() {
    this.startMove();
    // this.$nextTick(()=>{
    //   this.startMove()
    // })qiancheng这样写的，不知道有什么用
  },
  beforeDestroy() {
    cancelAnimationFrame(this.frame);
  },
  methods:{
    startMove() {
      let outerHeight = this.$refs.all.offsetHeight;
      let offsetHeight = this.$refs.outContainer.$el.offsetHeight;
      const action = () => {
        /*if (!this.fpsTime) {
          this.fpsTime = new Date().getTime();
        }
        this.aniTime = new Date().getTime();
        if (this.aniTime - this.fpsTime < 1000) {
          if (!this.aaaTime) {
            this.aaaTime = new Date().getTime();
          }
          this.bbbTime = new Date().getTime();
          if (this.aniTime - this.aaaTime >= 33.33) {
            console.log(1)
            this.aaaTime = new Date().getTime();
          }
        }设置帧率，但是不稳定*/
        let scrollTop = this.$refs.all.scrollTop;
        if (scrollTop + outerHeight >= offsetHeight) {
          if (!this.stopTime) {
            this.stopTime = new Date().getTime();
          }
          this.disTime = new Date().getTime();
          if (this.disTime - this.stopTime >= 3000) {
            this.$refs.all.scrollTop = 0;
            this.stopTime = null;
          }
        } else {
          if(scrollTop === 0){
            if(!this.stopTopTime){
              this.stopTopTime = new Date().getTime();
            }
            this.disTopTime = new Date().getTime();
            if(this.disTopTime - this.stopTopTime >= 3000){
              this.$refs.all.scrollTop = 1;
            }
          }
          else{
            this.stopTopTime = null;
            this.$refs.all.scrollTop = scrollTop + 1;
          }
        }
        // 递归
        this.frame = requestAnimationFrame(action);
      };
      requestAnimationFrame(action);
    },
    stopMove() {
      cancelAnimationFrame(this.frame);
    }
    // startMove() {
    //   let offsetHeight = this.$refs.outContainer.$el.offsetHeight;
    //   let outerHeight = this.$refs.all.offsetHeight;
    //   this.scrollTop = this.$refs.all.scrollTop;
    //   this.interval = setInterval(() => {
    //     if(this.scrollTop+ outerHeight >= offsetHeight){
    //       setTimeout(() => {
    //         this.scrollTop = 0;
    //       }, 3000)
    //     }
    //     this.$refs.all.scrollTop = this.scrollTop++;
    //     // console.log('object1 :', this.scrollTop);
    //     // console.log('object2 :', offsetHeight);
    //   }, 20);
    // },
    // stopMove() {
    //   clearTimeout(this.interval)
    // }
  }
}
</script>
<style lang="scss" scoped>
.autoTimeLine{
  width: 750px;
  height: 400px;
  margin: 0 auto;
  overflow-x: hidden;
  overflow-y: auto;
  .historyUnit{
    border: 1px solid #666;
  }
  // 使用css3所带的animation属性实现效果不好
  // .animationWrap{
  //   animation-name: moveHistory;
  //   animation-duration: 10s;
  //   animation-timing-function: linear;
  //   @keyframes moveHistory {
  //     from {
  //       transform:translateY(0);
  //     }
  //     to {
  //       transform:translateY(-100%);
  //     }
  //   }
  // }
}

</style>