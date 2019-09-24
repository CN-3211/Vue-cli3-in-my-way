<template>
  <div class="wrap">
    <div @click="params => handleClick(params, title)">两个参数</div>
    <div @click="onParams">一个参数</div>
    <div :title="title"></div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      title: '测试传入参数'
    }
  },
  methods: {
    handleClick(params, title){
      console.log('params :', params);
      console.log('title :', title);
    },
    onParams(params){
      console.log('params :', params);
    }
  }
}
</script>