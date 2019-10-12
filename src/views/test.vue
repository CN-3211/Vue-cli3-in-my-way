<template>
  <div>
    <el-button @click="handleStr">点击我</el-button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      filterStr: "(swle LIKE '%一级%' or swle LIKE '二级' or swle LIKE '%三级') AND (b LIKE 1 or b LIKE '2%' or b LIKE 3) AND (b LIKE 1 or b LIKE 2 or b LIKE 3)",
      filterStr2: "(asdas LIKE '12334' or sdad LIKE '2344' or dsadaf LIKE '4567') AND (b LIKE 1 or b LIKE 2 or b LIKE 3)"
    }
  },
  mounted() {
    this.handleStr();
  },
  methods: {
    SQLToMap(sqlStr) {
      let str = sqlStr.replace(/\(|\)|\s|'|"/g,"");
      let arr = [];
      str.split('AND').forEach(one => {
        arr.push(one);
      })
      let mapArr = arr.map(item => {
        let sqlMap = [];
        sqlMap.push(item.split('or').map(res => res.split('LIKE')[0]));
        sqlMap.push(item.split('or').map(res => {
          let val = res.split('LIKE')[1];
          if (/^\%/.test(val) && /\%$/.test(val)) {
            val = val.replace(/^\%/, '');
            val = val.replace(/\%$/, '');
            return new RegExp(val + '');
          } else if (/^\%/.test(val)) {
            val = val.replace(/^\%/, '');
            val = val.replace(/\%$/, '');
            return new RegExp('(.*?)' + val + '$');
          } else if (/\%$/.test(val)) {
            val = val.replace(/^\%/, '');
            val = val.replace(/\%$/, '');
            return new RegExp('^' + val + '(.*?)');
          } else {
            return new RegExp('^' + val + '$');
          }
        }));
        return sqlMap;
      });
      return new Map(mapArr);
    }
  }
}
// [[a, a, a], [1, 2, 3]]
// [[b, b ,b], [1, 2, 3]]
</script>

<style>

</style>