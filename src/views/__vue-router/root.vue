<template>
  <div class="root">
    <br>
    <p>这个页面是默认展示的页面</p>
    <br>
    <router-link to="/router-root/red">跳转到红色页面</router-link>
  </div>
</template>

<script>
  export default {
    name: "root",
    data() {
      return {};
    },
    mounted() {
    }
  };
</script>

<style lang="scss" scoped>
  .root {
  }
</style>