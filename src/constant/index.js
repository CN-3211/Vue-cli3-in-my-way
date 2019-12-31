/*
 * @Author: huangzh873
 * @Date: 2019-12-17 08:59:00
 * @LastEditors  : huangzh873
 * @LastEditTime : 2019-12-26 11:50:01
 */
/*
 * @Author: huangzh873
 * @Date: 2019-12-17 08:59:00
 * @LastEditors: huangzh873
 * @LastEditTime: 2019-12-17 09:03:14
 */
import Vue from 'vue';
import TEXT from './test';

const C = {
  TEXT
}

// console.log('constant :', constant);
Object.keys(C).forEach(key1 => { 
  Object.keys(C[key1]).forEach(key2 => {
    Vue.prototype[key1 + '_' + key2] = C[key1][key2]
  })
});

console.log(Vue.prototype.TEXT_TXT_XXX)