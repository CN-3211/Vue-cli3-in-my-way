<template>
  <div class="functionalSlot">
    <VNodes :vnodes="slotDefault"></VNodes>
  </div>
</template>

<script>
  export default {
    name: "functionalSlot",
    props: {
      slotDefault: {
        type: Array,
        default: () => []
      }
    },
    data() {
      return {};
    },
    mounted() {
      console.log('this.slotDefault', this.slotDefault);
    },
    components: {
      VNodes: {
        functional: true,
        render: (createElement, context) => context.props.vnodes
      }
    }
  };
</script>

<style lang="scss" scoped></style>