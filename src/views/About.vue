<template>
  <div class="about">
    <h1>This is an about page</h1>
    <el-row :gutter="24">
      <el-col :span="12"><chart :options="option"></chart></el-col>
      <el-col :span="12"><chart :options="option"></chart></el-col>
    </el-row>
    <el-button @click="handleClick">点击获取数据</el-button>
  </div>
</template>
<script>
import "echarts/lib/chart/pie";
import "echarts/lib/component/legend";
import "echarts/lib/component/tooltip";
import chart from "vue-echarts";

import axios from 'axios';

export default {
  components: {
    chart
  },
  data() {
    return {
      option : {
        tooltip: {
          trigger: "item",
          formatter: "{a} <br/>{b}: {c} ({d}%)"
        },
        // 跟在鼠标后面的工具条
        legend: {
          orient: "vertical",
          x: "left",
          data: ["直接访问", "邮件营销", "联盟广告", "视频广告", "搜索引擎"]
        },
        // 图例
        series: [
          {
            name: "访问来源",
            type: "pie",
            radius: ["50%", "70%"],
            avoidLabelOverlap: false,
            label: {
              normal: {
                show: false,
                position: "center"
              },
              emphasis: {
                show: true,
                textStyle: {
                  fontSize: "30",
                  fontWeight: "bold"
                }
              }
            },
            labelLine: {
              normal: {
                show: false
              }
            },
            data: [
              { value: 0, name: "直接访问" },
              { value: 1, name: "邮件营销" },
              { value: 2, name: "联盟广告" },
              { value: 3, name: "视频广告" },
              { value: 4, name: "搜索引擎" }
            ]
          }
        ]
      }
    };
  },
  methods: {
    async handleClick() {
      // 点击调用接口
      let param = {userId: 1};
      // 接口需要传的参数，例如这里传的就是一个对象{userId: 1}，也可以选择不传
      await axios.get('http://jsonplaceholder.typicode.com/posts', {params: param}).then((res) => {
        // 如果不传参数get后面的括号内容只需要写('http://jsonplaceholder.typicode.com/posts')然后直接.then就可以
        // 另外http://jsonplaceholder.typicode.com这个对应的就是你们服务器的地址，也就是baseUrl，后面跟着的/posts就是后端需要传给前端的路径
        if(res.status === 200){
          // 判断状态码是否为200，即是否请求成功
          let map = res.data;
          this.option.series[0].data.forEach(item => {
            item.value = map[item.name]
          })
          // 此时这里的map就是后端传过来的所有数据，我在这里假设map就是你说的那个玩意
          // 添加数据就这样写this.option.series[0].data.push({value: 1111, name: '测试数据'});
          console.log('map :', this.option.series[0].data);
        }
      })
    }
  }
};
</script>
