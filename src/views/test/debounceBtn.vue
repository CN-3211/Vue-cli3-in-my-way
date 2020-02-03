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
    methods: {
      b: debounce(function() {
        this.btnClick()
      }, 1000)
    }
  }
</script>