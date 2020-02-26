<template>
  <div class="formSubmit">
    <el-table class="table" v-loading="loading" border :data="tableData" stripe>
      <el-table-column v-for="col in columns"
        :prop="col.id"
        :key="col.id"
        :label="col.label"
        :width="col.width">
      </el-table-column>
    </el-table>
    <el-button @click="handleClick" type="primary">获取表格数据</el-button>
    <el-button @click="handleFilter" type="primary">简单过滤数据</el-button>
    <el-checkbox-group @change="handleMulFilter" v-model="checkList">
      <el-checkbox label="userId1"></el-checkbox>
      <el-checkbox label="userId2"></el-checkbox>
      <el-checkbox label="userId3"></el-checkbox>
      <el-checkbox label="userId4"></el-checkbox>
      <el-checkbox label="userId5"></el-checkbox>
    </el-checkbox-group>
    <el-checkbox-group @change="handleMulFilter" v-model="idList">
      <el-checkbox label="id1"></el-checkbox>
      <el-checkbox label="id2"></el-checkbox>
      <el-checkbox label="id3"></el-checkbox>
      <el-checkbox label="id4"></el-checkbox>
      <el-checkbox label="id5"></el-checkbox>
    </el-checkbox-group>
  </div>
</template>
<script>
import { getFakeJson } from '~api';
import axios from 'axios'
const columns = [
  {
    id: 'first',
    label: 'id',
    width: 397
  },
  // 这里的id就对应tableData的传入值
  {
    id: 'second',
    label: 'title',
    width: 397
  }
];

const mulMap = {
  userId1: 'userId=1',
  userId2: 'userId=2',
  userId3: 'userId=3',
  userId4: 'userId=4',
  userId5: 'userId=5'
};

const mulIdMap = {
  id1: 'id=1',
  id2: 'id=2',
  id3: 'id=3',
  id4: 'id=4',
  id5: 'id=5'
};

export default {
  data () {
    this.columns = columns;
    return {
      tableData: [],
      loading: false,
      checkList: [],
      idList: []
    }
  },
  methods: {
    handleMulFilter() {
      console.log('this.checkList :', this.checkList);
      let params = {userId: 6};
      let filters = this.checkList.map(item => mulMap[item]);
      let filters2 = this.idList.map(item => mulIdMap[item]);
      let totalArr = [...filters, ...filters2].join('&');
      console.log('totalArr :', totalArr);
      this.getApi(params, totalArr);
      console.log('filters :', filters);
    },
    handleFilter() {
      let params = {
        userId: 1
      }
      this.getApi(params, '');
    },
    async getApi(params, paramsStr) {
      console.log('params :', params);
      this.loading = true;
      this.tableData = [];
      let data; let err;
      [err, data] = await this.to(getFakeJson(params, paramsStr));
      console.log('data1509',data);
      console.log('err1509',err);
      if(err) {
        this.$message.warning('暂无数据');
        this.loading = false;
      }
      data.forEach(item => {
        const { id, title } = item;
        this.tableData.push({
          first: id,
          second: title
        })
      })
      this.loading = false;
    },
    handleClick() {
      this.getApi();
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
  .table{
    height: 400px;
    width: 800px;
    margin: 0 auto;
    overflow-x: hidden;
    overflow-y: auto;
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
  
}
</style>
