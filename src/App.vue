<template>
  <div id="app">
    <div id="nav">
      <el-row :gutter="20">
        <el-col :span="6"><router-link to="/">Home</router-link></el-col>
        <el-col :span="6"><router-link to="/about">About</router-link></el-col>
        <el-col :span="6"><router-link to="/todoList">TodoList</router-link></el-col>
        <el-col :span="6"><router-link to="/formSubmit">formSubmit</router-link></el-col>
        <el-col :span="6"><router-link to="/ref">ref</router-link></el-col>
      </el-row>
    </div>
    <router-view/>
  </div>
</template>

<style lang="scss">
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
#nav {
  padding: 30px;
  a {
    font-weight: bold;
    color: #2c3e50;
    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
