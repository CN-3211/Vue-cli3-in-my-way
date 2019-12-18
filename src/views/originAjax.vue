<!--
 * @Author: your name
 * @Date: 2019-11-06 13:38:45
 * @LastEditTime: 2019-12-17 16:45:06
 * @LastEditors: huangzh873
 * @Description: 原生的js如何使用ajax请求接口
 * @FilePath: \Vue-cli3-in-my-way\src\views\test.vue
 -->
<template>
  <div class="ajax">
    <h1 class="text-30">看代码</h1>
  </div>
</template>

<script>
export default {
  data() {
    return {
      age:12
    }
  },
  mounted() {
    var __ajax = new XMLHttpRequest()
    // 当请求为异步的时候可以用onreadystatechange
    __ajax.onreadystatechange = function () {
      console.log('__ajax1 :', __ajax.readyState);
      console.log('__ajax2 :', __ajax.status);
    }
    // setRequestHeader设置请求头内容
    // __ajax.setRequestHeader()

    __ajax.open('GET', "https://jsonplaceholder.typicode.com/posts/1", true)
    __ajax.send()

    // 若请求为同步的，直接把要执行的内容放在send()后面即可
    
    console.log('__ajax3 :', __ajax.responseURL);
  }
}

</script>

<style lang="scss" scoped>
.ajax {
}
</style>