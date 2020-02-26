<template>
  <div class="originContainer">
<!--  这是原始的v-model  -->
    <div class="origin_input mb-5">
      <label for="name">这是原始的v-model对应的数据---{{originValue}}</label>
      <br>
      <input id="name" v-model="originValue" type="text" />
    </div>
<!--  遇到不支持v-model的组件，手动实现v-model的效果  -->
    <p>{{handValue}}</p>
    <Origin_model v-model="handValue"></Origin_model>
  </div>
</template>

<script>
  import Origin_model from "./origin_model";
  export default {
    data() {
      return {
        originValue: '这是输入框',
        handValue: 'model前'
      }
    },
    methods: {
    },
    components: {
      Origin_model
    }
}
</script>

<style lang="scss">
  .originContainer {}
</style>