<!--
 * @Author: your name
 * @Date: 2019-12-06 11:18:17
 * @LastEditTime: 2019-12-09 13:40:28
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \Vue-cli3-in-my-way\src\views\tryCatchFinally.vue
 -->
<template>
  <div class="tryCatchFinally">
    <p>{{errorMessage}}</p>
    <p>{{message}}</p>
    
  </div>
</template>

<script>
export default {
  data() {
    return {
      errorMessage: '',
      message: ''
    }
  },
  mounted() {
    try {
      alerdddt('1111')
    } catch (error) {
      this.errorMessage = error
    } finally {
      this.message = '无论是否出现错误都会执行的内容';
    }
  }
}
</script>

<style lang="scss" scoped>
.tryCatchFinally {

}
</style>