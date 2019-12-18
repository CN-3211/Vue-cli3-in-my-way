<!--
 * @Author: your name
 * @Date: 2019-11-06 13:38:45
 * @LastEditTime: 2019-12-17 15:25:12
 * @LastEditors: huangzh873
 * @Description: call和apply还有bind用法
 * @FilePath: \Vue-cli3-in-my-way\src\views\test.vue
 -->
<template>
  <div class="callApplyBind">
    <h1 class="text-30">call&apply&bind</h1>
    <p class="text-18 mt-5">返回的结果上：call和apply均是调用就执行，bind需要在调用后加上()才能执行</p>
    <p class="text-18 mt-5">传参上：call和bind传参类似，均是一个个传参;apply需要传一个数组</p>
  </div>
</template>

<script>
import { CLOSING } from 'ws';
export default {
  data() {
    return {
      age:12
    }
  },
  mounted() {
    var name = 'huangzh';
    var age = 22;
    var obj = {
      age: 18,
      name: '小张',
      objAge: this.age,
      myFun: function (from,to) {
        console.log(this.name + "年龄" + this.age+'，来自'+from+'去'+to);
      }
    }
    var outObj = {
      age: 17,
      name: 'shapiao'
    }
    console.log('call :', obj.myFun.call(outObj, '成都', '上海'));
    console.log('apply :', obj.myFun.apply(outObj, ['成都', '上海']));
    console.log('bind :', obj.myFun.bind(outObj, '成都', '上海')());
  }
}

</script>

<style lang="scss" scoped>
.callApplyBind {
}
</style>