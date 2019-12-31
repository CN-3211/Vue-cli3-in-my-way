/*
 * @Author: huangzh873
 * @Date: 2019-09-21 23:20:58
 * @LastEditors  : huangzh873
 * @LastEditTime : 2019-12-26 11:45:56
 */
import Vue from 'vue';
// utils
import './element';

import '~constant';

import { getVal } from '~utils';

Vue.prototype.$val = getVal;
