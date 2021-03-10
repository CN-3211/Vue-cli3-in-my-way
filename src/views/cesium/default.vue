<template>
  <div class="default">
    <br>
    <p>这个页面是默认展示的页面</p>
    <br>
    <router-link to="/cesium-root/cesium-viewer">cesium-viewer</router-link><br>
    <router-link to="/cesium-root/cesium-imagery">cesium-imagery</router-link><br>
    <router-link to="/cesium-root/ce-arcgis">ce-arcgis</router-link><br>
  </div>
</template>

<script>
  export default {
    name: "default",
    data() {
      return {};
    },
    mounted() {
    }
  };
</script>

<style lang="scss" scoped>
  .default {
  }
</style>