<!--
 * @Author: huangzh873
 * @Date: 2019-12-25 15:24:36
 * @LastEditors  : huangzh873
 * @LastEditTime : 2019-12-25 15:55:11
 -->
<template>
  <div class="slotedPart2">
    <slot :user="user" :user2="user2">{{user.default}}</slot>
  </div>
</template>

<script>
export default {
  data() {
    return {
      user: {
        default: '这是默认内容',
        sloted: '这是插槽内容',
        sloted2: '解构插槽内容'
      },
      user2: {
        sloted: '第二个prop'
      }
    }
  }

}
</script>

<style>

</style>