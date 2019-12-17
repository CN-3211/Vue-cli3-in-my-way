<!--
 * @Author: your name
 * @Date: 2019-11-06 13:38:45
 * @LastEditTime: 2019-12-16 11:29:08
 * @LastEditors: huangzh873
 * @Description: 判断数据类型的方式
 * @FilePath: \Vue-cli3-in-my-way\src\views\test.vue
 -->
<template>
  <div class="jsDataType">
    <h1>看控制台</h1>
  </div>
</template>

<script>
export default {
  data() {
    return {

    }
  },
  mounted() {
    let a = '';
    let b = 1;
    let c = true;
    let d = null;
    // let e
    let AAA = [1, 2, 3];
    let BBB = { a: 1, b: 2, c: 3 };
    let CCC = function () {
      console.log(111);
    }
    // typeof只能判断string,number,boolen,undefined和function
    /**字符串**/ console.log('typeOf a is :', typeof a); // string
    /**数字**/ console.log('typeOf b is :', typeof b); // number
    /**布尔**/ console.log('typeOf c is :', typeof c); // boolen
    
    console.log('typeOf d is :', typeof d); // object
    /**undefined**/ console.log('typeOf e is :', typeof e); // undefined
    console.log('typeOf AAA is :', typeof AAA); // object
    console.log('typeOf BBB is :', typeof BBB); // object
    /**函数1**/ console.log('typeOf CCC is :', typeof CCC); // function

    // instanceof左右边必须是一个对象，且不能是undefined
    console.log('a instanceof is :', a instanceof String); // false
    console.log('b instanceof is :', b instanceof Number); // false
    console.log('c instanceof is :', c instanceof Boolean); // false
    console.log('d instanceof is :', d instanceof String); // false
    // console.log('e instanceof is :', e instanceof String); // error

    // instanceof是判断原型链上是否存在对应构造函数
    /**数组1**/ console.log('AAA instanceof is :', AAA instanceof Array); // true
    /**数组2**/ console.log('Array.isArray(AAA) :', Array.isArray(AAA)); // true
    console.log('AAA instanceof is :', AAA instanceof Object); // true
    console.log('BBB instanceof is :', BBB instanceof Object); // true
    /**函数2**/ console.log('CCC instanceof is :', CCC instanceof Function); // true
    console.log('CCC instanceof is :', CCC instanceof Object); // true


    // ==和===判断
    // 只有判断null和undefined的时候需要区分==和===
    console.log('null == undefined :', null == undefined); // true
    console.log('null === undefined :', null === undefined); // flase

    /**null**/ console.log('d === null :', d === null); // true

  }
}

</script>

<style lang="scss" scoped>
.jsDataType {
}
</style>