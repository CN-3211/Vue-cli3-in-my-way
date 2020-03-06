<!--
 * @@Author: huangzh873
 * @Date: 2019-11-06 13:27:08
 * @LastEditors  : huangzh873
 * @LastEditTime : 2019-12-25 15:08:46
 -->
<template>
  <div id="app">
    <div id="nav">
      <el-row :gutter="20">
        <el-col :span="6"><router-link to="/">Home</router-link></el-col>
        <el-col :span="6"><router-link to="/about">About</router-link></el-col>
        <el-col :span="6"><router-link to="/todoList">TodoList</router-link></el-col>
        <el-col :span="6"><router-link to="/formSubmit">formSubmit</router-link></el-col>
        <el-col :span="6"><router-link to="/update&sync">update&sync</router-link></el-col>
        <el-col :span="6"><router-link to="/autoTimeLine">autoTimeLine</router-link></el-col>
        <el-col :span="6"><router-link to="/banner">banner</router-link></el-col>
        <el-col :span="6"><router-link to="/mapboxTest">mapboxTest</router-link></el-col>
        <el-col :span="6"><router-link to="/chimee">chimee</router-link></el-col>
        <el-col :span="6"><router-link to="/directives">directives</router-link></el-col>
        <el-col :span="6"><router-link to="/tagModel">tagModel</router-link></el-col>
        <el-col :span="6"><router-link to="/tryCatch">tryCatch</router-link></el-col>
        <el-col :span="6"><router-link to="/tangle">tangle</router-link></el-col>
        <el-col :span="6"><router-link to="/delegation">delegation</router-link></el-col>
        <el-col :span="6"><router-link to="/jsDataType">jsDataType</router-link></el-col>
        <el-col :span="6"><router-link to="/callApplyBind">callApplyBind</router-link></el-col>
        <el-col :span="6"><router-link to="/originAjax">originAjax</router-link></el-col>
        <el-col :span="6"><router-link to="/slotContainer">slotContainer</router-link></el-col>
        <el-col :span="6"><router-link to="/functionalComp">functionalComp</router-link></el-col>
        <el-col :span="6"><router-link to="/setAndget">setAndget</router-link></el-col>
        <el-col :span="6"><router-link to="/test">test</router-link></el-col>
        <el-col :span="6"><router-link to="/debounce">debounce</router-link></el-col>
        <el-col :span="6"><router-link to="/router-root/testId">嵌套路由-根路由</router-link></el-col>
      </el-row>
    </div>
    <transition name="fade" mode="out-in">
      <router-view/>
    </transition>

  </div>
</template>

<style lang="scss">
@import "./style/index.scss";
.fade-enter-active, .fade-leave-active {
  transition: opacity .5s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}
html, body {
  // overflow: hidden;
}
#app {
  min-width: 1280px;
  // height: 100%;
  overflow: hidden;
  text-align: center;
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
