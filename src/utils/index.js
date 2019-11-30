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