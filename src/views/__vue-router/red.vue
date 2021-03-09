<template>
  <div class="red">
    <br>
    <p>红色页面</p>
    <br>
    <el-button @click="onclick">跳转到黄色页面</el-button>
  </div>
</template>

<script>
  export default {
    name: "red",
    data() {
      return {};
    },
    mounted() {
    },
    methods: {
      onclick() {
        this.$router.push('/router-root/yellow')
      }
    }
  };
</script>

<style lang="scss" scoped>
  .red {
  }
</style>