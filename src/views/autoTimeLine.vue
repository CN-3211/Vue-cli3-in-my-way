<template>
  <div ref="all" @mouseenter="stopMove" @mouseleave="startMove" class="autoTimeLine">
    <!-- 列表自动向下滚动 -->
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
    return {
      scrollTop: 0,
      interval: null
    }
  },
  mounted() {
    // this.$nextTick(()=>{
    //   this.startMove()
    // })qiancheng这样写的，不知道有什么用
    this.startMove()
  },
  beforeDestroy() {
    this.stopMove();
  },
  methods:{
    startMove() {
      let offsetHeight = this.$refs.outContainer.$el.offsetHeight;
      let outerHeight = this.$refs.all.offsetHeight;
      this.scrollTop = this.$refs.all.scrollTop;
      this.interval = setInterval(() => {
        if(this.scrollTop+ outerHeight >= offsetHeight){
          setTimeout(() => {
            this.scrollTop = 0;
          }, 3000)
        }
        this.$refs.all.scrollTop = this.scrollTop++;
        // console.log('object1 :', this.scrollTop);
        // console.log('object2 :', offsetHeight);
      }, 20);
    },
    stopMove() {
      clearTimeout(this.interval)
    }
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
  /*使用css3所带的animation属性实现效果不好
  .animationWrap{
    animation-name: moveHistory;
    animation-duration: 10s;
    animation-timing-function: linear;
    @keyframes moveHistory {
      from {
        transform:translateY(0);
      }
      to {
        transform:translateY(-50%);
      }
    }
  }*/
}

</style>