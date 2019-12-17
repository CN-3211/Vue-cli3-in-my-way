/*
 * @Author: huangzh873
 * @Date: 2019-09-21 23:20:58
 * @LastEditors: huangzh873
 * @LastEditTime: 2019-12-17 09:39:48
 */
import Vue from 'vue';
// utils
import './element';

import constant from '~constant';
// console.log('constant :', constant);
Object.keys(constant).forEach(key1 => {
  Object.keys(constant[key1]).forEach(key2 => {
    Vue.prototype[key1 + '_' + key2] = constant[key1][key2]
  })
})
import { getVal } from '~utils';

Vue.prototype.$val = getVal;
