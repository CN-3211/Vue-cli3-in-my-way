<template>
  <div class="todoList">
    <router-link class="mr-2" to="/formSubmit" tag="a">跳转到form页面</router-link>
    <el-input class="width-400" v-model="inputData" placeholder="请输入待办事项" type=""></el-input>
    {{inputData}}
    <el-button @click="handleAddClick()">添加待办</el-button>
    <p class="text-24">待办事项</p>
    <ul>
      <!-- <template v-if="">
        <li v-for=""></li>
      </template> -->
      <li v-for="(item, index) in waitList" :key="index" v-show="!item.bol">{{item.title}}
        <el-checkbox v-model="item.bol">待办未完成</el-checkbox>
      </li>
    </ul>
    <hr>
    <p class="text-24">完成事项</p>
    <ul>
      <li v-for="(item, index) in waitList" :key="index" v-show="item.bol">{{item.title}}
        <el-checkbox v-model="item.bol">待办已完成</el-checkbox>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data () {
    return {
      waitList: [],
      // completeList: [],
      inputData: '',
      index: 2,
      temp: []
    }
  },
  methods: {
    handleAddClick () {
      if (this.inputData) {
        this.waitList.push({
          title: this.inputData,
          bol: false
        })
        console.log(this.waitList)
        this.inputData = ''
      }
    }
    // computed: {
    //   loadList () {
    //     return this.waitList.filter(item => !item.bol)
    //   }
    // }
  }
}
</script>
