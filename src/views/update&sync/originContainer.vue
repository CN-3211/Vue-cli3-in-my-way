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
<!--    对prop的字段进行v-model-->
    <p>{{propModel}}</p>
    <Prop_model v-model="propModel"></Prop_model>

<!--    .sync的作用在于，在v-model的基础上，提供新的双向绑定方法
        v-model只能绑定一个数据，使用.sync可以绑定多个-->
<!--    .sync的原版用法-->
    <p>组件中的model：{{syncModel}}------组件中双向绑定的sync：{{syncOrigin}}</p>
    <p>多个传入{{objSync}}</p>
    <Origin_sync v-model="syncModel" :syncOrigin.sync="syncOrigin" v-bind.sync="objSync"></Origin_sync>
  </div>
</template>

<script>
  import Origin_model from "./origin_model";
  import Prop_model from "./prop_model";
  import Origin_sync from "./origin_sync";

  export default {
    data() {
      return {
        originValue: '这是输入框',
        handValue: 'model前',
        propModel: 'model前-prop',
        syncModel: '原来的model鸭',
        syncOrigin: '原来的sync鸭',
        objSync: {
          name: 'huangzihan',
          age: 18,
          frends: ['路人1', '路人2', '路人3']
        }
      }
    },
    methods: {
    },
    components: {
      Origin_model,
      Prop_model,
      Origin_sync
    }
}
</script>

<style lang="scss">
  .originContainer {}
</style>