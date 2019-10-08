### 技巧利用函数返回默认params和传入参数------Javascript(vue)

```vue
<template>
  <div class="wrap">
    <div @click="params => handleClick(params, title)"></div>
  	//  相当于是将点击事件的默认参数params和title一起作为形参传给点击事件，title即为data里面的'测试传入参数'
    <div @click="onParams"></div>
    //  此点击事件的默认参数即为params
    <div :title="title"></div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      title: '测试传入参数'
    }
  },
  methods: {
    handleClick(params, title){
      console.log('params :', params);
      console.log('title :', title);
    },
    onParams(params){
      console.log('params :', params);
    }
  }
}
</script>
```



利用函数里面return出新的函数的方式，来给return出来的函数传入多个参数