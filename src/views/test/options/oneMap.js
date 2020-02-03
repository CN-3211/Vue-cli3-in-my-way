import * as C from '~constant/map';
import { getResList, getSwList,  getDikeList, getLakeList, getSwfilter } from '~api';

// export const configs = [
//   {
//     name: C.LAY_SK,
//     api: getResList,
//     cols: ['resName', 'engScal'],
//     getMapSql: getMapSql,
//     paramName: 'resName',
//     filter: ['工程规模', '行政区划'],
//     getMapParmas: getMapParmas,
//     getApiParmas: getApiParmas
//   }
// ];
export const initFilterMap = {
  [C.LAY_SK] : { '工程规模' : ['大（Ⅰ）型', '大（Ⅱ）型', '中型'], '行政区划' : [3301, 3302, 3304, 3306, 3307, 3308, 3310, 3311]},
  [C.LAY_DF] : { '行政区划' : [] },
  [C.LAY_HKHT] : { '等级' : [] }
};
export const sortMap = {
  [C.LAY_SK] : 'totCap,DESC',
  [C.LAY_DF] : '',
  [C.LAY_HKHT] : ''
};

// index页面
export const apiMap = {
  [C.LAY_DF] : getDikeList,
  [C.LAY_SK] : getResList,
  [C.LAY_HKHT] : getSwList,
  [C.LAY_HP] : getLakeList
};
export const colMap = {
  [C.LAY_SK]: ['resName', 'engScal'],
  [C.LAY_DF]: ['dikeName', 'management'],
  [C.LAY_HKHT] : ['ennm', 'swle'],
  [C.LAY_HP] : ['name']
};
export function getMapSql(type, info) {
  if (type === C.LAY_SK) {
    return `repcd LIKE '${info.resCode}'`;
  }
  else if(type === C.LAY_DF) {
    return `DikeCode LIKE '${info.dikeCode}'`;
  }
  else if(type === C.LAY_HKHT){
    return `bm LIKE '${info.pennmcd}'`;
  }
};
export const nameMap = {
  [C.LAY_DF] : 'dikeName',
  [C.LAY_SK] : 'resName',
  [C.LAY_HKHT] : 'ennm',
  [C.LAY_HP] : 'name'
};



// searchbar组件
export const filterMap = {
  [C.LAY_HKHT] : ['等级'],
  [C.LAY_DF] : ['行政区划'],
  [C.LAY_SK] : ['工程规模', '行政区划']
};
export const filterContMap = {
  '行政区划' : [
    {name: '杭州市', prop: 3301,dikeNumber:130,number: 548},
    {name: '宁波市', prop: 3302,dikeNumber:0,number: 34},
    {name: '嘉兴市', prop: 3304,dikeNumber:0,number: 0},
    {name: '绍兴市', prop: 3306,dikeNumber:110,number: 549},
    {name: '金华市', prop: 3307,dikeNumber:101,number: 762},
    {name: '衢州市', prop: 3308,dikeNumber:119,number: 429},
    {name: '台州市', prop: 3310,dikeNumber:0,number: 5},
    {name: '丽水市', prop: 3311,dikeNumber:0,number: 9}
  ],
  '工程规模' : [
    {name: '大（Ⅰ）型', prop: '大（Ⅰ）型', number: 2, value: 5},
    {name: '大（Ⅱ）型', prop: '大（Ⅱ）型', number: 14, value: 4},
    {name: '中型', prop: '中型', number: 55, value: 59},
    {name: '小（Ⅰ）型', prop: '小（Ⅰ）型', number: 53, value: 370},
    {name: '小（Ⅱ）型', prop: '小（Ⅱ）型', number: 278, value: 1945}
  ],
  '等级' : [
    {name: '一级', prop: '一级', number: 54},
    {name: '二级', prop: '二级', number: 22},
    {name: '三级', prop: '三级', number: 24},
    {name: '四级', prop: '四级', number: 2},
    {name: '五级', prop: '五级', number: 1},
    {name: '无等级', prop: '', number: 0}
  ]
};
export const mapParamsMap = {
  '大（Ⅰ）型': 1,
  '大（Ⅱ）型': 2,
  '中型': 3,
  '小（Ⅰ）型': 4,
  '小（Ⅱ）型': 5
};
export function getApiParmas (type, arr) {
  let paramas = '';
  let parmasArr = [];
  if (type.indexOf('工程规模') > -1) {
    parmasArr = arr.map(item => `engScal=${item}`);
    paramas = parmasArr.join('&');
  } 
  else if (type.indexOf('行政区划') > -1) {
    parmasArr = arr.map(item => `regionCode=${item}`);
    paramas = parmasArr.join('&');
    parmasArr = [];
  }
  else if (type.indexOf('等级') > -1) {
    parmasArr = arr.map(item => `swle=${item}`);
    paramas = parmasArr.join('&');
  }
  return paramas;
};
export function getMapParmas (type, arr) {
  let parmasArr = '';
  if (type.indexOf('工程规模') > -1) {
    parmasArr = arr.map(item => `rssz = ${mapParamsMap[item]}`);
  } 
  else if (type === (C.LAY_SK + '行政区划')) {
    parmasArr = arr.map(item => `codeXzqh LIKE '%${item}%'`);
  }
  else if (type === (C.LAY_DF + '行政区划')) {
    parmasArr = arr.map(item => `RegionCode LIKE '%${item}%'`);
  }
  else if (type.indexOf('等级') > -1) {
    parmasArr = arr.map(item => {
      if(item !== ""){
        return `swle LIKE '%${item? item : ""}%'`
      }
      else{
        return `swle LIKE '${""}'`
      }
    });
    console.log('parmasArr :', parmasArr);
    // parmasArr = arr.map(item => "COLOR LIKE '0'");
  }
  return `( ${parmasArr.join(' or ')} )`;
} ;
export const disabledArr = [C.LAY_DF]; //用于禁用多选，将来会移除