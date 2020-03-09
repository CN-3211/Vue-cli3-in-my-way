<template>
  <div class="test">
    <p>123</p>
    <el-button @click="onClick(b)">点击我调用debounce</el-button>
  </div>
</template>

<script>
  import { debounce } from '../utils/index';
  import { wrapFunction } from '../utils/index2';
  export default {
    name: 'test',
    data() {
      return {
        a: 'piao',
        b: 'paramsStr'
      }
    },
    methods: {
      onClick: wrapFunction(function (parms) {
        console.log('parms :', parms);
        this.a += '飘';
        console.log('test页面下面的this :', this.a + parms);
       }, 1000)
    },
    mounted() {
    }
  }
</script>

<style>

</style>