<template>
  <div class="origin_sync">
    <el-button @click="onclickModel">点击我触发model</el-button>
    <el-button @click="onclickSync">点击我触发sync</el-button>
    <el-button @click="onclickSyncs">点击我触发多个sync</el-button>
  </div>
</template>

<script>
  export default {
    name: "origin_sync",
    props: {
      value: {
        type: String,
        default: ''
      },
      syncOrigin: {
        type: String,
        default: ''
      },
      name: {
        type: String,
        default: ''
      }
    },
    data() {
      return {};
    },
    methods: {
      onclickSyncs() {
        this.$emit('update:name', 'obj的name变了')
      },
      onclickSync() {
        this.$emit('update:syncOrigin', '一个sync变变变')
      },
      onclickModel() {
        this.$emit('input', 'model变变变')
      }
    },
    mounted() {
    }
  };
</script>

<style lang="scss" scoped>
  .origin_sync {
    width: 200px;
    height: 200px;
    border: 1px solid #999;
    margin: 0 auto;
  }
</style>