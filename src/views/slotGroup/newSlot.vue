<template>
  <div class="newSlot">
    <NewSlot__comp v-for="item in myArr" :key="item" :myProp="item">
      <slot name="box" :info="info"></slot>
    </NewSlot__comp>
  </div>
</template>

<script>
  import NewSlot__comp from "./newSlot__comp";

  export default {
    props: {
      myArr: {
        type: Array,
        default: () => []
      }
    },
    data() {
      return {
        info: {
          name: '郭飘'
        }
      };
    },
    mounted() {
      // $scopedSlots据说使用渲染函数插槽时好用
      console.log('a', this.$scopedSlots)
    },
    components: {
      NewSlot__comp
    }
  }
</script>

<style lang='scss' scoped>
  
</style>