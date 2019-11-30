<template>
  <div class="tagsGroup">
    <el-tag
      v-for="tag in value"
      :key="tag.name"
      closable
      :type="tag.type"
      @close="onClose(tag)">
      {{tag.name}}
    </el-tag>
  </div>
</template>

<script>
export default {
  props: {
    value: {
      type: Array,
      default: () => []
    }
  },
  data() {
    return {
      
    }
  },
  methods: {
    onClose(tag) {
      this.$emit('closed', tag)
    }
  }
}
</script>

<style>

</style>