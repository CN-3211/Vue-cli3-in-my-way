<!--此组件可以完全代替el-dialog-->
<script>
  export default {
    functional: true,
    render(createElement, hack) {
      console.log('hack',hack);
      return createElement('el-dialog', hack.data, hack.children)
    }
  }
</script>