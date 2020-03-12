<template>
  <div class="test">
    <p>{{a}}</p>
    <el-button @click="onClick(b)">点击我调用debounce</el-button>
    <el-button type="text" @click="dialogVisible = true" >点击打开 Dialog</el-button>
    <FunctionalDialog title="周神牛逼" tagName="el-dialog" :visible.sync="dialogVisible" width="30%" :before-close="handleClose">
      <span>这是一段信息</span>
    </FunctionalDialog>
  </div>
</template>

<script>
  import { debounce } from '../utils/index';
  import { wrapFunction } from '../utils/index2';
  import FunctionalDialog from "./functionalDialog";
  export default {
    name: 'test',
    data() {
      return {
        a: 'piao',
        b: 'paramsStr',
        dialogVisible: false
      }
    },
    methods: {
      dialogClick() {
        console.log('asd',123);
      },
      onClick: wrapFunction(function (parms) {
        console.log('parms :', parms);
        console.log('test页面下面的this :', this.a + parms);

        return  this.a += '飘';
       }, 1000),
      handleClose(done) {
        this.$confirm('确认关闭？')
          .then(_ => {
            done();
          })
          .catch(_ => {});
      }
    },
    mounted() {
      let aaa = setTimeout(() => {
        console.log(1);}, 1000)
      console.log('aaa',aaa);
    },
    components: {
      FunctionalDialog
    }
  }
</script>

<style>

</style>