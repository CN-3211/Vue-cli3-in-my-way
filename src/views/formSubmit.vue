<template>
  <div class="formSubmit">
    <el-table v-loading="loading" border :data="tableData" stripe>
      <el-table-column v-for="col in columns"
        :prop="col.id"
        :key="col.id"
        :label="col.label"
        :width="col.width">
      </el-table-column>
    </el-table>
    <el-button @click="handleClick" type="primary">获取表格数据</el-button>
  </div>
</template>
<script>
import { getFakeJson } from '~api';
import axios from 'axios'
const columns = [
  {
    id: 'first',
    label: 'id',
    width: 200
  },
  // 这里的id就对应tableData的传入值
  {
    id: 'second',
    label: 'title',
    width: 200
  }
];

export default {
  data () {
    this.columns = columns;
    return {
      tableData: [],
      loading: false
    }
  },
  methods: {
    async handleClick() {
      this.loading = true;
      let data = await getFakeJson({userId: 1}).catch(res => {
        this.$message.warning('暂无数据');
        this.loading = false;
        console.log('res :', res);
      })
      data.forEach(item => {
        const { id, title } = item;
        this.tableData.push({
          first: id,
          second: title
        })
      })
      this.loading = false;
    }
    /*以下是捞的一批的原生写法
    handleClick() {
      // 点击调用接口
      let param = {userId: 1};
      // 接口需要传的参数，例如这里传的就是一个对象{userId: 1}，也可以选择不传
      axios.get('http://jsonplaceholder.typicode.com/posts', {params: param}).then((res) => {
        // 如果不传参数get后面的括号内容只需要写('http://jsonplaceholder.typicode.com/posts')然后直接.then就可以
        // 另外http://jsonplaceholder.typicode.com这个对应的就是你们服务器的地址，也就是baseUrl，后面跟着的/posts就是后端需要传给前端的路径
        if(res.status === 200){
          // 判断状态码是否为200，即是否请求成功
          let map = res.data;
          // 此时这里的map就是后端传过来的所有数据，我在这里假设map就是你说的那个玩意
          console.log('data :', data);
        }
      })
    }*/
  }
}
</script>
<style lang="scss" scoped>
.formSubmit{
  .el-table::before, .el-table::after{
    background-color: #D8D8D8;
  }
  .el-table__header th {
    background-color: #fafafa;
    font-size: 16px;
    border-color: #D8D8D8 !important;
    .cell {
      // color:rgba(0,0,0,0.65);
      color: red;
    }
  }
  .el-table__body-wrapper .cell {
    color:rgba(0,0,0,0.65);
    font-size: 14px;
  }
  .el-table__body td, .el-table--border{
    border-color: #D8D8D8 !important;
  }
}
</style>
