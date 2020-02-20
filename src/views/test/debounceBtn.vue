<template>
  <el-button v-bind="$attrs" v-on="$listeners" @click="b">
    <slot></slot>
  </el-button>
</template>

<script>
  import { debounce } from '~utils';
  export default {
    beforeCreate() {
      this.btnClick = this.$listeners.click;
      delete this.$listeners.click;
    },
    mounted() {
      let a = new Date().getTime()
      console.log('1',a);
      console.log('2',a);
      let b = () => new Date().getTime();
      console.log('3', b());
      console.log('4', b());
    },
    methods: {
      b: debounce(function() {
        this.btnClick()
      }, 1000),
      c() {
        return debounce(function() {
          this.btnClick()
        }, 1000)()
      }
    }
  }
</script>