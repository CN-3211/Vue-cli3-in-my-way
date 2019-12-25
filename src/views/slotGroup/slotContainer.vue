<!--
 * @Author: huangzh873
 * @Date: 2019-11-06 13:38:45
 * @LastEditors  : huangzh873
 * @LastEditTime : 2019-12-25 15:59:30
 -->
<template>
  <div class="slotContainer">
    <SlotedPart0 class="my-6">
      基础插槽用法
    </SlotedPart0>
    <hr>
    <!-- 具名插槽，不同位置插入不同的内容 -->
    <SlotedPart1 class="my-6">
      <template v-slot:header>
        <el-button>{{testData}}</el-button>
      </template>
      <template>
        <el-button>11111</el-button>
      </template>
      <template v-slot:footer>
        <el-button>22222</el-button>
      </template>
    </SlotedPart1>
    <hr>
    <!-- 父组件引用子组件的变量 -->
    <SlotedPart2 class="my-6" v-slot:default="slotProps">
      {{ slotProps.user.sloted }}
    </SlotedPart2>
    <SlotedPart2 class="my-6" v-slot:default="{ user, user2 }">
      {{ user.sloted2 }}
      {{ user2.sloted }}
    </SlotedPart2>
    <!-- v-slot缩写为'#' -->
  </div>
</template>

<script>
import SlotedPart0 from './slotedPart0';
import SlotedPart1 from './slotedPart1';
import SlotedPart2 from './slotedPart2';

export default {
  data() {
    return {
      testData: 'asdddd'
    }
  },
  components: {
    SlotedPart0,
    SlotedPart1,
    SlotedPart2
  }
}
</script>

<style lang="scss" scoped>
.slotContainer {
  
}
</style>