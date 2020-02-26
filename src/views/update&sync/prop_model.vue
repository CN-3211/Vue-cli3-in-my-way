<template>
  <div class="prop_model" @click="onclick"></div>
</template>

<script>
  export default {
    name: "prop_model",
    model: {
      prop: "propModel",
      event: "change"
    },
    props: {
      propModel: {
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
      onclick() {
        this.$emit('change', 'model后的效果-prop')
      }
    }
  };
</script>

<style lang="scss" scoped>
  .prop_model {
    width: 200px;
    height: 200px;
    border: 1px solid #999;
    margin: 0 auto;
  }
</style>