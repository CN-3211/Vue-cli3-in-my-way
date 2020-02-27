<template>
  <div class="routerRoot">
    <p>这个页面是最外层的页面 什么都没有</p>
    <router-view></router-view>
  </div>
</template>

<script>
  export default {
    name: "routerRoot",
    data() {
      return {};
    },
    mounted() {
    }
  };
</script>

<style lang="scss" scoped>
  .routerRoot {
  }
</style>