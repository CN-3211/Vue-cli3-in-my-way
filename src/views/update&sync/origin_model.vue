<template>
  <div class="origin_model" @click="onClick"></div>
</template>

<script>
  export default {
    name: "origin_model",
    props: {
      value: {
        type: String,
        default: ''
      }
    },
    data() {
      return {};
    },
    mounted() {
    },
    methods: {
      onClick() {
        this.$emit('input', 'model后的效果')
      }
    }
  };
</script>

<style lang="scss" scoped>
  .origin_model {
    width: 200px;
    height: 200px;
    border: 1px solid #999;
    margin: 0 auto;
  }
</style>