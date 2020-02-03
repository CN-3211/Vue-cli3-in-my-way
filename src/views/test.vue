<!--
 * @Author: huangzh873
 * @Date: 2020-01-07 09:50:53
 * @LastEditors  : huangzh873
 * @LastEditTime : 2020-01-15 09:08:24
 -->
<template>
  <div>1</div>
</template>

<script>
export default {
  mounted() {
    // function aaa() {
    //   console.log('this :', this);
    // }
    // aaa()
    (() => {
      console.log('this :', this);
      
    })()
  }
}
</script>

<style>

</style>