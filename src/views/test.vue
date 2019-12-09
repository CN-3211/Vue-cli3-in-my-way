<!--
 * @Author: your name
 * @Date: 2019-11-06 13:38:45
 * @LastEditTime: 2019-12-09 16:45:08
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \Vue-cli3-in-my-way\src\views\test.vue
 -->
<template>
  <div class="tangle">
    <div class="tangle__container"></div>
  </div>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
.tangle {
  .tangle__container {
    width: 0px;
    height: 0px;
    margin: 0 auto;
    // border-top: 20px solid red;
    border-left: 51px solid transparent;
    border-bottom: 92px solid black;
    border-right: 51px solid transparent;
    position: relative;
    z-index: -1;
    // left和小的两个border同步，top不变，边框三角形需要在left和right各加1px，大的加2px
    &::after {
      content: '';
      position: absolute;
      top: 1px;
      left: -50px;
      display: block;
      width: 0px;
      height: 0px;
      // border-top: 20px solid red;
      border-left: 50px solid transparent;
      border-bottom: 90px solid #fff;
      border-right: 50px solid transparent;
    }
  }
}
</style>