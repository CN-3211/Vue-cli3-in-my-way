<template>
  <div class="test">
    {{tags}}
    <TagsGroup v-model="tags" :list="tags" @closed="onClosed"></TagsGroup>
  </div>
</template>

<script>
import TagsGroup from './modelTags/tagsGroup';
export default {
  data() {
    return {
      tags: [
        { name: '标签一', type: '' },
        { name: '标签二', type: 'success' },
        { name: '标签三', type: 'info' },
        { name: '标签四', type: 'warning' },
        { name: '标签五', type: 'danger' }
      ]
    }
  },
  methods: {
    onClosed(e) {
      console.log('e :', e);
      this.tags = this.tags.filter(item => item.name!== e.name);
    }
  },
  components: {
    TagsGroup
  }
}
</script>

<style lang="scss" scoped>

</style>