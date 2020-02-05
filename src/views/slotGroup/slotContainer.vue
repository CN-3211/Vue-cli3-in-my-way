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
        <el-button></el-button>
      </template>
    </SlotedPart1>
    <hr>
    <!-- 父组件引用子组件的变量, v-slot:缩写为'#' -->
    <SlotedPart2 class="my-6" v-slot:default="slotProps">
      {{ slotProps.user.sloted }}
    </SlotedPart2>
    <SlotedPart2 class="my-6" #default="{ user, user2 }">
      {{ user.sloted2 }}
      {{ user2.sloted }}
    </SlotedPart2>
    <!-- slot只穿数组 -->
    <NewSlot :myArr="testArr">
      <template #box="{ info }">
        <div class="box">info: {{info.name}}</div>
      </template>
    </NewSlot>
  </div>
</template>

<script>
import SlotedPart0 from './slotedPart0';
import SlotedPart1 from './slotedPart1';
import SlotedPart2 from './slotedPart2';
import NewSlot from './newSlot';

export default {
  data() {
    return {
      testData: 'asdddd',
      testArr: [1, 2, 3, 4, 5]
    }
  },
  mounted() {
    console.log('father', this.$slots)
  },
  components: {
    SlotedPart0,
    SlotedPart1,
    SlotedPart2,
    NewSlot
  }
}
</script>

<style lang="scss" scoped>
.slotContainer {
  
}
</style>