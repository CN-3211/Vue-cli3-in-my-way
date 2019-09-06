<template>
  <div class="formSubmit">
    <el-table border :data="tableData" stripe>
      <el-table-column v-for="col in columns"
        :prop="col.id"
        :key="col.id"
        :label="col.label"
        :width="col.width">
      </el-table-column>
    </el-table>
    
  </div>
</template>
<script>
import { getFakeJson } from '~api';
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
    }
  },
  async mounted () {
    let data = await getFakeJson({userId: 1});
    console.log('data :', data);
    data.forEach(item => {
      const { id, title } = item;
      console.log('item :', id, title);
      this.tableData.push({
        first: id,
        second: title
      })
    })
    console.log('data :', data);
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
      color:rgba(0,0,0,0.65);
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
