<template>
  <div class="banner">
    <div class="container">
      <div class="div1"></div>
      <div class="div2"></div>
      <div class="div3"></div>
      <div class="div4"></div>
      <div class="div5"></div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {

    }
  }
}
</script>
<style lang="scss" scoped>
.banner{
  .container{
    width: 800px;
    height: 400px;
    margin: 0 auto;
    .div1,.div2,.div3,.div4,.div5{
      width: 100%;
      height: 100%;
    }
    .div1{background-color: red;}
    .div2{background-color: orange;}
    .div3{background-color: yellow;}
    .div4{background-color: green;}
    .div5{background-color: rgb(0, 255, 242);}
  }
}
</style>