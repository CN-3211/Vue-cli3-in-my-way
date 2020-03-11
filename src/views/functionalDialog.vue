<!--此组件可以完全代替el-dialog-->
<script>
  export default {
    render(createElement, hack) {
      console.log('hack',hack);
      // hack.children[0].componentOptions.propsData.title = hack.props.title;
      // 透传
      return createElement('el-dialog', hack.data, hack.children)
    }
  }
</script>