<template>
  <div class="childRef">
    {{mydata}}
    <el-button @click="handleClick" type="primary">主要按钮</el-button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      mydata: 0
    }
  },
  methods: {
    handleClick() {
      this.$emit('emitFuc', this.mydata)
    }
  }
}
</script>

<style>

</style>