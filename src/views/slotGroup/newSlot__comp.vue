<template>
  <div class="newSlot__comp">
    {{myProp}}
    <slot></slot>
  </div>
</template>

<script>
  export default {
    name: "newSlot__comp",
    props: {
      myProp: {
        type: Number,
        default: null
      }
    },
    data() {
      return {
        myInfo: {
          name: '黄子涵',
          age: 22
        }
      }
    },
    mounted() {
      console.log('b', this.$slots)
    }
  }
</script>

<style lang="scss" scoped>

</style>