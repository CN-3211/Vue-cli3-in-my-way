/*
 * @Author: huangzh873
 * @Date: 2019-09-21 23:20:58
 * @LastEditors  : huangzh873
 * @LastEditTime : 2020-02-03 09:39:39
 */
import _uniqWith from 'lodash/uniqWith';
import _isEqual from 'lodash/isEqual';
// 反转多维数组
export function reverseArrDeep(arrList) {
  if(arrList instanceof arrList) {
    if(arrList[0] instanceof Array) {
      return arrList.map(arr => reverseArrDeep(arr))
    } else{
      return arrList.reverse()
    }
  } else {
    console.log('请传入数组');
  }
}
// 测试用例
// let testArr = [[1,2], [3,4]]; //传入数据为数组
// console.log('testArr :', reverseArrDeep(testArr));



// 数组去重
export function duplicateRemove(arr) {
  return _uniqWith(arr, _isEqual);
}

// 测试用例
// let testArr = [
//   { a: 1, b: 2, c: 3 },
//   { a: 1, b: 2, c: 3 },
//   { a: 4, b: 5, c: 6 }
// ];
// console.log('testArr :', duplicateRemove(testArr));



// 手写reduce
export function myReduce(fn, init) {
  let len = this.length;
  let i = 0;
  let total = 0;
  if(init === undefined) {
    total = this[0];
    i = 1
  } else {
    total = init;
  }
  for(;i < len  ; i++) {
    total = fn(total, this[i])
  }
  return total
}

// 测试用例
// Array.prototype.myReduce = myReduce;
// let reduceArr = [1, 2, 3, 4 ,5, 6];
// function plusFn(total, next) {
//   return total+next
// }
// let aaa = reduceArr.myReduce(plusFn, 10); 
// console.log('aaa :', aaa); // 31

// async await捕获异常
export function to(promise) {
  return promise.then(data => {
    return [null, data];
  }).catch(err => [err])
}
export function wrapFunction(func, time) {
  let that, args;
  console.log('this2 :', this);
  return function() {
    that = this;
    args = arguments;
    let obj = { a: 1 };
    console.log('that :', that);
    let result = setTimeout(function() {
      func.call(this)
    }, 1000);
    return result
  }
}