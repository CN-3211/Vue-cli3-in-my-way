<!--
   render用法
 * @Author: huangzh873
 * @Date: 2019-12-25 14:07:07
 * @LastEditors  : huangzh873
 * @LastEditTime : 2019-12-25 15:46:48
 -->
<template>
  <div class="slotedPart1">
    <div class="header">
      <slot name="header">默认展示header</slot>
    </div>
    <div class="body">
      <slot>默认展示body</slot>
    </div>
    <div class="footer">
      <slot name="footer">默认展示footer</slot>
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
</style>