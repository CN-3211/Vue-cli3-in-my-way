<!--vue是如何监听数组的push等操作的-->
<!--Vue 将被侦听的数组的变异方法进行了包裹，所以它们也将会触发视图更新。这些被包裹过的方法包括：

push()
pop()
shift()
unshift()
splice()
sort()
reverse()
slice（）

注意事项

由于 JavaScript 的限制，Vue 不能检测以下数组的变动：

当你利用索引直接设置一个数组项时，例如：vm.items[index] = newValue
当你修改数组的长度时，例如：vm.items.length = newLength
————————————————-->
<template>
  <div class="setAndget">
    <el-row>
      <el-col class="height-80 lheight-80" :span="8"><el-button @click="onPush">点击push数组</el-button></el-col>
      <el-col class="height-80 lheight-80" :span="16">{{pushArr}}</el-col>
      <el-col class="height-80 lheight-80" :span="8"><el-button @click="onChange">点击改变数组的元素(vue无法监听)</el-button></el-col>
      <el-col class="height-80 lheight-80" :span="16">{{changeArr}}</el-col>
    </el-row>
  </div>
</template>

<script>
  import Vue from 'vue';
  export default {
    name: "setAndget",
    data() {
      return {
        pushArr: [],
        changeArr: [1, 2, 3]
      };
    },
    methods: {
      onPush() {
        this.pushArr.push(1,2,3)
      },
      onChange() {
        // // 这种方法改变无法触发视图的更新
        // this.changeArr[2] = 'new';
        Vue.set(this.changeArr, 1, 'new2');
        this.$set(this.changeArr, 2, 'new') // 上面的简写
      }
    }
  };
</script>

<style lang="scss" scoped>
  .setAndget {
  }
</style>